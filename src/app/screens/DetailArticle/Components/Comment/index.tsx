import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import CustomTextPressable from '@components/CustomTextPressable';
import CustomText from '@components/CustomText';
import icDefaultArticleImage from '@assets/icons/icDefaultArticleImage.jpg';

import styles from './styles';

export default function Comment() {
  const [presseded, setPresseded] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>('');

  useEffect(() => {
    const handleComment = () => {
      const DATA =
        'Muy Bueno me encanta, todos los colores en una mano y los recibos en la otra ! estamos probando nuevas cosas y estos comentarios nos re sirven! muchas gracias besiis';
      if (presseded) {
        setCommentText(DATA);
      } else {
        setCommentText(DATA.substring(0, 78));
      }
    };
    handleComment();
  }, [presseded]);
  return (
    <View style={styles.comment}>
      <View style={styles.containerUser}>
        <View style={styles.containerImage}>
          <Image style={styles.image} resizeMode="contain" source={icDefaultArticleImage} />
        </View>
        <Text style={styles.userName}>React</Text>
        <Text style={styles.commentDate}>Mon Aug 09 2021</Text>
      </View>
      <View style={styles.commentBody}>
        <CustomText style={styles.commentText}>{commentText}</CustomText>
        <View>
          <CustomTextPressable
            text={presseded ? 'ver menos' : 'ver más'}
            onPress={() => setPresseded(!presseded)}
          />
        </View>
      </View>
    </View>
  );
}
