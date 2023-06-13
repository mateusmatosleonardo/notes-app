import { TextInputProps } from "react-native";

export interface SearchProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  handleSearchButtonPress: () => void;
}
