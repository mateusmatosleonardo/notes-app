import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
`;

export const Content = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Regular};
  font-size: ${({ theme }) => RFValue(theme.sizes.MEDIUM_LARGE)}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
  margin-top: 12px;
`;
