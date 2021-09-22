import i18next from 'i18next';

import { ConfirmationTypes } from './constants';

i18next.addResources('en', 'CONFIRMATION', {
  [`${ConfirmationTypes.SUCCESS_REGISTER_ARTICLE}_TITLE`]: 'Success!',
  [`${ConfirmationTypes.SUCCESS_REGISTER_ARTICLE}_SUBTITLE`]: 'The article has been saved correctly',
  [`${ConfirmationTypes.SUCCESS_UPDATE_ARTICLE}_SUBTITLE`]: 'The article has been updated correctly',
  [`${ConfirmationTypes.ERROR_REGISTER_ARTICLE}_TITLE`]: 'Error!',
  [`${ConfirmationTypes.ERROR_REGISTER_ARTICLE}_SUBTITLE`]: 'Something went wrong, try later'
});
