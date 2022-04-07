import { Navigation } from './navigation'

import AppLoading from 'expo-app-loading'
import { useFontsLoaded, useAppDispatch } from '~/hooks'
import { useEffect } from 'react'
import { Storage } from './storage'
import { AuthenticatedUser } from './types'
import { setAuthenticatedUser } from './store/features/auth-slice'

export function Root () {
  const { fontsLoaded } = useFontsLoaded()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getAuthUserFromStorage = async () => {
      const authUser = await Storage.getItem<AuthenticatedUser>('@auth')

      if(authUser) {
        return dispatch(setAuthenticatedUser(authUser))
      }

      return;
    }

    getAuthUserFromStorage()
  }, [dispatch])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Navigation />
  )
}
