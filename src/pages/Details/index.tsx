import React from 'react';
import { Container, ScrollView, Title, Content } from './styleConfig';
import { useFocusEffect } from '@react-navigation/native';
import { useDetailsController } from './useDetailsController';
import { Loading } from '../../components/Loading/Loading';
import { Popup } from './Popup';
import HeaderOptions from './HeaderOptions';

export function DetailsScreen() {

  const { note,
    handleFetchData,
    handleDelete,
    navigation,
    showPopup,
    setShowPopup,
  } = useDetailsController();

  useFocusEffect(() => {
    handleFetchData();
  });

  return (
    <Container>
      {note && note.note ? (
        <React.Fragment>
          <HeaderOptions
            onBackPress={() => navigation.goBack()}
            onEditPress={() => navigation.navigate('UpdateScreen', { note: note.note })}
            onDeletePress={() => setShowPopup(true)}
          />
          <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
            <Title>{note.note.title}</Title>
            <Content>{note.note.content}</Content>
          </ScrollView>
        </React.Fragment>
      ) : (<Loading />)}
      <Popup
        showPopup={showPopup}
        handleCancel={() => setShowPopup(false)}
        handleDelete={() => handleDelete(note?.note.id)}
      />
    </Container>
  );
}
