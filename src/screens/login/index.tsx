import { AuthStackLayout } from '../../layout'
import { FormContainer } from '../../components/'
import { Input } from '../../components/'

import * as S from './styles'

export function Login () {
  return (
    <AuthStackLayout heading='Authentication'>
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
        </FormContainer>
      </S.Container>
    </AuthStackLayout>
  )
}
