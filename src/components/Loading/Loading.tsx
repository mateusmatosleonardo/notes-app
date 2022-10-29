import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color='#3175E6' size='large' />
    </Container>
  );
}