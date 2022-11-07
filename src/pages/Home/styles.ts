import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const WrapperText = styled.View`
  padding: 16px 20px;
`;

export const TextPassword = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: ${RFValue(20)}px;
  color: #313030;
`;
