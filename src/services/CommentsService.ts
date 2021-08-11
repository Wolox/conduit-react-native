// import api from '@config/api';
// import { INITIAL_PAGE, DEFAULT_LIMIT } from '@constants/pagination';

// const COMMENTS_PATH = '/comments';
// export const customPayLink = (data: LinkCustom) => api.post(`${LINK_PATH}/link`, data);

const COMMENTS_MOCK = [
  {
    author: {
      bio: null,
      following: false,
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      username: 'signup'
    },
    body: 'gods?',
    createdAt: '2021-08-06T18:16:15.699Z',
    id: 106,
    updatedAt: '2021-08-06T18:16:15.699Z'
  },
  {
    author: {
      bio: null,
      following: false,
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      username: 'signup'
    },
    body: 'La verdad es que me parece fantástico este articulo, especialmente la parte de los perros y los dragones Wow ! amazing, ig del dragoncito?',
    createdAt: '2021-08-06T18:16:15.699Z',
    id: 107,
    updatedAt: '2021-08-06T18:16:15.699Z'
  },
  {
    author: {
      bio: null,
      following: false,
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      username: 'signup'
    },
    body: 'gods?',
    createdAt: '2021-08-06T18:16:15.699Z',
    id: 108,
    updatedAt: '2021-08-06T18:16:15.699Z'
  },
  {
    author: {
      bio: null,
      following: false,
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      username: 'react'
    },
    body: 'gods?',
    createdAt: '2021-08-06T18:16:15.699Z',
    id: 109,
    updatedAt: '2021-08-06T18:16:15.699Z'
  }
];

const ArticlesService = {
  // getArticles: (nextPage = INITIAL_PAGE) =>
  //   api.get(COMMENTS_PATH, {
  //     page: nextPage,
  //     limit: DEFAULT_LIMIT
  //   }),
  getMockComments: () =>
    Promise.resolve({
      ok: true,
      problem: null,
      originalError: null,
      data: COMMENTS_MOCK
    })
};

export default ArticlesService;
