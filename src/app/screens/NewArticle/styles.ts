import { StyleSheet } from 'react-native';
import { extraLightGray, green, lightGray } from '@constants/colors';
import { SPACING } from '@constants/dimentions';
import { isAndroid } from '@constants/platform';

const DEFAULT_SPACE = 10;
const CUSTOM_MARGIN_TOP = isAndroid ? SPACING.BIG : 0;
const CUSTOM_HEIGHT = isAndroid ? 88 : 60;

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
    marginBottom: DEFAULT_SPACE,
    marginTop: SPACING.MEDIUM
  },
  row: {
    flex: 1,
    justifyContent: 'space-around'
  },
  createButton: {
    marginVertical: DEFAULT_SPACE,
    width: '80%',
    marginLeft: '10%'
  },
  edition: {
    flex: 1,
    height: 250,
    padding: SPACING.NONE,
    margin: SPACING.NONE,
    marginTop: SPACING.XSMALL,
    width: '95%',
    alignSelf: 'center',
    borderColor: extraLightGray,
    elevation: 8,
    shadowColor: lightGray,
    borderRadius: 15,
    overflow: 'hidden',
    shadowOpacity: 1,
    shadowOffset: {
      width: SPACING.NONE,
      height: 3
    },
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 5
  },
  containerEditor: {
    flex: 1,
    width: '100%',
    marginTop: CUSTOM_MARGIN_TOP,
    paddingTop: SPACING.NONE,
    marginBottom: SPACING.NONE
  },
  customTextBody: {
    paddingLeft: SPACING.SMALL,
    paddingBottom: SPACING.XSMALL
  },
  customTitleInput: {
    marginBottom: SPACING.NONE,
    height: CUSTOM_HEIGHT
  }
});
