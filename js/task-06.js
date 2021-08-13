const input = document.querySelector('#validation-input');

function offFocus(event) {
    const attr = input.getAttribute('data-length');
    if(event.target.value.length < attr) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid')
        input.classList.remove('invalid');
    }  
}

input.addEventListener('blur', offFocus)