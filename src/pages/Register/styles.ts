import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  background-color: #fafafa;
`;

export const WelcomeText = styled.Text`
  font-family: "Nunito_500Medium";
  font-size: ${RFValue(26)}px;
  padding: 14px 0px;
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

export const styles = StyleSheet.create({
  input: {
    fontSize: RFValue(20),
    textAlign: "center",
    width: 40,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#3175e6",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#3175e6",
    borderRadius: 6,
    marginTop: 32,
  },
  titleBtn: {
    fontSize: RFValue(18),
    fontFamily: "Nunito_600SemiBold",
    color: "#fafafa",
  },
  // welcomeText: {
  //   fontFamily: "Nunito_600SemiBold",
  //   fontSize: RFValue(26),
  //   paddingVertical: 14,
  //   color: "#3175e6",
  // },
  // text: {
  //   fontFamily: "Nunito_500Medium",
  //   fontSize: RFValue(16),
  //   textAlign: "center",
  //   color: "#313030",
  // },
});
