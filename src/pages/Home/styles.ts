import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const WrapperText = styled.View`
  padding: 16px 0px 16px 16px;
`;

export const TextPassword = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.BLUE_SECONDARY};
`;

export const WrapperListEmpty = styled.View`
  justify-content: center;
  align-items: center;
  padding: 68px 0px;
`;

export const Logo = styled.Image`
  width: 240px;
  height: 240px;
`;

export const TitleListEmpty = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_SemiBold};
  font-size: ${RFValue(18)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.BLUE_LIGHT};
  padding: 0px 58px;
`;
