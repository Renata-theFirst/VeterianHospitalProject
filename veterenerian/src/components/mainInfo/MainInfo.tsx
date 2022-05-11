import './MainInfo.css';
import paw from './paw.png';

const MainInfo = () => {
    const serviceList = [
        "Вызов врача на дом;",
        "Терапия, хирургия;",
        "Стерилизация и кастрация;",
        "Родовспоможение;",
        "Стоматология;",
        "Лабораторные исследования;",
        "Вакцинация;",
        "Лечение экзотических животных;",
        "Косметические процедуры.",
    ];

    const renderList = serviceList.map((item, i) => {
        return(
            <li key={`li-`+{i}}> 
                {item}
            </li>
        );
    })

    const mainInf = [
        {
            head: "Забота",
            descr:"Мы внимательны к животным и людям и искренне хотим помочь, считаем, что лечение должно проходить без лишнего стресса и создаем условия для того, чтобы всем было комфортно."
        },
        {
            head: "Ответственность",
            descr:"Мы принимаем взвешенные решения, учитывая потребности наших пациентов, готовы к сложным ситуациям и нестандартным медицинским случаям. Мы отвечаем за каждую процедуру и рекомендацию."
        },
        {
            head: "Профессионализм",
            descr:"Наши сотрудники досконально знают свое дело, увлечены профессией и постоянно совершенствуются в ней."
        },
    ]

    const renderInf = mainInf.map((i, k) =>{
        return(
            
                <li key={k}><strong>{i.head}</strong> 
                    <br/>
                    {i.descr}
                </li>
            
        );
    })

    return(
        <>
            <div className="main__info">
                <div className="main__info-descr">
                    <h2>Наши принципы:</h2>
                    <ul>
                        {renderInf}
                    </ul>
                </div>

                <div className="divider">
                    <img src={paw} alt="paw"/>
                    <img src={paw} alt="paw"/>
                    <img src={paw} alt="paw"/>
                    <img src={paw} alt="paw"/>
                    <img src={paw} alt="paw"/>
                    <img src={paw} alt="paw"/>
                </div>

                <div className="main__info-descr">
                    <h2>Мы предлагаем широкий спектр ветеринарных услуг:</h2>
                    <ol>
                        {renderList}
                    </ol>
                </div>
            </div>
        </>
    );
}
export default MainInfo;