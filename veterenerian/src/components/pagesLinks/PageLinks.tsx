import {NavLink} from 'react-router-dom';
import './PageLinks';

const PageLinks = () => {
     
    type Tab = {
        link: string,
        label: string
    };
    type MenuTabs = Tab[];
    const menuTabs: MenuTabs = [
        {link: '/', label: 'Главная'},
        {link: '/price', label: 'Услуги и цены'},
        {link: '/specialists', label: 'Специалисты'},
        {link: '/news', label: 'Новости'},
    ]

    const renderTabs = menuTabs.map((e, i) => {
        return(
            <NavLink 
                key={`nl-${i}`} 
                to={e.link}  
                className={
                    isActive => "link" + (!isActive ? "" : " active")
                }
            > 
                {e.label} 
            </NavLink>
        );
    })
    
    return (
        <div className="links">
                <nav>
                    {renderTabs}
                </nav>
            </div>
    );
};

export default PageLinks;