import styled, { css } from 'styled-components/native'

export const ButtonWrapper = styled.View`
  width: 100%;
  margin: 32px 0;
  flex-direction: row;
  justify-content: center;
`

export const IForgetMyPasswordText = styled.Text.attrs({
  children: 'I forget my password'
})`
  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    font-size: 17px;
    font-style: italic;
    color: #C1C1C1;
    text-align: right;
    margin: 18px 20px 0;
  `}
`
