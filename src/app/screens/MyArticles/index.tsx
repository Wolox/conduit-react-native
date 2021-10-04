import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import ScreenWithLoader from '@components/ScreenWithLoader';
import CustomText from '@components/CustomText';
import useNavigation from '@components/AppNavigator/helper';
import ArticleItem from '@components/ArticleItem';
import ConfirmationModal from '@components/ConfirmationModal';
import Routes from '@constants/routes';
import { MyArticlesState, State } from '@interfaces/reduxInterfaces';
import { Article } from '@interfaces/articlesInterface';
import { ListKeyExtractor } from '@interfaces/miscelanious';
import MyActiclesActions from '@redux/myArticles/actions';
import ArticlesActions from '@redux/articles/actions';
import { UserResponse } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';

import './i18n';

import styles from './styles';
import Header from './Header';

export default function MyArticles() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    myArticles: { articles },
    myArticlesLoading
  } = useSelector<State, MyArticlesState>(state => state.myArticles);
  const [deleteArticleModal, setDeleteArticleModal] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<Article | null>(null);

  const currentUser = useSelector<State, Nullable<UserResponse>>(state => state.auth.currentUser);
  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);
  const handlePressArticle = useCallback(
    (article: Article) => navigation?.navigate(Routes.DetailArticle, { article }),
    [navigation]
  );

  const onPressDeleteArticle = (item: Article) => {
    setDeleteArticleModal(true);
    setArticleToDelete(item);
  };
  const showDeleteModal = () => {
    setDeleteArticleModal(false);
    setArticleToDelete(null);
  };
  const onConfirmDeleteAticle = () => {
    // uncomment but the EP return a 500 error
    const { slug = '' } = articleToDelete || {};
    dispatch(ArticlesActions.deleteArticle(slug));
    setDeleteArticleModal(false);
  };

  const renderItem: ListRenderItem<Article> = useCallback(
    ({ item }) => (
      <ArticleItem
        item={item}
        onPress={handlePressArticle}
        showDeleteIcon={true}
        onDeletePress={onPressDeleteArticle}
      />
    ),
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
  useEffect(() => {
    if (currentUser) {
      dispatch(MyActiclesActions.getMyArticles(currentUser));
    }
  }, [currentUser, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ConfirmationModal
        title={i18next.t('HOME:CONFIRM_DELETE_ARTICLE')}
        showModal={deleteArticleModal}
        onCancel={showDeleteModal}
        onConfirm={onConfirmDeleteAticle}
      />
      <ScreenWithLoader loading={myArticlesLoading} withInitialLoading={false}>
        {renderMessage()}
      </ScreenWithLoader>
    </SafeAreaView>
  );
}
