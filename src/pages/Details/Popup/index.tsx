import React from 'react';
import {
  Container,
  Modal,
  Option,
  PopupContainer,
  PopupTitle,
  Pressable,
  Separator,
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
          <PopupTitle>Deseja excluir essa nota?</PopupTitle>
          <WrapperButtons>
            <Pressable onPress={handleCancel}>
              <Option color={colors.primary.BLACK}>Cancelar</Option>
            </Pressable>
            <Separator />
            <Pressable onPress={handleDelete}>
              <Option color={colors.primary.ERROR}>Excluir</Option>
            </Pressable>
          </WrapperButtons>
        </PopupContainer>
      </Container>
    </Modal>
  );
}