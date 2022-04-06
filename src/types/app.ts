export type User = {
  name: string
  email: string
}

export type CreateUser = User & {
  password: string
}

export type CreateUserResponse = {
  user: User
  token: {
    token: string,
    expires_at: string
  }
}

export type ErrorResponseData = {
  error: {
    message: string
  }
}
