import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    color: ${theme.colors.green};
    font-size: 32px;
    font-style: italic;
  `}
`
