import { useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '~/hooks'
import { clearCart, deleteItemCart, selectCart } from '~/store/features/cart-slice'
import { BetsService } from '~/services/tgl-api'
import { AxiosError } from 'axios'
import { RootStackScreenProps } from '~/types'
import { getCurrencyFormatted } from '~/utils'

import { FlatList, Pressable, Modal } from 'react-native'
import { Button, CustomToast, GameCard, LoadingOverlay } from '~/components'
import { Feather } from '@expo/vector-icons'

import * as S from './styles'

type CartScreenProps = RootStackScreenProps<'Cart'>

export function Cart ({ navigation }: CartScreenProps) {
  const [isSaving, setIsSaving] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const itemCartIdRef = useRef<string | null>(null)

  const cart = useAppSelector(selectCart)
  const dispatch = useAppDispatch()

  const handlerConfirmDelete = (id: string) => {
    return () => {
      setModalVisible(true)
      itemCartIdRef.current = id
    }
  }

  const handlerCancelDelete = () => {
    itemCartIdRef.current = null
    setModalVisible(false)
  }

  const handlerDeleteItemCart = () => {
    if(!itemCartIdRef.current) {
      return;
    }

    dispatch(deleteItemCart(itemCartIdRef.current))
    setModalVisible(false)
    CustomToast.success('item excluido com sucesso!')
  }

  const handlerSaveBet = async () => {
    setIsSaving(true)
    try {
      const newBet = {
        games: cart.items.map(item => ({
          game_id: item.gameId,
          numbers: item.numbers,
        })),
      }

      await BetsService.saveBet(newBet)
      setIsSaving(false)
      CustomToast.success('Aposta realizada com sucesso!')
      dispatch(clearCart())
      navigation.replace('Home')
    } catch (err) {
      const error = err as AxiosError<{ message: string }>
      if (error.response) {
        return CustomToast.error(error.response.data.message)
      }
      CustomToast.error((err as Error).message && 'Erro de conexão')
    }
  }

  if (isSaving) {
    return <LoadingOverlay />
  }

  return (
    <S.Wrapper>
      <S.HeadingPrimary>Cart</S.HeadingPrimary>
      <S.CartTotalWrapper>
        <S.HeadingSecondary>Cart Total</S.HeadingSecondary>
        <S.HeadingTertiary>{getCurrencyFormatted(cart.totalValue)}</S.HeadingTertiary>
      </S.CartTotalWrapper>

      <Button onPress={handlerSaveBet}>Save</Button>
        <S.CartItems>
          <S.HeadingCartItemsWrapper>
            <S.HeadingSecondary>Items</S.HeadingSecondary>
          </S.HeadingCartItemsWrapper>
          {!cart.items.length && (
            <S.Text>Nenhum item adicionado no carrinho!</S.Text>
          )}
          {!!cart.items.length && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cart.items}
              renderItem={({item}) => (
                <S.CartItem>
                  <Pressable onPress={handlerConfirmDelete(item.id)}>
                    <S.DeleteIconWrapper>
                      <Feather name='trash' size={24} />
                    </S.DeleteIconWrapper>
                  </Pressable>
                  <GameCard
                    numbers={item.numbers.join(',')}
                    price={item.price}
                    color={item.color}
                    type={item.type}
                    />
                </S.CartItem>
              )}
            />
          )}
        </S.CartItems>

      {modalVisible && (
        <S.ModalWrapper>
          <Modal
            transparent
            animationType='slide'
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(state => !state);
            }}>
            <S.ContentWrapper>
              <S.ModalContent>
                <S.ModalText>Deseja realmente excluir o item do carrinho ?</S.ModalText>
                <S.ModalButtonsWrapper>
                  <Button onPress={handlerDeleteItemCart}>Sim</Button>
                  <Button variant='outline' onPress={handlerCancelDelete}>
                    Não
                  </Button>
                </S.ModalButtonsWrapper>
              </S.ModalContent>
            </S.ContentWrapper>
          </Modal>
        </S.ModalWrapper>
      )}
    </S.Wrapper>
  )
}
