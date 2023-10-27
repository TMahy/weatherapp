async function getWeather(location){
    const weatherApiKey = `860cab3f0e2041ceb07160613231308`;

    const forecastWeather = await getForecastWeather(location);

    const weather = {
        temp: forecastWeather.current.temp_c,
        summary: forecastWeather.current.condition.text,
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


async function displayWeather(){

    const tempEl = document.getElementById('weather-summary-temp');

    const location = 'bristol'
    const weather = await getWeather(location);

    tempEl.textContent = weather.temp;

}

getWeather('bristol'); 



