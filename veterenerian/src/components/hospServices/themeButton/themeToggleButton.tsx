import { useContext } from "react";
import { ThemeContext, theme, themes } from "./ThemeContext";

const ThemeTogglerButton = () => {
  const {setNormalTheme, setBigTheme} = useContext(ThemeContext);
  /* const togglerTheme =() =>{
     console.log("+", theme)
    //toggleTheme (theme === themes.normal ? themes.big : themes.normal);
    /*toggleTheme =({theme}) =>{theme === themes.normal ? themes.big : themes.normal};
    console.log("++", theme) 

  } */
  const ToggleTheme =() => {
    theme === themes.normal? setBigTheme(): setNormalTheme();
  }

  return (
    <button
      className="button_big"
      onClick={ToggleTheme}
    >
      Версия для слабовидящих
    </button>
  );

  /* return (
    <button
      className="button_big"
      onClick={theme.toggleTheme}
    >
      Версия для слабовидящих
    </button>
  ); */
};

export default ThemeTogglerButton;
