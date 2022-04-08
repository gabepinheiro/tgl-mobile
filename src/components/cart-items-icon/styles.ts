import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  position: relative;
  margin-right: 12px;
`

export const Badge = styled.View`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: ${theme.colors.greenLight};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -30%;
    right: -40%;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    color: ${theme.colors.white};
    font-size: 11px;
    text-align: center;
  `}
`
