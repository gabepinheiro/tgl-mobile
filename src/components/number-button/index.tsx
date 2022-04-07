import { useTheme } from 'styled-components'
import * as S from './styles'

type NumberButtonProps = {
  number: number
  color?: string
  onPress?: () => void
}

export const NumberButton = ({ number, color, onPress }: NumberButtonProps) => {
  const theme = useTheme()
  const newNumber = String(number).padStart(2, '0')

  return (
    <S.Wrapper
      onPress={onPress}
      style={({ pressed }) => pressed && {opacity: 0.5}}
    >
      <S.Container color={color ? color : theme.colors.cyan}>
        {newNumber}
      </S.Container>
    </S.Wrapper>
  )
}
