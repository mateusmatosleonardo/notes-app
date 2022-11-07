import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView``;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  background-color: #3175e6;
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
  background-color: #fafafa;
`;

export const WrapperText = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(20)}px;
  color: #fafafa;
`;

export const Name = styled.Text`
  font-family: "Nunito_600SemiBold";
  font-size: ${RFValue(20)}px;
  color: #fafafa;
`;

export const Text = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(12)}px;
  color: #fafafa;
`;

// trocar por outro botão
export const AddNewPassword = styled.Pressable`
  padding: 16px;
  border: 1px solid #fafafa;
  border-radius: 4px;
`;
