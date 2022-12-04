import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
`;

export const ContainerInformations = styled.View`
  width: 100%;
  padding: 16px 0px;
  background-color: ${({ theme }) => theme.colors.OTHER_GRAY};
`;

export const WrapperInformations = styled.View`
  width: 100%;
  padding: 0px 18px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Expand = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ServiceName = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: ${RFValue(17)}px;
  color: #313030;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Medium};
  font-size: ${RFValue(16)}px;
  padding: 12px 0px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const WrapperPassword = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 0px;
`;

export const Password = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

// ! existe um bug aqui
/*
 * A senha invisível não fica 100% centralizada com o ícone
 */
export const PasswordInvisible = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.BLACK};
  margin-top: 6px;
`;

export const Annotation = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_Medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.BLACK};
  padding: 12px 0px;
`;

export const Pressable = styled.Pressable``;

export const Diviser = styled.View`
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.BLACKLIGHT};
`;

export const DiviserAnnotation = styled.View`
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.BLACKLIGHT};
`;
