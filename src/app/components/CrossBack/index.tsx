import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { NavigationProp } from '@react-navigation/core';
import actionCreators from '@redux/articles/actions';
import { onResetStack } from '@utils/navUtils';

import styles from './styles';

type Props = {
  navigation: NavigationProp<any>;
};

export default function CrossBack({ navigation }: Props) {
  const dispatch = useDispatch();
  const handlePress = () => {
    setTimeout(async () => {
      await onResetStack(navigation, []);
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
