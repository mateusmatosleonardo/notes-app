import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  padding: 12px 20px;
`;

export const WrapperPassword = styled.View``;

export const ServiceName = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: ${RFValue(17)}px;
  padding: 0px 0px 4px 0px;
  color: #313030;
`;

export const UserName = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(14)}px;
  padding: 0px 0px 6px 0px;
  color: #616060;
`;

export const Password = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: ${RFValue(14)}px;
  color: #313030;
`;

export const PasswordInvisible = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: ${RFValue(14)}px;
  color: #313030;
`;

export const Pressable = styled.Pressable``;
