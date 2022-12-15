import * as S from './styles';
import { useState } from 'react';
import { PasswordProps } from './types';
import Eye from '@expo/vector-icons/Ionicons';
import ArrowIcon from '@expo/vector-icons/MaterialIcons';
import TrashIcon from '@expo/vector-icons/Feather';

export function Password({ servicename,
  username,
  password,
  annotation,
  onPress }: PasswordProps) {

  const [visible, setVisible] = useState(false);
  const [expand, setExpand] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <S.Container onPress={() => {
        setVisible(!visible);
        setExpand(!expand);
      }
      }>
        <S.Expand>
          <ArrowIcon
            name={expand ? 'arrow-drop-down' : 'arrow-right'}
            color='#414040'
            size={24}
            style={{ marginLeft: -8 }}
          />
          <S.ServiceName>{servicename}</S.ServiceName>
        </S.Expand>
        <S.Pressable onPress={onPress}>
          <TrashIcon name='trash-2' color='#313030' size={22} />
        </S.Pressable>
      </S.Container>
      {visible ?
        (<S.ContainerInformations>
          <S.WrapperInformations
            style={{
              shadowOffset: { width: -1, height: 1 },
              shadowColor: '#171717',
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 2,
            }}>
            <S.UserName>{username}</S.UserName>
            <S.Diviser />
            <S.WrapperPassword>
              {passwordVisible ?
                <S.Password>{password}</S.Password>
                :
                <S.PasswordInvisible>**********</S.PasswordInvisible>}
              <S.Pressable onPress={() => setPasswordVisible(!passwordVisible)}
                style={{ padding: 4 }}>
                <Eye name={passwordVisible ? 'eye-off' : 'eye'}
                  color='#595959'
                  size={21}
                />
              </S.Pressable>
            </S.WrapperPassword>
            {annotation ?
              (<>
                <S.Diviser />
                <S.Annotation>{annotation}</S.Annotation>
              </>)
              : null
            }
          </S.WrapperInformations>
        </S.ContainerInformations>)
        :
        null
      }
    </>
  )
}