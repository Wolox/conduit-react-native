import useNavigation from '@app/components/AppNavigator/helper';
import ArticleItem from '@app/components/ArticleItem';
import CustomText from '@app/components/CustomText';
import ScreenWithLoader from '@app/components/ScreenWithLoader';
import Routes from '@constants/routes';
import { Article } from '@interfaces/articlesInterface';
import { ListKeyExtractor } from '@interfaces/miscelanious';
import i18next from 'i18next';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import styles from '../styles';

interface IrenderContent {
  loading: boolean;
  data: Article[];
}

const RenderContent = ({ loading, data }: IrenderContent) => {
  const navigation = useNavigation();
  const renderSeparator = useCallback(() => <View style={styles.separator} />, []);
  const handlePressArticle = useCallback(
    (article: Article) => navigation?.navigate(Routes.DetailArticle, { article }),
    [navigation]
  );
  const keyExtractor: ListKeyExtractor<Article> = useCallback(
    ({ slug, author }, index) => `${index}-${slug}-${author.username}`,
    []
  );
  const renderItem: ListRenderItem<Article> = useCallback(
    ({ item }) => <ArticleItem item={item} onPress={handlePressArticle} />,
    [handlePressArticle]
  );
  const RenderEmpty = () => (
    <CustomText center style={styles.titleEmptyArticles}>
      {i18next.t('HOME:EMPTY_ARTICLES')}
    </CustomText>
  );

  return (
    <ScreenWithLoader loading={loading} withInitialLoading={false}>
      <FlatList<Article>
        style={styles.containerArticles}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<RenderEmpty />}
      />
    </ScreenWithLoader>
  );
};
export default RenderContent;
