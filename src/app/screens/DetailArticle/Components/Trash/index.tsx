import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import icTrash from '@assets/icons/icTrash.png';

import styles from './styles';

interface Props {
  username?: string;
  currentUser?: string;
  onPress?: () => void;
}
export default function Trash({ username, currentUser, onPress }: Props) {
  return (
    <>
      {username && currentUser === username && (
        <TouchableOpacity style={styles.containerTrash} onPress={onPress}>
          <Image source={icTrash} resizeMode="contain" resizeMethod="scale" style={styles.icTrash} />
        </TouchableOpacity>
      )}
    </>
  );
}
