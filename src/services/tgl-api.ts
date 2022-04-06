import { CreateUserResponse, CreateUser } from '~/types/app'
import { api } from './http'

export const AuthService = {
  createUser (user: CreateUser): Promise<CreateUserResponse> {
    return api.post('/user/create', user)
      .then(({ data }) => data)
  }
}
