import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 36px;
    font-family: ${theme.font.boldItalic};
    color: ${theme.colors.gray600};
    padding: 0 12px;
  `}
`

export const PseudoElement = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 7px;
    background-color: ${theme.colors.greenLight};
    border-radius: 100px;
  `}
`
