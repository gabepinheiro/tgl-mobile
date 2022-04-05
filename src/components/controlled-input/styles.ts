import styled, { css } from 'styled-components/native'

export const Error = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    color: red;
    margin:6px 8px 0;
  `}
`
