import React, { useCallback, useRef, useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ListRenderItem, View, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import { State } from '@interfaces/reduxInterfaces';
import { Article } from '@interfaces/articlesInterface';
import { ListKeyExtractor } from '@interfaces/miscelanious';
import { Navigation } from '@interfaces/navigation';
import CustomText from '@components/CustomText';
import TabList from '@components/TabList';
import ScreenWithLoader from '@components/ScreenWithLoader';
import ArticleItem from '@components/ArticleItem';
import CustomButton from '@components/CustomButton';
import { THRESHOLD } from '@constants/pagination';
import ArticlesActions, { TARGETS } from '@redux/articles/actions';
import Routes from '@constants/routes';
import icSort from '@assets/icons/icSort.png';

import styles from './styles';
import './i18n';

function Home({ navigation }: Navigation) {
  const dispatch = useDispatch();
  const paginated = useRef(false);
  const [currentTab, setCurrentTab] = useState(0);

  const articles = useSelector<State, Article[]>(state => state.articles.articlesList?.page || []);
  const loading = useSelector<State, boolean>(state => state.articles.articlesListLoading);
  const currentUser = useSelector((state: State) => state.auth.currentUser);

  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);

  const handlePressArticle = useCallback(
    (article: Article) => navigation.navigate(Routes.DetailArticle, { article }),
    [navigation]
  );

  const handlePressTagsButton = useCallback(() => navigation.navigate(Routes.Tags), [navigation]);

  const renderItem: ListRenderItem<Article> = useCallback(
    ({ item }) => <ArticleItem item={item} onPress={handlePressArticle} />,
    [handlePressArticle]
  );

  const keyExtractor: ListKeyExtractor<Article> = useCallback(
    ({ slug, author: { username } }, index) => `${index}-${slug}-${username}`,
    []
  );

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

  useEffect(() => {
    getArticles();
    return () => {
      dispatch(ArticlesActions.clearTarget(TARGETS.ARTICLES_LIST));
    };
  }, [dispatch, getArticles]);

  useEffect(() => {
    if (!paginated.current && !!articles.length) paginated.current = true;
  }, [loading, paginated, articles]);

  useEffect(() => {
    dispatch(ArticlesActions.getTags());
  }, [dispatch]);

  const handlePressTab = (index: number) => setCurrentTab(index);

  return (
    <SafeAreaView style={styles.container}>
      <CustomText center big darkBlue bold style={styles.title}>
        {i18next.t('HOME:APP_NAME')}
      </CustomText>
      {currentUser && (
        <TabList
          tabs={[i18next.t('HOME:FIRST_TAB'), i18next.t('HOME:SECOND_TAB')]}
          onPressTab={handlePressTab}
        />
      )}
      <View style={styles.containerTagButton}>
        <CustomButton
          link
          icon={icSort}
          title={i18next.t('HOME:TAGS')}
          style={styles.tagButton}
          onPress={handlePressTagsButton}
        />
      </View>
      {currentTab === 0 && currentUser ? (
        <CustomText center style={styles.titleEmptyArticles}>
          {i18next.t('HOME:EMPTY_ARTICLES')}
        </CustomText>
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
