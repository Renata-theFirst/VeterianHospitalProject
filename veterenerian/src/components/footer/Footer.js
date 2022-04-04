import './Footer.css';
import fb from './icons/facebook.svg';
import inst from './icons/instagram.svg';
import vk from './icons/vk.svg';


const Footer = () => {
    return(
        <footer>
            <div className="info">
                <div>
                    <h4 className="info__contact">Наш адрес</h4>
                    <p>
                        300000, Тульская область
                        <br/>
                        г. Тула, ул. Восточная, д.15 
                        <br/>
                        (вход со стороны двора дома)
                    </p>
                </div>
            </div>
            
            <div className="info">
                <a href="https://www.facebook.com/">
                    <img src={fb} alt="facebook"/>
                </a>
                <a href="https://www.instagram.com/">
                    <img  src={inst} alt="instagram"/>
                </a>
                <a href="https://www.vkontakte.ru/">
                    <img src={vk} alt="vkontakte"/>
                </a>
            </div>

            <div className="info">
                <div>
                    <h4 className="info__contact">Контакты</h4>
                    <p>
                        <b>Телефон:</b>8(4872)35-33-36
                        <br/>
                        <b>Факс:</b>8(4872)35-33-39
                        <br/>
                        <b>e-mail:</b>happy-pet@gmail.com
                    </p>
                </div>
            </div>
        </footer>
    );
    
}
export default Footer;