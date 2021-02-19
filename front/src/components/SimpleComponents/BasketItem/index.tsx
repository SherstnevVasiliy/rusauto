import React from 'react'
import Button from '../../SimpleComponents/Button'
import { useDispatch} from 'react-redux';
import { getCountBasket } from '../../../reducers/action';
import setItemBasket from '../../../containers/basket/addBasket'
import decreaseBasket from '../../../containers/basket/decreaseBasket'

const BasketItem = (props:any) => {

    const dispatch = useDispatch()
    const {idItem, name, itemCount, price} = props.data

    const deleteItem = (idItem:any) => {
        const basket = JSON.parse(localStorage.getItem('basket') || '[]').filter((item:any) => item.idItem !== idItem)
        if (basket.length > 0) {
            localStorage.setItem('basket', JSON.stringify(basket))
            dispatch(getCountBasket())
        } else {
            localStorage.removeItem('basket')
            dispatch(getCountBasket())
        }       
    }

    const plusBasket = () => {
        setItemBasket({idItem, name, price});
        dispatch(getCountBasket());
        }
    
    const minusBasket = () => {
        decreaseBasket({idItem});
        dispatch(getCountBasket());
    }

    

    return (
        <div className = 'basket-item'>
            <div className = 'item-id'>{ idItem }</div>
            <div className = 'item-name'>{ name }</div>
            <div className = 'item-price'>{ price }</div>
            <div className = 'item-plus-minus'>
                <Button className ='btn-item minus' title = '-' handler = {minusBasket}/>
                <div className = 'item-count'>{ itemCount }</div>
                <Button className ='btn-item plus' title = '+' handler = {plusBasket}/>
                <Button className ='btn-item delete' title = 'x' handler = {() => deleteItem(idItem)}/>
            </div>
        </div>
    )
}

export default BasketItem