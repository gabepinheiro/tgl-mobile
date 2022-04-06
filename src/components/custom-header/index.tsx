import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppDispatch, useAppNavigation, useAppSelector  } from '~/hooks'
import { selectAuth, logout } from '~/store/features/auth-slice'

import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'

import * as S from './styles'

export const CustomHeader = () => {
  const { user } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()

  const insets = useSafeAreaInsets()
  const navigation = useAppNavigation()

  const accountNavigateHandler = () => {
    navigation.navigate('Account')
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <S.Wrapper style={{
      paddingTop: insets.top,
      paddingHorizontal: 18
    }}>
      <S.Container>
        <S.WrapperButtons>
          <Pressable onPress={accountNavigateHandler}>
            <S.IconUserWrapper>
              <Feather name='user' size={24} color='#fff' />
            </S.IconUserWrapper>
          </Pressable>

          <Pressable onPress={logoutHandler}>
            <Feather name='log-out' size={24} color='#fff' />
          </Pressable>
        </S.WrapperButtons>
        <S.Username>
          Olá, {user?.user.name}
        </S.Username>
      </S.Container>
    </S.Wrapper>
  )
}
