import '@pnotify/core/dist/BrightTheme.css';
import { info, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';


export default class Serarch {
  constructor(ulref) {
    this.ulref = ulref;
  }

  fetchData(name) {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then(res => res.json())
      .then(data => this.renderCountry(data))
  }

  renderCountry(data) {
    let country;
    if(data.length > 10) {
      defaultModules.set(PNotifyMobile, {});
      info({
        text: 'Необходимо сделать запрос более специфичным!'
      });
      return;
    }
    if(data.length === 1) {
      country = data.map(item => {
        return `<li>
          <div>
            <h1>Name: ${item.name}</h1>
            <p>Capital: ${item.capital}</p>
            <p>Population: ${item.population}</p>
            <p>Languages: ${item.languages.map(lang => lang.name)}</p>
          </div>
        </li>`
      });
    } else {
      country = data.map(item => {
        return `<li>${item.name}</li>`
      });
    }
    this.ulref.innerHTML = country.join('')
  }
}
