import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import ScreenWithLoader from '@components/ScreenWithLoader';
import { MyArticlesState, State } from '@interfaces/reduxInterfaces';
import { Article } from '@interfaces/articlesInterface';
import { ListKeyExtractor } from '@interfaces/miscelanious';
import MyActiclesActions from '@redux/myArticles/actions';
import CustomText from '@components/CustomText';
import ArticleItem from '@screens/Home/components/ArticleItem';

import './i18n';

import styles from './styles';
import Header from './Header';

export default function MyArticles() {
  const { myArticles, myArticlesLoading } = useSelector<State, MyArticlesState>(state => state.myArticles);
  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);
  const renderItem: ListRenderItem<Article> = useCallback(({ item }) => <ArticleItem item={item} />, []);
  const keyExtractor: ListKeyExtractor<Article> = useCallback(({ slug }) => `${slug}`, []);
  const renderMessage = useCallback(
    () => (
      <>
        {myArticles.length ? (
          <FlatList<Article>
            data={myArticles}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.noItemMessage}>
            <CustomText>{i18next.t('MY_ARTICLES:NO_ARTICLES')}</CustomText>
          </View>
        )}
      </>
    ),
    [keyExtractor, myArticles, renderItem, renderSeparator]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MyActiclesActions.getMyArticles());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScreenWithLoader loading={myArticlesLoading} withInitialLoading={false}>
        {renderMessage()}
      </ScreenWithLoader>
    </SafeAreaView>
  );
}
