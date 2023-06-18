import React from 'react';
import { HeaderWrapper, HeaderContainer, HeaderTitles, HeaderTitle, HeaderSubtitle, AvatarWrapper, Avatar } from './styles';
import { useTheme } from 'styled-components';
import { useUsersStore } from '../../store/users/users';
import UserIcon from "@expo/vector-icons/FontAwesome5";
import { HeaderProps } from './types';

export function Header({ navigation }: HeaderProps) {

  const { state: { user } } = useUsersStore();

  const { colors } = useTheme();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTitles>
          <HeaderTitle>Notas</HeaderTitle>
          <HeaderSubtitle>Olá, {user?.name}! 👋</HeaderSubtitle>
        </HeaderTitles>
        <AvatarWrapper onPress={navigation}>
          <Avatar
            source={user?.avatar_url !== '' ? { uri: user?.avatar_url } : <UserIcon name="user-circle" size={20} color={colors.primary.BLACK} />}
          />
        </AvatarWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}