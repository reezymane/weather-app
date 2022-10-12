/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fromUnixTime)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * @param {Number} unixTime - the given Unix timestamp (in seconds)
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyUnixTime);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(unixTime * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayData": () => (/* binding */ displayData),
/* harmony export */   "displayError": () => (/* binding */ displayError),
/* harmony export */   "removeError": () => (/* binding */ removeError),
/* harmony export */   "removeInfo": () => (/* binding */ removeInfo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/fromUnixTime/index.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _img_cloudy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/cloudy.png */ "./src/img/cloudy.png");
/* harmony import */ var _img_moonclouds_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/moonclouds.png */ "./src/img/moonclouds.png");
/* harmony import */ var _img_rain_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/rain.png */ "./src/img/rain.png");
/* harmony import */ var _img_snow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/snow.png */ "./src/img/snow.png");
/* harmony import */ var _img_sunclouds_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/sunclouds.png */ "./src/img/sunclouds.png");








// Runs functions to display all data
const displayData = () => {
  const dataDiv = document.querySelector("#dataDiv");
  const currentDT = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.dateTime);
  const nightStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.sunset);
  const nightEnd = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.sunrise);

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
    cityName.setAttribute("id", "cityName");
    cityName.textContent = _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.name;
    dataDiv.appendChild(cityName);
  };

  // Converts time from unix and displays
  const displayTime = () => {
    const time = document.createElement("p");
    time.classList.add("time");
    time.textContent = new Date().toLocaleTimeString();
    dataDiv.appendChild(time);
  };

  const setBackground = () => {
    const containerDiv = document.querySelector("#containerDiv");
    // If it's day and no rain
    if (
      currentDT <= nightStart &&
      currentDT > nightEnd &&
      (_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Clear" ||
        _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Clouds" ||
        (_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weatherID > 700 && _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weatherID < 800))
    ) {
      containerDiv.style.backgroundImage = "url('../dist/img/sunny.jpg')";

      // If it's night and no rain
    } else if (
      currentDT >= nightStart &&
      currentDT < nightEnd &&
      (_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Clear" || _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Clouds")
    ) {
      containerDiv.style.backgroundImage = "url('./img/night.jpg')";

      // If it's raining
    } else if (
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Thunderstorm" ||
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Drizzle" ||
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Rain"
    ) {
      containerDiv.style.backgroundImage = "url('./img/rainy.jpg')";
    }
  };

  // Displays appropriate weather pic depending on weather condiditons
  const displayWeatherPic = () => {
    // If it's day time and clear
    if (
      currentDT <= nightStart &&
      currentDT > nightEnd &&
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Clear"
    ) {
      const mySunclouds = new Image();
      mySunclouds.src = _img_sunclouds_png__WEBPACK_IMPORTED_MODULE_5__;
      dataDiv.appendChild(mySunclouds);

      // If it's day time and cloudy/atmosphere
    } else if (
      currentDT <= nightStart &&
      currentDT > nightEnd &&
      (_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Clouds" ||
        (_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weatherID > 700 && _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weatherID < 800))
    ) {
      const myCloudy = new Image();
      myCloudy.src = _img_cloudy_png__WEBPACK_IMPORTED_MODULE_1__;
      dataDiv.appendChild(myCloudy);

      // If it's day time and raining
    } else if (
      currentDT <= nightStart &&
      currentDT > nightEnd &&
      (_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Thunderstorm" ||
        _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Drizzle" ||
        _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Rain")
    ) {
      const myRain = new Image();
      myRain.src = _img_rain_png__WEBPACK_IMPORTED_MODULE_3__;
      dataDiv.appendChild(myRain);

      // If it's day time and snowing
    } else if (
      currentDT <= nightStart &&
      currentDT > nightEnd &&
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Snow"
    ) {
      const mySnow = new Image();
      mySnow.src = _img_snow_png__WEBPACK_IMPORTED_MODULE_4__;
      dataDiv.appendChild(mySnow);

      // If it's night time
    } else if (currentDT >= nightStart && currentDT < nightEnd) {
      const myMoonclouds = new Image();
      myMoonclouds.src = _img_moonclouds_png__WEBPACK_IMPORTED_MODULE_2__;
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

    tempUnitDiv.setAttribute("id", "tempUnitDiv");
    unitDiv.setAttribute("id", "unitDiv");
    fahrenheitButton.setAttribute("id", "fahrenheitButton");
    celsiusButton.setAttribute("id", "celsiusButton");
    temp.setAttribute("id", "temp");

    temp.textContent = `${fahrenheit(_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.temp)}\u00B0`;
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
    const feelsLike = document.querySelector("#feelsLike");

    fahrButton.addEventListener("click", () => {
      temp.textContent = `${fahrenheit(_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.temp)}\u00B0`;
      feelsLike.textContent = `Feels Like: ${fahrenheit(
        _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.feelsLike
      )}\u00B0`;

      celButton.style.fontWeight = "normal";
      fahrButton.style.fontWeight = "bold";
    });

    celButton.addEventListener("click", () => {
      temp.textContent = `${celsius(_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.temp)}\u00B0`;
      feelsLike.textContent = `Feels Like: ${celsius(
        _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.feelsLike
      )}\u00B0`;

      fahrButton.style.fontWeight = "normal";
      celButton.style.fontWeight = "bold";
    });
  };

  // Displays feelsLike temp
  const displayFeelsLike = () => {
    const feelsLike = document.createElement("p");
    feelsLike.setAttribute("id", "feelsLike");

    feelsLike.textContent = `Feels Like: ${fahrenheit(
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.feelsLike
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
    sunriseTime.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.sunrise
    ).toLocaleTimeString();

    dataDiv.appendChild(moreInfo);
    moreInfo.appendChild(sunriseDiv);
    sunriseDiv.appendChild(sunriseTitle);
    sunriseDiv.appendChild(sunriseTime);
  };

  // Displays sunset time
  const displaySunset = () => {
    const moreInfo = document.querySelector("#moreInfo");
    const sunsetDiv = document.createElement("div");
    const sunsetTitle = document.createElement("p");
    const sunsetTime = document.createElement("p");

    sunsetTitle.classList.add("infoTitle");
    sunsetTime.classList.add("time");

    sunsetTitle.textContent = "Sunset:";
    sunsetTime.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.sunset
    ).toLocaleTimeString();

    moreInfo.appendChild(sunsetDiv);
    sunsetDiv.appendChild(sunsetTitle);
    sunsetDiv.appendChild(sunsetTime);
  };

  // Displays humidity
  const displayHumidity = () => {
    const moreInfo = document.querySelector("#moreInfo");
    const humidityDiv = document.createElement("div");
    const humidityTitle = document.createElement("p");
    const humidityTime = document.createElement("p");

    humidityTitle.classList.add("infoTitle");
    humidityTime.classList.add("time");

    humidityTitle.textContent = "Humidity:";
    humidityTime.textContent = `${_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.humidity}%`;

    moreInfo.appendChild(humidityDiv);
    humidityDiv.appendChild(humidityTitle);
    humidityDiv.appendChild(humidityTime);
  };

  // Displays wind speed
  const displayWindSpeed = () => {
    const moreInfo = document.querySelector("#moreInfo");
    const windDiv = document.createElement("div");
    const windTitle = document.createElement("p");
    const windSpeed = document.createElement("p");

    const speedMPH = Math.round(_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.windSpeed * 2.237);

    windTitle.classList.add("infoTitle");
    windSpeed.classList.add("time");

    windTitle.textContent = "Wind Speed:";
    windSpeed.textContent = `${speedMPH} MPH`;

    moreInfo.appendChild(windDiv);
    windDiv.appendChild(windTitle);
    windDiv.appendChild(windSpeed);
  };

  clearForm();
  setBackground();
  displayCity();
  displayTime();
  displayWeatherPic();
  displayTemp();
  displayFeelsLike();
  convertUnitButtons();
  displaySunrise();
  displaySunset();
  displayHumidity();
  displayWindSpeed();
};

const displayError = () => {
  const errorDiv = document.querySelector("#errorDiv");
  const errorText = document.createElement("p");
  const correctionText = document.createElement("p");

  errorText.textContent = "Location not found.";
  correctionText.textContent =
    'Search must be in the form of "City", "City, State" or "City, Country".';

  errorDiv.appendChild(errorText);
  errorDiv.appendChild(correctionText);
};

const removeError = () => {
  const errorDiv = document.querySelector("#errorDiv");
  while (errorDiv.firstChild) {
    errorDiv.removeChild(errorDiv.firstChild);
  }
};

const removeInfo = () => {
  const dataDiv = document.querySelector("#dataDiv");
  while (dataDiv.firstChild) {
    dataDiv.removeChild(dataDiv.firstChild);
  }
};




/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherObject": () => (/* binding */ weatherObject)
/* harmony export */ });
const weatherObject = {};




/***/ }),

/***/ "./src/img/cloudy.png":
/*!****************************!*\
  !*** ./src/img/cloudy.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b2aee90bd47d261b6db.png";

/***/ }),

/***/ "./src/img/moonclouds.png":
/*!********************************!*\
  !*** ./src/img/moonclouds.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ac1340199f6decc5c8e.png";

/***/ }),

/***/ "./src/img/rain.png":
/*!**************************!*\
  !*** ./src/img/rain.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "452a91f8e3f63a3c50dc.png";

/***/ }),

/***/ "./src/img/snow.png":
/*!**************************!*\
  !*** ./src/img/snow.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f8c6ab6f6fd36ceddf3.png";

/***/ }),

/***/ "./src/img/sunclouds.png":
/*!*******************************!*\
  !*** ./src/img/sunclouds.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81f30eefb14a0772e7dd.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



// Returns weather data promise from API
async function getWeatherData(city) {
  try {
    const locationString = city.split(" ").join("+");
    const locationURL = `http://api.openweathermap.org/data/2.5/weather?q=${locationString}&APPID=f5c0b9e03265d5430f5da6709ce02b0f`;
    const response = await fetch(locationURL, { mode: "cors" });
    const weatherJSON = await response.json();

    // Store data into weatherObject
    _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.name = weatherJSON.name;
    _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.temp = weatherJSON.main.temp;
    _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.humidity = weatherJSON.main.humidity;
    _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.feelsLike = weatherJSON.main.feels_like;
    _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather = weatherJSON.weather[0].main;
    _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.windSpeed = weatherJSON.wind.speed;
    _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.dateTime = weatherJSON.dt;
    _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.sunrise = weatherJSON.sys.sunrise;
    _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.sunset = weatherJSON.sys.sunset;
    _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weatherID = weatherJSON.weather[0].id;

    // Removes current error message
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.removeError)();

    // Removes current weather data
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.removeInfo)();

    // Display weather data
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayData)();
  } catch (error) {
    // Removes current error message
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.removeError)();

    // Displays error message
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayError)();
  }
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxJQUFJLGlEQUFXOztBQUVmO0FBQ0EsSUFBSSxnREFBVTs7QUFFZDtBQUNBLElBQUksaURBQVc7QUFDZixJQUFJO0FBQ0o7QUFDQSxJQUFJLGlEQUFXOztBQUVmO0FBQ0EsSUFBSSxrREFBWTtBQUNoQjtBQUNBOztBQUUwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zyb21Vbml4VGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZyb21Vbml4VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKS4gRGVjaW1hbCB2YWx1ZXMgd2lsbCBiZSBkaXNjYXJkZWQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHVuaXhUaW1lIC0gdGhlIGdpdmVuIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKVxuICogQHJldHVybnMge0RhdGV9IHRoZSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlIHRoZSBkYXRlIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDU6XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tVW5peFRpbWUoMTMzMDUxNTkwNSlcbiAqIC8vPT4gV2VkIEZlYiAyOSAyMDEyIDExOjQ1OjA1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnJvbVVuaXhUaW1lKGRpcnR5VW5peFRpbWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB1bml4VGltZSA9IHRvSW50ZWdlcihkaXJ0eVVuaXhUaW1lKTtcbiAgcmV0dXJuIHRvRGF0ZSh1bml4VGltZSAqIDEwMDApO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBmcm9tVW5peFRpbWUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHdlYXRoZXJPYmplY3QgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcbmltcG9ydCBDbG91ZHkgZnJvbSBcIi4vaW1nL2Nsb3VkeS5wbmdcIjtcbmltcG9ydCBNb29uY2xvdWRzIGZyb20gXCIuL2ltZy9tb29uY2xvdWRzLnBuZ1wiO1xuaW1wb3J0IFJhaW4gZnJvbSBcIi4vaW1nL3JhaW4ucG5nXCI7XG5pbXBvcnQgU25vdyBmcm9tIFwiLi9pbWcvc25vdy5wbmdcIjtcbmltcG9ydCBTdW5jbG91ZHMgZnJvbSBcIi4vaW1nL3N1bmNsb3Vkcy5wbmdcIjtcblxuLy8gUnVucyBmdW5jdGlvbnMgdG8gZGlzcGxheSBhbGwgZGF0YVxuY29uc3QgZGlzcGxheURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGFEaXZcIik7XG4gIGNvbnN0IGN1cnJlbnREVCA9IGZyb21Vbml4VGltZSh3ZWF0aGVyT2JqZWN0LmRhdGVUaW1lKTtcbiAgY29uc3QgbmlnaHRTdGFydCA9IGZyb21Vbml4VGltZSh3ZWF0aGVyT2JqZWN0LnN1bnNldCk7XG4gIGNvbnN0IG5pZ2h0RW5kID0gZnJvbVVuaXhUaW1lKHdlYXRoZXJPYmplY3Quc3VucmlzZSk7XG5cbiAgLy8gQ29udmVydHMgdGVtcCB1bml0cyBmcm9tIEtlbHZpbiB0byBGYXJlbmhlaXQvQ2Vsc2l1c1xuICBjb25zdCBmYWhyZW5oZWl0ID0gKGtlbHZpbikgPT4gTWF0aC50cnVuYygoa2VsdmluIC0gMjczLjE1KSAqIDEuOCArIDMyKTtcbiAgY29uc3QgY2Vsc2l1cyA9IChrZWx2aW4pID0+IE1hdGgudHJ1bmMoa2VsdmluIC0gMjczLjE1KTtcblxuICAvLyBDbGVhcnMgc2VhcmNoIGJhclxuICBjb25zdCBjbGVhckZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hCYXJcIik7XG4gICAgc2VhcmNoQmFyLnJlc2V0KCk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgY2l0eSBuYW1lXG4gIGNvbnN0IGRpc3BsYXlDaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2l0eU5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaXR5TmFtZVwiKTtcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmplY3QubmFtZTtcbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcbiAgfTtcblxuICAvLyBDb252ZXJ0cyB0aW1lIGZyb20gdW5peCBhbmQgZGlzcGxheXNcbiAgY29uc3QgZGlzcGxheVRpbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG4gICAgdGltZS50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgfTtcblxuICBjb25zdCBzZXRCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyRGl2XCIpO1xuICAgIC8vIElmIGl0J3MgZGF5IGFuZCBubyByYWluXG4gICAgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsZWFyXCIgfHxcbiAgICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsb3Vkc1wiIHx8XG4gICAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA+IDcwMCAmJiB3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA8IDgwMCkpXG4gICAgKSB7XG4gICAgICBjb250YWluZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL2Rpc3QvaW1nL3N1bm55LmpwZycpXCI7XG5cbiAgICAgIC8vIElmIGl0J3MgbmlnaHQgYW5kIG5vIHJhaW5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudERUID49IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA8IG5pZ2h0RW5kICYmXG4gICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsZWFyXCIgfHwgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsb3Vkc1wiKVxuICAgICkge1xuICAgICAgY29udGFpbmVyRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltZy9uaWdodC5qcGcnKVwiO1xuXG4gICAgICAvLyBJZiBpdCdzIHJhaW5pbmdcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlRodW5kZXJzdG9ybVwiIHx8XG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiRHJpenpsZVwiIHx8XG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiUmFpblwiXG4gICAgKSB7XG4gICAgICBjb250YWluZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1nL3JhaW55LmpwZycpXCI7XG4gICAgfVxuICB9O1xuXG4gIC8vIERpc3BsYXlzIGFwcHJvcHJpYXRlIHdlYXRoZXIgcGljIGRlcGVuZGluZyBvbiB3ZWF0aGVyIGNvbmRpZGl0b25zXG4gIGNvbnN0IGRpc3BsYXlXZWF0aGVyUGljID0gKCkgPT4ge1xuICAgIC8vIElmIGl0J3MgZGF5IHRpbWUgYW5kIGNsZWFyXG4gICAgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xlYXJcIlxuICAgICkge1xuICAgICAgY29uc3QgbXlTdW5jbG91ZHMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15U3VuY2xvdWRzLnNyYyA9IFN1bmNsb3VkcztcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlTdW5jbG91ZHMpO1xuXG4gICAgICAvLyBJZiBpdCdzIGRheSB0aW1lIGFuZCBjbG91ZHkvYXRtb3NwaGVyZVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xvdWRzXCIgfHxcbiAgICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlcklEID4gNzAwICYmIHdlYXRoZXJPYmplY3Qud2VhdGhlcklEIDwgODAwKSlcbiAgICApIHtcbiAgICAgIGNvbnN0IG15Q2xvdWR5ID0gbmV3IEltYWdlKCk7XG4gICAgICBteUNsb3VkeS5zcmMgPSBDbG91ZHk7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15Q2xvdWR5KTtcblxuICAgICAgLy8gSWYgaXQncyBkYXkgdGltZSBhbmQgcmFpbmluZ1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiVGh1bmRlcnN0b3JtXCIgfHxcbiAgICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkRyaXp6bGVcIiB8fFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiUmFpblwiKVxuICAgICkge1xuICAgICAgY29uc3QgbXlSYWluID0gbmV3IEltYWdlKCk7XG4gICAgICBteVJhaW4uc3JjID0gUmFpbjtcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlSYWluKTtcblxuICAgICAgLy8gSWYgaXQncyBkYXkgdGltZSBhbmQgc25vd2luZ1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJTbm93XCJcbiAgICApIHtcbiAgICAgIGNvbnN0IG15U25vdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlTbm93LnNyYyA9IFNub3c7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15U25vdyk7XG5cbiAgICAgIC8vIElmIGl0J3MgbmlnaHQgdGltZVxuICAgIH0gZWxzZSBpZiAoY3VycmVudERUID49IG5pZ2h0U3RhcnQgJiYgY3VycmVudERUIDwgbmlnaHRFbmQpIHtcbiAgICAgIGNvbnN0IG15TW9vbmNsb3VkcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlNb29uY2xvdWRzLnNyYyA9IE1vb25jbG91ZHM7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15TW9vbmNsb3Vkcyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERpc3BsYXlzIGN1cnJlbnQgdGVtcGVyYXR1cmUgYW5kIHVuaXQgYnV0dG9uc1xuICBjb25zdCBkaXNwbGF5VGVtcCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wVW5pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdW5pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNlbHNpdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHNsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICB0ZW1wVW5pdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXBVbml0RGl2XCIpO1xuICAgIHVuaXREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1bml0RGl2XCIpO1xuICAgIGZhaHJlbmhlaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmYWhyZW5oZWl0QnV0dG9uXCIpO1xuICAgIGNlbHNpdXNCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjZWxzaXVzQnV0dG9uXCIpO1xuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wXCIpO1xuXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2ZhaHJlbmhlaXQod2VhdGhlck9iamVjdC50ZW1wKX1cXHUwMEIwYDtcbiAgICBmYWhyZW5oZWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJGXCI7XG4gICAgY2Vsc2l1c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ1wiO1xuICAgIHNsYXNoLnRleHRDb250ZW50ID0gXCIvXCI7XG5cbiAgICBmYWhyZW5oZWl0QnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcblxuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQodGVtcFVuaXREaXYpO1xuICAgIHRlbXBVbml0RGl2LmFwcGVuZENoaWxkKHRlbXBEaXYpO1xuICAgIHRlbXBVbml0RGl2LmFwcGVuZENoaWxkKHVuaXREaXYpO1xuICAgIHRlbXBEaXYuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgdW5pdERpdi5hcHBlbmRDaGlsZChmYWhyZW5oZWl0QnV0dG9uKTtcbiAgICB1bml0RGl2LmFwcGVuZENoaWxkKHNsYXNoKTtcbiAgICB1bml0RGl2LmFwcGVuZENoaWxkKGNlbHNpdXNCdXR0b24pO1xuICB9O1xuXG4gIC8vIENoYW5nZSB0ZW1wIGRpc3BsYXkgd2hlbiB1bml0cyBjbGlja2VkXG4gIGNvbnN0IGNvbnZlcnRVbml0QnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBmYWhyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYWhyZW5oZWl0QnV0dG9uXCIpO1xuICAgIGNvbnN0IGNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2Vsc2l1c0J1dHRvblwiKTtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmVlbHNMaWtlXCIpO1xuXG4gICAgZmFockJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2ZhaHJlbmhlaXQod2VhdGhlck9iamVjdC50ZW1wKX1cXHUwMEIwYDtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2ZhaHJlbmhlaXQoXG4gICAgICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlXG4gICAgICApfVxcdTAwQjBgO1xuXG4gICAgICBjZWxCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwibm9ybWFsXCI7XG4gICAgICBmYWhyQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICB9KTtcblxuICAgIGNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2NlbHNpdXMod2VhdGhlck9iamVjdC50ZW1wKX1cXHUwMEIwYDtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2NlbHNpdXMoXG4gICAgICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlXG4gICAgICApfVxcdTAwQjBgO1xuXG4gICAgICBmYWhyQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiO1xuICAgICAgY2VsQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBmZWVsc0xpa2UgdGVtcFxuICBjb25zdCBkaXNwbGF5RmVlbHNMaWtlID0gKCkgPT4ge1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZlZWxzTGlrZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZlZWxzTGlrZVwiKTtcblxuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2ZhaHJlbmhlaXQoXG4gICAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZVxuICAgICl9XFx1MDBCMGA7XG5cbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgc3VucmlzZSB0aW1lXG4gIGNvbnN0IGRpc3BsYXlTdW5yaXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdW5yaXNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdW5yaXNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBzdW5yaXNlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgbW9yZUluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb3JlSW5mb1wiKTtcbiAgICBzdW5yaXNlVGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm9UaXRsZVwiKTtcbiAgICBzdW5yaXNlVGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIHN1bnJpc2VUaXRsZS50ZXh0Q29udGVudCA9IFwiU3VucmlzZTpcIjtcbiAgICBzdW5yaXNlVGltZS50ZXh0Q29udGVudCA9IGZyb21Vbml4VGltZShcbiAgICAgIHdlYXRoZXJPYmplY3Quc3VucmlzZVxuICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG5cbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG1vcmVJbmZvKTtcbiAgICBtb3JlSW5mby5hcHBlbmRDaGlsZChzdW5yaXNlRGl2KTtcbiAgICBzdW5yaXNlRGl2LmFwcGVuZENoaWxkKHN1bnJpc2VUaXRsZSk7XG4gICAgc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlVGltZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgc3Vuc2V0IHRpbWVcbiAgY29uc3QgZGlzcGxheVN1bnNldCA9ICgpID0+IHtcbiAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9yZUluZm9cIik7XG4gICAgY29uc3Qgc3Vuc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdW5zZXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHN1bnNldFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHN1bnNldFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvVGl0bGVcIik7XG4gICAgc3Vuc2V0VGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIHN1bnNldFRpdGxlLnRleHRDb250ZW50ID0gXCJTdW5zZXQ6XCI7XG4gICAgc3Vuc2V0VGltZS50ZXh0Q29udGVudCA9IGZyb21Vbml4VGltZShcbiAgICAgIHdlYXRoZXJPYmplY3Quc3Vuc2V0XG4gICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcblxuICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKHN1bnNldERpdik7XG4gICAgc3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnNldFRpdGxlKTtcbiAgICBzdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3Vuc2V0VGltZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgaHVtaWRpdHlcbiAgY29uc3QgZGlzcGxheUh1bWlkaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3JlSW5mb1wiKTtcbiAgICBjb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaHVtaWRpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgaHVtaWRpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1RpdGxlXCIpO1xuICAgIGh1bWlkaXR5VGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIGh1bWlkaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIkh1bWlkaXR5OlwiO1xuICAgIGh1bWlkaXR5VGltZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmplY3QuaHVtaWRpdHl9JWA7XG5cbiAgICBtb3JlSW5mby5hcHBlbmRDaGlsZChodW1pZGl0eURpdik7XG4gICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUaXRsZSk7XG4gICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUaW1lKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyB3aW5kIHNwZWVkXG4gIGNvbnN0IGRpc3BsYXlXaW5kU3BlZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9yZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vcmVJbmZvXCIpO1xuICAgIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHdpbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY29uc3Qgc3BlZWRNUEggPSBNYXRoLnJvdW5kKHdlYXRoZXJPYmplY3Qud2luZFNwZWVkICogMi4yMzcpO1xuXG4gICAgd2luZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvVGl0bGVcIik7XG4gICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuXG4gICAgd2luZFRpdGxlLnRleHRDb250ZW50ID0gXCJXaW5kIFNwZWVkOlwiO1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke3NwZWVkTVBIfSBNUEhgO1xuXG4gICAgbW9yZUluZm8uYXBwZW5kQ2hpbGQod2luZERpdik7XG4gICAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kVGl0bGUpO1xuICAgIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgfTtcblxuICBjbGVhckZvcm0oKTtcbiAgc2V0QmFja2dyb3VuZCgpO1xuICBkaXNwbGF5Q2l0eSgpO1xuICBkaXNwbGF5VGltZSgpO1xuICBkaXNwbGF5V2VhdGhlclBpYygpO1xuICBkaXNwbGF5VGVtcCgpO1xuICBkaXNwbGF5RmVlbHNMaWtlKCk7XG4gIGNvbnZlcnRVbml0QnV0dG9ucygpO1xuICBkaXNwbGF5U3VucmlzZSgpO1xuICBkaXNwbGF5U3Vuc2V0KCk7XG4gIGRpc3BsYXlIdW1pZGl0eSgpO1xuICBkaXNwbGF5V2luZFNwZWVkKCk7XG59O1xuXG5jb25zdCBkaXNwbGF5RXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvckRpdlwiKTtcbiAgY29uc3QgZXJyb3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNvcnJlY3Rpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgZXJyb3JUZXh0LnRleHRDb250ZW50ID0gXCJMb2NhdGlvbiBub3QgZm91bmQuXCI7XG4gIGNvcnJlY3Rpb25UZXh0LnRleHRDb250ZW50ID1cbiAgICAnU2VhcmNoIG11c3QgYmUgaW4gdGhlIGZvcm0gb2YgXCJDaXR5XCIsIFwiQ2l0eSwgU3RhdGVcIiBvciBcIkNpdHksIENvdW50cnlcIi4nO1xuXG4gIGVycm9yRGl2LmFwcGVuZENoaWxkKGVycm9yVGV4dCk7XG4gIGVycm9yRGl2LmFwcGVuZENoaWxkKGNvcnJlY3Rpb25UZXh0KTtcbn07XG5cbmNvbnN0IHJlbW92ZUVycm9yID0gKCkgPT4ge1xuICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXZcIik7XG4gIHdoaWxlIChlcnJvckRpdi5maXJzdENoaWxkKSB7XG4gICAgZXJyb3JEaXYucmVtb3ZlQ2hpbGQoZXJyb3JEaXYuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGFEaXZcIik7XG4gIHdoaWxlIChkYXRhRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICBkYXRhRGl2LnJlbW92ZUNoaWxkKGRhdGFEaXYuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlEYXRhLCBkaXNwbGF5RXJyb3IsIHJlbW92ZUluZm8sIHJlbW92ZUVycm9yIH07XG4iLCJjb25zdCB3ZWF0aGVyT2JqZWN0ID0ge307XG5cbmV4cG9ydCB7IHdlYXRoZXJPYmplY3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IHdlYXRoZXJPYmplY3QgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcbmltcG9ydCB7IGRpc3BsYXlEYXRhLCBkaXNwbGF5RXJyb3IsIHJlbW92ZUluZm8sIHJlbW92ZUVycm9yIH0gZnJvbSBcIi4vRE9NXCI7XG5cbi8vIFJldHVybnMgd2VhdGhlciBkYXRhIHByb21pc2UgZnJvbSBBUElcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvblN0cmluZyA9IGNpdHkuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpO1xuICAgIGNvbnN0IGxvY2F0aW9uVVJMID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9uU3RyaW5nfSZBUFBJRD1mNWMwYjllMDMyNjVkNTQzMGY1ZGE2NzA5Y2UwMmIwZmA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsb2NhdGlvblVSTCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCB3ZWF0aGVySlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vIFN0b3JlIGRhdGEgaW50byB3ZWF0aGVyT2JqZWN0XG4gICAgd2VhdGhlck9iamVjdC5uYW1lID0gd2VhdGhlckpTT04ubmFtZTtcbiAgICB3ZWF0aGVyT2JqZWN0LnRlbXAgPSB3ZWF0aGVySlNPTi5tYWluLnRlbXA7XG4gICAgd2VhdGhlck9iamVjdC5odW1pZGl0eSA9IHdlYXRoZXJKU09OLm1haW4uaHVtaWRpdHk7XG4gICAgd2VhdGhlck9iamVjdC5mZWVsc0xpa2UgPSB3ZWF0aGVySlNPTi5tYWluLmZlZWxzX2xpa2U7XG4gICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID0gd2VhdGhlckpTT04ud2VhdGhlclswXS5tYWluO1xuICAgIHdlYXRoZXJPYmplY3Qud2luZFNwZWVkID0gd2VhdGhlckpTT04ud2luZC5zcGVlZDtcbiAgICB3ZWF0aGVyT2JqZWN0LmRhdGVUaW1lID0gd2VhdGhlckpTT04uZHQ7XG4gICAgd2VhdGhlck9iamVjdC5zdW5yaXNlID0gd2VhdGhlckpTT04uc3lzLnN1bnJpc2U7XG4gICAgd2VhdGhlck9iamVjdC5zdW5zZXQgPSB3ZWF0aGVySlNPTi5zeXMuc3Vuc2V0O1xuICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlcklEID0gd2VhdGhlckpTT04ud2VhdGhlclswXS5pZDtcblxuICAgIC8vIFJlbW92ZXMgY3VycmVudCBlcnJvciBtZXNzYWdlXG4gICAgcmVtb3ZlRXJyb3IoKTtcblxuICAgIC8vIFJlbW92ZXMgY3VycmVudCB3ZWF0aGVyIGRhdGFcbiAgICByZW1vdmVJbmZvKCk7XG5cbiAgICAvLyBEaXNwbGF5IHdlYXRoZXIgZGF0YVxuICAgIGRpc3BsYXlEYXRhKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gUmVtb3ZlcyBjdXJyZW50IGVycm9yIG1lc3NhZ2VcbiAgICByZW1vdmVFcnJvcigpO1xuXG4gICAgLy8gRGlzcGxheXMgZXJyb3IgbWVzc2FnZVxuICAgIGRpc3BsYXlFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=