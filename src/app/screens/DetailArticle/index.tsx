import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { isIos } from '@constants/platform';
import { validateMinLength, validateMaxLength } from '@utils/validations/validateUtils';
import CustomText from '@components/CustomText';
import { Navigation } from '@interfaces/navigation';
import { formatDate } from '@utils/dateUtils';
import icAddInactive from '@assets/TabBar/icAddpostInactive.png';
import icAddActive from '@assets/TabBar/icAddpostActive.png';
import icFavouriteInactive from '@assets/TabBar/icFavoriteInactive.png';
import icFavouriteActive from '@assets/TabBar/icFavoriteActive.png';
import icDefaultArticleImage from '@assets/icons/icDefaultArticleImage.jpg';
import CustomInputMessage from '@components/CustomInputMessage';
import Actioncreators from '@redux/comments/actions';
import { State } from '@interfaces/reduxInterfaces';
import i18next from 'i18next';
import { iComment } from '@interfaces/commentInterfaces';

import Comment from './Components/Comment';
import styles from './styles';
import testIds from './testIds';

interface Props extends Navigation {}

function DetailArticle({ route }: Props) {
  const dispatch = useDispatch();
  const {
    title,
    description,
    updatedAt,
    body,
    favoritesCount,
    author: { image, username, following },
    tagList
  } = route?.params?.article;
  const [favoriteCount, setFavoriteCount] = useState(favoritesCount || 0);
  const [isFollow, setIsFollow] = useState(following);
  const { comments } = useSelector((state: State) => state.comments);
  const currentUser = useSelector((state: State) => state.auth.currentUser);
  console.log(currentUser);
  const EXTRAHEIGHT = isIos ? 400 : 190;
  const handleToggleFavorite = () => {
    if (favoriteCount > favoritesCount) setFavoriteCount(favoriteCount - 1);
    else setFavoriteCount(favoriteCount + 1);
  };

  const renderMessage = useCallback(
    () => (
      <>
        <ScrollView>
          {comments.length
            ? comments.map((item: iComment) => <Comment commentContent={item} key={item.id} />)
            : currentUser && (
                <View style={{ marginVertical: 20 }}>
                  <CustomText green style={{ fontSize: 12, textAlign: 'center' }}>
                    No hay comentarios aún, !Haz el primero!
                  </CustomText>
                </View>
              )}
        </ScrollView>
      </>
    ),
    [comments, currentUser]
  );

  useEffect(() => {
    dispatch(Actioncreators.getComments());
  }, [dispatch]);
  const renderInputMessage = useCallback(
    () => (
      <>
        {currentUser ? (
          <CustomInputMessage
            // onChangeEventMessage={handleContentSizeChange}
            // messageLabel={'Comentarios'}
            minLengthMessage={5}
            maxLengthMessage={300}
            numberOfLinesMessage={10}
            messageRules={{
              ...validateMinLength(5),
              ...validateMaxLength(300)
            }}
            showPlaceholderMessage
            styleInputText={styles.inputComment}
          />
        ) : (
          <View
            style={{
              marginVertical: 20,
              width: '90%',
              alignSelf: 'center',
              borderRadius: 15,
              backgroundColor: 'white',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <CustomText green>Registrate para poder comentar</CustomText>
          </View>
        )}
      </>
    ),
    [currentUser]
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
        style={styles.scroll}>
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
            <View style={styles.bodyContainer}>
              <CustomText label>{body}</CustomText>
            </View>
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
        {renderMessage()}
        {renderInputMessage()}
        {/* <CustomInputMessage
          // onChangeEventMessage={handleContentSizeChange}
          // messageLabel={'Comentarios'}
          minLengthMessage={5}
          maxLengthMessage={300}
          numberOfLinesMessage={10}
          messageRules={{
            ...validateMinLength(5),
            ...validateMaxLength(300)
          }}
          showPlaceholderMessage
          styleInputText={styles.inputComment}
        /> */}
      </KeyboardAwareScrollView>
    </>
  );
}

export default DetailArticle;
