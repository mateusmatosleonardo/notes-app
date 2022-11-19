import * as S from './styles';
import React, { useContext, useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Loading } from '../../components/Loading/Loading';
import { FormPass, RegisterScreenProps } from './types';
import { PasswordContext } from '../../context/Password/PasswordContext';
import { flashMessage } from '../../utils/FlashMessage';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Eye from '@expo/vector-icons/Ionicons';
import InformationIcon from '@expo/vector-icons/Ionicons';

export function Register() {

  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigation = useNavigation<RegisterScreenProps>();

  const { password, removeMasterKey } = useContext(PasswordContext);

  async function handleSignUp(newData: FormPass): Promise<void> {
    try {
      setDisabled(true);
      await AsyncStorage.setItem('@savepass', JSON.stringify(newData));
      flashMessage({
        message: 'Sucesso',
        description: 'Senha criada com sucesso!',
        type: 'success'
      });
      // remove debug
      console.log(newData);
      setTimeout(() => {
        navigation.navigate('Home');
        setTimeout(() => {
          setDisabled(false);
        }, 500);
      }, 1800);
    } catch (e) {
      flashMessage({
        message: 'Erro',
        description: 'Erro ao salvar senha :(',
        type: 'danger'
      });
      console.log(e, 'error saving password!');
    }
  }

  // * function to implement in android
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', () => true)
  //   return () => BackHandler.removeEventListener('hardwareBackPress', () => true)
  // }, []);

  // useEffect(() => {
  //   removeMasterKey();
  // }, []);

  // console.log(password, 'empty');

  return (
    <React.Fragment>
      {
        password ?
          <S.Container behavior="padding">
            <S.Title>
              Senha principal
            </S.Title>
            <S.DefaultText>
              Essa senha é usada para proteger e acessar seus dados.
              Você precisa inseri-la sempre que entrar no aplicativo.
            </S.DefaultText>
            <S.WrapperInput>
              <Controller
                name='password'
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <S.InputArea>
                    <Input
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      secureTextEntry={!visible}
                      returnKeyType='done'
                      maxLength={22}
                      placeholder='Senha'
                      placeholderTextColor={errors.password ?
                        '#ff375b' :
                        '#595959'}
                      style={[S.styles.input, {
                        borderColor: errors.password ? '#ff375b' : '#595959'
                      }]}
                    />
                    <S.PressableIcon
                      onPress={() => setVisible(!visible)}
                      style={S.styles.icon}>
                      <Eye
                        name={visible ? 'eye-off' : 'eye'}
                        color='#616060'
                        size={24} />
                    </S.PressableIcon>
                  </S.InputArea>
                )}
              />
              <S.WrapperError>
                {errors.password &&
                  <S.TextError>
                    {errors.password?.message}
                  </S.TextError>}
              </S.WrapperError>
            </S.WrapperInput>
            <Button
              disabled={disabled}
              style={[S.styles.btn,
              errors.password && { opacity: 0.7 },
              disabled && { opacity: 0.7 }]}
              title={disabled ? 'Carregando...' : 'Continuar'}
              styleTitle={S.styles.titleBtn}
              onPress={handleSubmit(handleSignUp)}
            />
            <S.WrapperRecommendation>
              <InformationIcon
                name='information-circle-outline'
                color='#3175e6'
                size={22} />
              <S.Recommendation>
                Anote sua senha principal para não perder acesso aos seus dados!
              </S.Recommendation>
            </S.WrapperRecommendation>
          </S.Container>
          : <Loading />
      }
    </React.Fragment>
  );
}