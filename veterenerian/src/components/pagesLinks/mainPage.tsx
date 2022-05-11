import Feedback from "../feedback/FeedbackForm";
import MainInfo from "../mainInfo/MainInfo";
import Promo from "../promo/Promo";

const MainPage = () => {
    return(
        <>
            <Promo/>
            <MainInfo/>
            <Feedback/>
        </>
    );
};
export default MainPage;