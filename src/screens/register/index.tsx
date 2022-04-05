import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '~/types'

import { AuthStackLayout } from '~/layouts'

import { FormContainer, Input, ButtonLink, Center } from '~/components'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/styles'
import * as S from './styles'

type RegisterProps =
  NativeStackScreenProps<RootStackParamList, 'Login'>

export function Resgiter ({ navigation }: RegisterProps) {
  const navigateBackHandler = () => {
    navigation.goBack()
  }

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
            onPress={navigateBackHandler}
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
