import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Rating = (props:any) => {
const count = [];
    for (let i = 0; i < props.data; i++) {

    count.push(i);
    }

    return (
        <div className = 'card-raiting'>
            {count.map((elem:any) =>(
                <img alt = '' key = {uuidv4()} src = {require('../../../../assets/images/star.jpg')}/>
            ))}
        </div>
    );
};

export default Rating
