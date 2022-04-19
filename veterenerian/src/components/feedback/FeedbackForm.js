import './FeedBackForm.css';
import React, { useCallback, useEffect, useState } from 'react';
import smartDog from './dogWithComputer.png';
import GuestName from '../formLines/GuestName';
import GuestTel from '../formLines/GuestTel';
import GuestMessage from '../formLines/GuestMessage';

const Feedback = () => {
    const [guestName, setGuestName] = useState('');
    const [guestTel, setGuestTel] = useState();
    const [guestMessage, setGuestMessage] = useState('');
        
    const inputChangedHandlerTel = (e) => {
        const updatedTel = e.target.value;
        if (updatedTel.match(/[0-9]+$/) && updatedTel.length<=12) {
            setGuestTel(updatedTel);
        } else { updatedTel.slice(0, -1);}
    }
   
    const inputChangedHandlerName = useCallback((e) => {
        const updatedKeyword = e.target.value;
        if (updatedKeyword.match(/[А-Яа-яЁё\s]+$/)){
            setGuestName(updatedKeyword);
        } else {console.log("error");}
    }, []);

    const inputChangedHandlerMessage = useCallback((e) => {
        const message = e.target.value;
        setGuestMessage(message);
    }, []);

    const submitMessage = (e) => {
        e.preventDefault();
        if(localStorage.length>0){
            localStorage.clear();
        }
        localStorage.setItem(guestName,guestTel);
        const btn = document.getElementById('formSubmit');
        btn.classList.add('btn_hover');
    };

    /* useEffect(() => {
        const btn = document.getElementById('formSubmit').classList;
        const msg = document.getElementById("guestMessage");
        if(btn.contains('btn_hover')){
            alert("Сообщение получено!");
            btn.remove('btn_hover');
            msg.value = '';
        };
    }, [guestMessage]); */

    useEffect(() => {
        const btn = document.getElementById('formSubmit');
        btn.addEventListener('click', () => {
            const msg = document.getElementById("guestMessage");
            if(btn.classList.contains('btn_hover')){
                alert("Сообщение получено!");
                btn.classList.remove('btn_hover');
                msg.value = '';
            };
        })
    });
    
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