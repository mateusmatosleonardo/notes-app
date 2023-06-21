import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerOnBoarding = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const IconOnBoardingWrapper = styled.View`
  width: 130px;
  height: 130px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const IconOnBoarding = styled.Image`
  width: 100%;
  height: 100%;
`;

export const DescriptionOnBoardingText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${({ theme }) => RFValue(theme.sizes.ULTRA_LARGE) + 4}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
  text-align: center;
`;

export const NextButtonOnBoarding = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.colors.primary.BLACK};
`;
