import React from 'react';
import { Header } from '../../components/Header/Header';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Header onPress={() => console.log('Pressionado!')} />
      <S.WrapperText>
        <S.TextPassword>Suas senhas</S.TextPassword>
      </S.WrapperText>
    </S.Container>
  );
}