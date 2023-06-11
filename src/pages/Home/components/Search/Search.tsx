import React from 'react';
import { PlaceholderSearch, Search as Container } from './styles';
import { useTheme } from 'styled-components';
import { SearchProps } from './types';
import Icon from '@expo/vector-icons/Fontisto';

export function Search({ navigation }: SearchProps) {

  const { colors } = useTheme();

  return (
    <Container onPress={navigation}>
      <PlaceholderSearch>Pesquise suas notas</PlaceholderSearch>
      <Icon name="search" size={17} color={colors.primary.DARK_GREY} />
    </Container>
  )
}