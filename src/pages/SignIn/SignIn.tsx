import { useContext, useEffect } from 'react';
import * as S from './styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { styles } from './CommonStyle';
import { PasswordContext } from '../../context/Password/PasswordContext';
import { schema } from './schema';
import { EnterWithPasswordProps } from './types';
import { useNavigation } from '@react-navigation/native';
import KeyIcon from '@expo/vector-icons/MaterialCommunityIcons';

export function SignIn() {

  const navigation = useNavigation<EnterWithPasswordProps>();

  const { handleSignIn, fetchPassword, password } = useContext(PasswordContext);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: ""
    }
  });

  useEffect(() => {
    fetchPassword();
  }, []);

  console.log(password, 'pass aqui');

  return (
    <S.Container behavior="padding">
      <S.WrapperTitle>
        <S.Title>Entre com a senha</S.Title>
        <KeyIcon name='key-variant'
          color='#3175e6'
          size={22}
          style={{ marginLeft: 8 }} />
      </S.WrapperTitle>
      <S.WrapperInput>
        <Controller
          control={control}
          name='pin1'
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry
              maxLength={1}
              keyboardType='numeric'
              style={[styles.input, {
                borderColor: errors.pin1 && '#ff375b'
              }]} />
          )}
        />
        <Controller
          control={control}
          name='pin2'
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry
              maxLength={1}
              keyboardType='numeric'
              style={[styles.input, {
                borderColor: errors.pin2 && '#ff375b'
              }]} />
          )}
        />
        <Controller
          control={control}
          name='pin3'
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry
              maxLength={1}
              keyboardType='numeric'
              style={[styles.input, {
                borderColor: errors.pin3 && '#ff375b'
              }]} />
          )}
        />
        <Controller
          control={control}
          name='pin4'
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry
              maxLength={1}
              keyboardType='numeric'
              style={[styles.input, {
                borderColor: errors.pin4 && '#ff375b'
              }]} />
          )}
        />
      </S.WrapperInput>
      <Button
        style={styles.btn}
        title='Confirmar'
        styleTitle={styles.titleBtn}
        onPress={handleSubmit(handleSignIn)}
      />
    </S.Container>
  );
}