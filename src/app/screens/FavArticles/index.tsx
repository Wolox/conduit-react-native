import React, { useEffect, useCallback } from 'react';
import { SafeAreaView, FlatList, ListRenderItem, View } from 'react-native';
import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import CustomText from '@components/CustomText';
import ScreenWithLoader from '@components/ScreenWithLoader';
import ArticleItem from '@components/ArticleItem';
import useNavigation from '@components/AppNavigator/helper';
import Routes from '@constants/routes';
import { ListKeyExtractor } from '@interfaces/miscelanious';
import { FavouritesState, State } from '@interfaces/reduxInterfaces';
import { Article } from '@interfaces/articlesInterface';
import { CurrentUser } from '@interfaces/authInterfaces';
import FavouritesActions from '@redux/favourites/actions';

import './i18n';

import styles from './styles';

export default function FavArticles() {
  const navigation = useNavigation();
  const {
    favouritesarticlesList: { articles },
    favouritesarticlesListLoading
  } = useSelector<State, FavouritesState>(state => state.favourites);
  const currentUser = useSelector<State, CurrentUser>(state => state.auth.currentUser as CurrentUser);
  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);
  const handlePressArticle = useCallback(
    (article: Article) => navigation?.navigate(Routes.DetailArticle, { article }),
    [navigation]
  );
  const renderItem: ListRenderItem<Article> = useCallback(
    ({ item }) => <ArticleItem item={item} onPress={handlePressArticle} />,
    [handlePressArticle]
  );
  const keyExtractor: ListKeyExtractor<Article> = useCallback(({ slug }) => `${slug}`, []);
  const dispatch = useDispatch();
  const renderMessage = useCallback(
    () => (
      <>
        {articles?.length ? (
          <FlatList<Article>
            data={articles}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.noItemMessage}>
            <CustomText>{i18next.t('FAV_ARTICLES:NO_ARTICLES')}</CustomText>
          </View>
        )}
      </>
    ),
    [articles, keyExtractor, renderItem, renderSeparator]
  );
  useEffect(() => {
    dispatch(FavouritesActions.getFavouritesArticles(currentUser));
  }, [dispatch, currentUser]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusNavBar}>
        <View style={styles.textTitle}>
          <CustomText medium>{i18next.t('FAV_ARTICLES:FAVORITED_ARTICLES')}</CustomText>
        </View>
      </View>
      <ScreenWithLoader loading={favouritesarticlesListLoading} withInitialLoading={false}>
        {renderMessage()}
      </ScreenWithLoader>
    </SafeAreaView>
  );
}
