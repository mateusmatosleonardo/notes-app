import React, { useState } from 'react';
import * as S from './styleConfig';
import uuid from 'react-native-uuid';
import { Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm as useFormHook } from '../../hooks/useForm';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { CardProps } from '../../components/Card/types';
import { flashMessage } from '../../utils/FlashMessage';
import { FormScreenProps } from './types';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import ArrowLeft from '@expo/vector-icons/AntDesign';

import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export function FormScreen() {

  const [categories] = useState<string[]>
    (['universidade',
      'pesquisa',
      'outro',
      'ideia',
      'podcast',
      'leitura',
      'artigo',
      'inspiração']);

  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const { colors } = useTheme();

  const { isFocusedTitle,
    handleInputFocusTitle,
    handleInputBlurTitle,
    isFocusedContent,
    handleInputFocusContent,
    handleInputBlurContent
  } = useFormHook();

  const { getItem, setItem } = useAsyncStorage('@savepass:passwords');

  const navigation = useNavigation<FormScreenProps>();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleNewPassword(data: CardProps) {
    data.id = uuid.v4();
    data.category = selectedCategory;
    try {
      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const newData = [data, ...previousData];

      await setItem(JSON.stringify(newData));

      flashMessage({
        message: 'Sucesso',
        description: 'Nota adicionada!',
        type: 'success'
      });
    } catch (e) {
      flashMessage({
        message: 'Error',
        description: 'Não foi possível cadastrar.',
        type: 'danger'
      });
      console.log(e);
    }
  }

  return (
    <S.Container behavior={Platform.OS === 'ios' ? "padding" : "height"}>
      <S.SafeAreaView>
        <S.Header>
          <S.Touch onPress={() => navigation.goBack()}>
            <ArrowLeft name='arrowleft' color={colors.primary.BLACK} size={22} />
          </S.Touch>
          <S.Title>Adicionar nota</S.Title>
          <S.Invisible />
        </S.Header>
        <S.KeyboardDismiss onPress={Keyboard.dismiss}>
          <S.Form>
            <Controller
              name='title'
              control={control}
              render={({ field: { value, onChange } }) => (
                <S.InputArea
                  style={isFocusedTitle ?
                    { borderColor: colors.primary.DARK_GREY } :
                    { borderColor: colors.primary.MIDDLE_GREY }
                  }
                >
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder='Título'
                    placeholderTextColor={colors.primary.BLACK}
                    onFocus={handleInputFocusTitle}
                    onBlur={handleInputBlurTitle}
                    style={S.styles.input}
                  />
                </S.InputArea>
              )}
            />
            {errors.title &&
              <S.TextError>
                {errors.title?.message}
              </S.TextError>}
            <Controller
              name='content'
              control={control}
              render={({ field: { value, onChange } }) => (
                <S.InputArea
                  style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    borderColor: isFocusedContent ? colors.primary.DARK_GREY : colors.primary.MIDDLE_GREY
                  }}>
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder='Conteúdo'
                    placeholderTextColor={colors.primary.BLACK}
                    style={[S.styles.input, { fontSize: RFValue(16), fontFamily: "Inter_400Regular", }]}
                    onFocus={handleInputFocusContent}
                    onBlur={handleInputBlurContent}
                    multiline={true}
                  />
                </S.InputArea>
              )}
            />
            {errors.content &&
              <S.TextError>
                {errors.content?.message}
              </S.TextError>}
          </S.Form>
          <S.Footer>
            <S.WrapperPicker>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue as string)}
                style={S.styles.picker}
              >
                {categories.map((category, i) => (
                  <Picker.Item key={i} label={category[0].toUpperCase() + category.slice(1)} value={category} />
                ))}
              </Picker>
            </S.WrapperPicker>
            <Button
              title='Adicionar'
              style={S.styles.button}
              onPress={handleSubmit(handleNewPassword as any)}
            />
          </S.Footer>
        </S.KeyboardDismiss>
      </S.SafeAreaView>
    </S.Container >
  );
}