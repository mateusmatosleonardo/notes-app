import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const SafeAreaView = styled.SafeAreaView`
  padding-top: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.BLUE_SECONDARY};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Nunito_SemiBold};
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const Touch = styled.Pressable``;

export const Invisible = styled.View`
  width: 24px;
  height: 24px;
`;

export const Form = styled.ScrollView`
  width: 100%;
  padding: 20px 25px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-top: 20px;
  padding-top: 2px;
  background-color: ${({ theme }) => theme.colors.GRAY};
  border-radius: 2px;
`;

export const Diviser = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  border-right-width: 1px;
  border-color: #dedede;
`;

export const KeyboardDismiss = styled.Pressable`
  flex: 1;
  /* padding-top: 40px; */
`;

export const TextError = styled.Text`
  font-size: ${RFValue(13.5)}px;
  font-family: ${({ theme }) => theme.fonts.Nunito_Regular};
  color: ${({ theme }) => theme.colors.RED_ALERT};
`;

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderColor: "#99bfe7",
    fontFamily: "Nunito_400Regular",
    fontSize: 16,
    paddingLeft: 12,
    color: "#313030",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 45,
    backgroundColor: "#679ad8",
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 2,
  },
});
