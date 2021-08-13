const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

function changeSpan(event) {
    !event.target.value ? span.innerText = 'незнакомец' : span.innerText = event.target.value;
}

input.addEventListener('input', changeSpan);