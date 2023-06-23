import { NavigationProp } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/types";

export interface FormPass {
  password?: string | undefined;
}

export type UserProps = {
  avatar_url: string;
  name: string;
};

export type ProfileScreenProps = NavigationProp<
  RootStackParamsList,
  "ProfileScreen"
>;
