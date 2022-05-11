interface IProps {
    guestTel: string,
    inputChangedHandler:React.ChangeEventHandler
}

const GuestTel = ({guestTel, inputChangedHandler}:IProps) =>  {
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