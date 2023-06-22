import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface PopupStyledProps {
  color?: string;
  bg?: string;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const Modal = styled.Modal`
  justify-content: center;
  align-items: center;
`;

export const PopupContainer = styled.View`
  width: 100%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const PopupTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
  background-color: #e4e4e4;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  padding: 18px 0px;
  text-align: center;
`;

export const WrapperButtons = styled.View`
  width: 100%;
  padding: 0px 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Pressable = styled.Pressable<PopupStyledProps>`
  justify-content: center;
  align-items: center;
  width: 49.5%;
  border-radius: 6px;
  margin: 10px 0px;
  background-color: ${(p) => p.bg};
`;

export const Option = styled.Text<PopupStyledProps>`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${RFValue(13)}px;
  color: ${(p) => p.color};
  padding: 15px 0px;
`;
