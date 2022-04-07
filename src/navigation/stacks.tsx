import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack'

import {
  Home,
  Account,
  Cart,
  Login,
  NewBet,
  Resgiter,
  ChangePassword,
  ResetPassword
} from '~/screens'

import { CustomHeader, Logo } from '~/components'

import { theme } from '~/styles'

const Stack = createNativeStackNavigator()

const screenCustomOptionsDefault: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor:  theme.colors.green,
  },
  headerShadowVisible: false,
  headerTitleAlign: 'center',
}

export function AuthStack () {
  return (
    <Stack.Navigator screenOptions={{
      ...screenCustomOptionsDefault,
      headerStyle: {
        backgroundColor:  theme.colors.white,
      },
      headerTitle: () => <Logo />,
      headerBackVisible: false
    }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Resgiter} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} />
      <Stack.Screen name='ChangePassword' component={ChangePassword} />
    </Stack.Navigator>
  )
}

export function AuthenticatedStack () {
  return (
    <Stack.Navigator screenOptions={screenCustomOptionsDefault}>
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

      <Stack.Group screenOptions={{ title: ''}}>
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='Cart' component={Cart} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
