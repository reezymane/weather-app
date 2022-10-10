import { weatherObject } from "./factories";

function getAndStoreWeather(location) {
  // Returns weather data promise from API
  async function getWeatherData(city) {
    const locationString = city.split(" ").join("");
    const locationURL = `http://api.openweathermap.org/data/2.5/weather?q=${locationString}&APPID=f5c0b9e03265d5430f5da6709ce02b0f`;
    const response = await fetch(locationURL, { mode: "cors" });
    return response;
  }

  // Processes the JSON data
  async function processJSON(toSearch) {
    const weatherData = await getWeatherData(toSearch);
    const weatherJSON = await weatherData.json();

    // Store data into weatherObject
    weatherObject.name = weatherJSON.name;
    weatherObject.temp = weatherJSON.main.temp;
    weatherObject.hi = weatherJSON.main.temp_max;
    weatherObject.lo = weatherJSON.main.temp_min;
    weatherObject.humidity = weatherJSON.main.humidity;
    weatherObject.feelsLike = weatherJSON.main.feels_like;
    weatherObject.weather = weatherJSON.weather[0].main;
    weatherObject.windSpeed = weatherJSON.wind.speed;
    weatherObject.dateTime = weatherJSON.dt;
    weatherObject.sunrise = weatherJSON.sys.sunrise;
    weatherObject.sunset = weatherJSON.sys.sunset;
  }

  processJSON(location);
}

export { getAndStoreWeather };
