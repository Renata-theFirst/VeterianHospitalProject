import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AppHeader from './components/appHeader/AppHeader';
import MainPage from './components/pagesLinks/mainPage';
import Footer from './components/footer/Footer';
import HospServices from './components/hospServices/HospServices';
// import Specialists from './components/specialists/Specialists.js';
import News from './components/news/News';

const App = () => {
    return(
        <Router>
            <AppHeader />
            <Routes>
                <Route path="/main" element={<MainPage/>}/>
                <Route path="/price" element={<HospServices />}/>
                {/* <Route path="/specialists" element={<Specialists />}/> */}
                <Route path="/news" element={<News />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

