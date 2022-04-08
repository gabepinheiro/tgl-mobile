import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 16px;
  margin-top: 48px;
  width: 100%;
`

const mixinHeading = css`
  ${({ theme }) => css`
    font-family: ${theme.font.boldItalic};
    color: ${theme.colors.gray600};
    text-transform: uppercase;
  `}
`

export const HeadingPrimary = styled.Text`
  ${() => css`
    ${mixinHeading}
    font-size: 32px;
  `}
`

export const HeadingSecondary = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    font-family: ${theme.font.regular};
    font-size: 24px;
    margin-top: 12px;
  `}
`

export const ButtonWrapper = styled.View`
  margin: 32px 0;
`
