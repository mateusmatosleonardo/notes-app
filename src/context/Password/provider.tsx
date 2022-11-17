import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormPass } from "../../pages/Register/types";
import { PasswordContext } from "./PasswordContext";
import { IPasswordContext } from "./types";
import { flashMessage } from "../../utils/FlashMessage";

export const PasswordContextProvider = ({ children }: IPasswordContext) => {

  const [password, setPassword] = useState({});

  async function fetchPassword(): Promise<void> {
    try {
      const value = await AsyncStorage.getItem('@savepass');
      value !== null ? setPassword(JSON.parse(value)) : null;
    } catch (e) {
      console.log(e, 'error reading value');
    }
  }

  function handleSignIn(data: FormPass): void {
    try {
      if (JSON.stringify(data) === JSON.stringify(password)) {
        console.log('deu certo!');
      } else {
        flashMessage({
          message: 'Erro!',
          description: 'A senha não confere',
          type: 'danger'
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function removeAllKeys() {
    try {
      await AsyncStorage.removeItem('@savepass')
    } catch (e) {
      console.log(e, 'erro ao deletar chave');
    }
  }

  return (
    <PasswordContext.Provider value={{
      password,
      setPassword,
      handleSignIn,
      fetchPassword,
      removeAllKeys
    }}>
      {children}
    </PasswordContext.Provider>
  )
}