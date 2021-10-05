import React from 'react';
import renderer from 'react-test-renderer';
import DetailArticle from '@screens/DetailArticle';
import userIcon from '@assets/Profile/icUser.png';
import MockedNavigator from '@mocks/MockedNavigator';
import DetailUser from '@screens/DetailUser';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => ({ comments: [], currentUser: '' })),
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
