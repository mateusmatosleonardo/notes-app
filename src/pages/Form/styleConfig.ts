import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar, StyleSheet } from "react-native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 0
  : 0;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 0px 20px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${({ theme }) => RFValue(theme.sizes.LARGE)}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
`;

export const Touch = styled.Pressable``;

export const Invisible = styled.View`
  width: 24px;
  height: 24px;
`;

export const Form = styled.View`
  flex: 1;
  padding: 0px 20px 10px 20px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  /*
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary.DARK_GREY};
  */
`;

export const KeyboardDismiss = styled.Pressable`
  flex: 1;
`;

export const TextError = styled.Text`
  font-size: ${RFValue(13.5)}px;
  font-family: ${({ theme }) => theme.fonts.Inter_Regular};
  color: ${({ theme }) => theme.colors.primary.ERROR};
`;

export const WrapperPicker = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary.MIDDLE_GREY};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0px 20px 20px 20px;
`;

export const TagWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0px 20px 10px 20px;
`;

export const TagText = styled.Text`
  font-size: ${RFValue(13.5)}px;
  font-family: ${({ theme }) => theme.fonts.Inter_Regular};
  color: ${({ theme }) => theme.colors.primary.BLACK};
  padding-right: 8px;
`;

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: "Inter_500Medium",
    fontSize: RFValue(18),
    color: "#151515",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 46,
    backgroundColor: "#151515",
    marginTop: 20,
    borderRadius: 6,
  },
  picker: {
    width: "100%",
  },
});
