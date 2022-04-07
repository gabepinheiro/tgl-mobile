import styled, { css, DefaultTheme } from 'styled-components/native'

const TextModifiers = {
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray600};
  `,
  green: (theme: DefaultTheme) => css`
    color: ${theme.colors.green};
  `,
  greenLight: (theme: DefaultTheme) => css`
    color: ${theme.colors.greenLight};
  `,
  small: () => css`
    font-size: 18px;
  `,
  medium: () => css`
    font-size: 32px;
  `
}

export const Wrapper = styled.Pressable<{ reverse: boolean }>`
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row' };
  align-items: center;
`

type Colors = 'black' | 'green' | 'greenLight'
type Size = 'small' | 'medium'

type TextProps = {
  color: Colors
  size: Size
}

export const Text = styled.Text<TextProps>`
  text-align: center;
  margin: 0 14px;

  ${({ theme, color, size}) => css`
    font-family: ${theme.font.boldItalic};
    ${!!color && TextModifiers[color](theme)};
    ${!!size && TextModifiers[size]()};
  `}
`
