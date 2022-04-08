import { useEffect } from 'react'
import { useNewBet } from '~/hooks/use-new-bet'
import { RootStackScreenProps } from '~/types'

import { ScrollView } from 'react-native'
import { GameButton, Button, NumberButton, CartItemsIcon, LoadingOverlay } from '~/components'
import { Feather } from '@expo/vector-icons'

import * as S from './styles'

type NewBetScreenProps = RootStackScreenProps<'NewBet'>

export function NewBet ({ navigation }: NewBetScreenProps) {
  const {
    games,
    isFetching
  } = useNewBet()

  useEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        return (
          <CartItemsIcon quantity={0} color={tintColor ? tintColor : '#fff'} />
        )
      }
    })
  }, [navigation])

  const numbers =
    new Array(60).fill(null).map((_, index) => index + 1)

  if (isFetching) {
    return <LoadingOverlay />
  }

  return (
    <S.Wrapper>
      <S.HeadingPrimaryWrapper>
        <S.HeadingPrimaryTextMain>New bet {' '}</S.HeadingPrimaryTextMain>
        <S.HeadingPrimaryTextSub>for mega-sena</S.HeadingPrimaryTextSub>
      </S.HeadingPrimaryWrapper>

      <S.HeadingSecondary>Choose game</S.HeadingSecondary>
      <S.ButtonsWrapper>
        <S.ButtonsScrollView horizontal>
          {games.map(({ color, type }) => (
            <S.ButtonItem>
              <GameButton
                color={color}
                onPress={() => {}}
              >
                {type}
              </GameButton>
            </S.ButtonItem>
          ))}
        </S.ButtonsScrollView>
      </S.ButtonsWrapper>

      <S.HeadingSecondary>Fill your bet</S.HeadingSecondary>
      <S.Paragraph>
        Mark as many numbers as you want up to a maximum of 50.
        Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
      </S.Paragraph>

      <S.ButtonsWrapper>
        <S.ButtonsScrollView horizontal>
          <S.ButtonItem>
            <Button icon={
              <Feather name='shopping-cart' color='#fff' size={17} />
            }>Add to cart</Button>
          </S.ButtonItem>
          <S.ButtonItem>
            <Button variant='outline'>Complete game</Button>
          </S.ButtonItem>
          <S.ButtonItem>
            <Button variant='outline'>Clear game</Button>
          </S.ButtonItem>
        </S.ButtonsScrollView>
      </S.ButtonsWrapper>

        <ScrollView showsVerticalScrollIndicator={false}>
          <S.NumberButtonsWrapper>
            {numbers.map(number => (
              <S.NumberButtonItem key={number}>
                <NumberButton number={number} />
              </S.NumberButtonItem>
            ))}
          </S.NumberButtonsWrapper>
        </ScrollView>
    </S.Wrapper>
  )
}
