import { PasswordProps } from "../components/Password/types";

export function usePassword() {
  function handleNewPassword() {
    console.log("Teste");
  }

  return {
    handleNewPassword,
  };
}
