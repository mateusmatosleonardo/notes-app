import { NavigationProp } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/types";

export interface FormPass {
  firstPin: string;
  secondPin: string;
  thirdPin: string;
  fourPin: string;
}

export type RegisterScreenProps = NavigationProp<
  RootStackParamsList,
  "Register"
>;
