import { useTheme } from "styled-components/native"
import { ActivityIndicator } from "react-native"

import * as S from './styles'

export const LoadingOverlay = () => {
  const theme = useTheme()

  return (
    <S.Wrapper>
      <ActivityIndicator size='large' color={theme.colors.green} />
    </S.Wrapper>
  )
}
