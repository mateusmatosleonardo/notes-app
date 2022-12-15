import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Header } from '../../components/Header/Header';
import { Password } from '../../components/Password/Password';
import { PasswordProps } from '../../components/Password/types';
import { SeparatorItem } from '../../components/SeparatorItem/SeparatorItem';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from './types';
import IconListEmpty from '../../assets/images/IconListEmpty.png';
import * as S from './styles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';;

export function Home() {

  const navigation = useNavigation<HomeScreenProps>();

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<PasswordProps[]>([]);

  const { getItem, setItem } = useAsyncStorage('@savepass:passwords');

  async function handleFetchData() {
    try {
      const response = await getItem();
      const data = response ? JSON.parse(response) : [];
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleRemove(id: string | number[] | undefined) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter((item: PasswordProps) => item.id !== id);

    setItem(JSON.stringify(data));
    setData(data);
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
    return <Password {...item}
      onPress={() => handleRemove(item.id)}
    />
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}