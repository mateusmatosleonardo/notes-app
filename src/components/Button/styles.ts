import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.Pressable``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;
