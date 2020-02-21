const HERO_SEARCH = document.querySelector('.heroes-search');
const BTN = document.querySelector('.search-btn');
const ERROR_DIV = document.querySelector('.error');
const ERROR_MSG = document.querySelector('.error-msg');

const KEY = 'afce3e26aaca99c4dd5e53a051ed2fbb';

const URL = `https://gateway.marvel.com:443/v1/public/characters?name=${HERO_SEARCH.value}&apikey=${KEY}`;

BTN.addEventListener('click', getHero);

function getHero() {
    const HERO_NAME = HERO_SEARCH.value.trim();

    if(HERO_NAME.length == 0) {
        ERROR_DIV.classList.add('show');
        ERROR_MSG.textContent = 'Por favor escreve o nome de um super-herói da Marvel';
    }
}