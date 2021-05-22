const key = 'e41bf52cf3280052dad033ef26730a89';

async function getCityData(city) {
    try {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,{mode: 'cors'});
        const coord_data = await weather.json();
        const coords = await coord_data.coord;
        let data = await getWeather(coords);
        // console.log(data);
        document.getElementById('city').value = '';
        return data;
    } catch(error) {
        alert(error);
    }
}

async function getWeather(coords) {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly&appid=${key}`,{mode: 'cors'});
    const data = await weather.json();
    return data;
}

export default getCityData;
