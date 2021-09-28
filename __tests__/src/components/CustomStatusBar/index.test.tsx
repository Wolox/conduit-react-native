import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';

import Routes from '../../../../src/constants/routes';
import CustomStatusBar from '../../../../src/app/components/CustomStatusBar';

describe('customStatusBar', () => {
  test('customStatusBar passedAllProps', () => {
    const RenderCustom = {
      renderTabList: () => <CustomStatusBar routeName={Routes.Home} />,
      renderCompleteTabList: () => <MockedNavigator component={RenderCustom.renderTabList} />
    };
    // const treeInstance = renderer.create(RenderCustom.renderCompleteTabList());
    const tree = renderer.create(RenderCustom.renderCompleteTabList()).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
  });
});
