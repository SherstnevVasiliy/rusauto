export const registrationTrue = () => ({
  type: 'REGISTRATION_TRUE',
  payload: {
    isRegistration: true,
  },
});

export const registrationFalse = () => ({
  type: 'REGISTRATION_FALSE',
  payload: {
    isRegistration: false,
  },
});

export const loginTrue = () => ({
  type: 'LOGIN_TRUE',
  payload: {
    isLogin: true,
  },
});

export const loginFalse = () => ({
  type: 'LOGIN_FALSE',
  payload: {
    isLogin: false,
  },
});

export const authTrue = () => ({
  type: 'AUTH_TRUE',
  payload: {
    isAuth: true,
  },
});

export const authFalse = () => ({
  type: 'AUTH_FALSE',
  payload: {
    isAuth: false,
  },
});

export const getCountBasket = () => ({
  type: 'COUNT_BASKET',
});