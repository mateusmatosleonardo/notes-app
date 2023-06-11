import React from 'react';
import { PlaceholderSearch, WrapperSearch } from './styles';
import Icon from '@expo/vector-icons/Fontisto';
import { useTheme } from 'styled-components';
import { SearchProps } from './types';

export function Search({ navigation }: SearchProps) {

  const { colors } = useTheme();

  return (
    <WrapperSearch onPress={navigation}>
      <PlaceholderSearch>Pesquise suas notas</PlaceholderSearch>
      <Icon name="search" size={17} color={colors.primary.DARK_GREY} />
    </WrapperSearch>
  )
}