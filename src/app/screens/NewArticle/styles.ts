import { StyleSheet } from 'react-native';
import { extraLightGray, green, lightGray } from '@constants/colors';
import { SPACING } from '@constants/dimentions';
import { isAndroid } from '@constants/platform';

const DEFAULT_SPACE = 10;
const CUSTOM_MARGIN_TOP = -10;
const CUSTOM_HEIGHT = isAndroid ? 100 : 80;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 6
  },
  title: {
    borderBottomWidth: 2,
    borderBottomColor: green,
    margin: DEFAULT_SPACE,
    textAlign: 'center'
  },
  labelStyle: {
    color: green,
    marginVertical: 5
  },
  containerList: {
    marginTop: SPACING.MEDIUM
  },
  row: {
    flex: 1,
    justifyContent: 'space-around'
  },
  createButton: {
    width: '100%'
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
    marginBottom: isAndroid ? 0 : 20,
    height: CUSTOM_HEIGHT
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 16
  }
});
