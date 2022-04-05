import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  padding: 32px 0 0 22px;

  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
  `}
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
  margin: 26px 0;
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
    paddingTop: 8,
   },
  showsHorizontalScrollIndicator: false,
})``;

export const ButtonItem = styled.View`
  margin-left: 10px;
`;
