import { Http } from './http.js';
import { HeroData, HERO_PROXY_HANDLER } from './hero-data.js';

const HERO_SEARCH = document.querySelector('.heroes-search');
const BTN = document.querySelector('.search-btn');

const ALERT_DIV = document.querySelector('.alert');
const ALERT_MSG = document.querySelector('.alert-msg');

const HEROES_BOX = document.querySelector('.heroes-details');

const HERO_NAME = document.querySelector('.hero-name');
const HERO_DESCRIPTION = document.querySelector('.hero-description');
const HERO_IMG = document.querySelector('.hero-thumbnail');

const KEY = 'afce3e26aaca99c4dd5e53a051ed2fbb';


BTN.addEventListener('click', getHero);

function getHero() {
    const HERO = HERO_SEARCH.value.trim();
    
    if (HERO_SEARCH.value === "") {
        ALERT_DIV.classList.add('show');
        ALERT_MSG.textContent = 'Por favor escreve o nome de um super-herói da Marvel';
    } else {
        ALERT_DIV.classList.remove('show');
    }
    
    HEROES_BOX.classList.remove('show');

    const URL = `https://gateway.marvel.com:443/v1/public/characters?name=${HERO}&apikey=${KEY}`;

    Http.fetchData(URL)
        .then(responseData => {
            const HERO_DATA = new HeroData(HERO, responseData.data.results[0].description, responseData.data.results[0].thumbnail);
            const HERO_PROXY = new Proxy(HERO_DATA, HERO_PROXY_HANDLER);
            updateHero(HERO_PROXY);
        })
        .catch(error => alert(error));
}

function updateHero(heroData) {
    HERO_NAME.textContent = heroData.heroName;
    HERO_DESCRIPTION.textContent = heroData.description;
    HERO_IMG.src = heroData.thumbnail + '.jpg';

    HEROES_BOX.classList.add('show');
};