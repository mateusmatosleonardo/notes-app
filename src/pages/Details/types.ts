import { NavigationProp } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/types";
import { CardProps } from "../../components/Card/types";

export type DetailsScreenProps = NavigationProp<
  RootStackParamsList,
  "DetailsScreen"
>;

export interface NoteState {
  note: CardProps;
}
