import { darkGray, green } from '@constants/colors';
import { SPACING } from '@constants/dimentions';
import { UserResponse } from '@interfaces/authInterfaces';
import { MixedStyleDeclaration } from 'react-native-render-html';

export function MOCK_DATA({ user: { username } }: UserResponse, comment: string) {
  return {
    author: {
      bio: 'Bio de prebas',
      following: false,
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      username
    },
    body: comment,
    createdAt: '2021-08-06T18:16:15.699Z',
    updatedAt: '2021-08-06T18:16:15.699Z',
    id: Number(Math.random().toFixed(2))
  };
}
enum COMMON_STYLES {
  COMMON_TITLE_FONT = 14,
  PARAGRAPH_SIZE = 12,
  NONE = 'none',
  NORMAL = 'normal'
}
const TITLE_STYLES: MixedStyleDeclaration = {
  fontSize: COMMON_STYLES.COMMON_TITLE_FONT,
  padding: SPACING.NONE,
  marginVertical: SPACING.XXSMALL
};
export const tagsStyles: Readonly<Record<string, MixedStyleDeclaration>> = {
  body: {
    whiteSpace: COMMON_STYLES.NORMAL,
    color: darkGray
  },
  h1: {
    ...TITLE_STYLES
  },
  h2: {
    ...TITLE_STYLES
  },
  p: {
    fontSize: COMMON_STYLES.PARAGRAPH_SIZE,
    padding: SPACING.NONE,
    marginVertical: SPACING.XXSMALL
  },
  a: {
    color: green,
    textDecorationLine: COMMON_STYLES.NONE
  },
  ol: {
    margin: SPACING.NONE,
    padding: SPACING.NONE
  },
  li: {
    paddingBottom: SPACING.XXSMALL
  }
};
