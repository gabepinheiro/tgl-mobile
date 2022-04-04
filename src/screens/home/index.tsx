import { GameButton } from '../../components/game-button'
import * as S from './styles'

export function Home () {
  return (
    <S.Wrapper>
      <S.Text>Home Screen</S.Text>
      <GameButton
        color='#7F3992'
        selected={false}
        onPress={(() => {})}
      >
        Lotofácil
      </GameButton>
      <GameButton
        color='#01AC66'
        selected
        onPress={(() => {})}
      >
        Mega-Sena
      </GameButton>
      <GameButton
        color='#F79C31'
        selected={false}
        onPress={(() => {})}
      >
        Lotomania
      </GameButton>
    </S.Wrapper>
  )
}
