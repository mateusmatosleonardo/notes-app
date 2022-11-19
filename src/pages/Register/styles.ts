import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { View } from "moti";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Bold};
  font-size: ${RFValue(28)}px;
  padding: 8px 0px;
  color: ${({ theme }) => theme.colors.BLUE};
`;

export const DefaultText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.BLACKLIGHT};
  text-align: center;
`;

export const WrapperInput = styled.View`
  width: 100%;
  margin-top: 35px;
`;

export const WrapperRecommendation = styled.View`
  flex-direction: row;
  width: 100%;
  padding-right: 45px;
  margin-top: 12px;
`;

export const Recommendation = styled.Text`
  font-family: "Nunito_500Medium";
  font-size: ${RFValue(14)}px;
  color: #313030;
  margin-left: 8px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 45px;
  border-radius: 6px;
`;

export const PressableIcon = styled.Pressable``;

export const WrapperError = styled.View`
  width: 100%;
  height: 30px;
`;

export const TextError = styled.Text`
  font-family: "Nunito_500Medium";
  font-size: ${RFValue(14)}px;
  padding-top: 4px;
  text-align: left;
  color: ${({ theme }) => theme.colors.RED_ALERT};
`;

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 45,
    fontFamily: "Nunito_500Medium",
    fontSize: RFValue(16),
    paddingLeft: 8,
    borderWidth: 1,
    borderRadius: 4,
    color: "#595959",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#3175e6",
    borderRadius: 8,
    marginTop: 6,
  },
  titleBtn: {
    fontSize: RFValue(18),
    fontFamily: "Nunito_700Bold",
    color: "#fafafa",
  },
  icon: {
    position: "absolute",
    right: 8,
  },
});
