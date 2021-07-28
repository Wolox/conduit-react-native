import React, { useCallback, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, FlatList, ListRenderItem, View, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import { State } from '@interfaces/reduxInterfaces';
import { Article } from '@interfaces/articlesInterface';
import { ListKeyExtractor } from '@interfaces/miscelanious';
import { THRESHOLD } from '@constants/pagination';
import Routes from '@constants/routes';
import ScreenWithLoader from '@components/ScreenWithLoader';
import CustomButton from '@components/CustomButton';
import ArticlesActions, { TARGETS } from '@redux/articles/actions';

import ArticleItem from './components/ArticleItem';
import styles from './styles';
import './i18n';

function Home() {
  const dispatch = useDispatch();
  const paginated = useRef(false);
  const navigation = useNavigation();

  const articles = useSelector<State, Article[]>(state => state.articles.articlesList?.page || []);
  const loading = useSelector<State, boolean>(state => state.articles.articlesListLoading);

  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);

  const renderItem: ListRenderItem<Article> = useCallback(({ item }) => <ArticleItem item={item} />, []);

  const keyExtractor: ListKeyExtractor<Article> = useCallback(({ slug }) => `${slug}`, []);

  const renderFooter = useCallback(
    () => (
      <View style={articles.length ? styles.separator : null}>
        {loading && paginated.current && <ActivityIndicator size="large" style={styles.indicator} />}
      </View>
    ),
    [loading, paginated, articles]
  );

  const goToNewArticle = () => navigation.navigate(Routes.NewArticle);

  const getArticles = useCallback(() => {
    dispatch(ArticlesActions.getArticles());
  }, [dispatch]);

  useEffect(() => {
    getArticles();
    return () => {
      dispatch(ArticlesActions.clearTarget(TARGETS.ARTICLES_LIST));
    };
  }, [dispatch, getArticles]);

  useEffect(() => {
    if (!paginated.current && !!articles.length) paginated.current = true;
  }, [loading, paginated, articles]);

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        style={styles.createButton}
        primary
        title={i18next.t('HOME:NEW_ARTICLE')}
        onPress={goToNewArticle}
      />
      <ScreenWithLoader
        loading={loading && !articles.length}
        refreshed={paginated.current}
        withInitialLoading={false}>
        <FlatList<Article>
          style={styles.container}
          data={articles}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          onEndReachedThreshold={THRESHOLD}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderFooter}
        />
      </ScreenWithLoader>
    </SafeAreaView>
  );
}

export default Home;
