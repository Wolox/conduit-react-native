import testIDHome from '@screens/Home/testIds';
import testIDTags from '@screens/Tags/testIds';

/* eslint-disable no-undef */
describe('Test Home', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Home screen', async () => {
    await expect(element(by.id(testIDHome.homeView))).toBeVisible();
  });

  it('can navigate to Tags screen', async () => {
    await element(by.id(testIDHome.tagsButton)).tap();
    await expect(element(by.id(testIDTags.tagsView))).toBeVisible();
  });
});
