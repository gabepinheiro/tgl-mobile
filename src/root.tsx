import { Navigation } from './navigation'

import AppLoading from 'expo-app-loading'
import { useFontsLoaded } from '~/hooks'

export function Root () {
  const { fontsLoaded } = useFontsLoaded()

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Navigation />
  )
}
