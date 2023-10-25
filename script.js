async function getWeather(location){
    const weatherApiKey = `860cab3f0e2041ceb07160613231308`;

    const forecastWeather = await getForecastWeather(location);
    
    // console.log(forecastWeather.current, forecastWeather.forecast);
    // console.log(forecastWeather.current.feelslike_c, forecastWeather.current.temp_c, forecastWeather.current.condition.text);
    const weather = {
        current: forecastWeather.current,
        current_temp: forecastWeather.current.temp_c,
        current_cond_desc: forecastWeather.current.condition.text,
        // current_cond_icon: forecastWeather.current.condition.icon, 

        forecast_array: forecastWeather.forecast.forecastday
    }

    console.log(weather.current, weather.current_temp, weather.forecast_array);
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

getWeather('bristol'); 



