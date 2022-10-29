import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FormPass } from "../../pages/PasswordApp/types";
import { PasswordAppContext } from "./PasswordAppContext";
import { IPasswordContext } from "./types";

export const PasswordAppContextProvider = ({ children }: IPasswordContext) => {

  const [pass, setPass] = useState({});
  const [disabled, setDisabled] = useState(false);

  async function handleCreatePasswordApp(data: FormPass): Promise<void> {
    try {
      setDisabled(true);
      await AsyncStorage.setItem('@PassApp', JSON.stringify(data));
    } catch (e) {
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

  return (
    <PasswordAppContext.Provider value={{
      pass,
      setPass,
      disabled,
      setDisabled,
      handleCreatePasswordApp,
      getPasswordApp
    }}>
      {children}
    </PasswordAppContext.Provider>
  )
}