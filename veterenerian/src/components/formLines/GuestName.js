const GuestName = (props) => {
    const {guestName, inputChangedHandler} = props;
    return( 
        <div className="form__row">
            <label for="guestName">
                Ваше имя:
            </label>
            <input 
                type = "text" 
                id = "guestName" 
                value = {guestName}
                onChange = {inputChangedHandler}
                placeholder = "Иван"
                required
            />
        </div>
    );

}
export default GuestName;
