import "./styles.css";
import menuJson from './menu.json'
import './templates/test.hbs'
import menuTamplate from '../src/templates/test.hbs';

const root = document.querySelector('.menu');
let markup = menuTamplate(menuJson);

root.innerHTML = markup;

const theme = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

setClass(localStorage.getItem('checked') === 'true');

function setClass(param) {
  if(param) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    theme.checked = true;
  } else {
    body.classList.remove('dark-theme')
    body.classList.add('light-theme');
    theme.checked = false;
  }
}

theme.addEventListener('click', event => {
  setClass(event.target.checked);
  localStorage.setItem('checked', event.target.checked);
});




// const menu = document.querySelector('.menu');
// const theme = document.querySelector('#theme-switch-toggle');
// const body = document.querySelector('body');


// setClass(localStorage.getItem('checked') === 'true');

// function renderList(param) {
//   const list = param.map(item => {
//     const li = `
//     <li class="menu__item">
//     <article class="card">
//       <img
//         src="${item.image}"
//         alt="Картофель, запеченный в мундире"
//         class="card__image"
//       />
//       <div class="card__content">
//         <h2 class="card__name">${item.name}</h2>
//         <p class="card__price">
//           <i class="material-icons"> monetization_on </i>
//           ${item.price} кредитов
//         </p>

//         <p class="card__descr">
//           ${item.description}
//         </p>

//         <ul class="tag-list">
//           ${
//             item.ingredients.map(subItem => {
//               const lili = `<li class="tag-list__item">${subItem}</li>`;
//               return lili;
//             })
//           }
//         </ul>
//       </div>

//       <button class="card__button button">
//         <i class="material-icons button__icon"> shopping_cart </i>
//         В корзину
//       </button>
//     </article>
//   </li>
//     `;
//     return li;
//   });
//   return list;
// }

// menu.innerHTML = renderList(menuJson);

// function setClass(param) {
//   if(param) {
//     body.classList.remove('light-theme');
//     body.classList.add('dark-theme');
//     theme.checked = true;
//   } else {
//     body.classList.remove('dark-theme')
//     body.classList.add('light-theme');
//     theme.checked = false;
//   }
// }

// theme.addEventListener('click', event => {
//   setClass(event.target.checked);
//   localStorage.setItem('checked', event.target.checked);
// });


