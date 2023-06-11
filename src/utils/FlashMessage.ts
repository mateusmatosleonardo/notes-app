import { StyleProp, ViewStyle } from "react-native";
import { showMessage } from "react-native-flash-message";

interface FlashMessageProps {
  message: string;
  description?: string | undefined;
  type?: "danger" | "default" | "info" | "none" | "success" | "warning";
  style?: StyleProp<ViewStyle>;
}

export function flashMessage({
  message,
  description,
  type,
  style,
}: FlashMessageProps) {
  showMessage({
    message: message,
    description: description,
    type: type,
    titleStyle: { fontFamily: "Inter_700Bold" },
    textStyle: { fontFamily: "Inter_400Regular" },
    style: [
      style,
      { marginTop: 42, marginHorizontal: 22, borderRadius: 6, paddingTop: 10 },
    ],
  });
}
