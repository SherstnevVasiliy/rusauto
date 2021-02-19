import React from 'react';
import Header from '../components/Header'
import Slider from '../components/Slider'
import BodySection from '../components/BodySection'
import Futer from '../components/Futer'
import RegForm from '../components/Modal/Registration'
import LogForm from '../components/Modal/Login'

import {BrowserRouter as Router} from 'react-router-dom'

const Project = () => {
    return (
        <>
        <Router>
            <Header/>
            <Slider/>
            <BodySection/>
            <Futer/>
            <RegForm/>
            <LogForm/>
        </Router>
        </>
    );
};

export default Project;
