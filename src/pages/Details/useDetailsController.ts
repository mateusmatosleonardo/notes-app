import { useCallback, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { CardProps } from "../../components/Card/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/types";
import { DetailsScreenProps, NoteState } from "./types";

export const useDetailsController = () => {
  const [note, setNote] = useState<NoteState>();
  const [showPopup, setShowPopup] = useState(false);

  const navigation = useNavigation<DetailsScreenProps>();
  const route = useRoute<RouteProp<RootStackParamsList, "Details">>();
  const { id } = route.params;

  const { getItem, setItem } = useAsyncStorage("@savepass:passwords");

  const handleFetchData = useCallback(async () => {
    try {
      const response = await getItem();
      const data = response ? JSON.parse(response) : [];
      const foundNote = data.find((item: CardProps) => item.id === id) || null;
      setNote({ note: foundNote });
    } catch (e) {
      console.log(e);
    }
  }, [id, getItem]);

  async function handleDelete(id: string | number[] | undefined) {
    try {
      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];
      const foundNote = previousData.filter(
        (item: CardProps) => item.id !== id
      );
      setShowPopup(false);
      setItem(JSON.stringify(foundNote));
      setNote(foundNote);
      navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  }

  return {
    note,
    handleFetchData,
    navigation,
    showPopup,
    setShowPopup,
    handleDelete,
  };
};
