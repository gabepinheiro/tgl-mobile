import { RootStackScreenProps } from '~/types'

import { ButtonLink, GameButton } from '~/components'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/styles'
import * as S from './styles'

type HomeProps = RootStackScreenProps<'Home'>

export function Home ({ navigation }: HomeProps) {
  const navigateNewBetHandler = () => {
    navigation.navigate('NewBet')
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Heading>Recent Games</S.Heading>
        <ButtonLink
          color='greenLight'
          onPress={navigateNewBetHandler}
          size='small'
          icon={<Feather
            name='arrow-right'
            size={18}
            color={theme.colors.greenLight}
            />}
          >
            New Bet
        </ButtonLink>
      </S.Header>
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
