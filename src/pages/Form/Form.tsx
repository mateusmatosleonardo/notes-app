import React, { useState } from 'react';
import * as S from './styles';
import uuid from 'react-native-uuid';
import { Keyboard, Platform, View } from 'react-native';
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
import Icon from '@expo/vector-icons/FontAwesome5';

import { useTheme } from 'styled-components';

export function Form() {

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
            <Icon name='long-arrow-alt-left' color={colors.primary.BLACK} size={26} />
          </S.Touch>
          <S.Title>Adicionar nota</S.Title>
          <S.Invisible />
        </S.Header>
      </S.SafeAreaView>
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
                  placeholderTextColor={colors.primary.DARK_GREY}
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
                  height: 92,
                  alignItems: 'flex-start',
                  borderColor: isFocusedContent ? colors.primary.DARK_GREY : colors.primary.MIDDLE_GREY
                }}>
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder='Conteúdo'
                  placeholderTextColor={colors.primary.DARK_GREY}
                  style={S.styles.input}
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
          <View style={{ flex: 1, backgroundColor: 'salmon', width: '100%', height: '100%', }} />
        </S.Form>
        <S.WrapperAbsoluteView>
          <S.AbsoluteView>
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
          </S.AbsoluteView>
        </S.WrapperAbsoluteView>
      </S.KeyboardDismiss>
    </S.Container >
  );
}