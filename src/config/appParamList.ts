import Routes from '@constants/routes';
import { ConfirmationTypes } from '@screens/Confirmation/constants';

// Add here new routeParams
export type AppStackParamList = {
  [Routes.Auth]: undefined;
  [Routes.Login]: undefined;
  [Routes.SignUp]: undefined;
  [Routes.OnBoarding]: undefined;
  [Routes.FavArticles]: undefined;
  [Routes.App]: undefined;
  [Routes.Home]: undefined;
  [Routes.Profile]: undefined;
  [Routes.NewArticle]: undefined;
  [Routes.Confirmation]: { typeError: boolean; type: ConfirmationTypes };
};
