import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppNavigation  } from '../../hooks'

import { Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'

import * as S from './styles'

export const CustomHeader = () => {
  const insets = useSafeAreaInsets()
  const navigation = useAppNavigation()

  const accountNavigateHandler = () => {
    navigation.navigate('Account')
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

          <Pressable onPress={() => {}}>
            <Feather name='log-out' size={24} color='#fff' />
          </Pressable>
        </S.WrapperButtons>
        <S.Username>
          Olá, John Doe
        </S.Username>
      </S.Container>
    </S.Wrapper>
  )
}
