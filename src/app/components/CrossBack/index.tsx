import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import actionCreators from '@redux/articles/actions';
import { onResetStack, useNavigationWithParams } from '@utils/navUtils';

import styles from './styles';

export default function CrossBack() {
  const navigion = useNavigationWithParams();

  const dispatch = useDispatch();
  const handlePress = () => {
    setTimeout(async () => {
      await onResetStack(navigion, []);
      await dispatch(actionCreators.getArticles());
    }, 500);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text>X</Text>
      </View>
    </TouchableOpacity>
  );
}
