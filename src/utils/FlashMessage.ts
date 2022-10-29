import { StyleProp, ViewStyle } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";

interface FlashMessageProps {
  title: string;
  description?: string | undefined;
  type?: "danger" | "default" | "info" | "none" | "success" | "warning";
  style?: StyleProp<ViewStyle>;
}

export function flashMessage({
  title,
  description,
  type,
  style,
}: FlashMessageProps) {
  showMessage({
    message: title,
    description: description,
    type: type,
    style: [style, { marginTop: 28, marginHorizontal: 22, borderRadius: 6 }],
  });
}
