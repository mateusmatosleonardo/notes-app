import * as S from './styles';
import Eye from '@expo/vector-icons/Ionicons';
import Options from '@expo/vector-icons/SimpleLineIcons';
import Arrow from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { PasswordProps } from './types';

export function Password({ servicename, username, password, annotation }: PasswordProps) {

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
          <Arrow
            name={expand ? 'arrow-drop-down' : 'arrow-right'}
            color='#414040'
            size={24}
            style={{ marginLeft: -8 }}
          />
          <S.ServiceName>{servicename}</S.ServiceName>
        </S.Expand>
        <S.Pressable>
          <Options name='options' color='#414040' size={20} />
        </S.Pressable>
      </S.Container>
      {visible ?
        (<S.ContainerInformations>
          <S.WrapperInformations>
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
                  color='#313030'
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

{/* <S.Pressable onPress={() => setVisible(!visible)}>
        <Eye name={visible ? 'eye-off' : 'eye'}
          color='#616060'
          size={24}
          style={{ marginRight: 16 }} />
      </S.Pressable> */}
      // {
      //   visible
      //     ?
      //     <S.Password>{password}</S.Password>
      //     :
      //     <S.PasswordInvisible>**********</S.PasswordInvisible>
      // }

      // <S.UserName>{username}</S.UserName>