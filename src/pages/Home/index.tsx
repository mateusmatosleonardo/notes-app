import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, ListRenderItemInfo, Keyboard, BackHandler, ToastAndroid, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header/Header';
import { CardProps } from '../../components/Card/types';
import { Card } from '../../components/Card/Card';
import { Search } from './Search/Search';
import { ListEmptyComponent } from './ListEmptyComponent/ListEmptyComponent';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { HomeScreenProps } from './types';
import { AddNoteButton, Container, SpaceItems } from './styles';
import AddNoteIcon from '@expo/vector-icons/AntDesign';

export function HomeScreen() {

  const backPressedRef = useRef<number>(0);
  const [data, setData] = useState<CardProps[]>([]);
  const [filteredNote, setFilteredNote] = useState<CardProps[]>([]);
  const [search, setSearch] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');

  const navigation = useNavigation<HomeScreenProps>();

  const { getItem } = useAsyncStorage('@savenote:notes');

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
  }

  function handleSearchInputSubmit() {
    Keyboard.dismiss();
    handleSearchButtonPress();
  }

  function renderItem({ item }: ListRenderItemInfo<CardProps>) {
    return (
      <Card {...item}
        navigation={() => navigation.navigate('DetailsScreen', { id: item.id })}
        onLongPress={handleLongPress}
      />
    )
  }

  const handleLongPress = () => {
    Alert.alert('Long press detected!');
  };

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
        <AddNoteButton onPress={() => navigation.navigate('FormScreen')}>
          <AddNoteIcon name="plus" size={24} color="#fff" />
        </AddNoteButton>
      </Container>
    </React.Fragment>
  );
}