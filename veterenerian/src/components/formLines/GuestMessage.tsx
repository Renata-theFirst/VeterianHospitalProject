const GuestMessage: React.FC<{guestMessage: string, inputChangedHandler: React.ChangeEventHandler}> = ({guestMessage, inputChangedHandler}) => {
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