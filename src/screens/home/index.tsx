import { useEffect, useState } from 'react'
import { Bet, Game, RootStackScreenProps } from '~/types'

import { FlatList, Text } from 'react-native'
import {
  ButtonLink,
  GameButton,
  GameCard,
  LoadingOverlay,
} from '~/components'
import { Feather } from '@expo/vector-icons'

import { BetsService, GamesService } from '~/services/tgl-api'

import { theme } from '~/styles'
import * as S from './styles'

type HomeProps = RootStackScreenProps<'Home'>

export function Home ({ navigation }: HomeProps) {
  const [isFetching, setIsFetching] = useState(true)
  const [bets, setBets] = useState<Bet[]>([])
  const [games, setGames] = useState<Game[]>([])
  const [filterGames, setFilterGames] = useState<string[]>([])

  const navigateNewBetHandler = () => {
    navigation.navigate('NewBet')
  }

  const handleFilterGames = (type: string) => {
    setFilterGames(state => {
      return state.includes(type)
        ? state.filter(item => item !== type)
        : state.concat(type)
    })
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const betsData = await BetsService.fetchBets()
        const gamesData = await GamesService.fetchGames()

        setBets(betsData)
        setGames(gamesData)
        setIsFetching(false)
      } catch (error) {

      }
    }

    fetch()
  }, [])

  useEffect(() => {
    setIsFetching(true)
    const requestBetsFiltered = async () => {
      try {
        const bets = await BetsService.fetchBets({
          params: {
            type: filterGames,
          },
        })
        setBets(bets)
      } catch (error) {

      } finally {
        setIsFetching(false)
      }
    }
    requestBetsFiltered()
  }, [filterGames])

  if(isFetching) {
    return <LoadingOverlay />
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
          {games.map(game => (
            <S.ButtonItem key={game.type}>
              <GameButton
                color={game.color}
                selected={!!filterGames.includes(game.type)}
                onPress={(() => handleFilterGames(game.type))}
                >
                {game.type}
              </GameButton>
            </S.ButtonItem>
          ))}
        </S.ButtonsContainer>
      </S.WrapperFiltersButtons>

      <S.WrapperBets>
        {bets.length === 0 && (
          <Text>Voc?? ainda n??o possui apostas cadastradas.</Text>
        )}
        {!!bets.length && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={bets}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => {
              const game = games.find(game => game.id === item.gameId)
              if(game) {
                return (
                  <S.ItemGameCard>
                    <GameCard
                      numbers={item.numbers}
                      price={item.price}
                      date={item.createdAt}
                      color={game.color}
                      type={game.type}
                    />
                </S.ItemGameCard>
                )
              }
              return null
            }}
          />
        )}
      </S.WrapperBets>
    </S.Wrapper>
  )
}
