import styled, { css } from 'styled-components/native'
import { ReactNode } from "react"
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native'

type Props = {
  children: ReactNode
  heading: string
}

export const AuthStackLayout = ({ children, heading }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Wrapper>
        <KeyboardAvoidingView behavior="position" enabled>
          <Heading>{heading}</Heading>
          {children}
        </KeyboardAvoidingView>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}

const Wrapper = styled.View`
  padding: 24px;
  flex: 1;
`

const Heading = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.boldItalic};
    color: ${theme.colors.gray600};
    font-size: 26px;
    text-align: center;
  `}
`


