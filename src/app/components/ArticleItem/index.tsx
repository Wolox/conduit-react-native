import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import CustomText from '@components/CustomText';
import { Article } from '@interfaces/articlesInterface';
import { formatDate } from '@utils/dateUtils';
import icDefaultArticleImage from '@assets/icons/icDefaultArticleImage.jpg';
import icDelete from '@assets/icons/icDelete.png';
import { getAvatar } from '@constants/iconsConstants';
import { useNavigationWithParams } from '@utils/navUtils';
import Routes from '@constants/routes';

import styles from './styles';

interface Props {
  item: Article;
  onPress: (item: Article) => void;
  showDeleteIcon?: boolean;
  onDeletePress?: (item: Article) => void;
}

function ArticleItem({ item, onPress, showDeleteIcon, onDeletePress }: Props) {
  const navigation = useNavigationWithParams();
  const handlePress = () => onPress(item);
  const {
    title,
    description,
    updatedAt,
    author: { image, username }
  } = item;
  const handleNavigate = () => navigation.navigate(Routes.DetailUser, { user: username });
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.containerImage}>
        <Image source={image ? getAvatar(image) : icDefaultArticleImage} style={styles.image} />
        <View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleNavigate}>
              <CustomText green>{username}</CustomText>
            </TouchableOpacity>
            {showDeleteIcon && (
              <TouchableOpacity
                onPress={() => {
                  if (onDeletePress) onDeletePress(item);
                }}>
                <Image source={icDelete} resizeMode="contain" style={styles.deleteIcon} />
              </TouchableOpacity>
            )}
          </View>
          <CustomText label>{formatDate(updatedAt)}</CustomText>
        </View>
      </View>
      <CustomText>{title}</CustomText>
      <CustomText label>{description}</CustomText>
    </TouchableOpacity>
  );
}

export default ArticleItem;
