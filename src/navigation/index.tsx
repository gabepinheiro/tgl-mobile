import { NavigationContainer } from '@react-navigation/native'
import { useAppSelector } from '~/hooks'
import { selectAuth } from '~/store/features/auth-slice'
import { AuthenticatedStack, AuthStack } from './stacks'

export function Navigation () {
  const { isAuthenticated } = useAppSelector(selectAuth)

  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthStack />}
      {isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  )
}
