import UsersRepository from '../../repositories/Auth';

const Auth = {
  registration: (request: any, h: any) => {
    const { payload } = request;

    return UsersRepository.registration({ payload }, {});
  },

  login: (request: any, h: any) => {
    const { payload } = request;
    return UsersRepository.login({ payload }, {});
  },
  logout: (request: any, h: any) => {
    const { query } = request;
    return UsersRepository.logout({ query }, {});
  },

  authUser: async (request: any, token: string) => {
    const session: any = await UsersRepository.getSessionByToken({ token });

    if (session.error) {
      return {
        isValid: false,
        credentials: {},
      };
    }

    const user: any = await UsersRepository.getUserById({
      userId: session.userId,
    });

    if (user.error) {
      return {
        isValid: false,
        credentials: {},
      };
    }

    return {
      isValid: true,
      credentials: {
        user,
      },
    };
  },
  setIteminDb: () => {
    return UsersRepository.setItemsinDb();
  },
  getAuto: (request: any, h: any) => {
    const { query } = request;

    return UsersRepository.getAuto({ query }, {});
  },
  setOrder: (request: any, h: any) => {
    const { payload } = request;

    return UsersRepository.setOrder({ payload }, {});
  },
};

export default Auth;
