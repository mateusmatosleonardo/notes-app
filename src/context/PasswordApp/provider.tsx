import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormPass } from "../../pages/Register/types";
import { PasswordAppContext } from "./PasswordAppContext";
import { IPasswordContext } from "./types";
import { flashMessage } from "../../utils/FlashMessage";

export const PasswordAppContextProvider = ({ children }: IPasswordContext) => {

  const [pass, setPass] = useState({});
  const [disabled, setDisabled] = useState(false);

  async function handleSignUp(data: FormPass): Promise<void> {
    try {
      setDisabled(true);
      await AsyncStorage.setItem('@PassApp', JSON.stringify(data));
      flashMessage({
        title: 'Sucesso!',
        description: 'Senha salva com sucesso!',
        type: 'success'
      });
      setTimeout(() => {
        setDisabled(false);
      }, 1000);
      console.log(data);
    } catch (e) {
      flashMessage({
        title: 'Erro!',
        description: 'Erro ao salvar senha :(',
        type: 'danger'
      });
      console.log(e, 'error save password!');
    }
  }

  async function getPasswordApp(): Promise<void> {
    try {
      const value = await AsyncStorage.getItem('@PassApp');
      value !== null ? setPass(JSON.parse(value)) : null;
    } catch (e) {
      console.log(e, 'error reading value');
    }
  }

  function handleSignIn(data: FormPass): void {
    try {
      if (JSON.stringify(data) === JSON.stringify(pass)) {
        console.log('deu certo!');
      } else {
        flashMessage({
          title: 'Erro!',
          description: 'A senha não confere',
          type: 'danger'
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <PasswordAppContext.Provider value={{
      pass,
      setPass,
      disabled,
      setDisabled,
      handleSignUp,
      handleSignIn,
      getPasswordApp
    }}>
      {children}
    </PasswordAppContext.Provider>
  )
}