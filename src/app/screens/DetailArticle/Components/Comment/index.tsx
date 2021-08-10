import React from 'react';
import { View, Text, Image } from 'react-native';
import icDefaultArticleImage from '@assets/icons/icDefaultArticleImage.jpg';

import styles from './styles';

export default function Comment() {
  return (
    <View style={styles.comment}>
      <View style={styles.containerUser}>
        <Image style={styles.image} resizeMode="contain" source={icDefaultArticleImage} />
        <Text style={styles.userName}>React</Text>
        <Text style={styles.commentDate}>Mon Aug 09 2021</Text>
      </View>
      <View style={styles.commentBody}>
        <Text style={styles.commentText}>
          Muy Bueno me encanta, todos los colores en una mano y los recibos en la otra !
        </Text>
      </View>
    </View>
  );
}
