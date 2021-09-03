import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import i18next from 'i18next';
import CustomText from '@components/CustomText';

import './i18n';
import styles from './styles';

interface Props {
  showModal: boolean;
  title?: string;
  onCancel: () => void;
  onConfirm: () => void;
}
export default function CustomModal({ showModal, onCancel, onConfirm, title }: Props) {
  return (
    <Modal animationType="fade" visible={showModal} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CustomText bold style={styles.modalText}>
            {title || i18next.t('CUSTOM_COMMENT_MODAL:TITLE')}
          </CustomText>
          <View style={styles.containerButtons}>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={onCancel}>
              <Text style={styles.textStyle}>{i18next.t('CUSTOM_COMMENT_MODAL:CANCEL')}</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonRemove]} onPress={onConfirm}>
              <Text style={styles.textStyle}>{i18next.t('CUSTOM_COMMENT_MODAL:DELETE')}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
