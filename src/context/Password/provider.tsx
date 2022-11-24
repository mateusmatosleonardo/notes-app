import { PasswordContext } from "./PasswordContext";
import { IPasswordContext } from "./types";

export const PasswordContextProvider = ({ children }: IPasswordContext) => {

  const props = '';

  return (
    <PasswordContext.Provider value={{
      props
    }}>
      {children}
    </PasswordContext.Provider>
  )
}