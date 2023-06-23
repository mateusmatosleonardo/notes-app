import React, { useEffect } from "react";
import * as Style from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { OnBoardingScreenProps } from "./types";
import { MotiView } from "moti";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from '../../assets/logo.png';
import NextIcon from '@expo/vector-icons/Octicons';

export function OnBoarding() {

  const { colors } = useTheme();

  const navigation = useNavigation<OnBoardingScreenProps>();

  const storingState = async () => {
    try {
      await AsyncStorage.setItem('@hasVisited', 'true');
    } catch (error) {
      console.log('Error reading/writing AsyncStorage:', error);
    }
  };

  useEffect(() => {
    storingState();
  }, []);

  return (
    <Style.ContainerOnBoarding>
      <MotiView
        from={{
          translateX: -80,
          opacity: 0,
        }}
        animate={{
          translateX: 0,
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 600,
          delay: 200,
        }}
      >
        <Style.ContainerLogoOnBoarding>
          <Style.LogoOnBoarding source={Logo} />
        </Style.ContainerLogoOnBoarding>
      </MotiView>

      <MotiView
        from={{
          translateX: -80,
          opacity: 0,
        }}
        animate={{
          translateX: 0,
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 600,
          delay: 800,
        }}
      >
        <Style.TitleDescriptionOnBoarding>Bem-vindo(a)</Style.TitleDescriptionOnBoarding>
        <Style.DescriptionOnBoardingText>
          Aqui você pode capturar todas as suas ideias, inspirações e lembretes importantes em um só lugar.
        </Style.DescriptionOnBoardingText>
      </MotiView>

      <MotiView
        from={{
          translateX: -80,
          opacity: 0,
        }}
        animate={{
          translateX: 0,
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 600,
          delay: 1400,
        }}
        style={{
          position: 'absolute', bottom: 20, right: 20
        }}>
        <Style.NextButtonOnBoarding onPress={() => navigation.navigate('Register')}>
          <NextIcon name="arrow-right" size={24} color={colors.primary.BLACK} />
        </Style.NextButtonOnBoarding>
      </MotiView>
    </Style.ContainerOnBoarding>
  )
}