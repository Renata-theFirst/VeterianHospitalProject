document.addEventListener('DOMContentLoaded', () =>{

    const tel = document.getElementById('guestTel');

    tel.onfocus = function() {
        tel.addEventListener('keydown', CheckValue);
    }
    
    function CheckValue(e) {
        console.log(e.key);
        this.value = this.value.replace(/[^\d && ^\+ && ^\- && ^\( && ^\) ]/g, '');
    }

    const logo = document.getElementById('logo');

    logo.addEventListener('mouseenter', (e) => {
        logo.style.filter = 'drop-shadow(0 0 0.75rem rgba(0, 51, 102, 0.5))';
    });

    logo.addEventListener('mouseleave', (e) => {
        logo.style.filter = 'drop-shadow(0 0 0)';
    });

    logo.addEventListener('click', (e) => {
        window.location.href = '###/main'
    });
});