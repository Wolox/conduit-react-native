import React, { useCallback, memo, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomButton from '@components/CustomButton';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import ArticlesActions, { TARGETS } from '@redux/articles/actions';

import styles from './styles';

function Home() {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(AuthActions.logout()), [dispatch]);

  const getArticles = useCallback(() => {
    dispatch(ArticlesActions.getArticles());
  }, [dispatch]);

  useEffect(() => {
    getArticles();
    return () => {
      dispatch(ArticlesActions.clearTarget(TARGETS.ARTICLES_LIST));
    };
  }, [dispatch, getArticles]);

  return (
    <View style={styles.container}>
      <CustomButton onPress={handleLogout} green title="Logout!" style={styles.home} />
    </View>
  );
}

export default memo(Home);
