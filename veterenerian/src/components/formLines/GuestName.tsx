interface IProps {
    guestName: string,
    inputChangedHandler:React.ChangeEventHandler
}

const GuestName = ({guestName, inputChangedHandler}:IProps) => {
    return( 
        <div className="form__row">
            <label htmlFor="guestName">
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

