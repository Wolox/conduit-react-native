import { INITIAL_PAGE } from '@constants/pagination';

export const onPagination = () => (state, action) =>
  state.merge({
    [action.target]: {
      page:
        action.payload?.currentPage === INITIAL_PAGE
          ? action.payload.page
          : [...(state[action.target]?.page || []), ...(action.payload?.page || [])],
      nextPage: action.payload?.nextPage,
      totalCount: action.payload?.totalCount
    },
    [`${action.target}Loading`]: false,
    [`${action.target}Error`]: null
  });

export const onClearTarget = () => (state, action) =>
  state.merge({
    [`${action.target}`]: action.payload || {},
    [`${action.target}Loading`]: false,
    [`${action.target}Error`]: null
  });
