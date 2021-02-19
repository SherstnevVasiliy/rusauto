import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ConsumerAuto from './ConsumerAuto'
import TruckAuto from './TruckAuto'
import AllAuto from './AllAuto'
import HomePage from './HomePage'
import Basket from './Basket'

const Vitrina = () => {

    return (
    <div className = "right-section">
        <div className = 'vitrina'>
            <Switch>
                <Route exact path = {['/', '/home']} component = {HomePage}/>
                <Route exact path = '/consumer' component = {ConsumerAuto}/>
                <Route exact path = '/truck' component = {TruckAuto}/>
                <Route exact path = '/all' component = {AllAuto}/>
                <Route exact path = '/basket' component = {Basket}/>
            </Switch>
        </div>
    </div>
    )
}

export default Vitrina