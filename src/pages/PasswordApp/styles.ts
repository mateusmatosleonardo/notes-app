import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0px 30px;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
`;

export const WelcomeText = styled.Text`
  padding: 14px 0px;
  font-family: "Nunito_500Medium";
  font-size: ${RFValue(26)}px;
  color: #3175e6;
`;

export const Text = styled.Text`
  font-family: "Nunito_500Medium";
  font-size: ${RFValue(16)}px;
  text-align: center;
  color: #313030;
`;

export const WrapperInput = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  padding: 0px 20px;
`;

export const WrapperContinue = styled.View`
  width: 100%;
  margin-top: 12px;
`;

export const Pressable = styled.Pressable`
  width: 136px;
`;

export const ContinueWithoutPassword = styled.Text`
  font-family: "Nunito_500Medium";
  font-size: ${RFValue(14)}px;
  text-align: left;
  color: #3175e6;
`;
