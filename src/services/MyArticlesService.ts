import { CurrentUser } from '@interfaces/authInterfaces';
import { create } from 'apisauce';
import Config from 'react-native-config';
// const MY_ARTICLES_MOCK = {
// articles:[
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
//   }]
// };
const baseURL = Config.API_BASE_URL;
const api = create({ baseURL });
const MyArticlesService = {
  getMyArticles: ({ username }: CurrentUser) =>
    api.get('articles', {
      author: username
    })

  // IF YOU WANT TEST PROMISE OK UNCCOMENT
  // Promise.resolve({
  //   ok: true,
  //   problem: null,
  //   originalError: null,
  //   data: MY_ARTICLES_MOCK
  // })
};

export default MyArticlesService;
