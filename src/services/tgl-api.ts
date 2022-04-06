import { api } from './http'
import {
  CreateUserResponse,
  CreateUser,
  Login,
  LoginResponseData
} from '~/types/app'

export const AuthService = {
  createUser (user: CreateUser): Promise<CreateUserResponse> {
    return api.post('/user/create', user)
      .then(({ data }) => data)
  },

  login (loginData: Login): Promise<LoginResponseData> {
    return api.post('/login', loginData)
      .then(({ data }) => data)
  }
}
