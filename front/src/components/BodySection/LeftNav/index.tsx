import React from 'react'
import { Link } from 'react-router-dom'

const LeftNav = () => {

    return (
    <div className = "left-section">
        <ul className = "section-menu-list">
            <div className = "smenu-list main">
                <Link to='/'>Главная</Link>
            </div>
            <div className = "smenu-list consumer">
                <Link to='/truck'>Грузовые автомобили</Link>
            </div>
            <div className = "smenu-list buisines">
                <Link to='/consumer'>Легковые автомобили</Link>
            </div>
            <div className = "smenu-list all">
                <Link to='/all'>Все автомобили</Link>
            </div>
        </ul>
    </div>
    )
}

export default LeftNav