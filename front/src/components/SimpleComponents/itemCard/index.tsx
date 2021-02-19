import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountBasket } from '../../../reducers/action';
import Rating from './rating'
import Button from '../Button'
import { v4 as uuidv4 } from 'uuid';
import setItemBasket from '../../../containers/basket/addBasket'
import { IInitial } from '../../../store/initialState'

const Item = (props:any) => {
    const {
        data: {idItem, pic, name, description, price, rating},
      } = props;
    const isAuth = useSelector((state: IInitial) => state.isAuth);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('КУПИТЬ')
    
           
    useEffect(()=>{
        const basket = JSON.parse(localStorage.getItem('basket') || '[]').filter((item:any) => item.idItem === idItem)
        if (basket.length > 0) {
        setTitle(`В КОРЗИНЕ: ${basket[0].itemCount} шт`)
       }
    }, [count])

    const addBasket = () => {
        if (isAuth) {
        setItemBasket({idItem, name, price});
        setCount(count + 1);
        dispatch(getCountBasket());
        } else {
            alert('Для совершения покупок необходимо авторизоваться')
        }
        
    }

    return (
            <div key = {uuidv4()} className = "card consumer-item">
                <img alt = '' className = 'img-card' src = {pic}/>
                <div className = 'card-body'>
                    <h5 className = "card-title">{name}</h5>
                    <div className = "card-description">{description}</div>
                    <p className = "card-text">{price}</p>
                    <Button className = "card-btn buy" title = {title} handler = {addBasket}/>
                </div>
                <Rating data = {rating}/>
            </div>
    );
};

export default Item;
