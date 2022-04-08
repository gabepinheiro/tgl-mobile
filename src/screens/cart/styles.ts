import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 16px;
  margin-top: 48px;
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

export const CartTotalWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 26px 0;
`

export const HeadingSecondary = styled.Text`
  ${mixinHeading}
  font-size: 22px;
`

export const HeadingTertiary = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    font-family: ${theme.font.regular};
    font-style: italic;
    font-size: 24px;
  `}
`

export const CartItems = styled.View`
  flex: 1;
  margin-top: 36px;
`

export const HeadingCartItemsWrapper = styled.View`
  margin-bottom: 36px;
`

export const CartItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  padding: 0 8px;
`

export const DeleteIconWrapper = styled.View`
  margin-right: 28px;
`
