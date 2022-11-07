import React from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonProps } from './types';

export function Button({ onPress,
  title,
  styleTitle,
  style,
  disabled }: ButtonProps) {
  return (
    <Pressable disabled={disabled} onPress={onPress} style={style}>
      <Text style={styleTitle}>{title}</Text>
    </Pressable>
  );
}