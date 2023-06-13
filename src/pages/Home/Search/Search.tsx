import React from 'react';
import { Search as Container, Input, PressableSearch } from './styles';
import { useTheme } from 'styled-components';
import { SearchProps } from './types';
import Icon from '@expo/vector-icons/Fontisto';

export function Search({ value, onChangeText, handleSearchButtonPress, ...rest }: SearchProps) {

  const { colors } = useTheme();

  return (
    <Container>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder="Pesquise suas notas"
        placeholderTextColor={colors.primary.MIDDLE_GREY}
        {...rest}
      />
      <PressableSearch onPress={handleSearchButtonPress} activeOpacity={0.6}>
        <Icon name="search" size={17} color={colors.primary.DARK_GREY} style={{ paddingRight: 20 }} />
      </PressableSearch>
    </Container>
  )
}