import React, { useState } from 'react';
import { FlatList, ListRenderItemInfo, ScrollView } from 'react-native';
import { Header } from '../../components/Header/Header';
import { Password } from '../../components/Password/Password';
import { PasswordProps } from '../../components/Password/types';
import { SeparatorItem } from '../../components/SeparatorItem/SeparatorItem';
import * as S from './styles';

export function Home() {

  const [data, setData] = useState<PasswordProps[]>([
    {
      serviceName: 'E-mail',
      userName: 'mateusleo@gmail.com',
      password: '12345678'
    },
    {
      serviceName: 'Netflix',
      userName: 'mateusleo@gmail.com',
      password: '12345678dsadas'
    },
    {
      serviceName: 'HBO',
      userName: 'mateusleo@gmail.com',
      password: '12345678'
    },
    {
      serviceName: 'Instagram',
      userName: 'mateusleo@gmail.com',
      password: '12345678'
    },
    {
      serviceName: 'Linkedin',
      userName: 'mateusleo@gmail.com',
      password: '12345678'
    },
    {
      serviceName: 'Facebook',
      userName: 'mateusleo@gmail.com',
      password: '12345678'
    }
  ])

  function renderItem({ item }: ListRenderItemInfo<PasswordProps>) {
    return <Password {...item} />
  }

  return (
    <S.Container>
      <Header onPress={() => console.log('Pressionado!')} />
      <S.WrapperText>
        <S.TextPassword>Suas senhas</S.TextPassword>
      </S.WrapperText>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.serviceName)}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorItem}
        style={{ paddingHorizontal: 15 }}
      />
    </S.Container>
  );
}