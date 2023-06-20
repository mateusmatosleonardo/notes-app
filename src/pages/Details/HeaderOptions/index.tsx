import React from "react";
import { Header, Options, Pressable } from "./styleConfig";
import { HeaderOptionsProps } from "./types";
import { useTheme } from "styled-components";
import ArrowLeft from '@expo/vector-icons/AntDesign';
import TrashIcon from '@expo/vector-icons/Octicons';
import PencilIcon from '@expo/vector-icons/Octicons';
import ShareIcon from '@expo/vector-icons/Octicons';


const HeaderOptions = ({ onBackPress, handleEdit, handleDelete, handleShare }: HeaderOptionsProps) => {
  const { colors } = useTheme();

  return (
    <Header>
      <Pressable onPress={onBackPress}>
        <ArrowLeft name='arrowleft' color={colors.primary.BLACK} size={22} />
      </Pressable>
      <Options>
        <Pressable onPress={handleEdit}>
          <PencilIcon name='pencil' color={colors.primary.BLACK} size={22} style={{ marginRight: 14 }} />
        </Pressable>
        <Pressable onPress={handleShare}>
          <ShareIcon name='share' color={colors.primary.BLACK} size={22} style={{ marginRight: 14 }} />
        </Pressable>
        <Pressable onPress={handleDelete}>
          <TrashIcon name='trash' color={colors.primary.BLACK} size={22} />
        </Pressable>
      </Options>
    </Header>
  );
};

export default HeaderOptions;