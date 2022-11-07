import * as S from './styles';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Loading } from '../../components/Loading/Loading';
import { RegisterScreenProps } from './types';
import { PasswordContext } from '../../context/Password/PasswordContext';
import { TextInput } from 'react-native';
import { flashMessage } from '../../utils/FlashMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Register() {

  const [disabled, setDisabled] = useState(false);

  const pin1Ref = useRef<TextInput>(null);
  const pin2Ref = useRef<TextInput>(null);
  const pin3Ref = useRef<TextInput>(null);
  const pin4Ref = useRef<TextInput>(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const navigation = useNavigation<RegisterScreenProps>();

  const { password } = useContext(PasswordContext);

  async function handleSignUp(): Promise<void> {
    try {
      if (pin1.trim() === ''
        ||
        pin2.trim() === ''
        ||
        pin3.trim() === ''
        ||
        pin4.trim() === '') {
        return flashMessage({
          message: 'Atenção',
          description: 'Preencha todos os campos!',
          type: 'danger'
        });
      }
      const newData = {
        pin1,
        pin2,
        pin3,
        pin4
      };
      setDisabled(true);
      await AsyncStorage.setItem('@savepass', JSON.stringify(newData));
      flashMessage({
        message: 'Sucesso',
        description: 'Senha salva com sucesso!',
        type: 'success'
      });
      setTimeout(() => {
        setDisabled(false);
        navigation.navigate('SignIn');
      }, 1000);
    } catch (e) {
      flashMessage({
        message: 'Erro',
        description: 'Erro ao salvar senha :(',
        type: 'danger'
      });
      console.log(e, 'error saving password!');
    }
  }

  return (
    <React.Fragment>
      {
        password ?
          <S.Container behavior="padding">
            <S.WelcomeText>
              Seja bem vindo ao seu gerenciador de senhas!
            </S.WelcomeText>
            <S.Text></S.Text>
            <S.Text>
              Para a sua segurança, crie uma senha para acesso ao gerenciador!
            </S.Text>
            <S.WrapperInput>
              <Input
                ref={pin1Ref}
                value={pin1}
                onChangeText={(pin1) => {
                  setPin1(pin1);
                  if (pin1 === '') {
                    pin2Ref.current?.focus();
                  }
                }}
                secureTextEntry
                returnKeyType='next'
                maxLength={1}
                keyboardType='number-pad'
                style={[S.styles.input, {
                  // borderColor: pin1.trim() === '' ? '#ff375b' : ''
                }]} />
              <Input
                ref={pin2Ref}
                value={pin2}
                onChangeText={(pin2) => {
                  setPin2(pin2);
                  if (pin2 !== '') {
                    pin3Ref.current?.focus();
                  }
                }}
                secureTextEntry
                maxLength={1}
                keyboardType='number-pad'
                style={[S.styles.input, {
                  // borderColor: errors.secondPin && '#ff375b'
                }]} />
              <Input           // onBlur={onBlur}
                ref={pin3Ref}
                value={pin3}
                onChangeText={(pin3) => {
                  setPin3(pin3);
                  if (pin3 !== '') {
                    pin4Ref.current?.focus();
                  }
                }}
                secureTextEntry
                maxLength={1}
                keyboardType='numeric'
                style={[S.styles.input, {
                  // borderColor: errors.thirdPin && '#ff375b'
                }]} />
              <Input
                ref={pin4Ref}
                value={pin4}
                onChangeText={setPin4}
                secureTextEntry
                maxLength={1}
                keyboardType='numeric'
                style={[S.styles.input, {
                  // borderColor: errors.fourPin && '#ff375b'
                }]} />
            </S.WrapperInput>
            <Button
              disabled={disabled}
              style={[S.styles.btn, disabled ? { opacity: 0.7 } : {}]}
              title={disabled ? 'Carregando...' : 'Salvar'}
              styleTitle={S.styles.titleBtn}
              onPress={() => handleSignUp()}
            />
            <S.WrapperContinue>
              <S.Pressable onPress={() => navigation.navigate('SignIn')}>
                <S.ContinueWithoutPassword>
                  Continuar sem senha
                </S.ContinueWithoutPassword>
              </S.Pressable>
            </S.WrapperContinue>
          </S.Container>
          : <Loading />
      }
    </React.Fragment>
  );
}