const GuestMessage = () => {
    return(
        <div className="form__row">
            <label for="guestMessage">
                Сообщение:
            </label>
            <input 
                type="text" 
                id="guestMessage" 
                placeholder="Ваше сообщение..."
            />
        </div>
    );
}
export default GuestMessage;