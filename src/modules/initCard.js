function initCard(data, card, iterator, unit) {
    let date = new Date();
    let imageURL = `http://openweathermap.org/img/wn/${imageHandler(data)}@2x.png`;
    
    card.querySelector('.card-header').innerText = dateHandler((date.getDay()+iterator)%7);
    card.querySelector('img').src = imageURL;
    card.querySelector('.generic p').innerText = data.weather[0].description;
    card.querySelector('.stats .temp').innerText = fromKelvin(data.temp.day, unit)
    card.querySelector('.stats .unit').innerText = '°'+unit.toUpperCase();
    
}

function imageHandler(data) {
    let weather = data.weather[0].main;
    if(weather === 'Clear') {
        return '01d';
    } else if (weather === 'Clouds') {
        return '04d';
    } else if (weather === 'Drizzle' || weather === 'Rain') {
        return '10d';
    } else if (weather === 'Thunderstorm') {
        return '11d';
    } else if(weather === 'snow') {
        return '13d';
    } else { //should handle specific names for mist
        return '50d'; //Mist Smoke Haze Dust Fog Sand Ash Squall Tornado
    }
}

function dateHandler(date) {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[date];
}

function fromKelvin(temp, unit) {
    if(unit === 'c') {
        return (temp-273.15).toFixed(1);
    } else if(unit === 'f') {
        return ((temp-273.15)*(9/5)+32).toFixed(1);
    } else {
        return temp;
    }
}

export default initCard;