import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const WrapperText = styled.View`
  padding: 16px 20px;
`;

export const TextPassword = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: ${RFValue(20)}px;
  color: #313030;
`;

export const WrapperListEmpty = styled.View`
  justify-content: center;
  align-items: center;
  padding: 38px 0px;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const TitleListEmpty = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_SemiBold};
  font-size: ${RFValue(18)}px;
  text-align: center;
  color: #99bfe7;
  padding: 0px 58px;
`;
