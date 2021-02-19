import countBasket from '../containers/basket/countBasket'

export interface IInitial {
  isRegistration: boolean,
  isLogin: boolean,
  isSubmit: boolean,
  isAuth: boolean,
  countBasket: number
}

const initialState: IInitial = {
  isRegistration: false,
  isLogin: false,
  isSubmit: false,
  isAuth: !!localStorage.getItem('token'),
  countBasket: countBasket()
};

export default initialState;
