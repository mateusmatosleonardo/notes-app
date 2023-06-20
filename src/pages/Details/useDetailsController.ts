import { useCallback, useState } from "react";
import { Share } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { CardProps } from "../../components/Card/types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamsList } from "../../routes/types";
import { DetailsScreenProps, NoteState } from "./types";

export const useDetailsController = () => {
  const [note, setNote] = useState<NoteState>();
  const [showPopup, setShowPopup] = useState(false);

  const navigation = useNavigation<DetailsScreenProps>();
  const route = useRoute<RouteProp<RootStackParamsList, "DetailsScreen">>();
  const { id } = route.params;

  const { getItem, setItem } = useAsyncStorage("@savenote:notes");

  const fetchData = useCallback(async () => {
    try {
      const response = await getItem();
      const data = response ? JSON.parse(response) : [];
      const foundNote = data.find((item: CardProps) => item.id === id) || null;
      if (foundNote !== null) {
        setNote({ note: foundNote });
      }
    } catch (e) {
      console.log(e);
    }
  }, [id, getItem, note?.note]);

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
      navigation.navigate("HomeScreen");
    } catch (e) {
      console.log(e);
    }
  }

  const handleShare = useCallback(() => {
    Share.share({
      message: `Título: ${note?.note.title}\n\nConteúdo: ${note?.note.content}`,
    })
      .then(() => console.log("Nota compartilhada com sucesso!"))
      .catch((error) => console.log("Erro ao compartilhar nota:", error));
  }, []);

  return {
    note,
    fetchData,
    navigation,
    showPopup,
    setShowPopup,
    handleDelete,
    handleShare,
  };
};
