const GuestMessage = (props:any) => {
    const {guestMessage, inputChangedHandler} = props;

    return(
        <div className="form__row">
            <label htmlFor="guestMessage">
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