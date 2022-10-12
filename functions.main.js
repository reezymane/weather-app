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
      containerDiv.style.backgroundImage = "url('../src/img/sunny.jpg')";

      // If it's night and no rain
    } else if (
      currentDT >= nightStart &&
      currentDT < nightEnd &&
      (_factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Clear" || _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Clouds")
    ) {
      containerDiv.style.backgroundImage = "url('../src/img/night.jpg')";

      // If it's raining
    } else if (
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Thunderstorm" ||
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Drizzle" ||
      _factories__WEBPACK_IMPORTED_MODULE_0__.weatherObject.weather === "Rain"
    ) {
      containerDiv.style.backgroundImage = "url('../src/img/rainy.jpg')";
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

  // Makes main containerDiv appear
  const showContainerDiv = () => {
    const containerDiv = document.querySelector("#containerDiv");
    containerDiv.style.opacity = "1";
  };

  clearForm();
  showContainerDiv();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBb0I7QUFDeEIsSUFBSSwrREFBdUI7O0FBRTNCO0FBQ0EsSUFBSSxpREFBVzs7QUFFZjtBQUNBLElBQUksZ0RBQVU7O0FBRWQ7QUFDQSxJQUFJLGlEQUFXO0FBQ2YsSUFBSTtBQUNKO0FBQ0EsSUFBSSxpREFBVzs7QUFFZjtBQUNBLElBQUksa0RBQVk7QUFDaEI7QUFDQTs7QUFFMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mcm9tVW5peFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmcm9tVW5peFRpbWVcbiAqIEBjYXRlZ29yeSBUaW1lc3RhbXAgSGVscGVyc1xuICogQHN1bW1hcnkgQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcykuIERlY2ltYWwgdmFsdWVzIHdpbGwgYmUgZGlzY2FyZGVkLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB1bml4VGltZSAtIHRoZSBnaXZlbiBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcylcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSB0aGUgZGF0ZSAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1OlxuICogY29uc3QgcmVzdWx0ID0gZnJvbVVuaXhUaW1lKDEzMzA1MTU5MDUpXG4gKiAvLz0+IFdlZCBGZWIgMjkgMjAxMiAxMTo0NTowNVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyb21Vbml4VGltZShkaXJ0eVVuaXhUaW1lKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgdW5peFRpbWUgPSB0b0ludGVnZXIoZGlydHlVbml4VGltZSk7XG4gIHJldHVybiB0b0RhdGUodW5peFRpbWUgKiAxMDAwKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHsgZnJvbVVuaXhUaW1lIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyB3ZWF0aGVyT2JqZWN0IH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5pbXBvcnQgQ2xvdWR5IGZyb20gXCIuL2ltZy9jbG91ZHkucG5nXCI7XG5pbXBvcnQgTW9vbmNsb3VkcyBmcm9tIFwiLi9pbWcvbW9vbmNsb3Vkcy5wbmdcIjtcbmltcG9ydCBSYWluIGZyb20gXCIuL2ltZy9yYWluLnBuZ1wiO1xuaW1wb3J0IFNub3cgZnJvbSBcIi4vaW1nL3Nub3cucG5nXCI7XG5pbXBvcnQgU3VuY2xvdWRzIGZyb20gXCIuL2ltZy9zdW5jbG91ZHMucG5nXCI7XG5cbi8vIFJ1bnMgZnVuY3Rpb25zIHRvIGRpc3BsYXkgYWxsIGRhdGFcbmNvbnN0IGRpc3BsYXlEYXRhID0gKCkgPT4ge1xuICBjb25zdCBkYXRhRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhRGl2XCIpO1xuICBjb25zdCBjdXJyZW50RFQgPSBmcm9tVW5peFRpbWUod2VhdGhlck9iamVjdC5kYXRlVGltZSk7XG4gIGNvbnN0IG5pZ2h0U3RhcnQgPSBmcm9tVW5peFRpbWUod2VhdGhlck9iamVjdC5zdW5zZXQpO1xuICBjb25zdCBuaWdodEVuZCA9IGZyb21Vbml4VGltZSh3ZWF0aGVyT2JqZWN0LnN1bnJpc2UpO1xuXG4gIC8vIENvbnZlcnRzIHRlbXAgdW5pdHMgZnJvbSBLZWx2aW4gdG8gRmFyZW5oZWl0L0NlbHNpdXNcbiAgY29uc3QgZmFocmVuaGVpdCA9IChrZWx2aW4pID0+IE1hdGgudHJ1bmMoKGtlbHZpbiAtIDI3My4xNSkgKiAxLjggKyAzMik7XG4gIGNvbnN0IGNlbHNpdXMgPSAoa2VsdmluKSA9PiBNYXRoLnRydW5jKGtlbHZpbiAtIDI3My4xNSk7XG5cbiAgLy8gQ2xlYXJzIHNlYXJjaCBiYXJcbiAgY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoQmFyXCIpO1xuICAgIHNlYXJjaEJhci5yZXNldCgpO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIGNpdHkgbmFtZVxuICBjb25zdCBkaXNwbGF5Q2l0eSA9ICgpID0+IHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNpdHlOYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2l0eU5hbWVcIik7XG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqZWN0Lm5hbWU7XG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XG4gIH07XG5cbiAgLy8gQ29udmVydHMgdGltZSBmcm9tIHVuaXggYW5kIGRpc3BsYXlzXG4gIGNvbnN0IGRpc3BsYXlUaW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuICAgIHRpbWUudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQodGltZSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0QmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lckRpdlwiKTtcbiAgICAvLyBJZiBpdCdzIGRheSBhbmQgbm8gcmFpblxuICAgIGlmIChcbiAgICAgIGN1cnJlbnREVCA8PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPiBuaWdodEVuZCAmJlxuICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbGVhclwiIHx8XG4gICAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbG91ZHNcIiB8fFxuICAgICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVySUQgPiA3MDAgJiYgd2VhdGhlck9iamVjdC53ZWF0aGVySUQgPCA4MDApKVxuICAgICkge1xuICAgICAgY29udGFpbmVyRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1nL3N1bm55LmpwZycpXCI7XG5cbiAgICAgIC8vIElmIGl0J3MgbmlnaHQgYW5kIG5vIHJhaW5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudERUID49IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA8IG5pZ2h0RW5kICYmXG4gICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsZWFyXCIgfHwgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsb3Vkc1wiKVxuICAgICkge1xuICAgICAgY29udGFpbmVyRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1nL25pZ2h0LmpwZycpXCI7XG5cbiAgICAgIC8vIElmIGl0J3MgcmFpbmluZ1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiVGh1bmRlcnN0b3JtXCIgfHxcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJEcml6emxlXCIgfHxcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJSYWluXCJcbiAgICApIHtcbiAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltZy9yYWlueS5qcGcnKVwiO1xuICAgIH1cbiAgfTtcblxuICAvLyBEaXNwbGF5cyBhcHByb3ByaWF0ZSB3ZWF0aGVyIHBpYyBkZXBlbmRpbmcgb24gd2VhdGhlciBjb25kaWRpdG9uc1xuICBjb25zdCBkaXNwbGF5V2VhdGhlclBpYyA9ICgpID0+IHtcbiAgICAvLyBJZiBpdCdzIGRheSB0aW1lIGFuZCBjbGVhclxuICAgIGlmIChcbiAgICAgIGN1cnJlbnREVCA8PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPiBuaWdodEVuZCAmJlxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsZWFyXCJcbiAgICApIHtcbiAgICAgIGNvbnN0IG15U3VuY2xvdWRzID0gbmV3IEltYWdlKCk7XG4gICAgICBteVN1bmNsb3Vkcy5zcmMgPSBTdW5jbG91ZHM7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15U3VuY2xvdWRzKTtcblxuICAgICAgLy8gSWYgaXQncyBkYXkgdGltZSBhbmQgY2xvdWR5L2F0bW9zcGhlcmVcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsb3Vkc1wiIHx8XG4gICAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA+IDcwMCAmJiB3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA8IDgwMCkpXG4gICAgKSB7XG4gICAgICBjb25zdCBteUNsb3VkeSA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlDbG91ZHkuc3JjID0gQ2xvdWR5O1xuICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChteUNsb3VkeSk7XG5cbiAgICAgIC8vIElmIGl0J3MgZGF5IHRpbWUgYW5kIHJhaW5pbmdcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlRodW5kZXJzdG9ybVwiIHx8XG4gICAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJEcml6emxlXCIgfHxcbiAgICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlJhaW5cIilcbiAgICApIHtcbiAgICAgIGNvbnN0IG15UmFpbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlSYWluLnNyYyA9IFJhaW47XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15UmFpbik7XG5cbiAgICAgIC8vIElmIGl0J3MgZGF5IHRpbWUgYW5kIHNub3dpbmdcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiU25vd1wiXG4gICAgKSB7XG4gICAgICBjb25zdCBteVNub3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15U25vdy5zcmMgPSBTbm93O1xuICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChteVNub3cpO1xuXG4gICAgICAvLyBJZiBpdCdzIG5pZ2h0IHRpbWVcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnREVCA+PSBuaWdodFN0YXJ0ICYmIGN1cnJlbnREVCA8IG5pZ2h0RW5kKSB7XG4gICAgICBjb25zdCBteU1vb25jbG91ZHMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15TW9vbmNsb3Vkcy5zcmMgPSBNb29uY2xvdWRzO1xuICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChteU1vb25jbG91ZHMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBEaXNwbGF5cyBjdXJyZW50IHRlbXBlcmF0dXJlIGFuZCB1bml0IGJ1dHRvbnNcbiAgY29uc3QgZGlzcGxheVRlbXAgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcFVuaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHVuaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBmYWhyZW5oZWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjZWxzaXVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBzbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgdGVtcFVuaXREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wVW5pdERpdlwiKTtcbiAgICB1bml0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidW5pdERpdlwiKTtcbiAgICBmYWhyZW5oZWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmFocmVuaGVpdEJ1dHRvblwiKTtcbiAgICBjZWxzaXVzQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2Vsc2l1c0J1dHRvblwiKTtcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcFwiKTtcblxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtmYWhyZW5oZWl0KHdlYXRoZXJPYmplY3QudGVtcCl9XFx1MDBCMGA7XG4gICAgZmFocmVuaGVpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRlwiO1xuICAgIGNlbHNpdXNCdXR0b24udGV4dENvbnRlbnQgPSBcIkNcIjtcbiAgICBzbGFzaC50ZXh0Q29udGVudCA9IFwiL1wiO1xuXG4gICAgZmFocmVuaGVpdEJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG5cbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKHRlbXBVbml0RGl2KTtcbiAgICB0ZW1wVW5pdERpdi5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbiAgICB0ZW1wVW5pdERpdi5hcHBlbmRDaGlsZCh1bml0RGl2KTtcbiAgICB0ZW1wRGl2LmFwcGVuZENoaWxkKHRlbXApO1xuICAgIHVuaXREaXYuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdEJ1dHRvbik7XG4gICAgdW5pdERpdi5hcHBlbmRDaGlsZChzbGFzaCk7XG4gICAgdW5pdERpdi5hcHBlbmRDaGlsZChjZWxzaXVzQnV0dG9uKTtcbiAgfTtcblxuICAvLyBDaGFuZ2UgdGVtcCBkaXNwbGF5IHdoZW4gdW5pdHMgY2xpY2tlZFxuICBjb25zdCBjb252ZXJ0VW5pdEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZmFockJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmFocmVuaGVpdEJ1dHRvblwiKTtcbiAgICBjb25zdCBjZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NlbHNpdXNCdXR0b25cIik7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcFwiKTtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzTGlrZVwiKTtcblxuICAgIGZhaHJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtmYWhyZW5oZWl0KHdlYXRoZXJPYmplY3QudGVtcCl9XFx1MDBCMGA7XG4gICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtmYWhyZW5oZWl0KFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZVxuICAgICAgKX1cXHUwMEIwYDtcblxuICAgICAgY2VsQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiO1xuICAgICAgZmFockJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgfSk7XG5cbiAgICBjZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtjZWxzaXVzKHdlYXRoZXJPYmplY3QudGVtcCl9XFx1MDBCMGA7XG4gICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtjZWxzaXVzKFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZVxuICAgICAgKX1cXHUwMEIwYDtcblxuICAgICAgZmFockJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJub3JtYWxcIjtcbiAgICAgIGNlbEJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgZmVlbHNMaWtlIHRlbXBcbiAgY29uc3QgZGlzcGxheUZlZWxzTGlrZSA9ICgpID0+IHtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmZWVsc0xpa2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmZWVsc0xpa2VcIik7XG5cbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtmYWhyZW5oZWl0KFxuICAgICAgd2VhdGhlck9iamVjdC5mZWVsc0xpa2VcbiAgICApfVxcdTAwQjBgO1xuXG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIHN1bnJpc2UgdGltZVxuICBjb25zdCBkaXNwbGF5U3VucmlzZSA9ICgpID0+IHtcbiAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3VucmlzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3VucmlzZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3Qgc3VucmlzZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIG1vcmVJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9yZUluZm9cIik7XG4gICAgc3VucmlzZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvVGl0bGVcIik7XG4gICAgc3VucmlzZVRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG5cbiAgICBzdW5yaXNlVGl0bGUudGV4dENvbnRlbnQgPSBcIlN1bnJpc2U6XCI7XG4gICAgc3VucmlzZVRpbWUudGV4dENvbnRlbnQgPSBmcm9tVW5peFRpbWUoXG4gICAgICB3ZWF0aGVyT2JqZWN0LnN1bnJpc2VcbiAgICApLnRvTG9jYWxlVGltZVN0cmluZygpO1xuXG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZChtb3JlSW5mbyk7XG4gICAgbW9yZUluZm8uYXBwZW5kQ2hpbGQoc3VucmlzZURpdik7XG4gICAgc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlVGl0bGUpO1xuICAgIHN1bnJpc2VEaXYuYXBwZW5kQ2hpbGQoc3VucmlzZVRpbWUpO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIHN1bnNldCB0aW1lXG4gIGNvbnN0IGRpc3BsYXlTdW5zZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9yZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vcmVJbmZvXCIpO1xuICAgIGNvbnN0IHN1bnNldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3Vuc2V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBzdW5zZXRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBzdW5zZXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1RpdGxlXCIpO1xuICAgIHN1bnNldFRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG5cbiAgICBzdW5zZXRUaXRsZS50ZXh0Q29udGVudCA9IFwiU3Vuc2V0OlwiO1xuICAgIHN1bnNldFRpbWUudGV4dENvbnRlbnQgPSBmcm9tVW5peFRpbWUoXG4gICAgICB3ZWF0aGVyT2JqZWN0LnN1bnNldFxuICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG5cbiAgICBtb3JlSW5mby5hcHBlbmRDaGlsZChzdW5zZXREaXYpO1xuICAgIHN1bnNldERpdi5hcHBlbmRDaGlsZChzdW5zZXRUaXRsZSk7XG4gICAgc3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnNldFRpbWUpO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIGh1bWlkaXR5XG4gIGNvbnN0IGRpc3BsYXlIdW1pZGl0eSA9ICgpID0+IHtcbiAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9yZUluZm9cIik7XG4gICAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBodW1pZGl0eVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGh1bWlkaXR5VGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm9UaXRsZVwiKTtcbiAgICBodW1pZGl0eVRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG5cbiAgICBodW1pZGl0eVRpdGxlLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eTpcIjtcbiAgICBodW1pZGl0eVRpbWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqZWN0Lmh1bWlkaXR5fSVgO1xuXG4gICAgbW9yZUluZm8uYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXYpO1xuICAgIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGl0bGUpO1xuICAgIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGltZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgd2luZCBzcGVlZFxuICBjb25zdCBkaXNwbGF5V2luZFNwZWVkID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3JlSW5mb1wiKTtcbiAgICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB3aW5kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnN0IHNwZWVkTVBIID0gTWF0aC5yb3VuZCh3ZWF0aGVyT2JqZWN0LndpbmRTcGVlZCAqIDIuMjM3KTtcblxuICAgIHdpbmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1RpdGxlXCIpO1xuICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIHdpbmRUaXRsZS50ZXh0Q29udGVudCA9IFwiV2luZCBTcGVlZDpcIjtcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtzcGVlZE1QSH0gTVBIYDtcblxuICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKHdpbmREaXYpO1xuICAgIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlKTtcbiAgICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG4gIH07XG5cbiAgLy8gTWFrZXMgbWFpbiBjb250YWluZXJEaXYgYXBwZWFyXG4gIGNvbnN0IHNob3dDb250YWluZXJEaXYgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJEaXZcIik7XG4gICAgY29udGFpbmVyRGl2LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgfTtcblxuICBjbGVhckZvcm0oKTtcbiAgc2hvd0NvbnRhaW5lckRpdigpO1xuICBzZXRCYWNrZ3JvdW5kKCk7XG4gIGRpc3BsYXlDaXR5KCk7XG4gIGRpc3BsYXlUaW1lKCk7XG4gIGRpc3BsYXlXZWF0aGVyUGljKCk7XG4gIGRpc3BsYXlUZW1wKCk7XG4gIGRpc3BsYXlGZWVsc0xpa2UoKTtcbiAgY29udmVydFVuaXRCdXR0b25zKCk7XG4gIGRpc3BsYXlTdW5yaXNlKCk7XG4gIGRpc3BsYXlTdW5zZXQoKTtcbiAgZGlzcGxheUh1bWlkaXR5KCk7XG4gIGRpc3BsYXlXaW5kU3BlZWQoKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlFcnJvciA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yRGl2XCIpO1xuICBjb25zdCBlcnJvclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY29ycmVjdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBlcnJvclRleHQudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uIG5vdCBmb3VuZC5cIjtcbiAgY29ycmVjdGlvblRleHQudGV4dENvbnRlbnQgPVxuICAgICdTZWFyY2ggbXVzdCBiZSBpbiB0aGUgZm9ybSBvZiBcIkNpdHlcIiwgXCJDaXR5LCBTdGF0ZVwiIG9yIFwiQ2l0eSwgQ291bnRyeVwiLic7XG5cbiAgZXJyb3JEaXYuYXBwZW5kQ2hpbGQoZXJyb3JUZXh0KTtcbiAgZXJyb3JEaXYuYXBwZW5kQ2hpbGQoY29ycmVjdGlvblRleHQpO1xufTtcblxuY29uc3QgcmVtb3ZlRXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvckRpdlwiKTtcbiAgd2hpbGUgKGVycm9yRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICBlcnJvckRpdi5yZW1vdmVDaGlsZChlcnJvckRpdi5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgcmVtb3ZlSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgZGF0YURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YURpdlwiKTtcbiAgd2hpbGUgKGRhdGFEaXYuZmlyc3RDaGlsZCkge1xuICAgIGRhdGFEaXYucmVtb3ZlQ2hpbGQoZGF0YURpdi5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheURhdGEsIGRpc3BsYXlFcnJvciwgcmVtb3ZlSW5mbywgcmVtb3ZlRXJyb3IgfTtcbiIsImNvbnN0IHdlYXRoZXJPYmplY3QgPSB7fTtcblxuZXhwb3J0IHsgd2VhdGhlck9iamVjdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgd2VhdGhlck9iamVjdCB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuaW1wb3J0IHsgZGlzcGxheURhdGEsIGRpc3BsYXlFcnJvciwgcmVtb3ZlSW5mbywgcmVtb3ZlRXJyb3IgfSBmcm9tIFwiLi9ET01cIjtcblxuLy8gUmV0dXJucyB3ZWF0aGVyIGRhdGEgcHJvbWlzZSBmcm9tIEFQSVxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IGxvY2F0aW9uU3RyaW5nID0gY2l0eS5zcGxpdChcIiBcIikuam9pbihcIitcIik7XG4gICAgY29uc3QgbG9jYXRpb25VUkwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb25TdHJpbmd9JkFQUElEPWY1YzBiOWUwMzI2NWQ1NDMwZjVkYTY3MDljZTAyYjBmYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxvY2F0aW9uVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGNvbnN0IHdlYXRoZXJKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgLy8gU3RvcmUgZGF0YSBpbnRvIHdlYXRoZXJPYmplY3RcbiAgICB3ZWF0aGVyT2JqZWN0Lm5hbWUgPSB3ZWF0aGVySlNPTi5uYW1lO1xuICAgIHdlYXRoZXJPYmplY3QudGVtcCA9IHdlYXRoZXJKU09OLm1haW4udGVtcDtcbiAgICB3ZWF0aGVyT2JqZWN0Lmh1bWlkaXR5ID0gd2VhdGhlckpTT04ubWFpbi5odW1pZGl0eTtcbiAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZSA9IHdlYXRoZXJKU09OLm1haW4uZmVlbHNfbGlrZTtcbiAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPSB3ZWF0aGVySlNPTi53ZWF0aGVyWzBdLm1haW47XG4gICAgd2VhdGhlck9iamVjdC53aW5kU3BlZWQgPSB3ZWF0aGVySlNPTi53aW5kLnNwZWVkO1xuICAgIHdlYXRoZXJPYmplY3QuZGF0ZVRpbWUgPSB3ZWF0aGVySlNPTi5kdDtcbiAgICB3ZWF0aGVyT2JqZWN0LnN1bnJpc2UgPSB3ZWF0aGVySlNPTi5zeXMuc3VucmlzZTtcbiAgICB3ZWF0aGVyT2JqZWN0LnN1bnNldCA9IHdlYXRoZXJKU09OLnN5cy5zdW5zZXQ7XG4gICAgd2VhdGhlck9iamVjdC53ZWF0aGVySUQgPSB3ZWF0aGVySlNPTi53ZWF0aGVyWzBdLmlkO1xuXG4gICAgLy8gUmVtb3ZlcyBjdXJyZW50IGVycm9yIG1lc3NhZ2VcbiAgICByZW1vdmVFcnJvcigpO1xuXG4gICAgLy8gUmVtb3ZlcyBjdXJyZW50IHdlYXRoZXIgZGF0YVxuICAgIHJlbW92ZUluZm8oKTtcblxuICAgIC8vIERpc3BsYXkgd2VhdGhlciBkYXRhXG4gICAgZGlzcGxheURhdGEoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBSZW1vdmVzIGN1cnJlbnQgZXJyb3IgbWVzc2FnZVxuICAgIHJlbW92ZUVycm9yKCk7XG5cbiAgICAvLyBEaXNwbGF5cyBlcnJvciBtZXNzYWdlXG4gICAgZGlzcGxheUVycm9yKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0V2VhdGhlckRhdGEgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==