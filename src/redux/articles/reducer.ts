import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { ArticlesState } from '@interfaces/reduxInterfaces';
import { onPagination, onClearTarget } from '@utils/reduxUtils';

import { actions } from './actions';

const stateDescription = {
  description: {
    articlesList: [
      {
        title: 'Argentina vs Brasil',
        slug: 'argentina-vs-brasil-p5q4e4',
        body: 'asdasdasdsadsadsad',
        createdAt: '2021-07-08T18:40:16.960Z',
        updatedAt: '2021-07-08T18:40:16.960Z',
        description: 'Sábado final Copa América ',
        tagList: [],
        author: {
          username: 'zeque11',
          bio: 'Fanático de Racing Club de Avellanada, el club más grande de Argentina. Único heptacampeón y glorioso por su gente y su historia.',
          image: 'https://www.elterritorio.com.ar/img/1/289/2020060820580200_1.jpg',
          following: false
        },
        favorited: false,
        favoritesCount: 1
      },
      {
        title: 'editado',
        slug: 'articulo-para-ser-editado-e96vtx',
        body: 'editado',
        createdAt: '2021-07-08T18:09:39.498Z',
        updatedAt: '2021-07-08T18:09:44.576Z',
        description: 'editado',
        tagList: [],
        author: {
          username: 'churry',
          bio: null,
          image: '',
          following: false
        },
        favorited: false,
        favoritesCount: 2
      },
      {
        title: 'Articulo de pruebaa',
        slug: 'articulo-de-pruebaa-otf1iw',
        body: 'Descripcion del articulo',
        createdAt: '2021-07-08T18:09:35.898Z',
        updatedAt: '2021-07-08T18:09:35.898Z',
        description: 'texto sobre que es el articulo',
        tagList: [],
        author: {
          username: 'churry',
          bio: null,
          image: '',
          following: false
        },
        favorited: false,
        favoritesCount: 0
      },
      {
        title: 'test article',
        slug: 'test-article-dqyfef',
        body: 'this is a test description',
        createdAt: '2021-07-07T20:57:57.484Z',
        updatedAt: '2021-07-07T20:57:57.484Z',
        description: 'hello world',
        tagList: [],
        author: {
          username: 'esteban',
          bio: null,
          image:
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          following: false
        },
        favorited: false,
        favoritesCount: 0
      },
      {
        title: 'Articulo de pruebaa',
        slug: 'articulo-de-pruebaa-dhfsog',
        body: 'Descripcion del articulo',
        createdAt: '2021-07-07T14:54:50.843Z',
        updatedAt: '2021-07-07T14:54:50.843Z',
        description: 'texto sobre que es el articulo',
        tagList: [],
        author: {
          username: 'username6787',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false
        },
        favorited: false,
        favoritesCount: 0
      },
      {
        title: 'Articulo de pruebaa',
        slug: 'articulo-de-pruebaa-ddyrum',
        body: 'Descripcion del articulo',
        createdAt: '2021-07-06T19:26:45.145Z',
        updatedAt: '2021-07-06T19:26:45.145Z',
        description: 'texto sobre que es el articulo',
        tagList: [],
        author: {
          username: 'username7602',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false
        },
        favorited: false,
        favoritesCount: 0
      },
      {
        title: 'Articulo de pruebaa',
        slug: 'articulo-de-pruebaa-26sdyc',
        body: 'Descripcion del articulo',
        createdAt: '2021-07-06T19:26:05.187Z',
        updatedAt: '2021-07-06T19:26:05.187Z',
        description: 'texto sobre que es el articulo',
        tagList: [],
        author: {
          username: 'username1421',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false
        },
        favorited: false,
        favoritesCount: 0
      },
      {
        title: 'Articulo de pruebaa',
        slug: 'articulo-de-pruebaa-akw3g9',
        body: 'Descripcion del articulo',
        createdAt: '2021-07-06T19:23:47.176Z',
        updatedAt: '2021-07-06T19:23:47.176Z',
        description: 'texto sobre que es el articulo',
        tagList: [],
        author: {
          username: 'username5380',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false
        },
        favorited: false,
        favoritesCount: 0
      },
      {
        title: 'Articulo de pruebaa',
        slug: 'articulo-de-pruebaa-1dk3ry',
        body: 'Descripcion del articulo',
        createdAt: '2021-07-06T19:14:10.187Z',
        updatedAt: '2021-07-06T19:14:10.187Z',
        description: 'texto sobre que es el articulo',
        tagList: [],
        author: {
          username: 'username6733',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false
        },
        favorited: false,
        favoritesCount: 0
      },
      {
        title: 'Articulo de pruebaa',
        slug: 'articulo-de-pruebaa-wwml1o',
        body: 'Descripcion del articulo',
        createdAt: '2021-07-06T19:09:52.497Z',
        updatedAt: '2021-07-06T19:09:52.497Z',
        description: 'texto sobre que es el articulo',
        tagList: [],
        author: {
          username: 'username5344',
          bio: null,
          image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
          following: false
        },
        favorited: false,
        favoritesCount: 0
      }
    ]
  }
};

export const initialState: ArticlesState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_ARTICLES],
  override: {
    [actions.CLEAR_TARGET]: onClearTarget(),
    [actions.GET_ARTICLES_SUCCESS]: onPagination()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
