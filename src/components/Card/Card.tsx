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
    aleatório: colors.secondary.GREY,
    universidade: colors.secondary.YELLOW,
    pesquisa: colors.secondary.PINK,
    outro: colors.secondary.GREEN,
    ideia: colors.secondary.RED,
    podcast: colors.secondary.BLUE,
    leitura: colors.secondary.PURPLE,
    artigo: colors.secondary.ORANGE,
    inspiração: colors.secondary.BROWN,
    tarefas: colors.secondary.MINT,
    compras: colors.secondary.LAVENDER,
    finanças: colors.secondary.PEACH,
    receitas: colors.secondary.AQUA,
    metas: colors.secondary.CORAL,
    dicas: colors.secondary.LILAC,
    trabalho: colors.secondary.SAGE,
  };

  const formattedTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <WrapperCard onPress={navigation} style={{ elevation: 1 }}>
      <WrapperTitleCard>
        <TitleCard numberOfLines={1}>{title}</TitleCard>
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