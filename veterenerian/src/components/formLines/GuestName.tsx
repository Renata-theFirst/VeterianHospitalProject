/* Первый вариант!
interface Props {
    guestName: string,
    inputChangedHandler:React.ChangeEventHandler
}

const GuestName = ({guestName, inputChangedHandler}:Props) => {
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
export default GuestName; */


const GuestName: React.FC<{guestName: string, inputChangedHandler: React.ChangeEventHandler}> = ({guestName, inputChangedHandler}) => {
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
