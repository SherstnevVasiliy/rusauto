import React, { useState } from 'react'
import Button from '../../SimpleComponents/Button'
import Input from '../../SimpleComponents/Input'
import { registration } from '../../action'
import { useSelector } from 'react-redux';
import { IInitial } from '../../../store/initialState';
import { useDispatch } from 'react-redux';
import { registrationFalse } from '../../../reducers/action';

import './index.css'

const RegForm = () => {
    
    const dispatch = useDispatch();
    const isRegistration = useSelector((state: IInitial) => state.isRegistration);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');    
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmail = function (value:any) {
        return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value);
    }

    const clickHandler = (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        if (firstName === '' || lastName === '' || login === '' || email === '' || password === '') {
            alert('Поля не должны быть пустыми...');
        } else if (!isEmail(email)) {
            alert('Нeкорректный Email...');
        } else {
        registration(firstName, lastName, login, email, password);
        setFirstName('');
        setLastName('');
        setLogin('');
        setEmail('');
        setPassword('');
        dispatch(registrationFalse());
        }
      };
    
    const closeHandler = (event: React.SyntheticEvent<HTMLElement>) => {
        event.preventDefault();
        if (event.currentTarget === event.target) {
        dispatch(registrationFalse());
        }
    }
    

    if (isRegistration) {
    return (
        <>
        <div className="registr-form" onClick = {closeHandler}>
        </div >
        <form className="registr-wrap" onSubmit = {clickHandler}>
            <div className="close-registr-btn">
                <span className="span-close-btn-registr" onClick = {closeHandler}>×</span>
            </div>
            <div className="registr-dscr">РЕГИСТРАЦИЯ</div>
            <div className="registr-user-name">
                <Input
                value = {firstName}
                setValue = {setFirstName}
                type = 'text'
                className="input-registr"
                placeholder="Имя"
                />
            </div>
            <div className="registr-user-name">
                <Input
                value = {lastName}
                setValue = {setLastName}
                type = 'text'
                className="input-registr"
                placeholder="Фамилия"
                />
            </div>
            <div className="registr-user-name">
                <Input
                value = {login}
                setValue = {setLogin}
                type = 'text'
                className="input-registr"
                placeholder="Логин для входа"
                />
            </div>   
            <div className="registr-name">
                <Input 
                value = {email}
                setValue = {setEmail}
                type = 'text'
                className="input-registr" 
                placeholder="user@example.com"
                />
            </div>
            <div className="registr-pass">
                <Input 
                value = {password}
                setValue = {setPassword}
                type = 'text'
                className="input-registr" 
                placeholder="Пароль"
                />
            </div>
            <Button className="registr-btn" title = "ЗАРЕГИСТРИРОВАТЬ"/>
        </form>
        </>
        
    )
    } else {
        return <></>
    }
}

export default RegForm