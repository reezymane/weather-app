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

    time.classList.add("time");

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
    const tempUnitDiv = document.createElement("div");
    const tempDiv = document.createElement("div");
    const unitDiv = document.createElement("div");
    const temp = document.createElement("p");
    const fahrenheitButton = document.createElement("button");
    const celsiusButton = document.createElement("button");
    const slash = document.createElement("p");

    fahrenheitButton.setAttribute("id", "fahrenheitButton");
    celsiusButton.setAttribute("id", "celsiusButton");
    temp.setAttribute("id", "temp");

    temp.textContent = `${fahrenheit(weatherObject.temp)}\u00B0`;
    fahrenheitButton.textContent = "F";
    celsiusButton.textContent = "C";
    slash.textContent = "/";

    fahrenheitButton.style.fontWeight = "bold";

    dataDiv.appendChild(tempUnitDiv);
    tempUnitDiv.appendChild(tempDiv);
    tempUnitDiv.appendChild(unitDiv);
    tempDiv.appendChild(temp);
    unitDiv.appendChild(fahrenheitButton);
    unitDiv.appendChild(slash);
    unitDiv.appendChild(celsiusButton);
  };

  // Change temp display when units clicked
  const convertUnitButtons = () => {
    const fahrButton = document.querySelector("#fahrenheitButton");
    const celButton = document.querySelector("#celsiusButton");
    const temp = document.querySelector("#temp");

    fahrButton.addEventListener("click", () => {
      temp.textContent = `${fahrenheit(weatherObject.temp)}\u00B0`;

      celButton.style.fontWeight = "normal";
      fahrButton.style.fontWeight = "bold";
    });

    celButton.addEventListener("click", () => {
      temp.textContent = `${celsius(weatherObject.temp)}\u00B0`;

      fahrButton.style.fontWeight = "normal";
      celButton.style.fontWeight = "bold";
    });
  };

  // Displays feelsLike temp
  const displayFeelsLike = () => {
    const feelsLike = document.createElement("p");
    feelsLike.setAttribute("id", "feelsLike");

    feelsLike.textContent = `Feels Like: ${fahrenheit(
      weatherObject.feelsLike
    )}\u00B0`;

    dataDiv.appendChild(feelsLike);
  };

  // Displays sunrise time
  const displaySunrise = () => {
    const moreInfo = document.createElement("div");
    const sunriseDiv = document.createElement("div");
    const sunriseTitle = document.createElement("p");
    const sunriseTime = document.createElement("p");

    moreInfo.setAttribute("id", "moreInfo");
    sunriseTitle.classList.add("infoTitle");
    sunriseTime.classList.add("time");

    sunriseTitle.textContent = "Sunrise:";
    sunriseTime.textContent = fromUnixTime(
      weatherObject.sunrise
    ).toLocaleTimeString();

    dataDiv.appendChild(moreInfo);
    moreInfo.appendChild(sunriseDiv);
    sunriseDiv.appendChild(sunriseTitle);
    sunriseDiv.appendChild(sunriseTime);
    console.log(fromUnixTime(weatherObject.sunrise).toLocaleTimeString());
  };

  clearForm();
  displayCity();
  displayTime();
  displayWeatherPic();
  displayTemp();
  convertUnitButtons();
  displayFeelsLike();
  displaySunrise();

  console.log(weatherObject);
};

export { displayData };
