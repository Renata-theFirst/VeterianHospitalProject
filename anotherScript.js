document.addEventListener('DOMContentLoaded', () =>{

    const options = document.querySelectorAll(".button");
    // console.log(options);

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
        // console.log(op);
        op.classList.add('btn__active');
        
    };
    
    const result = document.getElementById('res');
    // console.log(result);

    result.onclick = function(btnID) {
        const num1 =+ document.getElementById("num1").value;
        const num2 =+ document.getElementById("num2").value;

        const result = document.getElementById('result');
        // console.log(num1,num2);
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
    }

        ClearClass();
    };

});