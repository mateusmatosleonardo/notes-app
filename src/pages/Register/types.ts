import { NavigationProp } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/types";

export interface FormPass {
  pin1: string;
  pin2: string;
  pin3: string;
  pin4: string;
}

export type RegisterScreenProps = NavigationProp<
  RootStackParamsList,
  "Register"
>;
