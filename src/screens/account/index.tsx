import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import {
  Button,
  Center,
  ControlledInput,
  FormContainer
} from '~/components'

import * as S from './styles'

type FormData = {
  name: string
  email: string
}

const schema = yup.object({
  name: yup.string().required('Informe o seu nome'),
  email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
}).required()

export function Account () {
  const [showEditAccount, setShowEditAccount] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const handlerTogggleEditAccount = () => {
    setShowEditAccount(state => !state)
  }

  const handlerSave = (data: FormData) => {

  }

  return (
    <S.Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="height" enabled>
          <S.HeadingPrimary>Account</S.HeadingPrimary>
          <S.HeadingSecondary>Olá, Gabriel</S.HeadingSecondary>

          <S.ButtonWrapper>
            <Button onPress={handlerTogggleEditAccount}>Edit account</Button>
          </S.ButtonWrapper>

          {showEditAccount && (
            <FormContainer>
              <ControlledInput
                name='name'
                control={control}
                error={errors.name}
                placeholder='Name'
              />

              <ControlledInput
                name='email'
                control={control}
                error={errors.email}
                placeholder='Email'
                keyboardType='email-address'
                autoCapitalize='none'
              />

              <Center style={{marginVertical: 32}}>
                <Button onPress={handleSubmit(handlerSave)}>Save</Button>
              </Center>
            </FormContainer>
          )}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </S.Wrapper>
  )
}
