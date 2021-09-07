import api from '@config/api';
import { INITIAL_PAGE, DEFAULT_LIMIT } from '@constants/pagination';
import { NewArticleValues } from '@screens/NewArticle/constants';

const ARTICLES_PATH = '/articles';
const FEED_PATH = '/feed';

const ARTICLES_MOCK = [
  {
    slug: 'how-to-train-your-drfffffffagon-8-hf0dt5',
    title: 'How to train your dragon 8',
    description: 'Ever wonder how? 8',
    body: "Hello i know you, yes ! you are a fantastic trainging Dragon ! oh my gosh, i don't Believe",
    createdAt: '2021-08-04T10:57:07.948Z',
    updatedAt: '2021-08-04T10:57:07.948Z',
    tagList: ['dragons', 'training'],
    favorited: false,
    favoritesCount: 2,
    author: {
      username: 'userteereress55fffrrfs531',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false
    }
  },
  {
    slug: 'how-to-train-your-drfffffffagon-8-sko64r',
    title: 'How to train your drfffffffagon 8',
    description: 'Ever wonder howfffff? 8',
    body: 'Very carefulfly 9',
    createdAt: '2021-08-04T10:56:52.696Z',
    updatedAt: '2021-08-04T10:56:52.696Z',
    tagList: ['dragons', 'training'],
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'userteereress55fffrrfs531',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false
    }
  },
  {
    slug: 'how-to-train-your-drfffffffagon-8-rgunla',
    title: 'How to train your drfffffffagon 8',
    description: 'Ever wonder howfffff? 8',
    body: 'Very carefulfly 9',
    createdAt: '2021-08-04T10:56:42.370Z',
    updatedAt: '2021-08-04T10:56:42.370Z',
    tagList: ['dragons', 'training'],
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'userteereress55fffrrfs531',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false
    }
  },
  {
    slug: 'how-to-train-your-drfffffffagon-8-fv8uvs',
    title: 'How to train your drfffffffagon 8',
    description: 'Ever wonder howfffff? 8',
    body: 'Very carefulfly 9',
    createdAt: '2021-08-04T10:55:38.156Z',
    updatedAt: '2021-08-04T10:55:38.156Z',
    tagList: ['dragons', 'training'],
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'userteereress55fffrrfs531',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false
    }
  },
  {
    slug: 'how-to-train-your-drfffffagon-8-gzh3k5',
    title: 'How to train your drfffffagon 8',
    description: 'Ever wonder howfff? 8',
    body: 'Very carefulfly 9',
    createdAt: '2021-08-04T10:54:06.442Z',
    updatedAt: '2021-08-04T10:54:06.442Z',
    tagList: ['dragons', 'training'],
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'userteereress55fffrrfs531',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false
    }
  },
  {
    slug: 'how-to-train-your-drfffffagon-8-ey5jbi',
    title: 'How to train your drfffffagon 8',
    description: 'Ever wonder howfff? 8',
    body: 'Very carefulfly 9',
    createdAt: '2021-08-04T10:53:00.037Z',
    updatedAt: '2021-08-04T10:53:00.037Z',
    tagList: ['dragons', 'training'],
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'userteereress55fffrrfs531',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false
    }
  },
  {
    slug: 'how-to-train-your-drfffffagon-8-ogfmu6',
    title: 'How to train your drfffffagon 8',
    description: 'Ever wonder howfff? 8',
    body: 'Very carefulfly 9',
    createdAt: '2021-08-04T10:52:39.879Z',
    updatedAt: '2021-08-04T10:52:39.879Z',
    tagList: ['dragons', 'training'],
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'userteereress55fffrrfs531',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false
    }
  },
  {
    slug: 'how-to-train-your-drfffffagon-8-o3fm9g',
    title: 'How to train your drfffffagon 8',
    description: 'Ever wonder howfff? 8',
    body: 'Very carefulfly 9',
    createdAt: '2021-08-04T10:48:59.684Z',
    updatedAt: '2021-08-04T10:48:59.684Z',
    tagList: ['dragons', 'training'],
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'userteereress55fffrrfs531',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false
    }
  },
  {
    slug: 'how-to-train-your-drfffffagon-8-fmg0z6',
    title: 'How to train your drfffffagon 8',
    description: 'Ever wonder howfff? 8',
    body: 'Very carefulfly 9',
    createdAt: '2021-08-04T10:47:14.037Z',
    updatedAt: '2021-08-04T10:47:14.037Z',
    tagList: ['dragons', 'training'],
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'userteereress55fffrrfs531',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false
    }
  },
  {
    slug: 'how-to-train-your-drfffffagon-8-a8i3u7',
    title: 'How to train your drfffffagon 8',
    description: 'Ever wonder howfff? 8',
    body: 'Very carefulfly 9',
    createdAt: '2021-08-04T10:44:17.012Z',
    updatedAt: '2021-08-04T10:44:17.012Z',
    tagList: ['dragons', 'training'],
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'userteereress55fffrrfs531',
      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
      following: false
    }
  }
];

const ArticlesService = {
  getArticles: (nextPage = INITIAL_PAGE) =>
    api.get(ARTICLES_PATH, {
      page: nextPage,
      limit: DEFAULT_LIMIT
    }),
  getMockArticles: () =>
    Promise.resolve({
      ok: true,
      problem: null,
      originalError: null,
      data: { page: ARTICLES_MOCK }
    }),
  createArticle: (article: NewArticleValues) => api.post(ARTICLES_PATH, { article }),
  getMyArticles: () => api.get(`${ARTICLES_PATH}${FEED_PATH}`),
  deleteArticle: (slug: string) => api.delete(`${ARTICLES_PATH}/${slug}`)
};

export default ArticlesService;
