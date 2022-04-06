import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'
import { AuthService } from '~/services/tgl-api'
import { useAppDispatch } from '~/hooks'
import { setAuthenticatedUser } from '~/store/features/auth-slice'
import { RootStackParamList } from '~/types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import { AuthStackLayout } from '~/layouts'
import { FormContainer, ButtonLink, Center, ControlledInput } from '~/components'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/styles'
import * as S from './styles'
import Toast from 'react-native-root-toast'
import { AxiosError } from 'axios'

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
  const dispatch = useAppDispatch()

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

  const loginUserHandler = async (data: FormData) => {
    try {
      const authUser = await AuthService.login(data)

      Toast.show('Autenticado com sucesso.', {
        position: Toast.positions.TOP,
        backgroundColor: 'green',
        textColor: '#fff',
        opacity: 1,
        shadow: true,
        animation: true,
        hideOnPress: true,
      })

      dispatch(setAuthenticatedUser(authUser))
    } catch (err) {
      const error = err as AxiosError

      if(error.response)
        Toast.show(error.response.data.message, {
          position: Toast.positions.TOP,
          backgroundColor: 'red',
          textColor: '#fff',
          opacity: 1,
          shadow: true,
          animation: true,
          hideOnPress: true,
        })
    }
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
