import { StyleProp, ViewStyle } from "react-native";
import { showMessage } from "react-native-flash-message";

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
    titleStyle: { fontFamily: "Nunito_700Bold" },
    textStyle: { fontFamily: "Nunito_400Regular" },
    style: [
      style,
      { marginTop: 28, marginHorizontal: 22, borderRadius: 6, paddingTop: 0 },
    ],
  });
}
