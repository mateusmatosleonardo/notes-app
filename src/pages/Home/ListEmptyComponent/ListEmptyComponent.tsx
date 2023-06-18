import React from "react"
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

const EmptyListText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${({ theme }) => RFValue(theme.sizes.NORMAL)}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
  text-align: center;
`;

export const ListEmptyComponent = () => <EmptyListText>Você não possui nenhuma nota.</EmptyListText>