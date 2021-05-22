import getCityData from './modules/getWeather';
import initCard from './modules/initCard';
import initCity from './modules/initCity';
import toggleUnits from './modules/toggleUnits';
import updateTemp from './modules/updateTemp';

let unit = 'f';

const cards = document.querySelectorAll('.weather-card');
const btn = document.querySelector('.toggle-btn');
const submit = document.querySelector('button');

submit.addEventListener('click', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    initCity(document.getElementById('city').value, unit);
}

btn.addEventListener('click', () => {
    unit = toggleUnits(unit);
    cards.forEach(card => {
        updateTemp(card, unit);
    });
})

initCity('Boulder', unit);
