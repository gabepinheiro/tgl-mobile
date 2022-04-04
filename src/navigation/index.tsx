import { NavigationContainer } from '@react-navigation/native'
import { AuthenticatedStack, AuthStack } from './stacks'

export function Navigation () {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AuthenticatedStack /> */}
    </NavigationContainer>
  )
}
