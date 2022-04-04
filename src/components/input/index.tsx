import styled, { css } from 'styled-components/native'

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray400,
}))`
  width: 100%;
  padding: 24px;

  ${({ theme }) => css`
    font-family: ${theme.font.boldItalic};
    color: ${theme.colors.gray400};
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.gray300};
  `}
`
