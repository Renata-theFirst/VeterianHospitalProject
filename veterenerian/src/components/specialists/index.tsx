import './Specialists.css';
import { DocCardList } from './cardList';

const Specialists = () => {
    const directors = [
        {
            src:'surgeon.jpg',
            name:'Соколовский А.В.',
            qualification:'Главный врач/Хирург',
        
        },
        {
            src:'surgeon2.jpg',
            name:'Сарычева Ю.В.',
            qualification:'Заместитель главного врача/Терапевт',
        }
    ] 

    const docs = [
        {
            src:'heart.jpg',
            name:'Новикова И.В.',
            qualification:'Кардиолог-анестизиолог',
        },
        {
            src:'ekzo.jpg',
            name:'Исаичев М.А.',
            qualification:'Экзотолог',
        },
        {
            src:'uzi.jpg',
            name:'Кривова Ю.В.',
            qualification:'Визуальная диагностика (УЗИ)',
        },
        {
            src:'nurse.jpg',
            name:'Гречиха А.Ю.',
            qualification:'Офтальмолог/Невролог',
        },
        {
            src:'Stomac.jpg',
            name:'Саричев В.Ю.',
            qualification:'Стоматолог',
        },
        {
            src:'onko.jpg',
            name:'Ульянова М.В.',
            qualification:'Онколог',
        },
        {
            src:'surgeon2.jpg',
            name:'Бисекенова Ж.К.',
            qualification:'Хирург/Терапевт',
        },
        {
            src:'anest.jpg',
            name:'Мазманян Д.А.',
            qualification:'Анестезиолог/Реаниматолог',
        },
    
    ]
    

    return(
        <div>
            <h2 className="hosp__docs_header">Врачи нашей клиники</h2> 
            <div className="hosp__docs_wrapper">
                <div className="hosp__docs" id="docs">
                    <DocCardList data={docs}/>
                </div>
    
                <div className="hosp__manag">
                    <DocCardList data={directors} />
                </div>
            </div>
        </div>
    );
}
export default Specialists;