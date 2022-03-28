const Calc = () =>{

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

    return(
        <div class="calc">
            <label for="num1">Введите число 1:</label>
            <input type="number"  class="num" id="num1" required/>

            <label for="calc__btns">Выберите действие:</label>
            <div class="calc__btns">
                <input 
                    type="button" 
                    class="button"
                    id="plus" 
                    value="+"
                />
                <input 
                    type="button" 
                    class="button"
                    id="minus" 
                    value="-"
                />
                <input 
                    type="button" 
                    class="button"
                    id="times" 
                    value="x"
                />
                <input 
                    type="button" 
                    class="button"
                    id="divide" 
                    value="/"
                />
            </div>

            <label for="num2">Введите число 2:</label>
            <input type="number" class="num" id="num2" required/>

            <div class="result">
                <input 
                    type="button" 
                    id="res" 
                    value="Посчитать"
                />
                <div id="result">
                    
                </div>
            </div>
            
        </div>
    )

}