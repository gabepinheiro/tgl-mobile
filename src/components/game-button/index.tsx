import { ReactNode } from "react"
import { Pressable } from "react-native"

import * as S from './styles'

export type GameButtonProps = {
  children: ReactNode
  color: string
  selected: boolean
  onPress: () => void
}

export const GameButton = ({
  children,
  color,
  selected = false,
  onPress
}: GameButtonProps) => {
  return (
    <S.Wrapper>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({ opacity: pressed ? 0.75: 1})}
      >
        <S.Container color={color} selected={selected}>
          <S.Text color={selected ? '#fff' : color}>{children}</S.Text>
        </S.Container>
      </Pressable>
    </S.Wrapper>
  )
}
