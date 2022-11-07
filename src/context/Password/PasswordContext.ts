import { createContext } from "react";
import { PasswordContextProps } from "./types";

export const PasswordContext = createContext<PasswordContextProps>(
  {} as PasswordContextProps
);
