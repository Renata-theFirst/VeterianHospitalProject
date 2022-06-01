import './App.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AppHeader from './components/appHeader/AppHeader';
import Footer from './components/footer/Footer';
import MainPage from './components/pagesLinks/mainPage';
import Services from './components/hospServices/index'
import Specialists from './components/specialists';
import React from 'react';

const App = () => {
    return(
        <BrowserRouter>
            <AppHeader />
            <Routes >
                <Route path="/" element={<MainPage/>}/>
                <Route path="/price" element={<Services />}/>
                <Route path="/specialists" element={<Specialists />}/>
                {/* <Route path="/news" element={<News />}/> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

