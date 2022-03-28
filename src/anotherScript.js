document.addEventListener('DOMContentLoaded', () =>{

    const options = document.querySelectorAll(".button");

    options.forEach((elem) => {
        elem.addEventListener('click', ActiveBtn);
        
    });

    function ClearClass() {

        options.forEach((el) => {
            el.classList.contains("btn__active") ?  el.classList.remove("btn__active") : '';
        });
    }

    function ActiveBtn(e) {

        ClearClass();

        const op = document.getElementById(e.target.id);
        op.classList.add('btn__active');
        
    };

    const result = document.getElementById('result');
    const total = document.getElementById('res');

    total.onclick = function() {
        const num1 =+ document.getElementById("num1").value;
        const num2 =+ document.getElementById("num2").value;

        try{
        const op = document.querySelector('.btn__active').id;
        
            switch (op) {
                case 'plus':
                    result.innerText = `Итог: ${num1 + num2}`;
                    break;
                case 'minus':
                    result.innerText = `Итог: ${num1 - num2}`;
                    break;
                case 'times':
                    result.innerText = `Итог: ${num1 * num2}`;
                    break;
                case 'divide':
                    result.innerText = `Итог: ${num1 / num2}`;
                    break;
            };
        }
        catch {
            result.innerText = 'Не выбрана операция';
        };
        

        ClearClass();
    };

});