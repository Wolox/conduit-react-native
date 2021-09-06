import React from 'react';
import { SafeAreaView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { actionCreators as FeedBackActions } from '@redux/feedback/actions';
import { Nullable } from '@interfaces/globalInterfaces';
import { FullScreenModal } from '@interfaces/reduxInterfaces';

import styles, { backgroundColor } from './styles';

interface Props {
  content: Nullable<FullScreenModal>;
}
function FullScreenModalReducer({ content }: Props) {
  const dispatch = useDispatch();

  const onPress = () => {
    if (!content?.noCanClose) {
      if (content?.onPressOut) {
        content?.onPressOut();
      } else if (!content?.onPressOut) {
        dispatch(FeedBackActions.hideModal());
      }
    }
  };
  return content ? (
    <>
      <StatusBar backgroundColor={backgroundColor} animated={false} />
      <TouchableWithoutFeedback onPress={onPress} style={styles.allContainer}>
        <SafeAreaView style={styles.container}>{content.data}</SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  ) : null;
}

export default FullScreenModalReducer;
