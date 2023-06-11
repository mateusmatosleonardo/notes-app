import React from 'react';
import { Container, ScrollView, Title, Content } from './styleConfig';
import { useFocusEffect } from '@react-navigation/native';
import { useDetailsController } from './useDetailsController';
import HeaderOptions from './HeaderOptions';

export function Details() {

  const { note, handleFetchData, navigation } = useDetailsController();

  useFocusEffect(() => {
    handleFetchData();
  });

  return (
    <Container>
      {note && note.note ? (
        <React.Fragment>
          <HeaderOptions
            onBackPress={() => navigation.goBack()}
            onEditPress={() => console.log('edit')}
            onDeletePress={() => console.log('delete')}
          />
          <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
            <Title>{note.note.title}</Title>
            <Content>{note.note.content}</Content>
          </ScrollView>
        </React.Fragment>
      ) : (
        <Title>dads</Title>
      )}
    </Container>
  );
}
