import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import CustomText from '@components/CustomText';
import { Article } from '@interfaces/articlesInterface';
import { formatDate } from '@utils/dateUtils';
import icDefaultArticleImage from '@assets/icons/icDefaultArticleImage.jpg';

import styles from './styles';

interface Props {
  item: Article;
  onPress: (item: Article) => void;
}

function ArticleItem({ item, onPress }: Props) {
  const handlePress = () => onPress(item);
  const {
    title,
    description,
    updatedAt,
    author: { image, username }
  } = item;
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.containerImage}>
        <Image source={image ? { uri: image } : icDefaultArticleImage} style={styles.image} />
        <View>
          <CustomText green>{username}</CustomText>
          <CustomText label>{formatDate(updatedAt)}</CustomText>
        </View>
      </View>
      <CustomText>{title}</CustomText>
      <CustomText label>{description}</CustomText>
    </TouchableOpacity>
  );
}

export default ArticleItem;
