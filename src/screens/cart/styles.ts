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

const mixinCenteredFlex = css`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.View`
  ${mixinCenteredFlex};
  `

export const ContentWrapper = styled.View`
  ${mixinCenteredFlex};
  background-color: rgba(255,255,255, 0.8);
`

export const ModalContent = styled.View`
  width: 80%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 10px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`

export const ModalText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    color: ${theme.colors.gray600};
    text-align: center;
  `}
`

export const ModalButtonsWrapper = styled.View`
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-evenly;
`
