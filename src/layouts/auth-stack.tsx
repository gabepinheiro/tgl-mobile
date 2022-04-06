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
          <Container>
            {children}
          </Container>
        </KeyboardAvoidingView>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}

const Wrapper = styled.View`
  padding: 0 24px;
  flex: 1;
  justify-content: center;
`

const Heading = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font.boldItalic};
    color: ${theme.colors.gray600};
    font-size: 32px;
    text-align: center;
  `}
`

const Container = styled.View`
  width: 100%;
  margin-top: 26px;
`

