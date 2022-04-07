import { ReactNode } from "react"
import { View } from "react-native"

import * as S from './styles'

export type ButtonProps = {
  children: ReactNode
  color?: 'green'
  variant?: 'outline'
  icon?: ReactNode
  reverse?: boolean
  onPress?: () => void
}

export const Button = ({
  children,
  color = 'green',
  variant,
  icon,
  reverse = false,
  onPress
}: ButtonProps) => {
  return (
    <S.Wrapper
      onPress={() => {}}
      style={({ pressed }) => pressed && {opacity: 0.5}}
    >
      <S.Container
        color={color}
        variant={variant}
        reverse={reverse}
      >
        {!!icon && <S.IconWrapper>{icon}</S.IconWrapper>}
        <S.Text color={color} variant={variant}>{children}</S.Text>
      </S.Container>
    </S.Wrapper>
  )
}
