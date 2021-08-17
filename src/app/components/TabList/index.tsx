import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';

interface Props {
  tabs: string[];
  onPressTab?: (index: number) => void;
}

function TabList({ tabs, onPressTab }: Props) {
  const [tabActive, setActiveTab] = useState(0);
  const handlePressTag = (index: number) => {
    setActiveTab(index);
    if (onPressTab) onPressTab(index);
  };

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <View style={styles.tabItems} key={`${tab}${index}`}>
          <TouchableOpacity
            style={[styles.tabContent, tabActive === index && styles.tabActive]}
            onPress={() => handlePressTag(index)}>
            <CustomText style={styles.tabTitle} center green={tabActive === index}>
              {tab}
            </CustomText>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

export default TabList;
