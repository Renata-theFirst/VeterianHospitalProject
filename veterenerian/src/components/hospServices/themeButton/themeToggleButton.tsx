import { store } from "../../store/store";

const ThemeTogglerButton = () => {

  return (
    <div>
      <button
        className="button_big"
        onClick={() => (store.dispatch({type:'toggle'}))}
      >
        Версия для слабовидящих
      </button>
    </div>
  );
};

export default ThemeTogglerButton;
