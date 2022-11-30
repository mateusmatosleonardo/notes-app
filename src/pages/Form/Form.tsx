import React from 'react';
import * as S from './styles';
import uuid from 'react-native-uuid';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm as useFormHook } from '../../hooks/useForm';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { PasswordProps } from '../../components/Password/types';
import { flashMessage } from '../../utils/FlashMessage';
import BackIcon from '@expo/vector-icons/Ionicons';
import Envelope from '@expo/vector-icons/FontAwesome';
import User from '@expo/vector-icons/Feather';
import Padlock from '@expo/vector-icons/Feather';
import { FormScreenProps } from './types';

export function Form() {

  const { isFocusedService,
    isFocusedUser,
    isFocusedPassword,
    handleInputFocusService,
    handleInputBlurService,
    handleInputFocusUser,
    handleInputBlurUser,
    handleInputFocusPassword,
    handleInputBlurPassword,
  } = useFormHook();

  const navigation = useNavigation<FormScreenProps>();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function handleNewPassword(data: PasswordProps) {
    data.id = uuid.v4();
    try {
      console.log(data);
      flashMessage({
        message: 'Sucesso!',
        description: 'Cadastrado com sucesso',
        type: 'success'
      });
      navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <S.Container>
      {/* change name Wrapper */}
      <S.Wrapper>
        <S.Header>
          {/* change name Touch */}
          <S.Touch onPress={() => navigation.goBack()}>
            <BackIcon name='chevron-back' color='#fafafa' size={26} />
          </S.Touch>
          <S.Title>Cadastro</S.Title>
          <S.Invisible />
        </S.Header>
      </S.Wrapper>
      <S.KeyboardDismiss onPress={Keyboard.dismiss}>
        <S.Form>
          <Controller
            name='servicename'
            control={control}
            render={({ field: { value, onChange } }) => (
              <S.InputArea
                style={isFocusedService ?
                  { borderBottomWidth: 2, borderColor: '#99bfe7' } :
                  { borderBottomWidth: 2, borderColor: '#EEEEEE' }
                }
              >
                <S.Diviser>
                  <Envelope
                    name='envelope-o'
                    color={(isFocusedService || !!value) ? '#99bfe7' : '#AAAAAA'}
                    size={22}
                    style={{ paddingHorizontal: 12 }}
                  />
                </S.Diviser>
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder='Serviço'
                  placeholderTextColor='#AAAAAA'
                  autoCapitalize='none'
                  onFocus={handleInputFocusService}
                  onBlur={handleInputBlurService}
                  style={S.styles.input}
                />
              </S.InputArea>
            )}
          />
          {errors.servicename &&
            <S.TextError>
              {errors.servicename?.message}
            </S.TextError>}
          <Controller
            name='username'
            control={control}
            render={({ field: { value, onChange } }) => (
              <S.InputArea
                style={isFocusedUser ?
                  { borderBottomWidth: 2, borderColor: '#99bfe7' } :
                  { borderBottomWidth: 2, borderColor: '#EEEEEE' }
                }
              >
                <S.Diviser>
                  <User
                    name='user'
                    color={(isFocusedUser || !!value) ? '#99bfe7' : '#AAAAAA'}
                    size={22}
                    style={{ paddingHorizontal: 12 }}
                  />
                </S.Diviser>
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder='E-mail ou usuário'
                  placeholderTextColor='#AAAAAA'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onFocus={handleInputFocusUser}
                  onBlur={handleInputBlurUser}
                  style={S.styles.input}
                />
              </S.InputArea>
            )}
          />
          {errors.username &&
            <S.TextError>
              {errors.username?.message}
            </S.TextError>}
          <Controller
            name='password'
            control={control}
            render={({ field: { value, onChange } }) => (
              <S.InputArea
                style={isFocusedPassword ?
                  { borderBottomWidth: 2, borderColor: '#99bfe7' } :
                  { borderBottomWidth: 2, borderColor: '#EEEEEE' }
                }
              >
                <S.Diviser>
                  <Padlock
                    name='lock'
                    color={(isFocusedPassword || !!value) ? '#99bfe7' : '#AAAAAA'}
                    size={22}
                    style={{ paddingHorizontal: 12 }}
                  />
                </S.Diviser>
                <Input
                  value={value}
                  onChangeText={onChange}
                  placeholder='Senha'
                  placeholderTextColor='#AAAAAA'
                  autoCapitalize='none'
                  secureTextEntry
                  onFocus={handleInputFocusPassword}
                  onBlur={handleInputBlurPassword}
                  style={S.styles.input}
                />
              </S.InputArea>
            )}
          />
          {errors.password &&
            <S.TextError>
              {errors.password?.message}
            </S.TextError>}
          <S.InputArea
            style={{ height: 92, alignItems: 'flex-start' }}
          >
            <Input
              placeholder='Deseja fazer uma anotação?'
              placeholderTextColor='#AAAAAA'
              autoCapitalize='none'
              style={[S.styles.input, { paddingTop: 8 }]}
              multiline={true}
            />
          </S.InputArea>
          <Button
            title='Cadastrar'
            style={S.styles.button}
            onPress={handleSubmit(handleNewPassword)}
          />
        </S.Form>
      </S.KeyboardDismiss>
    </S.Container>
  );
}