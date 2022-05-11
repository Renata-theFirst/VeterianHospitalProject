import './App.css';

import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import AppHeader from './components/appHeader/AppHeader';
import Footer from './components/footer/Footer';
import MainPage from './components/pagesLinks/mainPage';
//import HospServices from './components/hospServices/HospServices'
import Specialists from './components/specialists';
import React from 'react';
//import News from './components/news/News';

const Pic = () => {
    const {id} = useParams();
    const elem = require( `./resources/pics/doctors/${id}`);
    console.log(elem);
    return(
        <img src={elem} alt={`img-${id}`} className="hosp__docs_img" />
    );
}

const App = () => {
    return(
        <BrowserRouter>
            <AppHeader />
            <Routes >
                <Route path="/" element={<MainPage/>}/>
                {/* <Route path="/price" element={<HospServices />}/> */}
                <Route path="/specialists" element={<Specialists />}/>
                {/* <Route path="/news" element={<News />}/> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

