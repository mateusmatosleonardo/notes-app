import { useContext, useEffect } from 'react';
import * as S from './styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { styles } from './CommonStyle';
import KeyIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { PasswordAppContext } from '../../context/PasswordApp/PasswordAppContext';
import { schema } from './schema';
import { EnterWithPasswordProps } from './types';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {

  const navigation = useNavigation<EnterWithPasswordProps>();

  const { handleSignIn, getPasswordApp, pass } = useContext(PasswordAppContext);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      first: "",
      second: "",
      third: "",
      four: ""
    }
  });

  useEffect(() => {
    getPasswordApp();
  }, []);

  return (
    <S.Container behavior="padding">
      <S.WrapperTitle>
        <S.Title>Confirme sua senha</S.Title>
        <KeyIcon name='key-variant'
          color='#3175e6'
          size={22}
          style={{ marginLeft: 8 }} />
      </S.WrapperTitle>
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
        style={styles.btn}
        title='Confirmar'
        styleTitle={styles.titleBtn}
        onPress={handleSubmit(handleSignIn)}
      />
    </S.Container>
  );
}