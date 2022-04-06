import { api } from './http'
import {
  CreateUserResponse,
  CreateUser,
  Login,
  LoginResponseData,
  resetPasswordResponseData
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
  }
}
