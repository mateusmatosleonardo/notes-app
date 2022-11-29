import * as S from './styles';
import Eye from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { PasswordProps } from './types';

export function Password({ servicename, username, password }: PasswordProps) {

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
        <S.ServiceName>{servicename}</S.ServiceName>
        <S.UserName>{username}</S.UserName>
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