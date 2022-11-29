import {
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

export type ButtonProps = PressableProps & {
  title: string;
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  onPress: () => void;
  titleStyle?: StyleProp<TextStyle>;
};
