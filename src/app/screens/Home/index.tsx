import React, { useCallback, memo } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import CustomButton from '@components/CustomButton';
import { actionCreators as AuthActions } from '@redux/auth/actions';

import styles from './styles';

function Home() {
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => dispatch(AuthActions.logout()), [dispatch]);
  return (
    <View style={styles.container}>
      <CustomButton onPress={handleLogout} green title="Logout!" style={styles.home} />
    </View>
  );
}

export default memo(Home);
