import { NoteState } from "../pages/Details/types";

export type RootStackParamsList = {
  Register: undefined;
  HomeScreen: undefined;
  FormScreen: undefined;
  DetailsScreen: { id: string | number[] | undefined };
  UpdateScreen: NoteState;
  ProfileScreen: undefined;
};
