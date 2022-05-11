
import './FeedBackForm.css';
import React, { useCallback, useState } from 'react';
import GuestName from '../formLines/GuestName';
import GuestTel from '../formLines/GuestTel';
import GuestMessage from '../formLines/GuestMessage';
import smartDog from './dogWithComputer.png';

const Feedback = () => {
    
    const [guestName, setGuestName] = useState<string>('');
    const [guestTel, setGuestTel] = useState<string>('');
    const [guestMessage, setGuestMessage] = useState<string>('');

    const inputChangedHandlerTel = (e:React.ChangeEvent<HTMLInputElement>) => {
         const updatedTel = e.target.value;
        if (updatedTel.match(/[0-9]+$/) && updatedTel.length<=12) {
            setGuestTel(updatedTel);
        } else { updatedTel.slice(0, -1);} 
    }
   
    const inputChangedHandlerName = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        const updatedKeyword = e.target.value;
        if (updatedKeyword.match(/[А-Яа-яЁё\s]+$/)){
            setGuestName(updatedKeyword);
        } else {console.log("error");}
    }, []);

    const inputChangedHandlerMessage = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        const message = e.target.value;
        setGuestMessage(message);
    }, []);

    const submitMessage = (e: React.MouseEvent) => {
        e.preventDefault();
        if(localStorage.length>0){
            localStorage.clear();
        }
        localStorage.setItem(guestName,guestTel);
        const btn = document.getElementById('formSubmit') as HTMLButtonElement;
        btn.classList.add('btn_hover');
        alert("Сообщение отправлено!");
        const msg = document.getElementById("guestMessage") as HTMLInputElement;
        msg.value = '';
    };

    return(
        <div className="form__container">
            <div className="form__container-left">
                <img src={smartDog} alt="Dog With Computer"/>
            </div>

            <div className="form__container-right">
                <h2>Напишите нам:</h2>
                <form>
                    <GuestName 
                        guestName={guestName} 
                        inputChangedHandler={inputChangedHandlerName}
                    />
                    <GuestTel 
                        guestTel={guestTel} 
                        inputChangedHandler={inputChangedHandlerTel}
                    />
                    <GuestMessage 
                        guestMessage={guestMessage}
                        inputChangedHandler={inputChangedHandlerMessage}
                    />
                    <div className="form__row">
                        <input className="submit" type="Submit" value="Отправить" id="formSubmit" onClick={submitMessage}/>
                    </div>
                </form>
            </div>
        </div>
    );

    
}
export default Feedback; 