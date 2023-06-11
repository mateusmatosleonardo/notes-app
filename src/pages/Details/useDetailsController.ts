import { useCallback, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { CardProps } from "../../components/Card/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/types";
import { NoteState } from "./types";

export const useDetailsController = () => {
  const [note, setNote] = useState<NoteState>();

  const route = useRoute<RouteProp<RootStackParamsList, "Details">>();
  const { id } = route.params;

  const navigation = useNavigation();

  const { getItem } = useAsyncStorage("@savepass:passwords");

  const handleFetchData = useCallback(async () => {
    try {
      const response = await getItem();
      const data = response ? JSON.parse(response) : [];
      const foundNote = data.find((item: CardProps) => item.id === id) || null;
      setTimeout(() => {
        setNote({ note: foundNote });
      }, 2000);
    } catch (e) {
      console.log(e);
    }
  }, [id, getItem]);

  return { note, handleFetchData, navigation };
};
