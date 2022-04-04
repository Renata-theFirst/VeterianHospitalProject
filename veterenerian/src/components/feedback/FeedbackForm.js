import './FeedBackForm.css';
import smartDog from './dogWithComputer.png';
import GuestName from '../formLines/GuestName';
import GuestTel from '../formLines/GuestTel';
import GuestMessage from '../formLines/GuestMessage';

const Feedback = () => {
    
    function formFill() {
        if(localStorage.length > 0) {
            const key = localStorage.key(0);
            document.getElementById("guestName").value = key;
            document.getElementById("guestTel").value = localStorage.getItem(key);
        }
    }

    function submitMessage(e) {
        e.preventDefault();
        const name = document.getElementById("guestName").value;
        const tel = document.getElementById("guestTel").value;
        if (localStorage.length > 0){
            localStorage.clear();
        }
        localStorage.setItem(name, tel);
    }

    return(
        <div className="form__container">
            <div className="form__container-left">
                <img src={smartDog} alt="Dog With Computer"/>
            </div>

            <div className="form__container-right">
                <h2>Напишите нам:</h2>
                <form action="###" onFocus={formFill}>
                    <GuestName />
                    <GuestTel />
                    <GuestMessage />
                    <div className="form__row">
                        <input type="Submit" value="Отправить" id="formSubmit" onSubmit={() => submitMessage}/>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Feedback;