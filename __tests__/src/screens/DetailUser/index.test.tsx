import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import DetailUser from '@screens/DetailUser';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => []),
    useDispatch: () => jest.fn()
  };
});
const props = {
  route: {
    params: {
      user: 'hola'
    }
  }
};

describe('DetailArticle', () => {
  test('DetailArticle Snapshot', () => {
    const RenderCustom = {
      renderDetail: () => <DetailUser {...props} />,
      renderCompleteDetail: () => <MockedNavigator component={RenderCustom.renderDetail} />
    };
    const tree = renderer.create(RenderCustom.renderCompleteDetail()).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
