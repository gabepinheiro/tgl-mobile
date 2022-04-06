import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '~/types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import { AuthStackLayout } from '~/layouts'
import { FormContainer, ButtonLink, Center, ControlledInput } from '~/components'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/styles'
import * as S from './styles'
import { useForm } from 'react-hook-form';

type LoginProps =
  NativeStackScreenProps<RootStackParamList, 'Login'>

type FormData = {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
  password: yup.string().min(6, 'A senha deve ter ao menos 6 dígitos')
    .required('Informe a senha'),
});

export function Login ({ navigation }: LoginProps) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const navigateRegisterHandler = () => {
    navigation.navigate('Register')
  }

  const loginUserHandler = (data: FormData) => {

  }

  return (
    <AuthStackLayout heading='Authentication'>
      <S.Container>
        <FormContainer>
          <ControlledInput
            name='email'
            control={control}
            error={errors.email}
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <ControlledInput
            name='password'
            control={control}
            error={errors.password}
            placeholder='Password'
            secureTextEntry
          />
          <Center style={{marginVertical: 32}}>
            <ButtonLink
              color='greenLight'
              onPress={handleSubmit(loginUserHandler)}
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
