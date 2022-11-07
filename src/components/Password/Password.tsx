import * as S from './styles';
import Eye from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { PasswordProps } from './types';

export function Password({ serviceName, userName, password }: PasswordProps) {

  const [visible, setVisible] = useState(false);

  return (
    <S.Container>
      <S.Pressable onPress={() => setVisible(!visible)}>
        <Eye name={visible ? 'eye-off' : 'eye'}
          color='#616060'
          size={24}
          style={{ marginRight: 16 }} />
      </S.Pressable>
      <S.WrapperPassword>
        <S.ServiceName>{serviceName}</S.ServiceName>
        <S.UserName>{userName}</S.UserName>
        {
          visible
            ?
            <S.Password>{password}</S.Password>
            :
            <S.PasswordInvisible>**********</S.PasswordInvisible>
        }
      </S.WrapperPassword>
    </S.Container>
  )
}