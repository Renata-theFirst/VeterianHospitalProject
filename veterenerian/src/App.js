import './App.css';
import AppHeader from './components/appHeader/AppHeader';
import MainInfo from './components/mainInfo/MainInfo';
import Promo from './components/promo/Promo';
import Feedback from './components/feedback/FeedbackForm';
import Footer from './components/footer/Footer';
import HospServices from './components/hospServices/HospServices';
import Specialists from './components/specialists/Specialists';
import News from './components/news/News';

const App = () => {
    return(
        <>
            <AppHeader />
            <Promo />
            <MainInfo />
            <Feedback />
            <HospServices />
            <Specialists />
            <News />
            <Footer />
        </>
    );
}

export default App;

