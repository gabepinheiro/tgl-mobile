import { useEffect, useReducer, useState } from 'react'
import { addItemToCart, selectCart } from '~/store/features/cart-slice'
import { useAppDispatch, useAppSelector } from '../store-hooks'
import { Game } from '~/types'
import { CustomToast } from '~/components'
import { GamesService } from '~/services/tgl-api'
import { v4 as uuid } from 'uuid'
import { initialState, Reducer } from './reducer'

export const useNewBet = () =>{
  const [isFetching, setIsFetching] = useState(true)
  const [games, setGames] = useState<Game[]>([])
  const [{
    numbers,
    remaining,
    selectedGame
  }, newBetDispatch] = useReducer(Reducer, initialState)

  const cart = useAppSelector(selectCart)
  const appDispatch = useAppDispatch()

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await GamesService.fetchGames()
        setGames(gamesData)
        newBetDispatch({ type: 'selectGame', payload: gamesData[0]})
        setIsFetching(false)
      } catch (error) {

      }
    }

    fetchGames()
  }, [])

  const handlerSelectGame = (id: number) => {
    return () => {
      const game = games.find(game => game.id === id)
      if(!game) return

      newBetDispatch({ type: 'selectGame', payload: game})
    }

  }

  const handlerToggleNumber = (num: number) => {
    return () => {
      const isNumberAdded = numbers.includes(num)
      if (isNumberAdded) {
        return newBetDispatch({ type: 'removeNumber', payload: num })
      }

      if (remaining === 0) {
        return CustomToast.error(`Todos os ${selectedGame?.max_number} números do jogo já foram selecionados!`)
      }

      return newBetDispatch({ type: 'addNumber', payload: num })
    }
  }

  const handlerClearGame = () => {
    if (!numbers.length) {
      return CustomToast.error('O jogo já está limpo')
    }
    newBetDispatch({ type: 'clearGame' })
  }

  const getRandomNumber = (range: number) => {
    return Math.ceil(Math.random() * range)
  }

  const getRandomNumbersBet = (range: number, maxNumber: number) => {
    let randomNumbers: number[] = []
    while (randomNumbers.length < maxNumber) {
      const random = getRandomNumber(range)
      const index = randomNumbers.indexOf(random)

      if (index === -1) {
        randomNumbers.push(random || getRandomNumber(range))
      } else {
        randomNumbers = randomNumbers.filter(item => item !== randomNumbers[index])
      }
    }

    return randomNumbers
  }

  function hasDuplicateNumberArrays (arrOne: number[], arrTwo: number[]) {
    return arrOne.some(number => arrTwo.indexOf(number) !== -1)
  }

  const handlerCompleteGame = (): void => {
    if (!selectedGame) return

    const { range } = selectedGame
    const maxNumber = selectedGame.max_number
    const qtdSelectedNumbers = numbers.length
    const currentNumbers = [...numbers]

    if (qtdSelectedNumbers === maxNumber) {
      CustomToast.error(`Todos os ${maxNumber} números do jogo já foram selecionados!`)
      return
    }

    if (qtdSelectedNumbers < maxNumber) {
      const remainingNumbers = remaining
      const randomNumbers = getRandomNumbersBet(range, remainingNumbers)

      if (hasDuplicateNumberArrays(currentNumbers, randomNumbers)) {
        return handlerCompleteGame()
      }

      newBetDispatch({
        type: 'setNumbers',
        payload: [...currentNumbers, ...randomNumbers],
      })
    }
  }

  const getMsgRemainingNumbers = () => {
    const remng = remaining
    const verbe = remng > 1 ? 'Restam' : 'Resta'
    const SingularOrPlural = remng > 1 ? 'números' : 'número'

    return `${verbe} ${remng} ${SingularOrPlural} para completar o jogo!`
  }

  const handlerAddToCart = () => {
    if (remaining) {
      return CustomToast.error(getMsgRemainingNumbers())
    }

    const cartItem = {
      id: uuid(),
      gameId: selectedGame?.id!,
      numbers: numbers.sort((a, b) => a - b),
      price: selectedGame?.price!,
      type: selectedGame?.type!,
      color: selectedGame?.color!,
    }

    appDispatch(addItemToCart(cartItem))

    CustomToast.success('Jogo adicionado no carrinho.')

    newBetDispatch({
      type: 'clearGame',
    })
  }

  return {
    games,
    cart,
    isFetching,
    numbers,
    remaining,
    selectedGame,
    handlerSelectGame,
    handlerToggleNumber,
    handlerCompleteGame,
    handlerClearGame,
    handlerAddToCart
  }
}
