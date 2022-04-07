import axios from 'axios'
import { Storage } from '~/storage'
import { AuthenticatedUser } from '~/types'

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})

api.interceptors.request.use(async (config) => {
  const auth = await Storage.getItem<AuthenticatedUser>('@auth')

  if (!auth) {
    return config
  }

  if (config.headers) {
    config.headers['Authorization'] = `Bearer ${auth.token.token}`
  }

  return config
})
