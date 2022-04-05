import { GameButton } from '~/components'
import * as S from './styles'

export function Home () {
  return (
    <S.Wrapper>
      <S.Heading>Recent Games</S.Heading>
      <S.WrapperFiltersButtons>
        <S.FiltersText>Filters: </S.FiltersText>
        <S.ButtonsContainer>
          <S.ButtonItem>
            <GameButton
              color='#7F3992'
              selected={false}
              onPress={(() => {})}
              >
              Lotofácil
            </GameButton>
          </S.ButtonItem>
          <S.ButtonItem>
            <GameButton
              color='#01AC66'
              selected
              onPress={(() => {})}
              >
              Mega-Sena
            </GameButton>
          </S.ButtonItem>
          <S.ButtonItem>
            <GameButton
              color='#F79C31'
              selected={false}
              onPress={(() => {})}
              >
              Lotomania
            </GameButton>
          </S.ButtonItem>
        </S.ButtonsContainer>
      </S.WrapperFiltersButtons>
    </S.Wrapper>
  )
}
