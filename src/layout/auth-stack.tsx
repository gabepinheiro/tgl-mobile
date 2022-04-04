import styled, { css } from 'styled-components/native'

import { ReactNode } from "react"

type Props = {
  children: ReactNode
  heading: string
}

export const AuthStackLayout = ({ children, heading }: Props) => {
  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.View`
  margin: 24px;
  flex: 1;
  align-items: center;
`

const Heading = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.boldItalic};
    color: ${theme.colors.gray600};
    font-size: 26px;
  `}
`


