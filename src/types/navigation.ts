import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Account: undefined
  NewBet: undefined
  Cart: undefined
  Login: undefined
  Register: undefined
  ResetPassword: undefined
  ChangePassword: { code: string }
};

export type AppNavigationProp =
 NativeStackNavigationProp<RootStackParamList>
