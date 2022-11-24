import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView``;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.colors.BLUE};
`;

export const WrapperProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PhotoProfile = styled.View`
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const WrapperText = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Bold};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${RFValue(20)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Regular};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${RFValue(12)}px;
`;

// trocar por outro botão
export const AddNewPassword = styled.Pressable`
  padding: 16px;
  border: 1px solid #fafafa;
  border-radius: 4px;
`;
