import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, ListRenderItemInfo, Keyboard, BackHandler, ToastAndroid, ActivityIndicator } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AddNoteButton, Container, SpaceItems, NoResultsMessageText, style, EmptyListText } from './styles';
import { Header } from '../../components/Header/Header';
import { CardProps } from '../../components/Card/types';
import { Card } from '../../components/Card/Card';
import { Search } from './Search/Search';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { HomeScreenProps } from './types';
import AddNoteIcon from '@expo/vector-icons/AntDesign';

export function HomeScreen() {

  const backPressedRef = useRef<number>(0);
  const [data, setData] = useState<CardProps[]>([]);
  const [filteredNote, setFilteredNote] = useState<CardProps[]>([]);
  const [search, setSearch] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation<HomeScreenProps>();

  const { getItem } = useAsyncStorage('@savenote:notes');

  async function handleFetchData() {

    try {
      const response = await getItem();
      const data = response ? JSON.parse(response) : [];
      setData(data);
      setIsLoading(false);
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
  }

  function handleSearchInputSubmit() {
    Keyboard.dismiss();
    handleSearchButtonPress();
  }

  function renderItem({ item }: ListRenderItemInfo<CardProps>) {
    return <Card {...item} navigation={() => navigation.navigate('DetailsScreen', { id: item.id })} />
  }

  function NoResultsMessage() {
    return <NoResultsMessageText>Nenhuma nota encontrada.</NoResultsMessageText>
  }

  function ListEmptyComponent() {
    return <EmptyListText>Você não possui notas.</EmptyListText>
  }

  const backAction = useCallback(() => {
    const currentTime = new Date().getTime();

    if (backPressedRef.current && currentTime - backPressedRef.current < 2000) {
      BackHandler.exitApp();
      return true;
    }

    ToastAndroid.show('Pressione novamente para sair', ToastAndroid.SHORT);

    backPressedRef.current = currentTime;

    return true;
  }, []);

  useFocusEffect(useCallback(() => {
    handleFetchData();
    applyFilter();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, [search]));

  useEffect(() => {
    return () => {
      backPressedRef.current = 0;
    };
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Header navigation={() => navigation.navigate('ProfileScreen')} />
        <SpaceItems>
          <Search
            value={searchInput}
            onChangeText={(text) => setSearchInput(text)}
            onSubmitEditing={handleSearchInputSubmit}
            handleSearchButtonPress={handleSearchButtonPress}
          />
        </SpaceItems>
        {isLoading ? (
          <ActivityIndicator size={35} color="#151515" />
        ) : (
          <React.Fragment>
            {search.length > 0 ? (
              <FlatList
                data={filteredNote}
                keyExtractor={(item) => String(item.id)}
                renderItem={renderItem}
                contentContainerStyle={style.flatList}
                ListEmptyComponent={filteredNote.length === 0 ? NoResultsMessage : null}
              />
            ) : (
              <FlatList
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={renderItem}
                contentContainerStyle={style.flatList}
                ListEmptyComponent={() => ListEmptyComponent()}
              />
            )}
          </React.Fragment>
        )}
        <AddNoteButton onPress={() => navigation.navigate('FormScreen')}>
          <AddNoteIcon name="plus" size={24} color="#fff" />
        </AddNoteButton>
      </Container>
    </React.Fragment>
  );
}