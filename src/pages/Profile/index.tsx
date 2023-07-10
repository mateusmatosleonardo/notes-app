import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { AlignWrapperAvatar, Avatar, AvatarEdit, AvatarEditBg, BtnGoBack, Container, InputArea, WrapperAvatar, styles } from "./styleConfig";
import { Input } from "../../components/Input/Input";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenProps, UserProps } from "./types";
import { useUsersStore } from "../../store/users/users";
import UserIcon from "@expo/vector-icons/FontAwesome5";
import ImageIcon from "@expo/vector-icons/FontAwesome";
import ArrowLeft from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function ProfileScreen() {

  const [userData, setUserData] = useState<UserProps>({
    avatar_url: '',
    name: '',
  });

  const navigation = useNavigation<ProfileScreenProps>();

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
    } catch (e: unknown) {
      console.log('Erro ao salvar os dados:', e);
    }
  };

  useEffect(() => {
    getStoredUserData();
  }, []);

  return (
    <Container>
      <BtnGoBack onPress={() => navigation.goBack()}>
        <ArrowLeft name='arrowleft' color={colors.primary.BLACK} size={22} />
      </BtnGoBack>
      <AlignWrapperAvatar>
        <WrapperAvatar onPress={pickImage}>
          {userData.avatar_url ? <Avatar source={{ uri: userData.avatar_url }} alt="avatar" /> :
            <UserIcon name="user-circle" size={200} color={colors.primary.BLACK} />}
          <AvatarEdit>
            <AvatarEditBg>
              <ImageIcon name="image" size={18} color={colors.primary.WHITE} />
            </AvatarEditBg>
          </AvatarEdit>
        </WrapperAvatar>
      </AlignWrapperAvatar>
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
        title='Salvar'
        style={styles.button}
        onPress={() => handleSaveData()}
      />
    </Container>
  )
}

export default ProfileScreen;