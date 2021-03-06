import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthenticatedUser } from '~/types'
import { RootState } from '~/store'

export type AuthState = {
  user: AuthenticatedUser | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthenticatedUser (state, { payload }: PayloadAction<AuthenticatedUser>) {
      state.user = payload
      state.isAuthenticated = true
    },
    logout (state) {
      state.isAuthenticated = false
      state.user = null
    }
  }
})

export const {
  setAuthenticatedUser,
  logout
} = authSlice.actions

export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
