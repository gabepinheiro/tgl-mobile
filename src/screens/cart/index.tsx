import { useAppDispatch, useAppSelector } from '~/hooks'
import { clearCart, deleteItemCart, selectCart } from '~/store/features/cart-slice'
import { BetsService } from '~/services/tgl-api'
import { AxiosError } from 'axios'

import { FlatList, Pressable } from 'react-native'
import { Button, CustomToast, GameCard } from '~/components'
import { Feather } from '@expo/vector-icons'

import * as S from './styles'

export function Cart () {
  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()

  const handlerDeleteItemCart = (id: string) => {
    return () => {
      dispatch(deleteItemCart(id))
    }
  }

  const handlerSaveBet = async () => {
    try {
      const newBet = {
        games: cart.items.map(item => ({
          game_id: item.gameId,
          numbers: item.numbers,
        })),
      }

      await BetsService.saveBet(newBet)
      CustomToast.success('Aposta realizada com sucesso!')
      dispatch(clearCart())
    } catch (err) {
      const error = err as AxiosError<{ message: string }>
      if (error.response) {
        return CustomToast.error(error.response.data.message)
      }
      CustomToast.error((err as Error).message && 'Erro de conexão')
    }
  }

  return (
    <S.Wrapper>
      <S.HeadingPrimary>Cart</S.HeadingPrimary>
      <S.CartTotalWrapper>
        <S.HeadingSecondary>Cart Total</S.HeadingSecondary>
        <S.HeadingTertiary>{cart.totalValue}</S.HeadingTertiary>
      </S.CartTotalWrapper>

      <Button onPress={handlerSaveBet}>Save</Button>

      <S.CartItems>
        <S.HeadingCartItemsWrapper>
          <S.HeadingSecondary>Items</S.HeadingSecondary>
        </S.HeadingCartItemsWrapper>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cart.items}
          renderItem={({item}) => (
            <S.CartItem>
              <Pressable onPress={handlerDeleteItemCart(item.id)}>
                <S.DeleteIconWrapper>
                  <Feather name='trash' size={24} />
                </S.DeleteIconWrapper>
              </Pressable>
              <GameCard
                numbers={item.numbers.join(',')}
                price={item.price}
                color={item.color}
                type={item.type}
                />
            </S.CartItem>
          )}
        />
      </S.CartItems>
    </S.Wrapper>
  )
}
