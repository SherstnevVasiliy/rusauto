import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IInitial } from '../../../../store/initialState';
import Button from '../../../SimpleComponents/Button'
import { getCountBasket } from '../../../../reducers/action'
import './index.css';
import BasketItem from '../../../SimpleComponents/BasketItem'
import { placeOrder } from '../../../action'
import { v4 as uuidv4 } from 'uuid';

const Basket = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector((state: IInitial) => state.isAuth);
    const countBasket = useSelector((state: IInitial) => state.countBasket);
    const cancelBasket = () => {
        localStorage.removeItem('basket');
        dispatch(getCountBasket())
    }

    const handleOrder = () => {
            const finishOrder = new Promise(function(resolve, reject) {
            resolve(placeOrder((localStorage.getItem('token') || ''), (localStorage.getItem('basket') || '[]')));
        })
        finishOrder.then(function() {
            if (localStorage.getItem('lastOrder')) {
                dispatch(getCountBasket());
                localStorage.removeItem('lastOrder')
            }
        });

    }

    const basket = JSON.parse(localStorage.getItem('basket') || '[]')

    if (isAuth) {
    return (
        <div className = 'basket-wrap'>
            <div className = 'basket-title'>
                <div>В КОРЗИНЕ ({countBasket}) ТОВАРОВ</div>
                    {
                        !!countBasket && <div>
                            <Button className = "btn-basket minus" title = 'ОЧИСТИТЬ КОРЗИНУ' handler = {cancelBasket}/>
                            <Button 
                                className = "btn-basket plus" 
                                title = 'ОФОРМИТЬ ЗАКАЗ' 
                                handler = {handleOrder}/>
                        </div>
                    }
            </div>
            <div className = 'basket-body'>
            {basket.map((itemCards:any) =>(
            <BasketItem data = {itemCards} key = {uuidv4()}/>
            ))}
            </div>

        </div>
    )} else {
        return (
        <div></div> 
    )}
}

export default Basket