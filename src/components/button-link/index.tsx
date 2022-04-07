import { ReactNode } from "react"

import * as S from './styles'

type ButtonLinkProps = {
  children: ReactNode
  icon: ReactNode
  reverse?: boolean
  color?: 'black' | 'green' | 'greenLight'
  size?: 'small' | 'medium'
  onPress: () => void
}

export const ButtonLink = ({
  children,
  color = 'black',
  reverse = false,
  size = 'medium',
  icon,
  ...props
}: ButtonLinkProps) => {
  return (
    <S.Wrapper {...props} reverse={reverse}>
      <S.Text color={color} size={size}>{children}</S.Text>
      {!!icon && icon}
    </S.Wrapper>
  )
}
