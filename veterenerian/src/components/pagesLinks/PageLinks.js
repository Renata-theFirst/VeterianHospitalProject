import {NavLink} from 'react-router-dom';

const PageLinks = () => {
    const style = ({isActive}) => ({
     background: isActive ? "rgba(0, 51, 102, 0.8)" : "",
     color: isActive ? "rgba(242,243,244, 0.7)" : "",
     border: isActive ? "1px solid rgba(0, 51, 102, 0.5)" : "",
     borderRadius: isActive ? "15px 15px 0 0" : "",
    });
    
    return (
        <div className="links">
                <nav>
                    <NavLink to="/main"  className="link" style={style}> Главная </NavLink>
                    <NavLink to="/price" className="link" style={style}> Услуги и цены </NavLink>
                    <NavLink to="/specialists" className="link" style={style}> Специалисты </NavLink>
                    <NavLink to="/news" className="link" style={style}> Новости </NavLink>
                </nav>
            </div>
    );
};

export default PageLinks;