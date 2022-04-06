import { RootStackParamList } from '~/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import { AuthStackLayout } from '~/layouts'

import {
  ButtonLink,
  Center,
  ControlledInput,
  FormContainer
} from '~/components'
import { Feather } from '@expo/vector-icons'

import { theme } from '~/styles'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
}

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
});

type Props = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>

export function ResetPassword ({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const navigateBackHandler = () => {
    navigation.goBack()
  }

  const sendLinkHandler = (data: FormData) => {

  }

  return (
    <AuthStackLayout heading='Reset Password'>
      <FormContainer>
        <ControlledInput
          name='email'
          control={control}
          error={errors.email}
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Center style={{marginVertical: 32}}>
          <ButtonLink
            color='greenLight'
            onPress={handleSubmit(sendLinkHandler)}
            icon={<Feather
              name='arrow-right'
              size={24}
              color={theme.colors.greenLight}
              />}
            >
              Send link
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
    </AuthStackLayout>
  )
}
