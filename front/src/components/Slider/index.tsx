import React from 'react'

const Slider = () => {

    return (
    <div className = "carousel-wrap">
        <div className = "container">
            <div className = "carousel">
                <div className = "item-container">
                    <div className = "item active">
                        <img alt = '' src = {require('../../assets/images/slider_1.jpg')}/>
                    </div>
                    <div className = "item">
                        <img alt = '' src = {require('../../assets/images/slider_2.jpg')}/>
                    </div>
                    <div className = "item">
                        <img alt = '' src = {require('../../assets/images/slider_3.jpg')}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Slider