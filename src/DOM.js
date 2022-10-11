import { fromUnixTime, utcToZonedTime } from "date-fns";
import { weatherObject } from "./factories";
import Cloudy from "./img/cloudy.png";
import Moonclouds from "./img/moonclouds.png";
import Rain from "./img/rain.png";
import Snow from "./img/snow.png";
import Sunclouds from "./img/sunclouds.png";

// Clears search bar
const clearForm = () => {
  const searchBar = document.querySelector("#searchBar");
  searchBar.reset();
};

// Displays city name
const displayCity = () => {
  const dataDiv = document.querySelector("#dataDiv");
  const cityName = document.createElement("p");

  cityName.textContent = weatherObject.name;
  dataDiv.appendChild(cityName);
};

// Converts time from unix and displays
const displayTime = () => {
  const dataDiv = document.querySelector("#dataDiv");
  const time = document.createElement("p");

  time.textContent = fromUnixTime(weatherObject.dateTime).toLocaleTimeString();
  dataDiv.appendChild(time);
};

// Displays appropriate weather pic depending on weather condiditons
const displayWeatherPic = () => {
  const dataDiv = document.querySelector("#dataDiv");

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

// Runs functions to display all data
const displayData = () => {
  clearForm();
  displayCity();
  displayTime();
  displayWeatherPic();
};

export { displayData };
