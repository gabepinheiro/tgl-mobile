import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserService } from '~/services/tgl-api'
import { UserAccount } from '~/types'

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import {
  Button,
  Center,
  ControlledInput,
  CustomToast,
  FormContainer,
  LoadingOverlay
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
  const [isFetching, setIsFetching] = useState(true)
  const [userAccount, setUserAccount] = useState<UserAccount | null>(null)
  const [showEditAccount, setShowEditAccount] = useState(false)
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const handlerTogggleEditAccount = () => {
    setShowEditAccount(state => !state)
  }

  const handlerSave = async (data: FormData) => {
    setIsFetching(true)
    try {
      const updatedUser = await UserService.updateUserAccount(data)

      setUserAccount(updatedUser)
      setIsFetching(false)
      CustomToast.success('Conta atualizada com sucesso!')
    } catch (error) {

    }
  }

  useEffect(() => {
    const fetchMyAccount = async () => {
      try {
        const userAccount = await UserService.fetchUserAccount()
        console.log(userAccount)

        setValue('name', userAccount.name)
        setValue('email', userAccount.email)
        setUserAccount(userAccount)

        setIsFetching(false)
      } catch (error) {

      }
    }

    fetchMyAccount()
  }, [])

  if (isFetching) {
    return <LoadingOverlay />
  }

  return (
    <S.Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="height" enabled>
          <S.HeadingPrimary>Account</S.HeadingPrimary>
          <S.HeadingSecondary>Olá, {userAccount?.name}</S.HeadingSecondary>

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
