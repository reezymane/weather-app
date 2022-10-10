import "./style.css";
import { getWeatherData } from "./functions";

(() => {
  const searchButton = document.querySelector("#searchButton");
  searchButton.addEventListener("click", () => {
    const city = document.querySelector("#city").value;
    if (city) {
      getWeatherData(city);
    }
  });
})();
