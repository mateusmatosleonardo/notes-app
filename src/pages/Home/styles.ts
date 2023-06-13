import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 0
  : 0;

export const Container = styled.View`
  flex: 1;
  padding-top: ${statusBarHeight}px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const ShowListEmpty = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.NORMAL)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.DARK_GREY};
  padding: 20px 30px;
`;

export const ButtonAddNote = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary.BLACK};
  position: absolute;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
`;

export const SpaceItems = styled.View`
  padding: 0px 20px 10px 20px;
`;
