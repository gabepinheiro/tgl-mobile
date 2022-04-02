import { NavigationContainer } from '@react-navigation/native'
import { AuthenticatedStack } from './stacks'

export function Navigation () {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  )
}
