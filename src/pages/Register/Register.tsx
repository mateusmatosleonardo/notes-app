import * as S from './styles';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Loading } from '../../components/Loading/Loading';
import { RegisterScreenProps } from './types';
import { PasswordAppContext } from '../../context/PasswordApp/PasswordAppContext';

export function Register() {

  // const code1Ref = useRef<TextInput>(null);
  // const code2Ref = useRef<TextInput>(null);
  // const code3Ref = useRef<TextInput>(null);
  // const code4Ref = useRef<TextInput>(null);

  const { handleSignUp,
    pass,
    disabled } = useContext(PasswordAppContext);

  const navigation = useNavigation<RegisterScreenProps>();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstPin: "",
      secondPin: "",
      thirdPin: "",
      fourPin: ""
    }
  });

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
                name='firstPin'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    returnKeyType='next'
                    maxLength={1}
                    keyboardType='numeric'
                    style={[S.styles.input, {
                      borderColor: errors.firstPin && '#ff375b'
                    }]} />
                )}
              />
              <Controller
                control={control}
                name='secondPin'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    maxLength={1}
                    keyboardType='numeric'
                    style={[S.styles.input, {
                      borderColor: errors.secondPin && '#ff375b'
                    }]} />
                )}
              />
              <Controller
                control={control}
                name='thirdPin'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    maxLength={1}
                    keyboardType='numeric'
                    style={[S.styles.input, {
                      borderColor: errors.thirdPin && '#ff375b'
                    }]} />
                )}
              />
              <Controller
                control={control}
                name='fourPin'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    maxLength={1}
                    keyboardType='numeric'
                    style={[S.styles.input, {
                      borderColor: errors.fourPin && '#ff375b'
                    }]} />
                )}
              />
            </S.WrapperInput>
            <Button
              disabled={disabled}
              style={[S.styles.btn, disabled ? { opacity: 0.7 } : {}]}
              title={disabled ? 'Carregando...' : 'Salvar'}
              styleTitle={S.styles.titleBtn}
              onPress={handleSubmit(handleSignUp)}
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