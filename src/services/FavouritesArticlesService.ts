import api from '@config/api';
import { CurrentUser } from '@interfaces/authInterfaces';
import { FAVORITE_PATH } from '@constants/favoriteServiceConstants';

export const getFavorites = ({ username }: CurrentUser) => {
  console.log(username);
  return api.get(`${FAVORITE_PATH}${username}`);
  // login: (email, password) =>
  //   requests.post('/users/login', { user: { email, password } }),
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {}
  // });
  // TODO: if you want to test api success
  // return Promise.resolve({
  //   ok: true,
  //   problem: null,
  //   originalError: null,
  //   data: {
  //     sessionToken: 'token',
  //     id: 191,
  //     email: '123@123.com',
  //     username: 'signup',
  //     bio: null,
  //     image: null,
  //     token:
  //       'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTkxLCJleHAiOjE2MzM4ODA4Njl9.QqpNhMYWmaVG_lsLjtRNYk3YYNg6rQqi5IDhIlxEFmI'
  // });
};
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
//   {
//     title: 'editado',
//     slug: 'articulo-para-ser-editado-e96vtx',
//     body: 'editado',
//     createdAt: '2021-07-08T18:09:39.498Z',
//     updatedAt: '2021-07-08T18:09:44.576Z',
//     description: 'editado',
//     tagList: [],
//     author: {
//       username: 'churry',
//       bio: null,
//       image: '',
//       following: false
//     },
//     favorited: false,
//     favoritesCount: 2
//   },
//   {
//     title: 'Articulo de pruebaa',
//     slug: 'articulo-de-pruebaa-otf1iw',
//     body: 'Descripcion del articulo',
//     createdAt: '2021-07-08T18:09:35.898Z',
//     updatedAt: '2021-07-08T18:09:35.898Z',
//     description: 'texto sobre que es el articulo',
//     tagList: [],
//     author: {
//       username: 'churry',
//       bio: null,
//       image: '',
//       following: false
//     },
//     favorited: false,
//     favoritesCount: 0
//   },
//   {
//     title: 'Articulo de pruebaa',
//     slug: 'articulo-de-pruebaa-ddyrum',
//     body: 'Descripcion del articulo',
//     createdAt: '2021-07-06T19:26:45.145Z',
//     updatedAt: '2021-07-06T19:26:45.145Z',
//     description: 'texto sobre que es el articulo',
//     tagList: [],
//     author: {
//       username: 'username7602',
//       bio: null,
//       image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
//       following: false
//     },
//     favorited: false,
//     favoritesCount: 0
//   },
//   {
//     title: 'Articulo de pruebaa',
//     slug: 'articulo-de-pruebaa-akw3g9',
//     body: 'Descripcion del articulo',
//     createdAt: '2021-07-06T19:23:47.176Z',
//     updatedAt: '2021-07-06T19:23:47.176Z',
//     description: 'texto sobre que es el articulo',
//     tagList: [],
//     author: {
//       username: 'username5380',
//       bio: null,
//       image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
//       following: false
//     },
//     favorited: false,
//     favoritesCount: 0
//   },
//   {
//     title: 'Articulo de pruebaa',
//     slug: 'articulo-de-pruebaa-1dk3ry',
//     body: 'Descripcion del articulo',
//     createdAt: '2021-07-06T19:14:10.187Z',
//     updatedAt: '2021-07-06T19:14:10.187Z',
//     description: 'texto sobre que es el articulo',
//     tagList: [],
//     author: {
//       username: 'username6733',
//       bio: null,
//       image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
//       following: false
//     },
//     favorited: false,
//     favoritesCount: 0
//   }
// ];

// const ArticlesService = {
//   getMockFavourites: () =>
//     Promise.resolve({
//       ok: true,
//       problem: null,
//       originalError: null,
//       data: FAVOURITED_MOCK
//     })
// };

// export default ArticlesService;
