import React from 'react';
import renderer from 'react-test-renderer';
import MockedNavigator from '@mocks/MockedNavigator';
import Tags from '@screens/Tags';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation(() => ({ tags: [] })),
    useDispatch: () => jest.fn()
  };
});

describe('test Tags_SCREEN', () => {
  test('to match with snapshot', async () => {
    const tree = await renderer.create(<MockedNavigator component={Tags} />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).not.toBeNull();
  });
});
