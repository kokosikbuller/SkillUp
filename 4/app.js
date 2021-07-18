const credits = 35500;
const pricePerDroid = 3000;
let totalPrice = 0;
const quantity = prompt('Количество дроидов');

if(quantity === null) {
    console.log('Отменено пользователм');
} else {
    totalPrice = pricePerDroid * quantity;
}

if(totalPrice > credits) {
    console.log('Недостаточно средств на счету');
} else {
    const remainder = credits - totalPrice;
    console.log(`Вы купили ${quantity} дроидов, на счету осталось ${remainder} кредитов`);
}