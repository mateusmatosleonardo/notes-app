import { useState } from "react";

export const useForm = () => {
  const [isFocused, setIsFocused] = useState<
    "service" | "user" | "password" | true | false | null
  >(null);

  return {
    isFocusedService: isFocused === "service",
    isFocusedUser: isFocused === "user",
    isFocusedPassword: isFocused === "password",
    handleInputFocusService: () => setIsFocused("service"),
    handleInputBlurService: () => setIsFocused(false),
    handleInputFocusUser: () => setIsFocused("user"),
    handleInputBlurUser: () => setIsFocused(false),
    handleInputFocusPassword: () => setIsFocused("password"),
    handleInputBlurPassword: () => setIsFocused(false),
  };
};
