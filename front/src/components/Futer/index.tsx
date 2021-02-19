import React from 'react'

const Futer = () => {
    return (
    <div className = "container">
        <div className = "futer-wrap">
            <a className = "pointer" href = "https://www.lada.ru/" target = "_blank" rel="noopener noreferrer">
                <img alt = '' src = {require('../../assets/images/vaz.jpg')}/>
            </a>
            <a className = "pointer" href = "http://maz.by/" target = "_blank" rel="noopener noreferrer">
                <img alt = '' src = {require('../../assets/images/maz.jpg')}/>
            </a>
            <a className = "pointer" href = "https://www.uaz.ru/" target = "_blank" rel="noopener noreferrer">
                <img alt = '' src = {require('../../assets/images/uaz.jpg')}/>
            </a>
            <a className = "pointer" href = "https://kamaz.ru/" target = "_blank" rel="noopener noreferrer">
                <img alt = '' src = {require('../../assets/images/kamaz.png')}/>
            </a>
        </div>
    </div>
    )
}

export default Futer