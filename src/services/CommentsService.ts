import api from '@config/api';

const ARTICLES_PATH = '/articles';
const COMMENTS_PATH = '/comments';

const ArticlesService = {
  getComments: (slug: string) => api.get(`${ARTICLES_PATH}/${slug}${COMMENTS_PATH}`),
  createComment: ({ data, slug }: { data: string; slug: string }) =>
    api.post(`${ARTICLES_PATH}/${slug}${COMMENTS_PATH}`, { comment: { body: data } }),
  deleteComment: ({ slug, id }: { slug: string; id: string }) =>
    api.delete(`${ARTICLES_PATH}/${slug}${COMMENTS_PATH}/${id}`)
};

export default ArticlesService;
