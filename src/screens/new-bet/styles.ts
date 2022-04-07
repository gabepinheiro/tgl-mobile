import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 16px;
  margin-top: 48px;
`

export const HeadingPrimaryWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`

const mixinHeadingPrimary = css`
  text-transform: uppercase;
  font-size: 20px;
`

export const HeadingPrimaryTextMain = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.boldItalic};
    color: ${theme.colors.gray600};
    ${mixinHeadingPrimary};
  `}
`

export const HeadingPrimaryTextSub = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.lightItalic};
    color: ${theme.colors.gray600};
    ${mixinHeadingPrimary};
  `}
`

export const HeadingSecondary = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.boldItalic};
    color: ${theme.colors.gray500};
    font-size: 16px;
  `}
`

export const Paragraph = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    font-family: ${theme.font.regular};
    font-style: italic;
    font-size: 17px;
  `}
`

export const ButtonsWrapper = styled.View`
  margin: 16px 0;
  min-height: 30px;
`

export const ButtonsScrollView = styled.ScrollView.attrs({
  horizontal: true,
   contentContainerStyle: {
     paddingVertical: 8,
    },
  showsHorizontalScrollIndicator: false,
})``;

export const ButtonItem = styled.View`
  margin-right: 10px;
`;

export const NumberButtonsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 8px;
`

export const NumberButtonItem = styled.View`
  margin: 0 2px 6px;
`
