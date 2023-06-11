import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.Pressable``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary.WHITE};
`;
