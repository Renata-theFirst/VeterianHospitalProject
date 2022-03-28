
// Генераторы
// const str = ['s', 'k', 'r', 'i', 'p', 't'];
const str = 'skript';

function* strVal(str) {
    for (let i=0; i<=str.length; i++) {
        yield i++;
    }
}

for(let elem of str){
    console.log(elem);
}