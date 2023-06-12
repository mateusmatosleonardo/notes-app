import styled from "styled-components/native";
import { StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 0
  : 0;

export const Header = styled.View`
  width: 100%;
  margin-top: ${statusBarHeight}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const Pressable = styled.Pressable``;

export const Options = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
