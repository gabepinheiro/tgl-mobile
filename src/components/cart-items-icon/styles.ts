import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  position: relative;
  margin-right: 12px;
`

export const Badge = styled.View`
  ${({ theme }) => css`
    width:17px;
    height:17px;
    border-radius: 100px;
    background-color: ${theme.colors.greenLight};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -20%;
    right: -35%;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.bold};
    color: ${theme.colors.white};
    font-size: 12px;
  `}
`
