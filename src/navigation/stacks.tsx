import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'

import {
  Home,
  Account,
  Cart,
  Login,
  NewBet,
  Resgiter,
  ChangePassword,
  ResetPassword
} from '../screens'
import { CustomHeader } from '../components'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AuthStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Resgiter} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} />
      <Stack.Screen name='ChangePassword' component={ChangePassword} />
    </Stack.Navigator>
  )
}

export function AuthenticatedStack () {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            header: () => <CustomHeader />
          }}
        />
        <Stack.Screen name='NewBet' component={NewBet} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='Cart' component={Cart} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
