import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Search = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.LIGHT_GREY};
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.primary.MIDDLE_GREY};
  padding-left: 10px;
`;

export const PressableSearch = styled.TouchableOpacity``;
