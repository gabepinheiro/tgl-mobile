import { useEffect, useState } from "react"
import { GamesService } from "~/services/tgl-api"
import { Game } from "~/types"

export const useNewBet = () =>{
  const [isFetching, setIsFetching] = useState(true)
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await GamesService.fetchGames()
        setGames(gamesData)
        setIsFetching(false)
      } catch (error) {

      }
    }

    fetchGames()
  }, [])

  return {
    games,
    isFetching
  }
}
