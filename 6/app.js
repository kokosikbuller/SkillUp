let total = 0;
let number = prompt('Введите число');


for(let i = 0; number !== null; i += 1) {   
 
    if(isNaN(Number(number))) {
        alert('Было введено не число, попробуйте снова');
        total = 0;
        break;
    }

    total += Number(number);
    number = prompt('Введите число');
}

alert(`Общая сумма чисел равна ${total}`);


