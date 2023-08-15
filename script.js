async function getWeather(location){
    const weatherApiKey = `860cab3f0e2041ceb07160613231308`;

    const currentWeather = getCurrentWeather(location);
    const forecastWeather = getForecastWeather(location);

    
    console.log(currentWeather);
}

getWeather('bristol');



async function getCurrentWeather(location){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${location}`);
    const currentWeatherData = await response.json();
    return currentWeatherData;
}
async function getForecastWeather(location){
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}`);
    const currentWeatherData = await response.json();
    return currentWeatherData;
}