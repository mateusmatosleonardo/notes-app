import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Avatar, Container, InputArea, SubTitle, Title, WrapperAvatar, styles } from "./styleConfig";
import { Input } from "../../components/Input/Input";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { RegisterScreenProps, UserProps } from "./types";
import { useUsersStore } from "../../store/users/users";
import UserIcon from "@expo/vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function RegisterScreen() {

  const [userData, setUserData] = useState<UserProps>({
    avatar_url: '',
    name: '',
  });

  const navigation = useNavigation<RegisterScreenProps>();

  const { colors } = useTheme();

  const { actions } = useUsersStore();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setUserData({ ...userData, avatar_url: result.assets[0].uri });
      await AsyncStorage.setItem('@userData', JSON.stringify({
        ...userData,
        avatar: result.assets[0].uri,
      }));
    }
  };

  const handleNameChange = (name: string) => {
    setUserData(prevData => ({
      ...prevData,
      name,
    }));
  };

  const getStoredUserData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@userData');
      if (storedData !== null) {
        setUserData(JSON.parse(storedData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveData = async () => {
    try {
      await AsyncStorage.setItem('@userData', JSON.stringify(userData));
      actions.handleSaveData(userData);
      navigation.navigate('HomeScreen');
    } catch (error: unknown) {
      console.log('Erro ao salvar os dados:', error);
    }
  };

  useEffect(() => {
    getStoredUserData();
  }, []);

  return (
    <Container>
      <WrapperAvatar onPress={pickImage}>
        {userData.avatar_url ? <Avatar source={{ uri: userData.avatar_url }} alt="avatar" /> :
          <UserIcon name="user-circle" size={200} color={colors.primary.BLACK} />}
      </WrapperAvatar>
      <Title>Bem vindo(a)</Title>
      <SubTitle>Anotações descomplicadas para uma vida mais organizada.</SubTitle>
      <InputArea>
        <Input
          value={userData.name}
          onChangeText={handleNameChange}
          placeholder="Como gostaria de ser chamado?"
          placeholderTextColor={colors.primary.DARK_GREY}
          style={styles.input}
        />
      </InputArea>
      <Button
        title='Começar'
        style={styles.button}
        onPress={() => handleSaveData()}
      />
    </Container>
  )
}

export default RegisterScreen;