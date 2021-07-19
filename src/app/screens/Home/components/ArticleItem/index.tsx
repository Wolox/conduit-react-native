import React from 'react';
import { View, Image } from 'react-native';
import CustomText from '@components/CustomText';
import { Article } from '@interfaces/articlesInterface';
import { formatDate } from '@utils/dateUtils';

import DefaultArticleImage from './assets/default_article_image.jpg';
import styles from './styles';

interface Props {
  item: Article;
}

function ArticleItem({
  item: {
    title,
    description,
    updatedAt,
    author: { image, username }
  }
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={image && image !== '' ? { uri: image } : DefaultArticleImage} style={styles.image} />
        <View>
          <CustomText green>{username}</CustomText>
          <CustomText label>{formatDate(updatedAt)}</CustomText>
        </View>
      </View>
      <CustomText>{title}</CustomText>
      <CustomText label>{description}</CustomText>
    </View>
  );
}

export default ArticleItem;
