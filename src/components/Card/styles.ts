import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

interface CategoryCardProps {
  bg?: string;
}

const WIDTH = Dimensions.get("screen").width;

export const WrapperCard = styled.Pressable`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary.WHITE};
`;

export const WrapperTitleCard = styled.View`
  width: 100%;
`;

export const TitleCard = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
`;

export const Content = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Regular};
  font-size: ${({ theme }) => RFValue(theme.sizes.SMALL)}px;
  color: ${({ theme }) => theme.colors.primary.DARK_GREY};
  margin-top: 4px;
`;

export const WrapperCategory = styled.View`
  width: 100%;
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InvisibleView = styled.View``;

export const CategoryCard = styled.View<CategoryCardProps>`
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${(p) => p.bg};
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Inter_Medium};
  font-size: ${({ theme }) => RFValue(theme.sizes.SMALL) - 2}px;
  color: ${({ theme }) => theme.colors.primary.BLACK};
`;
