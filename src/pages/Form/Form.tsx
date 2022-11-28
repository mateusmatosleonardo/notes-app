import React from 'react';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input/Input';
import { useForm as useFormHook } from '../../hooks/useForm';
import { Controller, useForm } from 'react-hook-form';
import * as S from './styles';
import BackIcon from '@expo/vector-icons/Ionicons';
import Envelope from '@expo/vector-icons/FontAwesome';
import User from '@expo/vector-icons/Feather';
import Padlock from '@expo/vector-icons/Feather';
import { Button } from '../../components/Button/Button';

export function Form() {

  const { isFocusedService,
    isFocusedUser,
    isFocusedPassword,
    handleInputFocusService,
    handleInputBlurService,
    handleInputFocusUser,
    handleInputBlurUser,
    handleInputFocusPassword,
    handleInputBlurPassword } = useFormHook();

  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm({});

  function handleNewPassword(data: any) {
    console.log(data);
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
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
                    color={isFocusedService ? '#99bfe7' : '#AAAAAA'}
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
                    color={isFocusedUser ? '#99bfe7' : '#AAAAAA'}
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
                    color={isFocusedPassword ? '#99bfe7' : '#AAAAAA'}
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