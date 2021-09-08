import api from '@config/api';
import { iComment } from '@interfaces/commentInterfaces';

const ARTICLES_PATH = '/articles';
const COMMENTS_PATH = '/comments';

const COMMENTS_MOCK = [
  {
    author: {
      bio: null,
      following: false,
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      username: 'signup'
    },
    body: 'No way ! this is fantastic',
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
    body: 'This is a great idea, i need more information for my current job and this is inspired me a lot, thanks for all, please contact with me when you have a minute. best regards ',
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
    body: 'Hello, Great job ! i love your books i learned all of them, thanks',
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
    body: 'allways good, cool!',
    createdAt: '2021-08-06T18:16:15.699Z',
    id: 109,
    updatedAt: '2021-08-06T18:16:15.699Z'
  }
];

const ArticlesService = {
  getMockComments: () =>
    Promise.resolve({
      ok: true,
      problem: null,
      originalError: null,
      data: COMMENTS_MOCK
    }),
  getComments: (slug: string) => api.get(`${ARTICLES_PATH}/${slug}${COMMENTS_PATH}`),
  createComment: ({ data, slug }: { data: iComment; slug: string }) =>
    api.post(`${ARTICLES_PATH}/${slug}${COMMENTS_PATH}`, data)
};

export default ArticlesService;
