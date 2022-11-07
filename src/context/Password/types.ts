import React from "react";
import { FormPass } from "../../pages/Register/types";

export interface PasswordContextProps {
  password: {} | undefined;
  setPassword: (value: React.SetStateAction<{}>) => void;
  // handleSignUp: (data: FormPass) => Promise<void>;
  handleSignIn: (data: FormPass) => void;
  fetchPassword(): Promise<void>;
  // disabled?: boolean | null | undefined;
  // setDisabled?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPasswordContext {
  children: React.ReactNode;
}
