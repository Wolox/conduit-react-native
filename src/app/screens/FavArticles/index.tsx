import React, { useEffect, useCallback } from 'react';
import { SafeAreaView, FlatList, ListRenderItem, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import FavouritesActions from '@redux/favourites/actions';
import { State } from '@interfaces/reduxInterfaces';
import { Article } from '@interfaces/articlesInterface';
import ArticleItem from '@components/ArticleItem';
import { ListKeyExtractor } from '@interfaces/miscelanious';
import ScreenWithLoader from '@components/ScreenWithLoader';
import CustomText from '@components/CustomText';

import './i18n';
import styles from './styles';

export default function FavArticles() {
  const { favouritesarticlesList, favouritesarticlesListLoading } = useSelector<State, any>(
    state => state.favourites
  );
  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);
  const renderItem: ListRenderItem<Article> = useCallback(({ item }) => <ArticleItem item={item} />, []);
  const keyExtractor: ListKeyExtractor<Article> = useCallback(({ slug }) => `${slug}`, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FavouritesActions.getFavouritesArticles());
  }, [dispatch]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusNavBar}>
        <View style={styles.textTitle}>
          <CustomText medium>{i18next.t('FAV_ARTICLES:FAVOURITED_ARTICLES')}</CustomText>
        </View>
      </View>
      <ScreenWithLoader
        loading={favouritesarticlesListLoading || !favouritesarticlesList.length}
        withInitialLoading={false}>
        <FlatList<Article>
          style={styles.list}
          data={favouritesarticlesList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          showsVerticalScrollIndicator={false}
        />
      </ScreenWithLoader>
    </SafeAreaView>
  );
}
