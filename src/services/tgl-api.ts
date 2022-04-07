import { api } from './http'
import {
  CreateUserResponse,
  CreateUser,
  Login,
  LoginResponseData,
  resetPasswordResponseData,
  ChangePasswordData,
  BetResponseData,
  Bet,
  Game
} from '~/types/app'

export const AuthService = {
  createUser (user: CreateUser): Promise<CreateUserResponse> {
    return api.post('/user/create', user)
      .then(({ data }) => data)
  },

  login (loginData: Login): Promise<LoginResponseData> {
    return api.post('/login', loginData)
      .then(({ data }) => data)
  },

  resetPassword (email: string): Promise<resetPasswordResponseData> {
    return api.post('/reset', { email })
      .then(({ data }) => ({
        code: data.token
      }))
  },

  changePassword ({
    newPassword,
    code
  }: ChangePasswordData): Promise<{ ok: boolean }> {
    return api.post(`/reset/${code}`, { password: newPassword })
      .then(() => ({
        ok: true
      }))
  }
}

export const BetsService = {
  async fetchBets (): Promise<Bet[]> {
    const res = await api.get('/bet/all-bets')

    return res.data.map((bet: BetResponseData) => ({
      id: bet.id,
      numbers: bet.choosen_numbers,
      gameId: bet.game_id,
      price: bet.price,
      createdAt: bet.created_at
    }))
  }
}

export const GamesService = {
  async fetchGames (): Promise<Game[]> {
    const res = await api.get('/cart_games')

    return res.data.types
  }
}
