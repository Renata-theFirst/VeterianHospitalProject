const GuestTel = () => {
    // const tel = document.getElementById('guestTel');
    // tel.onfocus = function() {
    //     tel.addEventListener('keydown', CheckValue);
    // }
    
    // function CheckValue(e) {
    //     console.log(e.key);
    //     this.value = this.value.replace(/[^\d && ^\+ && ^\- && ^\( && ^\) ]/g, '');
    // }
    return(
        <div className="form__row">
            <label for="guestTel">
                Телефон:
            </label>
            <input 
                type="tel" 
                id="guestTel" 
                placeholder="+7(XXX)XXX-XX-XX" 
                required
            />
        </div>
    );
}
export default GuestTel;