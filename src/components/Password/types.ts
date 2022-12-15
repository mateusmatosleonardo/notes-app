import { GestureResponderEvent } from "react-native";

export interface PasswordProps {
  id?: string | number[];
  servicename?: string;
  username?: string;
  password?: string;
  annotation?: string;
  onPress?: () => void;
}
