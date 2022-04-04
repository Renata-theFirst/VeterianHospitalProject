import {useEffect} from 'react';
import './AppHeader.css';
import hours from './appHeaderPics&Logo/24.png';
import logotype from './appHeaderPics&Logo/Logo.png';
import PageLinks from '../pagesLinks/PageLinks';

const AppHeader = () => {
    useEffect(() => {
        const logo = document.getElementById('logo');
        logo.addEventListener('mouseenter', (e) => {
            logo.style.filter = 'drop-shadow(0 0 0.75rem rgba(0, 51, 102, 0.5))';
        });

        logo.addEventListener('mouseleave', (e) => {
            logo.style.filter = 'drop-shadow(0 0 0)';
        });

        logo.addEventListener('click', (e) => {
            window.location.href = '/main';
        });
    });

    return(
        <header>
            <div className="header">
                <div className="header__help">
                    <div className="header__work">
                        <div>
                            <strong>Режим работы:</strong>
                        </div>
                        <img src={hours} alt="24h"/>
                    </div>

                    <div className="header__buttons">
                        <input className="header__button" type="button" value="Запись на приём"/>
                        <input className="header__button" type="button" value="Позвонить"/>
                    </div>
                </div>
            </div>

            <div className="header__main">
                <div className="logo">
                    <img src={logotype} alt="logotype" id="logo"/>
                </div>
                <PageLinks/>
            </div>
        </header>
    );
}
export default AppHeader;