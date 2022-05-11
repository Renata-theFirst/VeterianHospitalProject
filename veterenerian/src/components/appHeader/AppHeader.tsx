import PageLinks from '../pagesLinks/PageLinks';
import './AppHeader.css';
import Logo from './Logo';
import hours from './appHeaderPics&Logo/24.png';

const AppHeader = () => {


    return (
        <header>
            <div className="header">
                <div className="header__help">
                    <div className="header__work">
                        <div>
                            <strong>Режим работы:</strong>
                        </div>
                        <img src={hours} alt="24h" />
                    </div>

                    <div className="header__buttons">
                        <input className="header__button" type="button" value="Запись на приём" />
                        <input className="header__button" type="button" value="Позвонить" />
                    </div>
                </div>
            </div>

            <div className="header__main">
                <Logo />
                 <PageLinks /> 
            </div>
        </header>
    );
}
export default AppHeader;