import React from 'react';
import LeftNav from './LeftNav'
import Vitrina from './Vitrina'

const BodySection = () => {

    return (
    <div className = "section">
        <div className = "container">
            <div className = "section-wrap">
                <LeftNav/>
                <Vitrina/>
            </div>
        </div>        
    </div>
    )
}

export default BodySection