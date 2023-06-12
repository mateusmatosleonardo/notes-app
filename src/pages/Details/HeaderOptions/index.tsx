import React from "react";
import { Header, Options, Pressable } from "./styleConfig";
import { HeaderOptionsProps } from "./types";
import { useTheme } from "styled-components";
import ArrowLeft from '@expo/vector-icons/AntDesign';
import Trash from '@expo/vector-icons/Octicons';
import Pencil from '@expo/vector-icons/Octicons';

const HeaderOptions = ({ onBackPress, onEditPress, onDeletePress }: HeaderOptionsProps) => {
  const { colors } = useTheme();

  return (
    <Header>
      <Pressable onPress={onBackPress}>
        <ArrowLeft name='arrowleft' color={colors.primary.BLACK} size={22} />
      </Pressable>
      <Options>
        <Pressable onPress={onEditPress}>
          <Pencil name='pencil' color={colors.primary.BLACK} size={22} style={{ marginRight: 10 }} />
        </Pressable>
        <Pressable onPress={onDeletePress}>
          <Trash name='trash' color={colors.primary.BLACK} size={22} />
        </Pressable>
      </Options>
    </Header>
  );
};

export default HeaderOptions;