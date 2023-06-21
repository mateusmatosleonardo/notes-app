import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { ContainerOnBoarding, DescriptionOnBoardingText, NextButtonOnBoarding } from "./styles";
import { onBoardingData } from "./constants";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { OnBoardingScreenProps } from "./types";
import NextIcon from '@expo/vector-icons/Octicons';

export function OnBoarding() {

  const { colors } = useTheme();

  const navigation = useNavigation<OnBoardingScreenProps>();

  function renderItem({ item }: any) {
    return (
      <ContainerOnBoarding>
        <DescriptionOnBoardingText>{item.description}</DescriptionOnBoardingText>
      </ContainerOnBoarding>
    )
  }

  return (
    <AppIntroSlider
      data={onBoardingData}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderItem}
      activeDotStyle={{ backgroundColor: colors.primary.BLACK, width: 30 }}
      renderDoneButton={() =>
      (<NextButtonOnBoarding onPress={() => navigation.navigate("Register")} >
        <NextIcon name="arrow-right" size={26} color={colors.primary.BLACK} />
      </NextButtonOnBoarding>)}
    />
  )
}
