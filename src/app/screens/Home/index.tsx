import React, { useCallback, useRef, useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ListRenderItem, View, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import { State } from '@interfaces/reduxInterfaces';
import { Article } from '@interfaces/articlesInterface';
import { ListKeyExtractor } from '@interfaces/miscelanious';
import CustomText from '@components/CustomText';
import { THRESHOLD } from '@constants/pagination';
import TabList from '@components/TabList';
import ConfirmationModal from '@components/ConfirmationModal';
import ScreenWithLoader from '@components/ScreenWithLoader';
import ArticleItem from '@components/ArticleItem';
import ArticlesActions from '@redux/articles/actions';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';

import styles from './styles';
import './i18n';

function Home({ navigation }: Navigation) {
  const dispatch = useDispatch();
  const paginated = useRef(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [deleteArticleModal, setDeleteArticleModal] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<Article | null>(null);

  const articles = useSelector<State, Article[]>(state => state.articles.articlesList?.page || []);
  const myArticles = useSelector<State, Article[]>(state => state.articles.myArticlesList.articles || []);
  const loadingMyArticles = useSelector<State, boolean>(state => state.articles.myArticlesListLoading);
  const loading = useSelector<State, boolean>(state => state.articles.articlesListLoading);
  const currentUser = useSelector((state: State) => state.auth.currentUser);

  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);

  const handlePressArticle = useCallback(
    (article: Article) => navigation.navigate(Routes.DetailArticle, { article }),
    [navigation]
  );

  const onPressDeleteArticle = (item: Article) => {
    setDeleteArticleModal(true);
    setArticleToDelete(item);
  };

  const renderItem: ListRenderItem<Article> = useCallback(
    ({ item }) => (
      <ArticleItem
        item={item}
        onPress={handlePressArticle}
        showDeleteIcon={currentTab === 0 && currentUser !== null}
        onDeletePress={onPressDeleteArticle}
      />
    ),
    [currentTab, currentUser, handlePressArticle]
  );

  const keyExtractor: ListKeyExtractor<Article> = useCallback(({ slug }) => `${slug}`, []);

  const renderFooter = useCallback(
    () => (
      <View style={articles.length ? styles.separator : null}>
        {loading && paginated.current && <ActivityIndicator size="large" style={styles.indicator} />}
      </View>
    ),
    [loading, paginated, articles]
  );

  const getArticles = useCallback(() => {
    dispatch(ArticlesActions.getArticles());
  }, [dispatch]);

  const getMyArticles = useCallback(() => {
    dispatch(ArticlesActions.getMyArticles());
  }, [dispatch]);

  useEffect(() => {
    if (!paginated.current && !!articles.length) paginated.current = true;
  }, [loading, paginated, articles]);

  useEffect(() => {
    if (currentTab === 1) {
      getArticles();
    } else {
      getMyArticles();
    }
  }, [currentTab, getArticles, getMyArticles]);

  const handlePressTab = (index: number) => setCurrentTab(index);

  const showDeleteModal = () => {
    setDeleteArticleModal(false);
    setArticleToDelete(null);
  };
  const onConfirmDeleteAticle = () => {
    const { slug = '' } = articleToDelete || {};
    dispatch(ArticlesActions.deleteArticle(slug));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ConfirmationModal
        title={i18next.t('HOME:CONFIRM_DELETE_ARTICLE')}
        showModal={deleteArticleModal}
        onCancel={showDeleteModal}
        onConfirm={onConfirmDeleteAticle}
      />
      <CustomText center big darkBlue bold style={styles.title}>
        {i18next.t('HOME:APP_NAME')}
      </CustomText>
      {currentUser && (
        <TabList
          tabs={[i18next.t('HOME:FIRST_TAB'), i18next.t('HOME:SECOND_TAB')]}
          onPressTab={handlePressTab}
        />
      )}
      {currentTab === 0 && currentUser ? (
        <>
          <ScreenWithLoader loading={loadingMyArticles && !myArticles.length} withInitialLoading={false}>
            {myArticles.length ? (
              <FlatList<Article>
                style={styles.container}
                data={myArticles}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ItemSeparatorComponent={renderSeparator}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={renderFooter}
              />
            ) : (
              <CustomText center style={styles.titleEmptyArticles}>
                {i18next.t('HOME:EMPTY_ARTICLES')}
              </CustomText>
            )}
          </ScreenWithLoader>
        </>
      ) : (
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
      )}
    </SafeAreaView>
  );
}

export default Home;
