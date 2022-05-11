const GuestTel = (props:any) => {
    const {guestTel, inputChangedHandler} = props;
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