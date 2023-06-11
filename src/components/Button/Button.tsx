import React from "react";
import { Button as Pressable, Title } from "./styles";
import { ButtonProps } from "./types";

export function Button({ title, style, onPress }: ButtonProps) {
  return (
    <Pressable style={style} onPress={onPress}>
      <Title>{title}</Title>
    </Pressable>
  )
}