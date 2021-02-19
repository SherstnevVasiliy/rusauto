import initialState, { IInitial } from '../store/initialState';
import countBasket from '../containers/basket/countBasket'

const reducer = (state: IInitial = initialState, action: { type: string; payload: any }) => {
  switch (action.type) {

    case 'REGISTRATION_TRUE':
      return { ...state, isRegistration: true };
    
    case 'REGISTRATION_FALSE':
      return { ...state, isRegistration: false }; 

    case 'LOGIN_TRUE':
      return { ...state, isLogin: true };
      
    case 'LOGIN_FALSE':
      return { ...state, isLogin: false };
      
    case 'AUTH_TRUE':
      return { ...state, isAuth: true };
      
    case 'AUTH_FALSE':
      return { ...state, isAuth: false };

    case 'COUNT_BASKET':
      return { ...state, countBasket: countBasket() };
    

    default:
      return state;
  }
};

export default reducer;
