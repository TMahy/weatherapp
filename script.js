async function getWeather(location){
    const weatherApiKey = `860cab3f0e2041ceb07160613231308`;

    const currentWeather = await getCurrentWeather(location);
    const forecastWeather = await getForecastWeather(location);

    
    console.log(currentWeather, forecastWeather);
}

async function getCurrentWeather(location){
    try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=860cab3f0e2041ceb07160613231308&q=${location}`);
    const currentWeatherData = await response.json();
    return currentWeatherData;
    }
    catch(error){
        return error;
    }
}

async function getForecastWeather(location){
    try{
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=860cab3f0e2041ceb07160613231308&q=${location}`);
    const currentWeatherData = await response.json();
    return currentWeatherData;
    }
    catch(error){
        return error;
    }
}

getWeather('bristol'); 



