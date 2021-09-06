import api from '@config/api';
import { INITIAL_PAGE, DEFAULT_LIMIT } from '@constants/pagination';

const ARTICLES_PATH = '/articles';
const TAGS_PATH = '/tags';

const ArticlesService = {
  getArticles: (nextPage = INITIAL_PAGE) =>
    api.get(ARTICLES_PATH, {
      page: nextPage,
      limit: DEFAULT_LIMIT
    }),
  getTags: () => api.get(TAGS_PATH)
};

export default ArticlesService;
