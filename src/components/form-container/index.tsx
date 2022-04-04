import styled, { css } from 'styled-components/native'

export const FormContainer = styled.View`
  width: 100%;
  box-shadow: 0px 3px 25px #00000014;
  border-radius: 14px;
  overflow: hidden;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray300};
  `}
`
