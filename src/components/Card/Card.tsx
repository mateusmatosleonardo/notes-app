import React from 'react';
import {
  Category,
  CategoryCard,
  Content,
  InvisibleView,
  Pressable,
  TitleCard,
  WrapperCard,
  WrapperCategory,
  WrapperTitleCard
} from './styles';
import { CardProps, CategoryColorsProps } from './types';
import { useTheme } from 'styled-components';
import Icon from '@expo/vector-icons/Entypo';

export function Card({ title, content, category, onPress }: CardProps) {

  const { colors } = useTheme();

  const categoryColors: CategoryColorsProps = {
    universidade: colors.secondary.YELLOW,
    pesquisa: colors.secondary.PINK,
    outro: colors.secondary.GREEN,
    ideia: colors.secondary.RED,
    podcast: colors.secondary.BLUE,
    leitura: colors.secondary.PURPLE,
    artigo: colors.secondary.ORANGE,
    inspiração: colors.secondary.BROWN,
  };

  const formattedTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <WrapperCard style={{ elevation: 1. }}>
      <WrapperTitleCard>
        <TitleCard>{title}</TitleCard>
        <Pressable onPress={onPress}>
          <Icon name="dots-three-horizontal" size={22} color={colors.primary.DARK_GREY} />
        </Pressable>
      </WrapperTitleCard>
      <Content numberOfLines={3}>{content}</Content>
      <WrapperCategory>
        <InvisibleView />
        <CategoryCard
          bg={categoryColors[category as keyof CategoryColorsProps]}>
          <Category>{formattedTitle}</Category>
        </CategoryCard>
      </WrapperCategory>
    </WrapperCard>
  )
}