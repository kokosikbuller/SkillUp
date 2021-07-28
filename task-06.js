let input = prompt('Введите число');
const numbers = [];
let total = 0;

for(let i = 0; input; i++) {
    if (!isNaN(Number(input))) {
        numbers.push(input);
    } else {
        alert('Было введено не число, попробуйте еще раз');
    }
    input = prompt('Введите число');
}


if(numbers.length >= 1) {
    for(let i = 0; i < numbers.length; i++) {
        total += Number(numbers[i]);
    }
}

console.log(`Общая сумма чисел равна ${total}`);