import { AuthStackLayout } from '../../layout'
import { FormContainer } from '../../components/'
import { Input } from '../../components/'
import { ButtonLink } from '../../components/button-link'
import { Feather } from '@expo/vector-icons'
import { Center } from '../../components/utils'

import { theme } from '../../styles/theme'
import * as S from './styles'

export function Login () {
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
              onPress={() => console.log('Log in')}
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
            onPress={() => console.log('Sign up')}
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
