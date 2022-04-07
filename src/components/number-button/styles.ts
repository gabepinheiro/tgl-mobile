import styled, { css } from 'styled-components/native'

export const Wrapper = styled.Pressable`
  align-items: flex-start;
`

type ContainerProps = {
  color: string
}

export const Container = styled.Text<ContainerProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.font.bold};
    font-size: 18px;
    padding: 18px;
    background-color: ${color};
    border-radius: 50px;
    color: ${theme.colors.white};
  `}
`
