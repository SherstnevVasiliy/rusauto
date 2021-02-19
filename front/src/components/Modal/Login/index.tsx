import React, { useState } from 'react'
import Button from '../../SimpleComponents/Button'
import Input from '../../SimpleComponents/Input'
import { loginFunc } from '../../action'
import { useSelector } from 'react-redux';
import { IInitial } from '../../../store/initialState';
import { useDispatch } from 'react-redux';
import { loginFalse, authTrue } from '../../../reducers/action';

import '../Registration/index.css'

const LogForm = () => {
    
    const dispatch = useDispatch();
    const isLogin = useSelector((state: IInitial) => state.isLogin);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const clickHandler = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        if (login === '' || password === '') {
            alert('Поля не должны быть пустыми...');
        } else {
            const closeModal = new Promise(function(resolve, reject) {
                resolve(loginFunc(login, password));
            })
            closeModal.then(function() {
                if (localStorage.getItem('token')) {
                    dispatch(loginFalse());
                    dispatch(authTrue())
                }
            });
        }
      };
    
    const closeHandler = (event: React.SyntheticEvent<HTMLElement>) => {
        event.preventDefault();
        if (event.currentTarget === event.target) {
        dispatch(loginFalse());
        }
    }
    

    if (isLogin) {
    return (
        <>
        <div className="registr-form" onClick = {closeHandler}>
        </div>
        <form className="registr-wrap" onSubmit = {clickHandler}>
            <div className="close-registr-btn">
                <span className="span-close-btn-registr" onClick = {closeHandler}>×</span>
            </div>
            <div className="registr-dscr">ВОЙТИ</div>
            <div className="registr-user-name">
                <Input
                value = {login}
                setValue = {setLogin}
                type = 'text'
                className="input-registr"
                placeholder="Имя пользователя"
                />
            </div>
            <div className="registr-pass">
                <Input 
                value = {password}
                setValue = {setPassword}
                type = 'password'
                className="input-registr" 
                placeholder="Пароль"
                />
            </div>
            <Button className="registr-btn" title = "ВОЙТИ"/>
        </form>
        </>
    )
    } else {
        return <></>
    }
}

export default LogForm