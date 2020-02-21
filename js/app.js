const HERO_SEARCH = document.querySelector('.heroes-search');
const BTN = document.querySelector('.search-btn');

const KEY = 'afce3e26aaca99c4dd5e53a051ed2fbb';

const URL = `https://gateway.marvel.com:443/v1/public/characters?name=${HERO_SEARCH.value}&apikey=${KEY}`;

BTN.addEventListener('click', getHero);

function getHero() {
    const HERO_NAME = HERO_SEARCH.value.trim();

    if(HERO_NAME.length == 0) {
        return alert('Escreve o nome de um super-herói');
    }
}