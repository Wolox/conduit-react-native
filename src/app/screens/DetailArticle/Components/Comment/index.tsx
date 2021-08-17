import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import i18next from 'i18next';
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
import './i18n';

interface Props {
  commentContent: iComment;
}

export default function Comment({
  commentContent: {
    author: { username },
    body,
    id,
    createdAt
  }
}: Props) {
  const [presseded, setPresseded] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const currentUser = useSelector((state: State) => state?.auth?.currentUser?.username);
  useEffect(() => {
    const handleComment = async () => {
      if (presseded) {
        await setCommentText(body);
      } else {
        await setCommentText(body.substring(0, 78));
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
    <View style={styles.container}>
      <View style={styles.content}>
        <CustomModal showModal={showModal} setShowModal={setShowModal} idComment={id} />
        <View style={styles.containerUser}>
          <View style={styles.containerImage}>
            <Image style={styles.image} resizeMode="contain" source={icDefaultArticleImage} />
          </View>
          <Text style={styles.userName}>{username}</Text>
          <Text style={styles.commentDate}>{formatDate(createdAt)}</Text>
        </View>
        <View style={styles.commentBody}>
          <CustomText style={[styles.commentText, currentUser !== username && styles.fullCommentBody]}>
            {commentText}
          </CustomText>
          {body.length > 70 && (
            <View>
              <CustomTextPressable
                text={presseded ? i18next.t('COMMENTS:VIEW_LESS') : i18next.t('COMMENTS:VIEW_MORE')}
                onPress={() => setPresseded(!presseded)}
              />
            </View>
          )}
        </View>
        {renderTrash()}
      </View>
    </View>
  );
}
