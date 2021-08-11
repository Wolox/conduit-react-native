import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

import styles from './styles';

interface Props {
  showModal: boolean;
  setShowModal: Function;
}
export default function CustomModal({ showModal, setShowModal }: Props) {
  return (
    <Modal animationType="fade" visible={showModal} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <View style={styles.containerButtons}>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setShowModal(false)}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.buttonRemove]} onPress={() => null}>
              <Text style={styles.textStyle}>Borrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
