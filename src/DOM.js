import { weatherObject } from "./factories";

const displayCity = () => {
  const dataDiv = document.querySelector("#dataDiv");
  const cityName = document.createElement("p");
  cityName.textContent = weatherObject.name;
  dataDiv.appendChild(cityName);
};

const displayData = () => {
  displayCity();
};

export { displayData };
