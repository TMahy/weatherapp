async function getWeather(location){
    const weatherApiKey = `860cab3f0e2041ceb07160613231308`;

    const forecastWeather = await getForecastWeather(location);

    const weather = {
        temp: forecastWeather.current.temp_c,
        text: forecastWeather.current.condition.text,
        icon: forecastWeather.current.condition.icon,
        forecast_1: {
            date:  new Date(forecastWeather.forecast.forecastday[0].date),
            max_temp: Math.round(forecastWeather.forecast.forecastday[0].day.maxtemp_c),
            min_temp: Math.round(forecastWeather.forecast.forecastday[0].day.mintemp_c),
        },
        forecast_2: {
            date: new Date(forecastWeather.forecast.forecastday[1].date),
            max_temp: Math.round(forecastWeather.forecast.forecastday[1].day.maxtemp_c),
            min_temp: Math.round(forecastWeather.forecast.forecastday[1].day.mintemp_c),
        },
        forecast_3: {
            date: new Date(forecastWeather.forecast.forecastday[2].date),
            max_temp: Math.round(forecastWeather.forecast.forecastday[2].day.maxtemp_c),
            min_temp: Math.round(forecastWeather.forecast.forecastday[2].day.mintemp_c),
        }
    }

    console.log(forecastWeather.current);

    return weather;
}

async function getForecastWeather(location){
    try{
    //3 day forecast only as free plan on weatherapi.com
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=860cab3f0e2041ceb07160613231308&q=${location}&days=3`);
    const forecastWeatherData = await response.json();
    return forecastWeatherData;
    }
    catch(error){
        return error;
    }
}


async function displayWeather(location = 'Bristol'){


    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weather = await getWeather(location);

    const tempEl = document.getElementById("weather-temp");
    tempEl.textContent = weather.temp;
    const textEl = document.getElementById("weather-text");
    textEl.textContent = weather.text;
    const iconEl = document.getElementById("weather-icon");
    iconEl.src = `//cdn.weatherapi.com/weather/128x128/day/${weather.icon.slice(-7)}`; //to get a slightly higher quality icon (api returns 64x64 icon), this assumes all icons 'codes' are 3 digits.

    const fc1El = document.getElementById("forecast_1");
    const fc2El = document.getElementById("forecast_2");
    const fc3El = document.getElementById("forecast_3");
 
    fc1El.querySelector('.fc-day').textContent = days[weather.forecast_1.date.getDay()];
    fc1El.querySelector('.min-temp').textContent = weather.forecast_1.min_temp;
    fc1El.querySelector('.max-temp').textContent = weather.forecast_1.max_temp;

    fc2El.querySelector('.fc-day').textContent = days[weather.forecast_2.date.getDay()];
    fc2El.querySelector('.min-temp').textContent = weather.forecast_2.min_temp;
    fc2El.querySelector('.max-temp').textContent = weather.forecast_2.max_temp;

    fc3El.querySelector('.fc-day').textContent = days[weather.forecast_3.date.getDay()];
    fc3El.querySelector('.min-temp').textContent = weather.forecast_3.min_temp;
    fc3El.querySelector('.max-temp').textContent = weather.forecast_3.max_temp;
}

// getWeather('bristol'); 

displayWeather();


const search = document.getElementById('location-input')

search.addEventListener("keyup", ({key})=>{
    if (key === 'Enter'){
        const location = search.value;
        displayWeather(location);
    }
})



