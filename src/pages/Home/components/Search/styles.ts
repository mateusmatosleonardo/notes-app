import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Search = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.LIGHT_GREY};
`;

export const PlaceholderSearch = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary.MIDDLE_GREY};
  padding: 16px 0px;
`;
