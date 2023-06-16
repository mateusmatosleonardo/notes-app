import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const HeaderWrapper = styled.SafeAreaView``;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const AvatarWrapper = styled.View`
  width: 62px;
  height: 62px;
`;

export const Avatar = styled.Image`
  width: 62px;
  height: 62px;
  border-radius: 31px;
`;

export const HeaderTitles = styled.View``;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  color: ${({ theme }) => theme.colors.primary.BLACK};
  font-size: ${({ theme }) => RFValue(theme.sizes.ULTRA_LARGE)}px;
`;

export const HeaderSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Regular};
  color: ${({ theme }) => theme.colors.primary.MIDDLE_GREY};
  font-size: ${({ theme }) => RFValue(theme.sizes.NORMAL)}px;
`;
