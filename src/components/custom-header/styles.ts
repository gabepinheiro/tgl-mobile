import styled, { css } from 'styled-components/native'


export const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    padding-bottom: 16px;
  `}
`

export const Container = styled.View`
  padding-top: 18px;
  align-items: flex-start;
`

export const WrapperButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const IconUserWrapper = styled.View`
  background-color: green;
  border-radius: 100px;
  padding: 16px;
`

export const WrapperLogout = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Username = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.regular};
    font-size: 22px;
    color: #fff;
    padding-top: 24px;
    padding-left: 8px;
  `}
`

