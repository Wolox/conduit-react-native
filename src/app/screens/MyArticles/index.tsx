import React, { useCallback, useEffect } from 'react';
import { FlatList, ListRenderItem, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import ScreenWithLoader from '@components/ScreenWithLoader';
import CustomText from '@components/CustomText';
import useNavigation from '@components/AppNavigator/helper';
import ArticleItem from '@components/ArticleItem';
import Routes from '@constants/routes';
import { MyArticlesState, State } from '@interfaces/reduxInterfaces';
import { Article } from '@interfaces/articlesInterface';
import { ListKeyExtractor } from '@interfaces/miscelanious';
import MyActiclesActions from '@redux/myArticles/actions';
import { UserResponse } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';

import './i18n';
import styles from './styles';
import Header from './Header';

export default function MyArticles() {
  const navigation = useNavigation();
  const {
    myArticles: { articles },
    myArticlesLoading
  } = useSelector<State, MyArticlesState>(state => state.myArticles);
  const currentUser = useSelector<State, Nullable<UserResponse>>(state => state.auth.currentUser);
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
            <CustomText>{i18next.t('MY_ARTICLES:NO_ARTICLES')}</CustomText>
          </View>
        )}
      </>
    ),
    [keyExtractor, articles, renderItem, renderSeparator]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      dispatch(MyActiclesActions.getMyArticles(currentUser));
    }
  }, [currentUser, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScreenWithLoader loading={myArticlesLoading} withInitialLoading={false}>
        {renderMessage()}
      </ScreenWithLoader>
    </SafeAreaView>
  );
}
