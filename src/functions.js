import { weatherObject } from "./factories";
import { displayData, displayError, removeInfo, removeError } from "./DOM";

// Returns weather data promise from API
async function getWeatherData(city) {
  try {
    const locationString = city.split(" ").join("+");
    const locationURL = `https://api.openweathermap.org/data/2.5/weather?q=${locationString}&APPID=f5c0b9e03265d5430f5da6709ce02b0f`;
    const response = await fetch(locationURL, { mode: "cors" });
    const weatherJSON = await response.json();

    // Store data into weatherObject
    weatherObject.name = weatherJSON.name;
    weatherObject.temp = weatherJSON.main.temp;
    weatherObject.humidity = weatherJSON.main.humidity;
    weatherObject.feelsLike = weatherJSON.main.feels_like;
    weatherObject.weather = weatherJSON.weather[0].main;
    weatherObject.windSpeed = weatherJSON.wind.speed;
    weatherObject.dateTime = weatherJSON.dt;
    weatherObject.sunrise = weatherJSON.sys.sunrise;
    weatherObject.sunset = weatherJSON.sys.sunset;
    weatherObject.weatherID = weatherJSON.weather[0].id;

    // Removes current error message
    removeError();

    // Removes current weather data
    removeInfo();

    // Display weather data
    displayData();
  } catch (error) {
    // Removes current error message
    removeError();

    // Displays error message
    displayError();
  }
}

export { getWeatherData };
