import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/core';
import { onResetStack } from '@utils/navUtils';

import styles from './styles';

type Props = {
  navigation: NavigationProp<any>;
};

export default function CrossBack({ navigation }: Props) {
  return (
    <TouchableOpacity onPress={() => onResetStack(navigation, [])}>
      <View style={styles.container}>
        <Text>X</Text>
      </View>
    </TouchableOpacity>
  );
}
