import * as Hapi from '@hapi/hapi';
import controllers from '../../controllers';
import * as Auth from '../../types/validations/Auth';

const auth: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/auth/registration',
    handler: controllers.Auth.registration,
    options: {
      validate: {
        payload: <any>Auth.registrationPayload,
      },
      tags: ['api', 'Auth'],
      description: 'Регистрация нового пользователя',
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Ошибок нет',
            },
            400: {
              description: 'Возвращает ошибку',
            },
          },
        },
      },
    },
  },

  {
    method: 'POST',
    path: '/auth/login',
    handler: controllers.Auth.login,
    options: {
      cors: true,
      validate: {
        payload: <any>Auth.loginPayload,
      },
      tags: ['api', 'Auth'],
      description: 'Вход пользователя в систему',
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Ошибок нет',
            },
            400: {
              description: 'Возвращает ошибку',
            },
          },
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/auth/logout/{token}',
    handler: controllers.Auth.logout,
    options: {
      auth: {
        strategies: ['static'],
      },
      validate: {
        query: <any>Auth.logoutQuery,
        // params: <any>Auth.logoutQuery,
      },
      tags: ['api', 'Auth'],
      description: 'Выход пользователя из системы',
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Ошибок нет',
            },
            400: {
              description: 'Возвращает ошибку',
            },
          },
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/auth/DB',
    handler: controllers.Auth.setIteminDb,
    options: {
      validate: {
        payload: <any>Auth.DB,
      },
      tags: ['api', 'Auth'],
      description: 'Заполнение товарами',
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Ошибок нет',
            },
            400: {
              description: 'Возвращает ошибку',
            },
          },
        },
      },
    },
  },

  {
    method: 'GET',
    path: '/getitems/{type}',
    handler: controllers.Auth.getAuto,
    options: {
      validate: {
        query: <any>Auth.getAutoPayload,
      },
      tags: ['api', 'Auth'],
      description: 'Получение списка товаров',
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Ошибок нет',
            },
            400: {
              description: 'Возвращает ошибку',
            },
          },
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/order',
    handler: controllers.Auth.setOrder,
    options: {
      validate: {
        payload: <any>Auth.setOrder,
      },
      tags: ['api', 'Auth'],
      description: 'Создание заказа',
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Ошибок нет',
            },
            400: {
              description: 'Возвращает ошибку',
            },
          },
        },
      },
    },
  },
];

export default auth;
