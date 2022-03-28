import { useEffect} from "react";
const GuestName = () => {
    
    return( 
    <div className="form__row">
        <label for="guestName">
            Ваше имя:
        </label>
        <input 
            type="text" 
            id="guestName" 
            placeholder="Иван" 
            pattern="[А-Яа-яЁё\s]+$"
            required
        />
    </div>
);
}
export default GuestName;