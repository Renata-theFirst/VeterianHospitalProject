const GuestTel = (props) => {
    const {guestTel, inputChangedHandler} = props;
    return(
        <div className="form__row">
            <label for="guestTel">
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