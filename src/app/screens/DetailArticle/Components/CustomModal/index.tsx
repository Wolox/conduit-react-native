import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Modal, Pressable } from 'react-native';
import i18next from 'i18next';
import CustomText from '@components/CustomText';
import ActionComments from '@redux/comments/actions';

import './i18n';
import styles from './styles';

interface Props {
  showModal: boolean;
  setShowModal: Function;
  idComment: number;
  articleSlug: string;
}
export default function CustomModal({ showModal, setShowModal, idComment, articleSlug }: Props) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(ActionComments?.deleteComment(articleSlug, idComment));
    setShowModal(false);
  };
  return (
    <Modal animationType="fade" visible={showModal} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CustomText bold style={styles.modalText}>
            {i18next.t('CUSTOM_COMMENT_MODAL:TITLE')}
          </CustomText>
          <View style={styles.containerButtons}>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setShowModal(false)}>
              <Text style={styles.textStyle}>{i18next.t('CUSTOM_COMMENT_MODAL:CANCEL')}</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonRemove]} onPress={handleDelete}>
              <Text style={styles.textStyle}>{i18next.t('CUSTOM_COMMENT_MODAL:DELETE')}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
