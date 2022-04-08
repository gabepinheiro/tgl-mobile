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
  Game,
  NewBet,
  UserAccount
} from '~/types/app'
import { AxiosRequestConfig } from 'axios'

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
  async fetchBets (config?: AxiosRequestConfig): Promise<Bet[]> {
    const res = await api.get('/bet/all-bets', config)

    return res.data.map((bet: BetResponseData) => ({
      id: bet.id,
      numbers: bet.choosen_numbers,
      gameId: bet.game_id,
      price: bet.price,
      createdAt: bet.created_at
    }))
  },

  saveBet(newBet: NewBet) {
    return api.post('/bet/new-bet', newBet)
  }
}

export const GamesService = {
  async fetchGames (): Promise<Game[]> {
    const res = await api.get('/cart_games')

    return res.data.types
  }
}

export const UserService = {
  async fetchUserAccount (): Promise<UserAccount> {
    const res = await api.get('/user/my-account')

    return {
      name: res.data.name,
      email: res.data.email
    }
  },

  async updateUserAccount (account: UserAccount): Promise<UserAccount> {
    const res = await api.put('/user/update', account)

    return {
      name: res.data.name,
      email: res.data.email
    }
  }
}
