import React from 'react';
import { TextInput } from 'react-native';
import { InputProps } from './types';

export function Input({ ...rest }: InputProps) {
  return (
    <TextInput {...rest} />
  );
}