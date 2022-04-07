import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  padding: 48px 0 0 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
  `}
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  margin-bottom: 25px;
`

export const Heading = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray600};
    font-family: ${theme.font.boldItalic};
    font-size: 20px;
    text-transform: uppercase;
  `}
`

export const WrapperFiltersButtons = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 22px;
  height: 50px;
`

export const FiltersText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    font-family: ${theme.font.regular};
    font-style: italic;
    font-size: 16px;
  `}
`

export const ButtonsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingHorizontal: 10,
    paddingVertical: 8,
   },
  showsHorizontalScrollIndicator: false,
})`
`;

export const ButtonItem = styled.View`
  margin-left: 10px;
`;

export const WrapperBets = styled.View`
  margin-right: 16px;
  flex: 1;
`

export const ItemGameCard = styled.View`
  margin-bottom: 16px;
`
