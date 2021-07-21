import { isIos } from '@constants/platform';

export const INITIAL_PAGE = 1;
export const DEFAULT_LIMIT = 20;

const THRESHOLD_ANDROID = 0.001;
const THRESHOLD_IOS = -0.1;

export const THRESHOLD = isIos ? THRESHOLD_IOS : THRESHOLD_ANDROID;
