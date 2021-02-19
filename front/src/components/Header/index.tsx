import React from 'react'
import {Link} from 'react-router-dom'
import RightNav from './RightNav'

const Header = (props:any) => {
    
    return (
        <header>
            <div className = "container">
                <div className = "header-info">
                    <div className = "header-info-left">
                        <div className = "logo main">
                            <a href = '/#'>
                                <img alt = '' className = "pointer" src = {require('../../assets/images/logo.png')}/>
                            </a>
                        </div>
                        <nav className = "top-menu">
                            <ul className = "top-menu-list">
                                <Link className = "pointer main" to='/'>Главная</Link>
                                <Link className = "pointer consumer" to='/consumer'>Легковые автомобили</Link>
                                <Link className = "pointer buisines" to='/truck'>Грузовые автомобили</Link>
                            </ul>
                        </nav>
                    </div>
                    <RightNav/>
                </div>

            </div>
        </header>
    )
}

export default Header
