import { RootStackScreenProps } from '~/types'

import { FlatList } from 'react-native'
import { ButtonLink, GameButton, GameCard } from '~/components'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/styles'
import * as S from './styles'

import { DUMMY_BETS_DATA } from './betsData'

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

      <S.WrapperBets>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DUMMY_BETS_DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, ...props} }) => (
            <S.ItemGameCard>
              <GameCard {...props} />
            </S.ItemGameCard>
          )}
        />
      </S.WrapperBets>
    </S.Wrapper>
  )
}
