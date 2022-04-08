import { useEffect } from 'react'
import { useNewBet } from '~/hooks/use-new-bet'
import { RootStackScreenProps } from '~/types'

import { Pressable, ScrollView } from 'react-native'
import { GameButton, Button, NumberButton, CartItemsIcon, LoadingOverlay } from '~/components'
import { Feather } from '@expo/vector-icons'

import * as S from './styles'

type NewBetScreenProps = RootStackScreenProps<'NewBet'>

export function NewBet ({ navigation }: NewBetScreenProps) {
  const {
    games,
    isFetching,
    numbers,
    selectedGame,
    handlerSelectGame,
    handlerToggleNumber,
    handlerCompleteGame,
    handlerClearGame
  } = useNewBet()

  const handlerOpenCart = () => {
    navigation.navigate('Cart')
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        return (
          <Pressable onPress={handlerOpenCart}>
            <CartItemsIcon quantity={0} color={tintColor ? tintColor : '#fff'} />
          </Pressable>
        )
      }
    })
  }, [navigation])

  const numbersButtons =
    new Array(selectedGame?.range).fill(null).map((_, index) => index + 1)

  if (isFetching) {
    return <LoadingOverlay />
  }

  return (
    <S.Wrapper>
      <S.HeadingPrimaryWrapper>
        <S.HeadingPrimaryTextMain>New bet {' '}</S.HeadingPrimaryTextMain>
        <S.HeadingPrimaryTextSub>for {selectedGame?.type}</S.HeadingPrimaryTextSub>
      </S.HeadingPrimaryWrapper>

      <S.HeadingSecondary>Choose game</S.HeadingSecondary>
      <S.ButtonsWrapper>
        <S.ButtonsScrollView horizontal>
          {games.map(({ color, type, id }) => (
            <S.ButtonItem key={id}>
              <GameButton
                color={color}
                selected={id === selectedGame?.id}
                onPress={handlerSelectGame(id)}
              >
                {type}
              </GameButton>
            </S.ButtonItem>
          ))}
        </S.ButtonsScrollView>
      </S.ButtonsWrapper>

      <S.HeadingSecondary>Fill your bet</S.HeadingSecondary>
      <S.Paragraph>
        {selectedGame?.description}
      </S.Paragraph>

      <S.ButtonsWrapper>
        <S.ButtonsScrollView horizontal>
          <S.ButtonItem>
            <Button icon={
              <Feather name='shopping-cart' color='#fff' size={17} />
            }>Add to cart</Button>
          </S.ButtonItem>
          <S.ButtonItem>
            <Button variant='outline' onPress={handlerCompleteGame}>
              Complete game
            </Button>
          </S.ButtonItem>
          <S.ButtonItem>
            <Button variant='outline' onPress={handlerClearGame}>
              Clear game
            </Button>
          </S.ButtonItem>
        </S.ButtonsScrollView>
      </S.ButtonsWrapper>

        <ScrollView showsVerticalScrollIndicator={false}>
          <S.NumberButtonsWrapper>
            {numbersButtons.map(number => (
              <S.NumberButtonItem key={number}>
                <NumberButton
                  number={number}
                  onPress={handlerToggleNumber(number)}
                  color={numbers.includes(number)
                    ? selectedGame?.color
                    : undefined}
                 />
              </S.NumberButtonItem>
            ))}
          </S.NumberButtonsWrapper>
        </ScrollView>
    </S.Wrapper>
  )
}
