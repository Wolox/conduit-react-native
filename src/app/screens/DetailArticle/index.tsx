import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import CustomText from '@components/CustomText';
import useNavigation from '@components/AppNavigator/helper';
import { State } from '@interfaces/reduxInterfaces';
import { ArticleInParams } from '@interfaces/articlesInterface';
import { formatDate } from '@utils/dateUtils';
import CustomInputMessage from '@components/CustomInputMessage';
import CustomTextPressable from '@components/CustomTextPressable';
import { isIos } from '@constants/platform';
import { iComment } from '@interfaces/commentInterfaces';
import ActionComments from '@redux/comments/actions';
import ProfileActions from '@redux/profile/actions';
import { validateMinLength, validateMaxLength } from '@utils/validations/validateUtils';
import icAddInactive from '@assets/TabBar/icAddpostInactive.png';
import icSendMessage from '@assets/icons/icSendMessage.png';
import icFavouriteInactive from '@assets/TabBar/icFavoriteInactive.png';
import icDelete from '@assets/icons/icDelete.png';
import icEdit from '@assets/icons/icEdit.png';
import Routes from '@constants/routes';
import ArticlesActions from '@redux/articles/actions';
import { validatorHTML } from '@utils/htmlUtils';
import { getAvatar } from '@constants/iconsConstants';

import './i18n';

import Comment from './components/Comment';
import styles from './styles';
import testIds from './testIds';

interface Props extends ArticleInParams {}

function DetailArticle({ route }: Props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    title,
    description,
    updatedAt,
    body,
    favoritesCount,
    slug,
    author: { image, username, following },
    tagList
  } = route?.params?.article;

  const [favoriteCount, setFavoriteCount] = useState(favoritesCount || 0);
  const [isFollow, setIsFollow] = useState(following);
  const [comment, setCommment] = useState<string>('');

  const comments = useSelector((state: State) => state.comments.comments);
  const currentUser = useSelector((state: State) => state.auth.currentUser);
  const EXTRAHEIGHT = isIos ? 400 : 190;
  const handleToggleFavorite = () => {
    if (favoriteCount > favoritesCount) setFavoriteCount(favoriteCount - 1);
    else setFavoriteCount(favoriteCount + 1);
  };
  const handleDeleteArticle = () => dispatch(ArticlesActions.deleteArticle(slug));
  const handleEditArticle = useCallback(
    () =>
      navigation?.navigate(Routes.EditArticle, {
        article: { ...route?.params?.article, isEditArticle: true }
      }),
    [navigation, route]
  );
  const handleRedirectToLogin = useCallback(() => {
    navigation?.navigate(Routes.Login);
  }, [navigation]);
  const renderMessage = useCallback(
    () => (
      <ScrollView>
        {comments
          ? comments.comments.map((item: iComment) => (
              <Comment commentContent={item} key={item.id} articleSlug={slug} />
            ))
          : currentUser && (
              <View style={styles.noCommentsContainer}>
                <CustomText green style={styles.noCommentsText}>
                  {i18next.t('DETAIL_ARTICLE:NO_COMMENTS_TEXT')}
                </CustomText>
              </View>
            )}
      </ScrollView>
    ),
    [comments, currentUser, slug]
  );
  const handleClickFollow = useCallback(() => {
    dispatch(ProfileActions.followUser(username, isFollow));
    setIsFollow(!isFollow);
  }, [dispatch, isFollow, username]);
  const renderIcons = () => (
    <View style={styles.interactionButtons}>
      <TouchableOpacity
        testID={testIds.followButton}
        style={styles.interactionButton}
        onPress={handleClickFollow}>
        <Image
          style={[styles.interactionButtonImage, isFollow && styles.greenTint]}
          source={icAddInactive}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        testID={testIds.favoriteButton}
        style={styles.interactionButton}
        onPress={handleToggleFavorite}>
        <Image
          style={[
            styles.interactionButtonImage,
            favoriteCount > favoritesCount ? styles.greenTint : styles.interactionButtonImage
          ]}
          source={icFavouriteInactive}
          resizeMode="contain"
        />
        {!!favoriteCount && (
          <CustomText gray xsmall green={favoriteCount > favoritesCount}>{`(${favoriteCount})`}</CustomText>
        )}
      </TouchableOpacity>
    </View>
  );
  const renderTags = () => (
    <>
      {tagList.map((tag: string, index: number) => (
        <Text key={index} style={styles.tag}>
          {tag}
        </Text>
      ))}
    </>
  );
  useEffect(() => {
    dispatch(ActionComments.getComments(slug));
  }, [dispatch, slug]);

  const handleSubmit = useCallback(() => {
    if (currentUser) {
      dispatch(ActionComments.createComment(comment, slug));
      setCommment('');
    }
  }, [comment, currentUser, dispatch, slug]);

  const renderInputMessage = useCallback(
    () => (
      <>
        {currentUser ? (
          <CustomInputMessage
            onChangeEventMessage={setCommment}
            minLengthMessage={5}
            maxLengthMessage={300}
            numberOfLinesMessage={10}
            messageRules={{
              ...validateMinLength(5),
              ...validateMaxLength(300)
            }}
            showPlaceholderMessage
            styleInputText={styles.inputComment}
            iconButton={icSendMessage}
            onPressButton={handleSubmit}
            placeHolder={i18next.t('DETAIL_ARTICLE:PLACE_HOLDER_INPUT')}
          />
        ) : (
          <View style={styles.noInputAuth}>
            <CustomTextPressable
              text={i18next.t('DETAIL_ARTICLE:NO_AUTHENTICATED')}
              onPress={handleRedirectToLogin}
            />
          </View>
        )}
      </>
    ),
    [currentUser, handleRedirectToLogin, handleSubmit]
  );
  return (
    <>
      <KeyboardAwareScrollView
        bounces={false}
        extraHeight={EXTRAHEIGHT}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets
        enableAutomaticScroll
        enableResetScrollToCoords
        enableOnAndroid
        scrollEnabled
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentStyle}
        style={styles.scrollContainer}>
        <View style={styles.container}>
          {currentUser?.user?.username === username && (
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
              <Image source={image && getAvatar(image)} style={styles.image} />
              <View>
                <CustomText center green>
                  {username}
                </CustomText>
                <CustomText center label>
                  {formatDate(updatedAt)}
                </CustomText>
              </View>
            </View>
            {!!tagList.length && <View style={styles.tagContainer}>{renderTags()}</View>}
            <View style={styles.separator} />
            <CustomText>{title}</CustomText>
            <CustomText label>{description}</CustomText>
            <View style={styles.bodyContainer}>{validatorHTML(body)}</View>
            {currentUser && renderIcons()}
          </View>
        </View>
        {renderMessage()}
        {renderInputMessage()}
      </KeyboardAwareScrollView>
    </>
  );
}

export default DetailArticle;
