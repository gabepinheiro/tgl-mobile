import { GameButton } from '~/components'
import * as S from './styles'

export function NewBet () {
  return (
    <S.Wrapper>
      <S.HeadingPrimaryWrapper>
        <S.HeadingPrimaryTextMain>New bet {' '}</S.HeadingPrimaryTextMain>
        <S.HeadingPrimaryTextSub>for mega-sena</S.HeadingPrimaryTextSub>
      </S.HeadingPrimaryWrapper>

      <S.HeadingSecondary>Choose game</S.HeadingSecondary>
      <S.ButtonsWrapper>
        <S.ButtonsScrollView>
          <S.ButtonItem>
            <GameButton
              color='#7F3992'
              selected={true}
              onPress={() => {}}
            >
              Lotofácil
            </GameButton>
          </S.ButtonItem>
          <S.ButtonItem>
            <GameButton
              color='#01AC66'
              selected={false}
              onPress={() => {}}
            >
              Mega-Sena
            </GameButton>
          </S.ButtonItem>
          <S.ButtonItem>
            <GameButton
              color='#F79C31'
              selected={false}
              onPress={() => {}}
            >
              Lotomania
            </GameButton>
          </S.ButtonItem>
        </S.ButtonsScrollView>
      </S.ButtonsWrapper>

      <S.HeadingSecondary>Fill your bet</S.HeadingSecondary>
      <S.Paragraph>
        Mark as many numbers as you want up to a maximum of 50.
        Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
      </S.Paragraph>
    </S.Wrapper>
  )
}
