import { HospServices } from "./HospServices";
import { ThemeProvider } from "./themeButton/themeProvider";
/* import {  themeData, ThemeContext } from "./themeButton/ThemeContext"; */
import ThemeTogglerButton from "./themeButton/themeToggleButton";

const Services = () => {


    return(
        
        <ThemeProvider>
            <div className="tab_big">
                <ThemeTogglerButton/>
            </div>
            <HospServices/>
        </ThemeProvider>
    );
}
export default Services;

/* return(
    <ThemeContext.Provider value ={themeData}>
        <div className="tab_big">
            <ThemeTogglerButton/>
        </div>
        <HospServices/>
    </ThemeContext.Provider> 
); */