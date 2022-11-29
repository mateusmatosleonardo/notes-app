import React from "react";
import * as S from './styles';
import { ButtonProps } from "./types";

export function Button({ title, style, onPress }: ButtonProps) {
  return (
    <S.Button style={style} onPress={onPress}>
      <S.Title>{title}</S.Title>
    </S.Button>
  )
}