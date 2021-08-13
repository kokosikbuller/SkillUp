const ingredientsRef = document.querySelector('#ingredients');

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
const map = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.innerText = ingredient;
    return li.outerHTML;
});
ingredientsRef.innerHTML = map.join(' ');

// const result = ingredients.reduce((acc, ingredient) =>  acc += `<li>${ingredient}</li>`, '');
// ingredientsRef.innerHTML = result;

