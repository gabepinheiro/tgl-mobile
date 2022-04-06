import { CreateUserResponse, User } from '~/types/app'
import { api } from './http'

export const AuthService = {
  createUser (user: User): Promise<CreateUserResponse> {
    return api.post('/user/create', user)
      .then(({ data }) => data)
  }
}
