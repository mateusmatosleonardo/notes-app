import { useContext, useEffect, useState } from 'react';
import * as S from './styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { PasswordContext } from '../../context/Password/PasswordContext';
import { schema } from './schema';
import { EnterWithPasswordProps } from './types';
import { useNavigation } from '@react-navigation/native';
import Eye from '@expo/vector-icons/Ionicons';

export function SignIn() {

  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const navigation = useNavigation<EnterWithPasswordProps>();

  const { handleSignIn, fetchPassword, password, removeMasterKey } = useContext(PasswordContext);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    fetchPassword();
  }, []);

  console.log(password, 'pass aqui');

  return (
    <S.Container behavior="padding">
      <S.WrapperTitle>
        <S.Title>Nome do App</S.Title>
      </S.WrapperTitle>
      <S.WrapperInput>
        <Controller
          control={control}
          name='password'
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
                }]} />
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
      </S.WrapperInput>
      <Button
        style={S.styles.btn}
        title='Desbloquear'
        styleTitle={S.styles.titleBtn}
        onPress={() => console.log('test')}
      />
    </S.Container>
  );
}