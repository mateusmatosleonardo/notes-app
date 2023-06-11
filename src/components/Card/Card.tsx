import React from 'react';
import {
  Category,
  CategoryCard,
  Content,
  InvisibleView,
  TitleCard,
  WrapperCard,
  WrapperCategory,
  WrapperTitleCard
} from './styles';
import { CardProps, CategoryColorsProps } from './types';
import { useTheme } from 'styled-components';

export function Card({ title, content, category, navigation }: CardProps) {

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
    <WrapperCard onPress={navigation} style={{ elevation: 1 }}>
      <WrapperTitleCard>
        <TitleCard>{title}</TitleCard>
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