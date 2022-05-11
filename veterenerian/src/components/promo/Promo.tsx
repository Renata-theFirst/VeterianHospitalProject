import './Promo.css';

import doctor from './doctor.png';

const Promo = () => {
    return(
        <>
            <div className="promo">
                <div className="promo__info">
                    <strong>Happy Pet</strong> - современный многопрофильный ветеринарный центр с полным спектром услуг:
                    от диагностики и лечения до медицинского сопровождения домашних питомцев разного вида, веса и возраста. 
                    Мы считаем, что лечение должно проходить без лишнего стресса и создаем условия для того, чтобы всем было комфортно. 
                    Наши сотрудники досконально знают свое дело, увлечены своей профессией и постоянно совершенствуются.
                </div>

                <div>
                  <img src={doctor}  alt="Veterenerian And Dog"/> 
                </div>
            </div>
        </>
    );
}
export default Promo;