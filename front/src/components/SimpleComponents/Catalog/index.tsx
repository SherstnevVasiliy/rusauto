import React, { useState, useEffect } from 'react';
import Item from '../itemCard'
import { v4 as uuidv4 } from 'uuid';
import { API } from '../../../network/instances'

const Catalog = (props: any) => {
    const { category } = props;
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async (type:string) => {
        const response = await API.get(
        `getitems/{type}`, {
            params: {
                type: type
            } 
        });
        
        setData(response.data)
        }
        fetchData(category);
      },[]);

    if (data.length) {
    return (
        <>
        {data.map((itemCards:any) =>(
            <Item data = {itemCards} key = {uuidv4()}/>
        ))}
        </>
    )} else {
        return (
            <div>Нет данных для отображения...</div>
        )
    }
}

export default Catalog

