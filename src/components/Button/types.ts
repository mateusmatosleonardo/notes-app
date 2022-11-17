import {
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface ButtonProps {
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  title?: string | undefined | any;
  styleTitle?: StyleProp<TextStyle>;
  disabled?: boolean | null | undefined;
}
