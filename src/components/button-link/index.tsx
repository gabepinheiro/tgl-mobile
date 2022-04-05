import { ReactNode } from "react"

import * as S from './styles'

type ButtonLinkProps = {
  children: ReactNode
  icon: ReactNode
  reverse?: boolean
  color?: 'black' | 'green' | 'greenLight',
  onPress: () => void
}

export const ButtonLink = ({
  children,
  color = 'black',
  reverse = false,
  icon,
  ...props
}: ButtonLinkProps) => {
  return (
    <S.Wrapper {...props} reverse={reverse}>
      <S.Text color={color}>{children}</S.Text>
      {!!icon && icon}
    </S.Wrapper>
  )
}
