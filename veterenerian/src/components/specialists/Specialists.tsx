
const DocCard = () => {
    const docs = [
        {
            src:'../../resources/pics/doctors/heart.jpg',
            name:'Новикова И.В.',
            qualification:'Кардиолог-анестизиолог',
        },
        {
            src:'../../resources/pics/doctors/ekzo.jpg',
            name:'Исаичев М.А.',
            qualification:'Экзотолог',
        },
        {
            src:'../../resources/pics/doctors/uzi.jpg',
            name:'Кривова Ю.В.',
            qualification:'Визуальная диагностика (УЗИ)',
        },
        {
            src:'../../resources/pics/doctors/nurse.jpg',
            name:'Гречиха А.Ю.',
            qualification:'Офтальмолог/Невролог',
        },
        {
            src:'../../resources/pics/doctors/Stomac.jpg',
            name:'Саричев В.Ю.',
            qualification:'Стоматолог',
        },
        {
            src:'../../resources/pics/doctors/onko.jpg',
            name:'Ульянова М.В.',
            qualification:'Онколог',
        },
        {
            src:'../../resources/pics/doctors/surgeon2.jpg',
            name:'Бисекенова Ж.К.',
            qualification:'Хирург/Терапевт',
        },
        {
            src:'../../resources/pics/doctors/anest.jpg',
            name:'Мазманян Д.А.',
            qualification:'Анестезиолог/Реаниматолог',
        },
    
    ]

    const renderDocs = docs.map((item,i) =>{
        return (
            <div key={`doc-${i}`} className="hosp__doc" >
                <img src={item.src} alt="doc_card" className="hosp__docs_img" />
                <div className="hosp__doc-container">
                    <h3 className="hosp__docs_name">{item.name}</h3>
                    {item.qualification}
                </div>   
            </div>
        );
    });

    return(
        <>
            {renderDocs}
        </>
    );
}
export default DocCard
