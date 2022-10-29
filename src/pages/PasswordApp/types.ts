import { NavigationProp } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/types";

export interface FormPass {
  first: string;
  second: string;
  third: string;
  four: string;
}

export type PasswordAppScreenProps = NavigationProp<
  RootStackParamsList,
  "PasswordApp"
>;
