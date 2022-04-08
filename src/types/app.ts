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

export type ChangePasswordData = {
  newPassword: string
  code: string
}

export type Bet = {
  id: number
  numbers: string
  gameId: number
  price: number
  createdAt: string
}

export type BetResponseData = {
  choosen_numbers: string,
  created_at: string,
  game_id: number,
  id: number
  price: number,
  type:  {
    id: number,
    type: string,
  },
  user_id:number,
}

export type Game = {
  id: number
  type: string
  description: string
  range: number
  price: number
  max_number: number
  color: string
}

export type CartItem = {
  id: string
  gameId: number
  numbers: number[]
  color: string
  price: number
  type: string
}

export type NewBet = {
  games: {
    game_id: number
    numbers: number[]
  }[]
}
