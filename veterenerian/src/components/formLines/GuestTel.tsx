const GuestTel:React.FC<{guestTel:string, inputChangedHandler:React.ChangeEventHandler}> = ({guestTel, inputChangedHandler}) => {
    return(
        <div className="form__row">
            <label htmlFor="guestTel">
                Телефон:
            </label>
            <input 
                type="tel" 
                id="guestTel" 
                onChange = {inputChangedHandler}
                value={guestTel}
                placeholder="8XXXXXXXXXX" 
                required
            />
        </div>
    );
}
export default GuestTel;