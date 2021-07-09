import testIDLogin from '@screens/Auth/screens/Login/testIds';

const USER_MOCK = {
  email: 'test@gmail.com',
  password: '1234'
};

/* eslint-disable no-undef */
describe('Example login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Login screen', async () => {
    await expect(element(by.id(testIDLogin.loginView))).toBeVisible();
  });

  it('Should navigate to login screen, complete the login form and navigate to home scree', async () => {
    await expect(element(by.text('Email'))).toBeVisible();
    await expect(element(by.text('Contraseña'))).toBeVisible();
    await element(by.id(testIDLogin.emailLoginInput)).typeText(USER_MOCK.email);
    await element(by.id(testIDLogin.passwordLoginInput)).typeText(USER_MOCK.password);
    await element(by.id(testIDLogin.loginButton)).tap();
  });

  it('Should have OnBoarding screen', async () => {
    await expect(element(by.text('First Screen'))).toBeVisible();
  });
});
