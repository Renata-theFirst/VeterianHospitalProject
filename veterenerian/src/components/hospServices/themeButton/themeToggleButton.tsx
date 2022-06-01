import { useTheme } from "./themeContext";

const ThemeTogglerButton = () => {
  const {dispatch} = useTheme()

  return (
    <div>
      <button
        className="button_big"
        onClick={() => (dispatch({type:'toggle'}))}
      >
        Версия для слабовидящих
      </button>
    </div>
  );
};

export default ThemeTogglerButton;
