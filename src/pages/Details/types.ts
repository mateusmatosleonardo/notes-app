import { NavigationProp } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/types";
import { CardProps } from "../../components/Card/types";

export type DetailsScreenProps = NavigationProp<RootStackParamsList, "Details">;

export interface NoteState {
  note: CardProps;
}
