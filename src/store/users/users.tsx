import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserProps = {
  avatar_url: string;
  name: string;
};

type Actions = {
  handleSaveData: (data: UserProps) => void;
  getStoredUserData: () => Promise<void>;
};

type StoreProps = {
  state: { user: UserProps };
  actions: Actions;
};

export const useUsersStore = create<StoreProps>((set) => ({
  state: {
    user: {
      avatar_url: "",
      name: "",
    },
  },
  actions: {
    handleSaveData: (data: UserProps) => {
      set((state) => ({ state: { user: data } }));
    },
    getStoredUserData: async () => {
      try {
        const storedData = await AsyncStorage.getItem("@userData");
        if (storedData !== null) {
          const user = JSON.parse(storedData);
          set((state) => ({ state: { user: user } }));
        }
      } catch (error) {
        console.log("Erro ao buscar os dados do usuário:", error);
      }
    },
  },
}));