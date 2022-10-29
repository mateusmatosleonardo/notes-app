import { createContext } from "react";
import { PasswordAppContextProps } from "./types";

export const PasswordAppContext = createContext<PasswordAppContextProps>
  ({} as PasswordAppContextProps);