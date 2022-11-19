import { StyleSheet } from "react-native";
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
  font-family: ${({ theme }) => theme.fonts.Nunito_Bold};
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.BLUE};
`;

export const WrapperInput = styled.View`
  width: 100%;
  margin-top: 35px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 45px;
  border-radius: 6px;
`;

export const PressableIcon = styled.Pressable``;

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
    marginTop: 16,
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
