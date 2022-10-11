import { fromUnixTime } from "date-fns";
import { weatherObject } from "./factories";

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

// Runs functions to display all data
const displayData = () => {
  clearForm();
  displayCity();
  displayTime();
};

export { displayData };
