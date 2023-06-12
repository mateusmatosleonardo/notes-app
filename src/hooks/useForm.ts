import { useState } from "react";

export const useForm = () => {
  const [isFocused, setIsFocused] = useState<
    "title" | "content" | true | false | null
  >(null);

  return {
    isFocusedTitle: isFocused === "title",
    isFocusedContent: isFocused === "content",
    handleInputFocusTitle: () => setIsFocused("title"),
    handleInputBlurTitle: () => setIsFocused(false),
    handleInputFocusContent: () => setIsFocused("content"),
    handleInputBlurContent: () => setIsFocused(false),
  };
};
