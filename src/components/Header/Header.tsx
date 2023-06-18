import React from 'react';
import { HeaderWrapper, HeaderContainer, HeaderTitles, HeaderTitle, HeaderSubtitle, AvatarWrapper, Avatar } from './styles';
import { useTheme } from 'styled-components';
import { useUsersStore } from '../../store/users/users';
import UserIcon from "@expo/vector-icons/FontAwesome5";

export function Header() {

  const { state: { user } } = useUsersStore();

  const { colors } = useTheme();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTitles>
          <HeaderTitle>Notas</HeaderTitle>
          <HeaderSubtitle>Olá, {user?.name}! 👋</HeaderSubtitle>
        </HeaderTitles>
        <AvatarWrapper>
          <Avatar
            source={user?.avatar_url ? { uri: user?.avatar_url } : <UserIcon name="user-circle" size={200} color={colors.primary.DARK_GREY} />}
          />
        </AvatarWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}