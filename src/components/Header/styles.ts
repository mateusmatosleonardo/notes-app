import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const WrapperHeader = styled.SafeAreaView``;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const WrapperAvatar = styled.View`
  width: 62px;
  height: 62px;
`;

export const Avatar = styled.Image`
  width: 62px;
  height: 62px;
  border-radius: 31px;
`;

export const WrapperTitles = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_SemiBold};
  color: ${({ theme }) => theme.colors.primary.BLACK};
  font-size: ${({ theme }) => RFValue(theme.sizes.ULTRA_LARGE)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  color: ${({ theme }) => theme.colors.primary.MIDDLE_GREY};
  font-size: ${({ theme }) => RFValue(theme.sizes.NORMAL)}px;
`;
