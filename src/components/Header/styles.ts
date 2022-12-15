import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  padding-top: 20px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.colors.BLUE_SECONDARY};
`;

export const WrapperProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PhotoProfile = styled.View`
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const WrapperText = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Bold};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${({ theme }) => RFValue(theme.sizes.LARGE)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Regular};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${({ theme }) => RFValue(theme.sizes.SMALL)}px;
`;

export const AddNewPassword = styled.Pressable``;
