import styled, { css } from 'styled-components/native'

type WrapperProps = {
  color: string
}

export const Wrapper = styled.View<WrapperProps>`
  ${({ color }) => css`
    border-radius: 3px;
    border-left-width: 4px;
    border-color: ${color};
    padding: 6px 0 6px 16px;
    width: 100%;
  `}
`

export const Numbers = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.boldItalic};
    color: ${theme.colors.gray500};
    font-size: 16px;
    margin-bottom: 6px;
  `}
`

export const DatePrice = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    font-size: 16px;
    margin-bottom: 6px;
  `}
`

type TypeNameProps = {
  color: string
}

export const TypeName = styled.Text<TypeNameProps>`
  ${({ theme, color }) => css`
    font-family: ${theme.font.boldItalic};
    color: ${color};
    font-size: 18px;
  `}
`
