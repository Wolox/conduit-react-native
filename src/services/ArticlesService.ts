import api from '@config/api';
import { INITIAL_PAGE, DEFAULT_LIMIT } from '@constants/pagination';
import { formatParams } from '@utils/serviceUtils';
import { NewArticleValues, UpdateArticle } from '@screens/NewArticle/constants';

const ARTICLES_PATH = '/articles';
const TAGS_PATH = '/tags';
const FEED_PATH = '/feed';

const ArticlesService = {
  getArticles: (nextPage = INITIAL_PAGE) =>
    api.get(ARTICLES_PATH, {
      page: nextPage,
      limit: DEFAULT_LIMIT
    }),
  getTags: () => api.get(TAGS_PATH),
  getArticlesByTags: (tags: string[]) => api.get(`${ARTICLES_PATH}${formatParams(tags, 'tag')}`),
  createArticle: (article: NewArticleValues) => api.post(ARTICLES_PATH, { article }),
  getMyArticles: () => api.get(`${ARTICLES_PATH}${FEED_PATH}`),
  deleteArticle: (slug: string) => api.delete(`${ARTICLES_PATH}/${slug}`),
  updateArticle: ({ slug, article }: UpdateArticle) => api.put(`${ARTICLES_PATH}/${slug}`, { article }),
  getArticlesByAuthor: (username: string) => api.get(`${ARTICLES_PATH}`, { author: username }),
  getFavoritedByAuthor: (username: string) => api.get(`${ARTICLES_PATH}`, { favorited: username })
};

export default ArticlesService;
