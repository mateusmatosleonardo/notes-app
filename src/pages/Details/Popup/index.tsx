import React from 'react';
import {
  Container,
  Modal,
  Option,
  PopupContainer,
  PopupTitle,
  Pressable,
  WrapperButtons
} from './styleConfig';
import { useTheme } from 'styled-components';
import { PopupProps } from './types';

export function Popup({ showPopup, handleCancel, handleDelete }: PopupProps) {

  const { colors } = useTheme();

  return (
    <Modal
      visible={showPopup}
      transparent={true}
      animationType="fade">
      <Container>
        <PopupContainer style={{ elevation: 4 }}>
          <PopupTitle>Deseja excluir esta anotação?</PopupTitle>
          <WrapperButtons>
            <Pressable onPress={handleCancel} bg='transparent'>
              <Option color={colors.primary.BLACK}>Cancelar</Option>
            </Pressable>
            <Pressable onPress={handleDelete} bg="#ff6961">
              <Option color={colors.primary.WHITE}>Excluir</Option>
            </Pressable>
          </WrapperButtons>
        </PopupContainer>
      </Container>
    </Modal>
  );
}