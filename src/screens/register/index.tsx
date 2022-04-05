import { FormContainer, Input } from '../../components'
import { ButtonLink } from '../../components/button-link'
import { AuthStackLayout } from '../../layout'
import { Feather } from '@expo/vector-icons'
import { Center } from '../../components/utils'

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
          <Center style={{marginVertical: 32}}>
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
          </Center>
        </FormContainer>

        <Center style={{marginVertical: 32}}>
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
        </Center>
      </S.Container>
    </AuthStackLayout>
  )
}
