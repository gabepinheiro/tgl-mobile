import { Text } from 'react-native';
import { useForm } from 'react-hook-form'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '~/types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import { AuthStackLayout } from '~/layouts'

import { FormContainer, ControlledInput, ButtonLink, Center } from '~/components'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/styles'
import * as S from './styles'

type RegisterProps =
  NativeStackScreenProps<RootStackParamList, 'Login'>

type FormData = {
  name: string
  email: string
  password: string
}

const schema = yup.object({
  name: yup.string().required('Informe o seu nome'),
  email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
  password: yup.string().min(6, 'A senha deve ter ao menos 6 dígitos')
    .required('Informe a senha'),
});

export function Resgiter ({ navigation }: RegisterProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const navigateBackHandler = () => {
    navigation.goBack()
  }

  const handleRegister = (data: FormData) => console.log(data.name)

  return (
    <AuthStackLayout heading='Registration'>
      <S.Container>
        <FormContainer>
          <ControlledInput
            name='name'
            control={control}
            placeholder='Name'
          />
          {!!errors.name && <Text>{errors.name.message}</Text>}

          <ControlledInput
            name='email'
            control={control}
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          {!!errors.email && <Text>{errors.email.message}</Text>}

          <ControlledInput
            name='password'
            control={control}
            placeholder='Password'
            secureTextEntry
          />
          {!!errors.password && <Text>{errors.password.message}</Text>}

          <Center style={{marginVertical: 32}}>
            <ButtonLink
              color='greenLight'
              onPress={handleSubmit(handleRegister)}
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
