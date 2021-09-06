import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import { State } from '@interfaces/reduxInterfaces';
import CustomButton from '@components/CustomButton';
import detailArticleStyles from '@screens/DetailArticle/styles';
import icClear from '@assets/icons/icClear.png';
import useNavigation from '@components/AppNavigator/helper';
import ArticleActions from '@redux/articles/actions';

import styles from './styles';
import Checkbox from './components/Checkbox';
import testIds from './testIds';
import './i18n';

function Tags() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const tags = useSelector<State, string[]>(state => state.articles.tagList || []);
  const storeSelectedTags = useSelector<State, string[]>(state => state.articles.selectedTags || []);
  const [selectedTags, setSelectedTags] = useState<string[]>(storeSelectedTags);

  const handleGoHome = useCallback(() => {
    navigation?.goBack();
  }, [navigation]);

  const handleFilterByTags = useCallback(() => {
    dispatch(ArticleActions.filterByTags(selectedTags));
  }, [dispatch, selectedTags]);

  const handlePress = (option: string) => {
    const optionSelected = selectedTags.find(tag => option === tag);
    if (optionSelected) setSelectedTags(selectedTags.filter(tag => tag !== option));
    else setSelectedTags([...selectedTags, option]);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          testID={testIds.clearFiltersButton}
          style={[detailArticleStyles.interactionButton, styles.clearButton]}
          onPress={() => setSelectedTags([])}>
          <Image
            style={[detailArticleStyles.interactionButtonImage, detailArticleStyles.greenTint]}
            source={icClear}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.containerTags}>
          {tags.map((tag: string, index: number) => {
            const optionSelected = selectedTags.find(option => option === tag);
            return (
              <Checkbox
                key={`key-${tag}-${index}`}
                selected={!!optionSelected}
                option={tag}
                onPress={handlePress}
              />
            );
          })}
        </View>
      </View>
      <View>
        <CustomButton
          primary
          disabled={selectedTags === storeSelectedTags}
          testID={testIds.applyFiltersButton}
          onPress={handleFilterByTags}
          title={i18next.t('TAGS:APPLY_FILTERS')}
        />
        <CustomButton
          secondary
          testID={testIds.cancelButton}
          onPress={handleGoHome}
          title={i18next.t('TAGS:CANCEL')}
        />
      </View>
    </View>
  );
}

export default Tags;
