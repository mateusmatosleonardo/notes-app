import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 0
  : 0;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: ${statusBarHeight}px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const WrapperAvatar = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const Avatar = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.ULTRA_LARGE)}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
  padding: 20px 0px 10px 0px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${({ theme }) => RFValue(theme.sizes.MEDIUM_LARGE)}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
  text-align: center;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-top: 20px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary.DARK_GREY};
`;

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingHorizontal: 8,
    fontFamily: "Inter_400Regular",
    fontSize: RFValue(14),
    color: "#666666",
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
});
