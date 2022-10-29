import React, { useRef, useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { styles } from './CommonStyle';
import { schema } from './schema';
import { PasswordAppScreenProps } from './types';
import * as S from './styles';
import { PasswordAppContext } from '../../context/PasswordApp/PasswordAppContext';
import { Loading } from '../../components/Loading/Loading';
import { showMessage } from 'react-native-flash-message';
import { flashMessage } from '../../utils/FlashMessage';

export function PasswordApp() {

  // const code1Ref = useRef<TextInput>(null);
  // const code2Ref = useRef<TextInput>(null);
  // const code3Ref = useRef<TextInput>(null);
  // const code4Ref = useRef<TextInput>(null);
  // const [active, setActive] = useState(0);

  const { handleCreatePasswordApp,
    getPasswordApp, pass, disabled } = useContext(PasswordAppContext);

  const navigation = useNavigation<PasswordAppScreenProps>();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      first: "",
      second: "",
      third: "",
      four: ""
    }
  });

  // useEffect(() => {
  //   getPasswordApp();
  // }, []);

  // useEffect(() => {
  //   if (active === 1) {
  //     code1Ref.current?.focus();
  //   } else if (active === 2) {
  //     code2Ref.current?.focus();
  //   } else if (active === 3) {
  //     code3Ref.current?.focus();
  //   } else if (active === 4) {
  //     code4Ref.current?.focus();
  //   } else if (active === 5) {
  //     code4Ref.current?.focus();
  //   }
  // }, [active]);

  // console.log('vindo duas vezes', pass);

  function testeFlashMessage() {
    flashMessage({ title: 'Teste', description: 'des', type: 'success' })
  }

  return (
    <React.Fragment>
      {
        pass ?
          <S.Container behavior="padding">
            <S.WelcomeText>
              Seja bem vindo ao seu gerenciador de senhas!
            </S.WelcomeText>
            <S.Text></S.Text>
            <S.Text>
              Para a sua segurança, crie uma senha para acesso ao gerenciador!
            </S.Text>
            <S.WrapperInput>
              <Controller
                control={control}
                name='first'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    maxLength={1}
                    keyboardType='numeric'
                    style={[styles.input, {
                      borderColor: errors.first && '#ff375b'
                    }]} />
                )}
              />
              <Controller
                control={control}
                name='second'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    maxLength={1}
                    keyboardType='numeric'
                    style={[styles.input, {
                      borderColor: errors.second && '#ff375b'
                    }]} />
                )}
              />
              <Controller
                control={control}
                name='third'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    maxLength={1}
                    keyboardType='numeric'
                    style={[styles.input, {
                      borderColor: errors.third && '#ff375b'
                    }]} />
                )}
              />
              <Controller
                control={control}
                name='four'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    maxLength={1}
                    keyboardType='numeric'
                    style={[styles.input, {
                      borderColor: errors.four && '#ff375b'
                    }]} />
                )}
              />
            </S.WrapperInput>
            <Button
              disabled={disabled}
              style={[styles.btn, disabled ? { opacity: 0.7 } : {}]}
              title='Continuar'
              styleTitle={styles.titleBtn}
              onPress={handleSubmit(handleCreatePasswordApp)}
            />
            <S.WrapperContinue>
              <S.Pressable onPress={() => testeFlashMessage()}>
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