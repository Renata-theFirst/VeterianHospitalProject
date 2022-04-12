const GuestMessage = (props) => {
    const {guestMessage, inputChangedHandler} = props;

    return(
        <div className="form__row">
            <label for="guestMessage">
                Сообщение:
            </label>
            <input 
                type="text" 
                id="guestMessage" 
                value = {guestMessage}
                onChange = {inputChangedHandler}
                placeholder="Ваше сообщение..."
            />
        </div>
    );
}
export default GuestMessage;