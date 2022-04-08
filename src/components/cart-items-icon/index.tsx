import * as S from './styles'

import { Feather } from '@expo/vector-icons'

type CartItemIcon = {
  quantity: number
  color: string
}

export const CartItemsIcon = ({ quantity, color }: CartItemIcon) => {
  return (
    <S.Wrapper>
      <Feather name='shopping-cart' color={color} size={25} />
      <S.Badge>
        <S.Text>{quantity}</S.Text>
      </S.Badge>
    </S.Wrapper>
  )
}
