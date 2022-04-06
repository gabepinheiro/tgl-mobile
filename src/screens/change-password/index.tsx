import { RootStackParamList } from '~/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthService } from '~/services/tgl-api'

import { AuthStackLayout } from '~/layouts'

import {
  ButtonLink,
  Center,
  ControlledInput,
  CustomToast,
  FormContainer
} from '~/components'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/styles'

type FormData = {
  password: string
  confirmPassword: string
}

const schema = yup.object({
  password: yup.string().min(6, 'A senha deve ter ao menos 6 dígitos')
    .required('Informe a senha'),
  confirmPassword: yup.string()
    .required('Informe a senha de confirmação')
      .oneOf([yup.ref('password')], 'As senhas não correspondem.'),
})

type Props = NativeStackScreenProps<RootStackParamList, 'ChangePassword'>

export function ChangePassword ({ navigation, route }: Props) {
  const { code } = route.params

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  const changePasswordHandler = async ({ password }:FormData) => {
    try {
      const res = await AuthService.changePassword({
        newPassword: password,
        code
      })

      if (res.ok) {
        navigation.replace('Login')
        CustomToast.success('Senha alterada com sucesso!')
      }

    } catch (error) {

    }
  }

  return (
    <AuthStackLayout heading='Change Password'>
      <FormContainer>
        <ControlledInput
          name='password'
          control={control}
          error={errors.password}
          placeholder='Password'
          secureTextEntry
        />

        <ControlledInput
          name='confirmPassword'
          control={control}
          error={errors.confirmPassword}
          placeholder='Password'
          secureTextEntry
        />

        <Center style={{marginVertical: 32}}>
          <ButtonLink
            color='greenLight'
            onPress={handleSubmit(changePasswordHandler)}
            icon={<Feather
              name='arrow-right'
              size={24}
              color={theme.colors.greenLight}
              />}
            >
              Change
          </ButtonLink>
        </Center>
      </FormContainer>
    </AuthStackLayout>
  )
}
