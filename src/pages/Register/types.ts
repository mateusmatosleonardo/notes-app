import { NavigationProp } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/types";

export interface FormPass {
  password?: string | undefined;
}

export type RegisterScreenProps = NavigationProp<
  RootStackParamsList,
  "Register"
>;
