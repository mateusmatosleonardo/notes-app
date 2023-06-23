import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 0
  : 0;

export const Container = styled.View`
  flex: 1;
  padding-top: ${statusBarHeight}px;
  padding-right: 20px;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const BtnGoBack = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin: 16px 0px;
`;

export const AlignWrapperAvatar = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const WrapperAvatar = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 80px 0px 40px 0px;
`;

export const AvatarEdit = styled.Pressable`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 0px;
  width: 38px;
  height: 38px;
  padding: 3px;
  border-radius: 19px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const AvatarEditBg = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 16.5px;
  background-color: ${({ theme }) => theme.colors.primary.MIDDLE_GREY};
`;

export const Avatar = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
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
