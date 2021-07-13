import React, { useCallback, useRef, useEffect } from 'react';
import { SafeAreaView, FlatList, ListRenderItem, View, ActivityIndicator } from 'react-native';
import { /* useDispatch,  */ useSelector } from 'react-redux';
/* import ArticlesActions, { TARGETS } from '@redux/articles/actions'; */
import { State } from '@interfaces/reduxInterfaces';
import { Article } from '@interfaces/articlesInterface';
import { THRESHOLD } from '@constants/pagination';
import ScreenWithLoader from '@components/ScreenWithLoader';

import ArticleItem from './components/ArticleItem';
import styles from './styles';

function Articles() {
  /* const dispatch = useDispatch(); */
  const paginated = useRef(false);

  const articles = useSelector<State, Article[]>(state => state.articles.articlesList);
  const loading = useSelector<State, boolean>(state => state.articles.articlesListLoading);

  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);

  const renderItem: ListRenderItem<Article> = useCallback(({ item }) => <ArticleItem item={item} />, []);

  const renderFooter = useCallback(
    () => (
      <View style={articles.length ? styles.separator : null}>
        {loading && paginated.current ? <ActivityIndicator size="large" style={styles.indicator} /> : null}
      </View>
    ),
    [loading, paginated, articles.length]
  );

  /* const getArticles = useCallback(() => {
    dispatch(ArticlesActions.getArticles());
  }, [dispatch]);

  useEffect(() => {
    getArticles();
    return () => {
      dispatch(ArticlesActions.clearTarget(TARGETS.ARTICLES_LIST));
    };
  }, [dispatch, getArticles]); */

  useEffect(() => {
    if (!paginated.current && !!articles.length) paginated.current = true;
  }, [loading, paginated, articles.length]);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenWithLoader
        loading={loading && !articles.length}
        refreshed={paginated.current}
        withInitialLoading={false}>
        <FlatList<Article>
          style={styles.container}
          data={articles}
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

export default Articles;
