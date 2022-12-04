import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Header } from '../../components/Header/Header';
import { Password } from '../../components/Password/Password';
import { PasswordProps } from '../../components/Password/types';
import { SeparatorItem } from '../../components/SeparatorItem/SeparatorItem';
import IconListEmpty from '../../assets/images/IconListEmpty.png';
import * as S from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home() {

  const navigation = useNavigation<HomeScreenProps>();

  const [data, setData] = useState<PasswordProps[]>([]);

  async function handleFetchData() {
    try {
      const response = await AsyncStorage.getItem('@savepass:passwords');
      const data = response ? JSON.parse(response) : [];
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }

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

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));

  return (
    <S.Container>
      <Header onPress={() => navigation.navigate('Form')} />
      {
        data.length === 0 ?
          <>
          </>
          :
          <S.WrapperText>
            <S.TextPassword>Todas as entradas</S.TextPassword>
          </S.WrapperText>
      }

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorItem}
        ListEmptyComponent={() => ListEmptyComponent()}
      />
    </S.Container>
  );
}