import api from '@config/api';
import { INITIAL_PAGE, DEFAULT_LIMIT } from '@constants/pagination';

const ARTICLES_PATH = '/articles';

const ArticlesService = {
  getArticles: (nextPage = INITIAL_PAGE) =>
    api.get(ARTICLES_PATH, {
      page: nextPage,
      limit: DEFAULT_LIMIT
    })
};

export default ArticlesService;
