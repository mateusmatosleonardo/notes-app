import React from 'react';
import * as S from './styles';
import { HeaderProps } from './types';
import AddIcon from '@expo/vector-icons/MaterialIcons';
import UserIcon from '@expo/vector-icons/Feather';

export function Header({ onPress }: HeaderProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperProfile>
          <S.PhotoProfile>
            <UserIcon name='user' color='#414040' size={28} />
          </S.PhotoProfile>
          <S.WrapperText>
            <S.Title>Seja bem-vindo</S.Title>
            <S.SubTitle>Sua segurança é nossa prioridade!</S.SubTitle>
          </S.WrapperText>
        </S.WrapperProfile>
        <S.AddNewPassword onPress={onPress}>
          <AddIcon name='add' color='#fafafa' size={20} />
        </S.AddNewPassword>
      </S.Wrapper>
    </S.Container>
  )
}