import { fromUnixTime } from "date-fns";
import { weatherObject } from "./factories";
import Cloudy from "./img/cloudy.png";
import Moonclouds from "./img/moonclouds.png";
import Rain from "./img/rain.png";
import Snow from "./img/snow.png";
import Sunclouds from "./img/sunclouds.png";
// Runs functions to display all data
const displayData = () => {
  const dataDiv = document.querySelector("#dataDiv");

  // Converts temp units from Kelvin to Farenheit/Celsius
  const fahrenheit = (kelvin) => Math.trunc((kelvin - 273.15) * 1.8 + 32);
  const celsius = (kelvin) => Math.trunc(kelvin - 273.15);

  // Clears search bar
  const clearForm = () => {
    const searchBar = document.querySelector("#searchBar");
    searchBar.reset();
  };

  // Displays city name
  const displayCity = () => {
    const cityName = document.createElement("p");

    cityName.textContent = weatherObject.name;
    dataDiv.appendChild(cityName);
  };

  // Converts time from unix and displays
  const displayTime = () => {
    const time = document.createElement("p");

    time.textContent = new Date().toLocaleTimeString();
    dataDiv.appendChild(time);
  };

  // Displays appropriate weather pic depending on weather condiditons
  const displayWeatherPic = () => {
    const currentDT = fromUnixTime(weatherObject.dateTime);
    const nightStart = fromUnixTime(weatherObject.sunset);
    const nightEnd = fromUnixTime(weatherObject.sunrise);

    // If it's day time and clear
    if (
      currentDT <= nightStart &&
      currentDT > nightEnd &&
      weatherObject.weather === "Clear"
    ) {
      const mySunclouds = new Image();
      mySunclouds.src = Sunclouds;
      dataDiv.appendChild(mySunclouds);

      // If it's day time and cloudy
    } else if (
      currentDT <= nightStart &&
      currentDT > nightEnd &&
      weatherObject.weather === "Clouds"
    ) {
      const myCloudy = new Image();
      myCloudy.src = Cloudy;
      dataDiv.appendChild(myCloudy);

      // If it's day time and raining
    } else if (
      currentDT <= nightStart &&
      currentDT > nightEnd &&
      (weatherObject.weather === "Thunderstorm" ||
        weatherObject.weather === "Drizzle" ||
        weatherObject.weather === "Rain")
    ) {
      const myRain = new Image();
      myRain.src = Rain;
      dataDiv.appendChild(myRain);

      // If it's day time and snowing
    } else if (
      currentDT <= nightStart &&
      currentDT > nightEnd &&
      weatherObject.weather === "Snow"
    ) {
      const mySnow = new Image();
      mySnow.src = Snow;
      dataDiv.appendChild(mySnow);

      // If it's night time
    } else if (currentDT >= nightStart && currentDT < nightEnd) {
      const myMoonclouds = new Image();
      myMoonclouds.src = Moonclouds;
      dataDiv.appendChild(myMoonclouds);
    }
  };

  // Displays current temperature and unit buttons
  const displayTemp = () => {
    const tempDiv = document.createElement("div");
    const unitDiv = document.createElement("div");
    const temp = document.createElement("p");
    const fahrenheitButton = document.createElement("button");
    const celsiusButton = document.createElement("button");
    const slash = document.createElement("p");

    temp.textContent = `${fahrenheit(weatherObject.temp)}\u00B0`;
    fahrenheitButton.textContent = "F";
    celsiusButton.textContent = "C";
    slash.textContent = "/";

    dataDiv.appendChild(tempDiv);
    dataDiv.appendChild(unitDiv);
    tempDiv.appendChild(temp);
    unitDiv.appendChild(fahrenheitButton);
    unitDiv.appendChild(slash);
    unitDiv.appendChild(celsiusButton);
  };

  clearForm();
  displayCity();
  displayTime();
  displayWeatherPic();
  displayTemp();
};

export { displayData };
