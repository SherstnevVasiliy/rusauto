import bcrypt from 'bcryptjs';
import db from '../../database/models';
import items from '../../database/models/Items/items';

const AuthRepositorie = {
  registration: async (params: any, meta: any) => {
    const {
      payload: { password, login, ...rest },
    } = params;

    const foundUser = await db.Users.users.findOne({ login });

    if (foundUser) {
      return { error: 'Ошибка! Такой пользователь существует!' };
    }

    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, 5, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
    const response = await db.Users.users.create({
      ...rest,
      login,
      password: hashedPassword,
    });
    return response;
  },

  login: async (params: any, meta: any) => {
    const {
      payload: { login, password },
    } = params;

    const foundUser = await db.Users.users.findOne({ login });

    if (!foundUser) {
      return { error: 'Ошибка! Пользователь не найден!' };
    }

    const isValid = await bcrypt.compare(password, foundUser.password);

    if (!isValid) {
      return { error: 'Ошибка! Пароль неверный!' };
    }

    const session = await db.Sessions.sessions.create({
      userId: foundUser.userId,
    });

    if (!session) {
      return { error: 'Ошибка! Не удалось создать сессию!' };
    }
    return {
      data: {
        token: session.token,
      },
      message: 'OK',
    };
  },
  logout: async (params: any, meta: any) => {
    const {
      query: { token },
    } = params;

    const foundSesion = await db.Sessions.sessions.findOne({ token });

    if (!foundSesion) {
      return { error: 'Ошибка! Не удалось найти сессию!' };
    }

    const response = await db.Sessions.sessions.deleteOne(foundSesion);
    // const response = await db.users.insertOne({ login: 'bill@microsoft.com' });

    if (!response.deletedCount) {
      return { error: 'Ошибка! Не удалось закрыть сессию!' };
    }

    // console.log('DataRepositorie', response);
    return { message: 'OK' };
  },

  getSessionByToken: async (params: any, meta: any = {}) => {
    const { token } = params;

    const response = await db.Sessions.sessions.findOne({ token });

    if (!response) {
      return { error: 'Ошибка! Не удалось найти сессию!' };
    }

    return response;
  },

  getUserById: async (params: any, meta: any = {}) => {
    const { userId } = params;

    const response = await db.Users.users.findOne({ userId });

    if (!response) {
      return { error: 'Ошибка! Не удалось найти пользователя!' };
    }

    return response;
  },

  setItemsinDb: async () => {
    const response = await db.Items.users.insertMany(items);
    return response;
  },

  getAuto: async (params: any, meta: any = {}) => {
    const {
      query: { type },
    } = params;

    const response = await db.Items.users.find({ type });

    if (!response) {
      return { error: 'Ошибка! Не удалось найти товары!' };
    }

    return response;
  },
  setOrder: async (params: any, meta: any) => {
    const {
      payload: { token, basket },
    } = params;

    const foundSession = await db.Sessions.sessions.findOne({ token });

    if (!foundSession) {
      return { error: 'Ошибка! Cессия не найдена! Авторизуйтесь заного' };
    }

    const foundOrders = await db.Orders.orders.find();

    const idOrder = `RS-000${foundOrders.length + 1}`;

    const response = await db.Orders.orders.create({
      orderId: idOrder,
      userId: foundSession.userId,
      order: basket,
    });

    return response;
  },
};

export default AuthRepositorie;
