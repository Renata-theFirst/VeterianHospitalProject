import { HospServices } from "./HospServices";
import ThemeTogglerButton from "./themeButton/themeToggleButton";

const Services = () => {
    return(
        <>
            <div className="tab_big">
                <ThemeTogglerButton/>
            </div>
            <HospServices/>
        </>
    );
}
export default Services;

