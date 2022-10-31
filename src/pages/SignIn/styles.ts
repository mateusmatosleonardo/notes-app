import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  background-color: #fafafa;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: "Nunito_500Medium";
  font-size: ${RFValue(26)}px;
  padding: 14px 0px;
  color: #3175e6;
`;

export const WrapperInput = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding: 0px 32px;
`;
