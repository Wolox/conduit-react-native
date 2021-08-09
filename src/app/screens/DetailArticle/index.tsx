import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import CustomText from '@components/CustomText';
import { Navigation } from '@interfaces/navigation';
import { formatDate } from '@utils/dateUtils';
import icAddInactive from '@assets/TabBar/icAddpostInactive.png';
import icAddActive from '@assets/TabBar/icAddpostActive.png';
import icFavouriteInactive from '@assets/TabBar/icFavoriteInactive.png';
import icFavouriteActive from '@assets/TabBar/icFavoriteActive.png';
import icDefaultArticleImage from '@assets/icons/icDefaultArticleImage.jpg';

import styles from './styles';
import testIds from './testIds';

interface Props extends Navigation {}

function DetailArticle({ route }: Props) {
  const {
    title,
    description,
    updatedAt,
    favoritesCount,
    author: { image, username, following },
    tagList
  } = route?.params?.article;
  const [favoriteCount, setFavoriteCount] = useState(favoritesCount || 0);
  const [isFollow, setIsFollow] = useState(following);
  const handleToggleFavorite = () => {
    if (favoriteCount > favoritesCount) setFavoriteCount(favoriteCount - 1);
    else setFavoriteCount(favoriteCount + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerDetail}>
        <View style={styles.containerUser}>
          <Image source={image ? { uri: image } : icDefaultArticleImage} style={styles.image} />
          <View>
            <CustomText center green>
              {username}
            </CustomText>
            <CustomText center label>
              {formatDate(updatedAt)}
            </CustomText>
          </View>
        </View>
        {!!tagList.length && (
          <View style={styles.tagContainer}>
            {tagList.map((tag: string) => (
              <Text style={styles.tag}>{tag}</Text>
            ))}
          </View>
        )}
        <View style={styles.separator} />
        <CustomText>{title}</CustomText>
        <CustomText label>{description}</CustomText>
        <View style={styles.interactionButtons}>
          <TouchableOpacity
            testID={testIds.followButton}
            style={styles.interactionButton}
            onPress={() => setIsFollow(!isFollow)}>
            <Image
              style={styles.interactionButtonImage}
              source={isFollow ? icAddActive : icAddInactive}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            testID={testIds.favoriteButton}
            style={styles.interactionButton}
            onPress={handleToggleFavorite}>
            <Image
              style={styles.interactionButtonImage}
              source={favoriteCount > favoritesCount ? icFavouriteActive : icFavouriteInactive}
              resizeMode="contain"
            />
            {!!favoriteCount && (
              <CustomText
                gray
                xsmall
                green={favoriteCount > favoritesCount}>{`(${favoriteCount})`}</CustomText>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default DetailArticle;
