import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, Keyboard } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header/Header';
import { CardProps } from '../../components/Card/types';
import { Card } from '../../components/Card/Card';
import { Search } from './Search/Search';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { HomeScreenProps } from './types';
import { ButtonAddNote, Container, ShowListEmpty, SpaceItems } from './styles';
import Icon from '@expo/vector-icons/AntDesign';

export function Home() {

  const [data, setData] = useState<CardProps[]>([]);
  const [filteredNote, setFilteredNote] = useState<CardProps[]>([]);
  const [search, setSearch] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');

  const navigation = useNavigation<HomeScreenProps>();

  const { getItem } = useAsyncStorage('@savepass:passwords');

  async function handleFetchData() {
    try {
      const response = await getItem();
      const data = response ? JSON.parse(response) : [];
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }

  function applyFilter() {
    const filteredNote = data.filter(n =>
      n.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      n.content.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredNote(filteredNote);
  }

  function handleSearchButtonPress() {
    setSearch(searchInput);
    console.log('searchInput');
  }

  function handleSearchInputSubmit() {
    Keyboard.dismiss();
    handleSearchButtonPress();
  }

  function ListEmptyComponent() {
    return (
      <ShowListEmpty>
        Você ainda não possui nenhuma nota...
      </ShowListEmpty>
    )
  }

  function renderItem({ item }: ListRenderItemInfo<CardProps>) {
    return <Card {...item}
      navigation={() => navigation.navigate('Details', { id: item.id })}
    />
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
    applyFilter();
  }, [search]));

  return (
    <React.Fragment>
      <Container>
        <Header />
        <SpaceItems>
          <Search
            value={searchInput}
            onChangeText={(text) => setSearchInput(text)}
            onSubmitEditing={handleSearchInputSubmit}
            handleSearchButtonPress={handleSearchButtonPress}
          />
        </SpaceItems>
        {search.length > 0 ?
          <FlatList
            data={filteredNote}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 90, alignItems: 'center' }}
            ListEmptyComponent={() => ListEmptyComponent()}
          /> : <FlatList
            data={data}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 90, alignItems: 'center' }}
            ListEmptyComponent={() => ListEmptyComponent()}
          />}

        <ButtonAddNote onPress={() => navigation.navigate('Form')}>
          <Icon name="plus" size={24} color="#fff" />
        </ButtonAddNote>
      </Container>
    </React.Fragment>
  );
}