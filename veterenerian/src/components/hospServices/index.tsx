import { HospServices } from "./HospServices";
import  {ThemeProvider}  from "./themeButton/themeContext";
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

