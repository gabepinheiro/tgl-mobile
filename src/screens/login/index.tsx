import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '~/types'

import { AuthStackLayout } from '~/layouts'
import { FormContainer, Input, ButtonLink, Center } from '~/components'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/styles'
import * as S from './styles'

type LoginProps =
  NativeStackScreenProps<RootStackParamList, 'Login'>

export function Login ({ navigation }: LoginProps) {
  const navigateRegisterHandler = () => {
    navigation.navigate('Register')
  }

  return (
    <AuthStackLayout heading='Authentication'>
      <S.Container>
        <FormContainer>
          <Input
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            placeholder='Password'
            secureTextEntry
          />
          <Center style={{marginVertical: 32}}>
            <ButtonLink
              color='greenLight'
              onPress={() => {console.log('Log in')}}
              icon={<Feather
                name='arrow-right'
                size={24}
                color={theme.colors.greenLight}
                />}
              >
                Log In
            </ButtonLink>
          </Center>
        </FormContainer>

        <Center style={{marginVertical: 32}}>
          <ButtonLink
            color='black'
            onPress={navigateRegisterHandler}
            icon={<Feather
              name='arrow-right'
              size={24}
              color={theme.colors.gray600}
              />}
            >
              Sign Up
          </ButtonLink>
        </Center>
      </S.Container>
    </AuthStackLayout>
  )
}
