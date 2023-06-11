import React from 'react';
import { WrapperHeader, Wrapper, WrapperTitles, Title, SubTitle, WrapperAvatar, Avatar } from './styles';
import Me from '../../assets/images/avatar.jpeg';

export function Header() {
  return (
    <WrapperHeader>
      <Wrapper>
        <WrapperTitles>
          <Title>Notas</Title>
          <SubTitle>Olá, Mateus! 👋</SubTitle>
        </WrapperTitles>
        <WrapperAvatar >
          <Avatar source={Me} />
        </WrapperAvatar>
      </Wrapper>
    </WrapperHeader>
  )
}