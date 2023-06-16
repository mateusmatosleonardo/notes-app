import React, { useEffect, useState } from 'react';
import { HeaderWrapper, HeaderContainer, HeaderTitles, HeaderTitle, HeaderSubtitle, AvatarWrapper, Avatar } from './styles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components';
import UserIcon from "@expo/vector-icons/FontAwesome5";

export function Header() {

  const [userData, setUserData] = useState<{ avatar: string, name: string }>();

  const { getItem } = useAsyncStorage('@userData');

  const { colors } = useTheme();

  const getStoredUserData = async (): Promise<void> => {
    try {
      const storedData: string | null = await getItem();
      if (storedData !== null) {
        setUserData(JSON.parse(storedData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStoredUserData();
  }, []);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderTitles>
          <HeaderTitle>Notas</HeaderTitle>
          <HeaderSubtitle>Olá, {userData?.name}! 👋</HeaderSubtitle>
        </HeaderTitles>
        <AvatarWrapper>
          <Avatar
            source={userData?.avatar ? { uri: userData?.avatar } : <UserIcon name="user-circle" size={200} color={colors.primary.DARK_GREY} />}
          />
        </AvatarWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}