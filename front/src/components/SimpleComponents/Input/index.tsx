import React from 'react'

const Input = (props:any) => {
    return (
        <input
                onChange = {(event) => props.setValue(event.target.value)}
                value = {props.value}
                type = {props.type} 
                className = {props.className} 
                placeholder = {props.placeholder}/>
    );
};

export default Input