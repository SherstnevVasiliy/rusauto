import * as Joi from 'typesafe-joi';

export const registrationPayload = Joi.object({
  firstName: Joi.string()
    .example('Иван')
    .required()
    .description('Имя пользователя'),
  lastName: Joi.string()
    .required()
    .example('Иванов'),
  email: Joi.string()
    .required()
    .example('mail@mail.ru'),
  login: Joi.string()
    .required()
    .example('mylogin'),
  password: Joi.string()
    .required()
    .example('password'),
});

export const loginPayload = Joi.object({
  login: Joi.string()
    .required()
    .example('mylogin'),
  password: Joi.string()
    .required()
    .example('password'),
});

export const logoutQuery = Joi.object({
  token: Joi.string()
    .required()
    .example('mytoken'),
});

export const DB = Joi.object({});

export const getAutoPayload = Joi.object({
  type: Joi.string()
    .required()
    .example('consumer'),
});

export const setOrder = Joi.object({
  token: Joi.string()
    .required()
    .example('token'),
  basket: Joi.string()
    .required()
    .example('basket'),
});
