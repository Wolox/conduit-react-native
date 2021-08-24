import React, { useState, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import CustomText from '@components/CustomText';
import useNavigation from '@components/AppNavigator/helper';
import { State } from '@interfaces/reduxInterfaces';
import { ArticleInParams } from '@interfaces/articlesInterface';
import { formatDate } from '@utils/dateUtils';
import icAddInactive from '@assets/TabBar/icAddpostInactive.png';
import icAddActive from '@assets/TabBar/icAddpostActive.png';
import icFavouriteInactive from '@assets/TabBar/icFavoriteInactive.png';
import icFavouriteActive from '@assets/TabBar/icFavoriteActive.png';
import icDefaultArticleImage from '@assets/icons/icDefaultArticleImage.jpg';
import icDelete from '@assets/icons/icDelete.png';
import icEdit from '@assets/icons/icEdit.png';
import Routes from '@constants/routes';

import styles from './styles';
import testIds from './testIds';

interface Props extends ArticleInParams {}

function DetailArticle({ route }: Props) {
  const {
    title,
    description,
    updatedAt,
    favoritesCount,
    author: { image, username, following },
    tagList
  } = route?.params?.article;
  const currentUser = useSelector((state: State) => state.auth.currentUser);
  const navigation = useNavigation();
  const [favoriteCount, setFavoriteCount] = useState(favoritesCount || 0);
  const [isFollow, setIsFollow] = useState(following);
  const handleToggleFavorite = () => {
    if (favoriteCount > favoritesCount) setFavoriteCount(favoriteCount - 1);
    else setFavoriteCount(favoriteCount + 1);
  };
  const handleDeleteArticle = () => console.log('delete article');

  const handleEditArticle = useCallback(
    () =>
      navigation?.navigate(Routes.EditArticle, {
        article: { ...route?.params?.article, isEditArticle: true }
      }),
    [navigation, route]
  );

  return (
    <View style={styles.container}>
      {currentUser && (
        <View style={styles.containerActions}>
          <TouchableOpacity
            testID={testIds.editButton}
            style={styles.interactionButton}
            onPress={handleEditArticle}>
            <Image
              style={[styles.interactionButtonImage, styles.greenTint]}
              source={icEdit}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            testID={testIds.deleteButton}
            style={styles.interactionButton}
            onPress={handleDeleteArticle}>
            <Image
              style={[styles.interactionButtonImage, styles.redTint]}
              source={icDelete}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      )}
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
            {tagList.map((tag: string, index: number) => (
              <Text style={styles.tag} key={`key-${tag}-${index}`}>
                {tag}
              </Text>
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
