import i18next from 'i18next';
import Routes from '@constants/routes';

// TODO: Replace here the screens titles

i18next.addResources('es', 'app', {
  [Routes.Login]: 'Login',
  [Routes.SignUp]: 'SignUp',
  [Routes.Tab1]: 'Tab 1',
  [Routes.Tab2]: 'Tab 2',
  [Routes.Tab3]: 'Tab 3',
  [Routes.Tab4]: 'Tab 4',
  [Routes.Tab5]: 'Tab 5',
  [Routes.Home]: 'Home',
  [Routes.OnBoarding]: 'OnBoarding',
  [Routes.Profile]: 'Profile'
});
