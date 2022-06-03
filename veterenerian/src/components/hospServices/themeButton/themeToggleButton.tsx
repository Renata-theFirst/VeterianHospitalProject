import { useDispatch, useSelector } from "react-redux";
import { actions, LoadBalance } from "../../store/store";

const ThemeTogglerButton = () => {
  const dispatch = useDispatch();
  const {busy, balance} = useSelector((state:any) => state.sets);
  const balanceTitle = busy? 'working...': `balance: ${balance}$`
  return (
    <>
      <div className="tab_big">
        <button
          className="button_big"
          onClick={() => dispatch(actions.toggle())}
        >
          Версия для слабовидящих
        </button>
        <button 
          className="button_big"
          onClick={() =>dispatch(LoadBalance() as any)}
        >
          {balanceTitle}
        </button>
      </div>
    </>
  );
};

export default ThemeTogglerButton;
