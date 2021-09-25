import './styles.css';
import debounce  from 'lodash.debounce';
import Search from './js/class';


const searchRef = document.querySelector('#search');
const ulref = document.querySelector('.ul')

const search = new Search(ulref);

const changingInput = (e) => {
  const value = e.target.value;
  value.length > 0 && search.fetchData(value);
}

searchRef.addEventListener('input', debounce(changingInput, 500));
