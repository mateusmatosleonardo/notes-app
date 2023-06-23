import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerOnBoarding = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const ContainerLogoOnBoarding = styled.View`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const LogoOnBoarding = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TitleDescriptionOnBoarding = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.ULTRA_LARGE) + 4}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
  text-align: center;
  margin-bottom: 10px;
`;

export const DescriptionOnBoardingText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${({ theme }) => RFValue(theme.sizes.LARGE) - 2}px;
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
