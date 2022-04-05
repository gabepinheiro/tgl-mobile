import styled, { css, DefaultTheme } from 'styled-components/native'

const LinkModifiers = {
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray600};
  `,
  green: (theme: DefaultTheme) => css`
    color: ${theme.colors.green};
  `,
  greenLight: (theme: DefaultTheme) => css`
    color: ${theme.colors.greenLight};
  `,
}

export const Wrapper = styled.Pressable<{ reverse: boolean }>`
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row' };
  align-items: center;
`

type Colors = 'black' | 'green' | 'greenLight'

export const Text = styled.Text<{color: Colors}>`
  font-size: 32px;
  text-align: center;
  margin: 0 14px;
  ${({ theme, color }) => css`
    font-family: ${theme.font.boldItalic};
    ${!!color && LinkModifiers[color](theme)};
  `}
`
