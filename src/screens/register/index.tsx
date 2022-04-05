import { View } from 'react-native'
import { FormContainer, Input } from '../../components'
import { ButtonLink } from '../../components/button-link'
import { AuthStackLayout } from '../../layout'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../styles/theme'

import * as S from './styles'

export function Resgiter () {
  return (
    <AuthStackLayout heading='Registration'>
      <S.Container>
        <FormContainer>
          <Input placeholder='Name' />
          <Input
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            placeholder='Password'
            secureTextEntry
          />
          <S.ButtonWrapper>
            <ButtonLink
              color='greenLight'
              onPress={() => console.log('Register')}
              icon={<Feather
                name='arrow-right'
                size={24}
                color={theme.colors.greenLight}
                />}
              >
                Register
            </ButtonLink>
          </S.ButtonWrapper>
        </FormContainer>

        <S.ButtonWrapper>
          <ButtonLink
            color='black'
            onPress={() => console.log('Go Back')}
            reverse
            icon={<Feather
              name='arrow-left'
              size={24}
              color={theme.colors.gray600}
              />}
            >
              Back
          </ButtonLink>
        </S.ButtonWrapper>
      </S.Container>
    </AuthStackLayout>
  )
}
