import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Wrapper = styled.SafeAreaView`
  padding-top: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
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

export const Form = styled.View`
  width: 100%;
  padding: 20px 25px;
`;

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 48px;
  margin-top: 18px;
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
  height: 100%;
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
    marginTop: 18,
    borderRadius: 2,
  },
});
