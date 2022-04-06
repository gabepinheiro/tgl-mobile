export type User = {
  name: string
  email: string
}

export type CreateUser = User & {
  password: string
}

export type Token = {
  token: string,
  expires_at: string
}

export type CreateUserResponse = {
  user: User
  token: Token
}

export type ErrorResponseData = {
  error: {
    message: string
  }
}

export type Login = {
  email: string
  password: string
}

export type LoginResponseData ={
  user: User & {
    is_admin: number,
    picture: string | null
  },
  token: Token
}

export type AuthenticatedUser = LoginResponseData

export type resetPasswordResponseData = {
  code: string
}
