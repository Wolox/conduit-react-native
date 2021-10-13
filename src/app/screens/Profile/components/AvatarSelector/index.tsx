import React from 'react';
import { View, FlatList, ImageSourcePropType, Image, ListRenderItem, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { actionCreators as FeedbackActions } from '@redux/feedback/actions';
import { ListKeyExtractor } from '@interfaces/miscelanious';
import { avatarsIcons } from '@constants/iconsConstants';

import styles from './styles';

interface ItemAvatarSelector {
  name: string;
  icon: ImageSourcePropType;
}

interface AvatarSelectorProps {
  selected?: string;
  setSelected: (name: string) => void;
}

function AvatarSelector({ selected, setSelected }: AvatarSelectorProps) {
  const dispatch = useDispatch();
  const renderItem: ListRenderItem<ItemAvatarSelector> = ({ item }) => {
    const handleOnPress = () => {
      setSelected(item.name);
      dispatch(FeedbackActions.hideModal());
    };
    const isSelected = selected === item.name;
    return (
      <TouchableOpacity onPress={handleOnPress} style={styles.itemStyle}>
        <View style={isSelected && styles.selectedItem} />
        <Image source={item.icon} style={styles.avatarStyle} resizeMode="contain" />
      </TouchableOpacity>
    );
  };
  const keyExtractor: ListKeyExtractor<ItemAvatarSelector> = item => item.name;
  return (
    <View style={styles.container}>
      <FlatList data={avatarsIcons} renderItem={renderItem} numColumns={2} keyExtractor={keyExtractor} />
    </View>
  );
}

export default AvatarSelector;
