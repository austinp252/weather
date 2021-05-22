import getCityData from './getWeather';
import initCard from './initCard';

function initCity(city, unit) {
    getCityData(city).then(data => {
        let cityData = data;
        // console.log(cityData);
        let cards = document.querySelectorAll('.weather-card');
        cards.forEach((card, index) => {
            initCard(cityData.daily[index], card, index, unit); //unit needs to be set outside
        });
        document.querySelector('.city-header').innerText = city;
    });
}

export default initCity;