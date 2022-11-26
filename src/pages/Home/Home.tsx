import React, { useState } from 'react';
import { FlatList, ListRenderItemInfo, Text, Image } from 'react-native';
import { Header } from '../../components/Header/Header';
import { Password } from '../../components/Password/Password';
import { PasswordProps } from '../../components/Password/types';
import { SeparatorItem } from '../../components/SeparatorItem/SeparatorItem';
import { usePassword } from '../../hooks/usePassword';
import IconListEmpty from '../../assets/images/IconListEmpty.png';
import * as S from './styles';

export function Home() {

  const { handleNewPassword } = usePassword();

  const [data, setData] = useState<PasswordProps[]>([
    // {
    //   serviceName: 'E-mail',
    //   userName: 'mateusleo@gmail.com',
    //   password: '12345678'
    // },
    // {
    //   serviceName: 'Netflix',
    //   userName: 'mateusleo@gmail.com',
    //   password: '12345678dsadas'
    // }
  ]);

  function ListEmptyComponent() {
    return (
      <S.WrapperListEmpty>
        <S.Logo
          source={IconListEmpty}
          resizeMode='contain' />
        <S.TitleListEmpty>
          Você ainda não possui senhas salvas...
        </S.TitleListEmpty>
      </S.WrapperListEmpty>
    )
  }

  function renderItem({ item }: ListRenderItemInfo<PasswordProps>) {
    return <Password {...item} />
  }

  return (
    <S.Container>
      <Header onPress={() => handleNewPassword()} />
      <S.WrapperText>
        <S.TextPassword>Suas senhas</S.TextPassword>
      </S.WrapperText>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.serviceName)}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorItem}
        ListEmptyComponent={() => ListEmptyComponent()}
      />
    </S.Container>
  );
}