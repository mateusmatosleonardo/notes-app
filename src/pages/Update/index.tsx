import React, { useEffect, useState } from 'react';
import * as Style from './styleConfig';
import { Keyboard, Platform } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { CardProps } from '../../components/Card/types';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { schema } from './schema';
import { UpdateScreenProps } from './types';
import { RootStackParamsList } from '../../routes/types';
import ArrowLeft from '@expo/vector-icons/AntDesign';

export function UpdateScreen() {

  const [categories] = useState<string[]>
    (['aleatório',
      'universidade',
      'pesquisa',
      'outro',
      'ideia',
      'podcast',
      'leitura',
      'artigo',
      'inspiração',
      'tarefas',
      'compras',
      'finanças',
      'receitas',
      'metas',
      'dicas',
      'trabalho',
      'lembrete'
    ]);

  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const { colors } = useTheme();

  const { getItem, setItem } = useAsyncStorage('@savenote:notes');

  const navigation = useNavigation<UpdateScreenProps>();
  const route = useRoute<RouteProp<RootStackParamsList, "UpdateScreen">>();
  const { note } = route.params;

  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: note.title,
      content: note.content
    }
  });

  async function handleEdit(data: CardProps) {
    try {
      const response: string | null = await getItem();
      const previousData: CardProps[] = response ? JSON.parse(response) : [];

      const updatedData: CardProps[] = previousData.map((item: CardProps) => {
        if (item.id === note.id) {
          return {
            ...item,
            title: data.title,
            content: data.content,
            category: selectedCategory
          };
        }
        return item;
      });

      await setItem(JSON.stringify(updatedData));

      navigation.navigate("HomeScreen");
    } catch (e: unknown) {
      console.log(e);
    }
  }

  useEffect(() => {
    setValue('title', note.title);
    setValue('content', note.content);
    setSelectedCategory(note.category);
  }, [note, setValue]);

  return (
    <Style.Container behavior={Platform.OS === 'ios' ? "padding" : "height"}>
      <Style.SafeAreaView>
        <Style.Header>
          <Style.Touch onPress={() => navigation.goBack()}>
            <ArrowLeft name='arrowleft' color={colors.primary.BLACK} size={22} />
          </Style.Touch>
          <Style.Invisible />
        </Style.Header>
        <Style.KeyboardDismiss onPress={Keyboard.dismiss}>
          <Style.Form>
            <Controller
              name='title'
              control={control}
              render={({ field: { value, onChange } }) => (
                <Style.InputArea>
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder='Título'
                    placeholderTextColor={colors.primary.BLACK}
                    style={Style.styles.input}
                  />
                </Style.InputArea>
              )}
            />
            {errors.title &&
              <Style.TextError>
                {errors.title?.message}
              </Style.TextError>}
            <Controller
              name='content'
              control={control}
              render={({ field: { value, onChange } }) => (
                <Style.InputArea
                  style={{
                    flex: 1,
                    alignItems: 'flex-start'
                  }}>
                  <Input
                    value={value}
                    onChangeText={onChange}
                    placeholder='Conteúdo'
                    placeholderTextColor={colors.primary.BLACK}
                    style={[Style.styles.input, { fontSize: RFValue(16), fontFamily: "Inter_400Regular", }]}
                    multiline={true}
                  />
                </Style.InputArea>
              )}
            />
            {errors.content &&
              <Style.TextError>
                {errors.content?.message}
              </Style.TextError>}
          </Style.Form>
          <Style.Footer>
            <Style.WrapperPicker>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue as string)}
                style={Style.styles.picker}
              >
                {categories.map((category, i) => (
                  <Picker.Item key={i} label={category[0].toUpperCase() + category.slice(1)} value={category} />
                ))}
              </Picker>
            </Style.WrapperPicker>
            <Button
              title='Editar'
              style={Style.styles.button}
              onPress={handleSubmit(handleEdit as any)}
            />
          </Style.Footer>
        </Style.KeyboardDismiss>
      </Style.SafeAreaView>
    </Style.Container >
  );
}