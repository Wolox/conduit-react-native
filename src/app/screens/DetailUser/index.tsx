import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import ProfileActions from '@redux/profile/actions';
import WithHeader from '@components/WithHeader';
import CustomText from '@components/CustomText';
import TabList from '@components/TabList';
import { getAvatar } from '@constants/iconsConstants';
import icDefaultArticleImage from '@assets/icons/icDefaultArticleImage.jpg';
import { ArticlesState, State } from '@interfaces/reduxInterfaces';
import { Article, Author } from '@interfaces/articlesInterface';
import ArticlesActions from '@redux/articles/actions';

import RenderContent from './components/RenderContent';
import './i18n';
import styles from './styles';

type Props = {
  route: {
    params: {
      user: string;
    };
  };
};

export default function DetailUser({
  route: {
    params: { user }
  }
}: Props) {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(0);
  const articlesByAuthor = useSelector<State, Article[]>(
    state => state.articles.articlesAuthor.articles || []
  );
  const favoritedByAuthor = useSelector<State, Article[]>(
    state => state.articles.favoritedAuthor.articles || []
  );
  const { articlesAuthorLoading, favoritedAuthorLoading } = useSelector<State, ArticlesState>(
    state => state.articles || []
  );
  const userProfile = useSelector<State, Author>(state => state.profile?.profileUser?.profile);
  const { bio, image, username } = userProfile || {};
  useEffect(() => {
    dispatch(ProfileActions.getProfileUser(user));
  }, [dispatch, user]);
  const handlePressTab = (index: number) => setCurrentTab(index);

  const getArticlesByAuthor = useCallback(async () => {
    await dispatch(ArticlesActions.getArticleByAuthor(user));
  }, [dispatch, user]);

  const getFavoritedByAuthor = useCallback(async () => {
    await dispatch(ArticlesActions.getFavoritedByAuthor(user));
  }, [dispatch, user]);

  useEffect(() => {
    if (currentTab === 1) {
      getFavoritedByAuthor();
    } else {
      getArticlesByAuthor();
    }
  }, [currentTab, getArticlesByAuthor, getFavoritedByAuthor]);

  return (
    <WithHeader
      title={i18next.t(`app:${username}`)}
      withAvatar
      avatar={image ? getAvatar(image) : icDefaultArticleImage}>
      <View style={styles.containerBio}>
        <CustomText green medium center>
          {i18next.t('DETAIL_USER:DESCRIPTION')}
        </CustomText>
        <CustomText center style={styles.description}>
          {bio?.length ? bio : i18next.t('DETAIL_USER:DESCRIPTION_BLANK')}
        </CustomText>
      </View>
      <TabList
        tabs={[i18next.t('DETAIL_USER:MY_ARTICLES'), i18next.t('DETAIL_USER:FAVORITED_ARTICLES')]}
        onPressTab={handlePressTab}
      />
      {currentTab === 0
        ? articlesByAuthor && <RenderContent loading={articlesAuthorLoading} data={articlesByAuthor} />
        : favoritedByAuthor && <RenderContent loading={favoritedAuthorLoading} data={favoritedByAuthor} />}
    </WithHeader>
  );
}
