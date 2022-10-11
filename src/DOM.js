import { weatherObject } from "./factories";

const clearForm = () => {
  const searchBar = document.querySelector("#searchBar");
  searchBar.reset();
};

const displayCity = () => {
  const dataDiv = document.querySelector("#dataDiv");
  const cityName = document.createElement("p");
  cityName.textContent = weatherObject.name;
  dataDiv.appendChild(cityName);
};

const displayData = () => {
  clearForm();
  displayCity();
};

export { displayData };
