import { useState } from "react";
import ThemeContext, { themes } from "./ThemeContext";

type ProviderProps = {children: React.ReactNode}
export const ThemeProvider = ({children}:ProviderProps) => {
    const [theme, setTheme] = useState(themes.normal);
    const setNormalTheme = () => setTheme(themes.normal);
    const setBigTheme = () => setTheme(themes.big);

    return(
        <ThemeContext.Provider value={{theme, setNormalTheme, setBigTheme,themes}}>
            {children}
        </ThemeContext.Provider>
    );
};