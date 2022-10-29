import React from "react";
import { FormPass } from "../../pages/PasswordApp/types";

export interface PasswordAppContextProps {
  pass: {} | undefined;
  setPass: (value: React.SetStateAction<{}>) => void;
  handleCreatePasswordApp: (data: FormPass) => Promise<void>;
  getPasswordApp: () => Promise<void>;
  disabled?: boolean | null | undefined;
  setDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPasswordContext {
  children: React.ReactNode;
}
