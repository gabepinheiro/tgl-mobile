export type User = {
  name: string
  email: string
  password: string
}

export type CreateUserResponse = {
  user: User & {
    id: number
  },
  token: {
    token: string,
    expires_at: string
  }
}
