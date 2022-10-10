// Returns weather data promise from API
async function getWeatherData(location) {
  const locationString = location.split(" ").join("");
  const locationURL = `http://api.openweathermap.org/data/2.5/weather?q=${locationString}&APPID=f5c0b9e03265d5430f5da6709ce02b0f`;
  const response = await fetch(locationURL, { mode: "cors" });
  return response;
}
