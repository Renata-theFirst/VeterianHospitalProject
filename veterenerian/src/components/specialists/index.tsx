import './Specialists.css';
// import DocCard from './Specialists';

const Specialists = () => {

    return(
        <div>
            <h2 className="hosp__docs_header">Врачи нашей клиники</h2> 
            <div className="hosp__docs_wrapper">
                <div className="hosp__docs" id="docs">
                    {/* <DocCard/> */}
                </div>
    
                <div className="hosp__manag">
                </div>
            </div>
        </div>
    );
}
export default Specialists;