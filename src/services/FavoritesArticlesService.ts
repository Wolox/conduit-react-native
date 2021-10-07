import api from '@config/api';
import { FAVORITE_PATH, ARTICLES_PATH } from '@constants/favoriteServiceConstants';
import { CurrentUser } from '@interfaces/authInterfaces';

// const FAVOURITED_MOCK = [
//   {
//     title: 'Argentina vs Brasil',
//     slug: 'argentina-vs-brasil-p5q4e4',
//     body: 'asdasdasdsadsadsad',
//     createdAt: '2021-07-08T18:40:16.960Z',
//     updatedAt: '2021-07-08T18:40:16.960Z',
//     description: 'Sábado final Copa América ',
//     tagList: [],
//     author: {
//       username: 'zeque11',
//       bio: 'Fanático de Racing Club de Avellanada, el club más grande de Argentina. Único heptacampeón y glorioso por su gente y su historia.',
//       image: 'https://www.elterritorio.com.ar/img/1/289/2020060820580200_1.jpg',
//       following: false
//     },
//     favorited: false,
//     favoritesCount: 1
//   },
// ];
// const baseURL = Config.API_BASE_URL;
// const api = create({ baseURL });
const FavoriteService = {
  getFavorites: ({ username }: CurrentUser) =>
    api.get(ARTICLES_PATH, {
      favorited: username
    }),
  addFavorite: (slug: string) => api.post(`${ARTICLES_PATH}/${slug}${FAVORITE_PATH}`),
  deleteFavorite: (slug: string) => api.delete(`${ARTICLES_PATH}/${slug}${FAVORITE_PATH}`)

  // TODO: TEST API OK:
  // getMocked: () =>
  //   Promise.resolve({
  //     ok: true,
  //     problem: null,
  //     originalError: null,
  //     data: FAVOURITED_MOCK
  //   })
};
export default FavoriteService;
