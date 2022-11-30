import React from 'react';
import { TextInput } from 'react-native';
import { InputProps } from './types';

export function Input({ value, onChangeText, ...rest }: InputProps) {

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
}