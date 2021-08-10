import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { validateMinLength, validateMaxLength } from '@utils/validations/validateUtils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomText from '@components/CustomText';
import { Navigation } from '@interfaces/navigation';
import { formatDate } from '@utils/dateUtils';
import icAddInactive from '@assets/TabBar/icAddpostInactive.png';
import icAddActive from '@assets/TabBar/icAddpostActive.png';
import icFavouriteInactive from '@assets/TabBar/icFavoriteInactive.png';
import icFavouriteActive from '@assets/TabBar/icFavoriteActive.png';
import icDefaultArticleImage from '@assets/icons/icDefaultArticleImage.jpg';
import CustomInputMessage from '@app/components/CustomInputMessage';

import styles from './styles';
import testIds from './testIds';

interface Props extends Navigation {}

function DetailArticle({ route }: Props) {
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
  const handleToggleFavorite = () => {
    if (favoriteCount > favoritesCount) setFavoriteCount(favoriteCount - 1);
    else setFavoriteCount(favoriteCount + 1);
  };
  console.log(description);

  return (
    <>
      <KeyboardAwareScrollView
        extraHeight={400}
        showsVerticalScrollIndicator={false}
        // ref={scrollViewRef}
        // behavior="position"
        automaticallyAdjustContentInsets
        enableAutomaticScroll
        enableResetScrollToCoords
        enableOnAndroid
        scrollEnabled
        contentInsetAdjustmentBehavior="automatic"
        // onContentSizeChange={handleContentSizeChange}
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
            <CustomText label>{body}</CustomText>
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
        <ScrollView>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '92%',
              alignSelf: 'center',
              padding: 10,
              backgroundColor: 'white',
              // height: 100,
              justifyContent: 'space-between',
              borderRadius: 20
            }}>
            <View style={{ width: '30%' }}>
              <Image
                style={{ height: 20, width: 20, borderRadius: 20 }}
                resizeMode="contain"
                source={icDefaultArticleImage}
              />
              <Text style={{ fontSize: 10 }}>React</Text>
              <Text style={{ fontSize: 10 }}>Mon Aug 09 2021</Text>
            </View>
            <View style={{ width: '70%' }}>
              <Text style={{ fontSize: 12 }}>
                Muy Bueno me encanta, todos los colores en una mano y los recibos en la otra !
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '92%',
              alignSelf: 'center',
              padding: 10,
              backgroundColor: 'white',
              // height: 100,
              justifyContent: 'space-between',
              borderRadius: 20,
              marginVertical: 10
            }}>
            <View style={{ width: '30%' }}>
              <Image
                style={{ height: 20, width: 20, borderRadius: 20 }}
                resizeMode="contain"
                source={icDefaultArticleImage}
              />
              <Text style={{ fontSize: 10 }}>React</Text>
              <Text style={{ fontSize: 10 }}>Mon Aug 09 2021</Text>
            </View>
            <View style={{ width: '70%' }}>
              <Text style={{ fontSize: 12 }}>
                Muy Bueno me encanta, todos los colores en una mano y los recibos en la otra !
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '92%',
              alignSelf: 'center',
              padding: 10,
              backgroundColor: 'white',
              // height: 100,
              justifyContent: 'space-between',
              borderRadius: 20
            }}>
            <View style={{ width: '30%' }}>
              <Image
                style={{ height: 20, width: 20, borderRadius: 20 }}
                resizeMode="contain"
                source={icDefaultArticleImage}
              />
              <Text style={{ fontSize: 10 }}>React</Text>
              <Text style={{ fontSize: 10 }}>Mon Aug 09 2021</Text>
            </View>
            <View style={{ width: '70%' }}>
              <Text style={{ fontSize: 12 }}>
                Muy Bueno me encanta, todos los colores en una mano y los recibos en la otra !
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '92%',
              alignSelf: 'center',
              padding: 10,
              backgroundColor: 'white',
              // height: 100,
              justifyContent: 'space-between',
              borderRadius: 20,
              marginVertical: 10
            }}>
            <View style={{ width: '30%' }}>
              <Image
                style={{ height: 20, width: 20, borderRadius: 20 }}
                resizeMode="contain"
                source={icDefaultArticleImage}
              />
              <Text style={{ fontSize: 10 }}>React</Text>
              <Text style={{ fontSize: 10 }}>Mon Aug 09 2021</Text>
            </View>
            <View style={{ width: '70%' }}>
              <Text style={{ fontSize: 12 }}>
                Muy Bueno me encanta, todos los colores en una mano y los recibos en la otra !
              </Text>
            </View>
          </View>
        </ScrollView>
        {/* <View style={styles.upup}> */}

        {/* </View> */}
        {/* </KeyboardAwareScrollView> */}
        {/* <KeyboardAwareScrollView behavior="position"> */}
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
          styleInputText={{ height: 150 }}
        />
      </KeyboardAwareScrollView>
    </>
  );
}

export default DetailArticle;
