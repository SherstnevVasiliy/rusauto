import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registrationTrue, loginTrue, authFalse, getCountBasket } from '../../../reducers/action';
import { IInitial } from '../../../store/initialState';
import { Link } from 'react-router-dom'
import { logoutFunc} from '../../action'

const RightNav = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector((state: IInitial) => state.isAuth);
    const countBasket = useSelector((state: IInitial) => state.countBasket);
    
    const handleReg = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        dispatch(registrationTrue());
    }

    const handleLogin = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        dispatch(loginTrue());
    }

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const logoOut = new Promise(function(resolve, reject) {
            resolve(logoutFunc(localStorage.getItem('token') || ''))
        })
        logoOut.then(function() {
            if (!localStorage.getItem('token')) {
                dispatch(getCountBasket());
                dispatch(authFalse());
                }
            })
        logoOut.catch(function() {
            if (!localStorage.getItem('token')) {
                dispatch(getCountBasket());
                dispatch(authFalse());
                }
            })
    }

    if (!isAuth) {
        return (
            <div className = "header-info-right">
                <div className = "header-form">
                    <ul className = "header-form-list">
                        <a href = '/#' className = "pointer login-no" onClick = {handleReg}>Регистрация</a>
                        <a href = '/#' className = "pointer login-no" onClick = {handleLogin}>Вход</a>
                    </ul>                            
                </div>
            </div>
        )} else {
        return (
            <div className = "header-info-right">
                <div className = "header-form">
                    <ul className = "header-form-list">
                        <Link to = '/basket' className = "pointer login-no" >Корзина ({countBasket})</Link>
                        <Link to = '/' className = "pointer login-no" onClick = {handleLogout}>Выход</Link>
                    </ul>                            
                </div>
            </div>
        )}
}

export default RightNav