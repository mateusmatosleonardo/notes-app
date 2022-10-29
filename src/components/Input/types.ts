import {
  ColorValue,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputFocusEventData,
  TextStyle,
} from "react-native";

export interface InputProps {
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  style?: StyleProp<TextStyle>;
  secureTextEntry?: boolean | undefined;
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
  maxLength?: number | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  ref?: React.LegacyRef<TextInput> | undefined;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}
