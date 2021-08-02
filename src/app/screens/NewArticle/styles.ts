import { StyleSheet } from 'react-native';
import { green } from '@constants/colors';

const DEFAULT_SPACE = 10;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DEFAULT_SPACE,
    paddingTop: 50
  },
  title: {
    margin: DEFAULT_SPACE
  },
  labelStyle: {
    color: green,
    marginVertical: 5
  },
  containerList: {
    marginBottom: DEFAULT_SPACE
  },
  row: {
    flex: 1,
    justifyContent: 'space-around'
  },
  createButton: {
    marginVertical: DEFAULT_SPACE,
    width: '80%',
    marginLeft: '10%'
  }
});
