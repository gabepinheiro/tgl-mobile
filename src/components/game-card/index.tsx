import * as S from './styles'

type GameCardProps = {
  numbers: string
  date?: string
  price: number
  type: string
  color: string
}

export const GameCard = ({
  numbers,
  date,
  price,
  color,
  type
}: GameCardProps) => {
  return (
    <S.Wrapper color={color}>
      <S.Numbers>{numbers}</S.Numbers>
      {date && <S.DatePrice>{date} - ({price})</S.DatePrice>}
      <S.TypeName color={color}>
        {type} {' '}
        {!date && <S.DatePrice>R$ 2,50</S.DatePrice>}
      </S.TypeName>
    </S.Wrapper>
  )
}
