import styled from "styled-components/native";
import { StatusBar, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 0
  : 0;

export const Container = styled.View`
  flex: 1;
  padding-top: ${statusBarHeight}px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const AddNoteButton = styled.TouchableOpacity`
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

export const GenericText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${({ theme }) => RFValue(theme.sizes.NORMAL)}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
  text-align: center;
`;

export const NoResultsMessageText = styled(GenericText)``;

export const EmptyListText = styled(GenericText)``;

export const style = StyleSheet.create({
  flatList: {
    paddingTop: 10,
    paddingBottom: 90,
    paddingHorizontal: 20,
  },
});
