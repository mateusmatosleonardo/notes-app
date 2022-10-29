import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  input: {
    fontSize: RFValue(20),
    textAlign: "center",
    width: 40,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#3175e6",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#3175e6",
    borderRadius: 6,
    marginTop: 32,
  },
  titleBtn: {
    fontSize: RFValue(18),
    fontFamily: "Nunito_600SemiBold",
    color: "#fafafa",
  },
});
