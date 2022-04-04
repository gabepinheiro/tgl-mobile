import styled, { css } from 'styled-components/native'

import { GameButtonProps } from '.'

type Props = Pick<GameButtonProps, 'color' | 'selected'>

const Modifiers = {
  selected: (color: string) => css`
    background-color: ${color};
    border: 0;
  `,
}

export const Wrapper = styled.View`
  overflow: hidden;
  `

export const Container = styled.View<Props>`
  border-radius: 100px;
  width: 113px;
  height: 34px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  ${({ color, selected, theme }) => css`
    background-color: ${theme.colors.white};
    border: 2px solid ${color};
    ${selected && Modifiers.selected(color)};
  `}
`

export const Text = styled.Text<{color: string}>`
  ${({ theme, color }) => css`
     font-family: ${theme.font.boldItalic};
     color: ${color}
   `}
`
