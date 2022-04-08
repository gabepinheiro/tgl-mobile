import styled, { css } from 'styled-components/native'
import { ButtonProps } from '.'

export const Wrapper = styled.Pressable`
  align-items: flex-start;
`

type Props = Pick<ButtonProps, 'color' | 'variant' | 'reverse'>

export const Container = styled.View<Props>`
  ${({ theme, color, variant }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 26px;
    background-color: ${theme.colors[color!]};
    border-radius: 10px;

    ${!!variant && css`
      background-color: ${theme.colors.white};
      border-width: 1.5px;
      border-color: ${theme.colors[color!]};
    `}
  `}
`

export const Text = styled.Text<Omit<Props, 'reverse'>>`
  ${({ theme, color, variant }) => css`
    font-family: ${theme.font.bold};
    color: ${theme.colors.white};

    ${!!variant && css`
       color: ${theme.colors[color!]};
    `}
  `}
`

export const IconWrapper = styled.View`
  margin-right: 16px;
`
