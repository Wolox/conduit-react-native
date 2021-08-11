import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import icDefaultArticleImage from '@assets/icons/icDefaultArticleImage.jpg';
import icTrash from '@assets/icons/icTrash.png';
import CustomTextPressable from '@components/CustomTextPressable';
import CustomText from '@components/CustomText';
import { State } from '@interfaces/reduxInterfaces';
import { iComment } from '@interfaces/commentInterfaces';
import { formatDate } from '@utils/dateUtils';

import CustomModal from '../CustomModal';

import styles from './styles';

interface Props {
  commentContent: iComment;
}

export default function Comment({
  commentContent: {
    author: { username },
    body,
    // updatedAt,
    createdAt
  }
}: Props) {
  // const dispatch = useDispatch();
  const [presseded, setPresseded] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const currentUser = useSelector((state: State) => state?.auth?.currentUser?.username);
  useEffect(() => {
    const handleComment = () => {
      // const DATA =
      //   'Muy Bueno me encanta, todos los colores en una mano y los recibos en la otra ! estamos probando nuevas cosas y estos comentarios nos re sirven! muchas gracias besiis';
      if (presseded) {
        setCommentText(body);
      } else {
        setCommentText(body.substring(0, 78));
      }
    };
    handleComment();
  }, [body, presseded]);

  const onPress = () => setShowModal(!showModal);

  const renderTrash = () => (
    <>
      {username && currentUser === username && (
        <TouchableOpacity style={styles.containerTrash} onPress={onPress}>
          <Image source={icTrash} resizeMode="contain" resizeMethod="scale" style={styles.icTrash} />
        </TouchableOpacity>
      )}
    </>
  );

  return (
    <View style={styles.comment}>
      <CustomModal showModal={showModal} setShowModal={setShowModal} />
      <View style={styles.containerUser}>
        <View style={styles.containerImage}>
          <Image style={styles.image} resizeMode="contain" source={icDefaultArticleImage} />
        </View>
        <Text style={styles.userName}>{username}</Text>
        <Text style={styles.commentDate}>{formatDate(createdAt)}</Text>
      </View>
      <View style={styles.commentBody}>
        <CustomText style={styles.commentText}>{commentText}</CustomText>
        {body.length > 70 && (
          <View>
            <CustomTextPressable
              text={presseded ? 'ver menos' : 'ver más'}
              onPress={() => setPresseded(!presseded)}
            />
          </View>
        )}
      </View>
      {renderTrash()}
    </View>
  );
}
