const counter = document.querySelector('#counter');
const inc = document.querySelector('button[data-action="increment"]');
const dec = document.querySelector('button[data-action="decrement"]');
const span = document.querySelector('#value');
let counterValue = 0;

function increment() {
    counterValue += 1;
    span.innerText = counterValue;
}

function decrement() {
    counterValue -= 1;
    span.innerText = counterValue;
}

inc.addEventListener('click', increment);
dec.addEventListener('click', decrement);

