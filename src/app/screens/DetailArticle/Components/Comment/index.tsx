import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

export default function Comments() {
  return (
    <View style={styles.comment}>
      <View style={{ width: '30%' }}>
        <Image
          style={{ height: 20, width: 20, borderRadius: 20 }}
          resizeMode="contain"
          source={icDefaultArticleImage}
        />
        <Text style={{ fontSize: 10 }}>React</Text>
        <Text style={{ fontSize: 10 }}>Mon Aug 09 2021</Text>
      </View>
      <View style={{ width: '70%' }}>
        <Text style={{ fontSize: 12 }}>
          Muy Bueno me encanta, todos los colores en una mano y los recibos en la otra !
        </Text>
      </View>
    </View>
  );
}
