let countryName = prompt('Название страны').toLowerCase();
let upperName = countryName[0].toUpperCase() + countryName.slice(1);
let price = 0;


switch (countryName) {
    case 'китай':
        price = 150;
        console.log(`Доставка в ${upperName}, будет стоить ${price} кредитов`);
        break;

    case 'чили':
        price = 250;
        console.log(`Доставка в ${upperName}, будет стоить ${price} кредитов`);
        break;

    case 'австралия':
        price = 165;
        console.log(`Доставка в ${upperName}, будет стоить ${price} кредитов`);
        break;

    case 'индия':
        price = 90;
        console.log(`Доставка в ${upperName}, будет стоить ${price} кредитов`);
        break;

    case 'ямайка':
        price = 130;
        console.log(`Доставка в ${upperName}, будет стоить ${price} кредитов`);
        break;

    default:
        console.log('В вашей стране доставка не достувна');
        break;
}

