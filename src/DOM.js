import { fromUnixTime } from "date-fns";
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
  const weatherPic = document.createElement("img");
};

// Runs functions to display all data
const displayData = () => {
  clearForm();
  displayCity();
  displayTime();
};

export { displayData };
