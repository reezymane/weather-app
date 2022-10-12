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
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLG9EQUFZO0FBQzFDLE1BQU0sNkRBQXFCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsb0RBQVk7QUFDekMsTUFBTSw0REFBb0I7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsOERBQXNCLENBQUM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsK0RBQXVCOztBQUV2RDtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLFVBQVU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mcm9tVW5peFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZyb21Vbml4VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKS4gRGVjaW1hbCB2YWx1ZXMgd2lsbCBiZSBkaXNjYXJkZWQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHVuaXhUaW1lIC0gdGhlIGdpdmVuIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKVxuICogQHJldHVybnMge0RhdGV9IHRoZSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlIHRoZSBkYXRlIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDU6XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tVW5peFRpbWUoMTMzMDUxNTkwNSlcbiAqIC8vPT4gV2VkIEZlYiAyOSAyMDEyIDExOjQ1OjA1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnJvbVVuaXhUaW1lKGRpcnR5VW5peFRpbWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB1bml4VGltZSA9IHRvSW50ZWdlcihkaXJ0eVVuaXhUaW1lKTtcbiAgcmV0dXJuIHRvRGF0ZSh1bml4VGltZSAqIDEwMDApO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJjb25zdCB3ZWF0aGVyT2JqZWN0ID0ge307XG5cbmV4cG9ydCB7IHdlYXRoZXJPYmplY3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGZyb21Vbml4VGltZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgd2VhdGhlck9iamVjdCB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuaW1wb3J0IENsb3VkeSBmcm9tIFwiLi9pbWcvY2xvdWR5LnBuZ1wiO1xuaW1wb3J0IE1vb25jbG91ZHMgZnJvbSBcIi4vaW1nL21vb25jbG91ZHMucG5nXCI7XG5pbXBvcnQgUmFpbiBmcm9tIFwiLi9pbWcvcmFpbi5wbmdcIjtcbmltcG9ydCBTbm93IGZyb20gXCIuL2ltZy9zbm93LnBuZ1wiO1xuaW1wb3J0IFN1bmNsb3VkcyBmcm9tIFwiLi9pbWcvc3VuY2xvdWRzLnBuZ1wiO1xuXG4vLyBSdW5zIGZ1bmN0aW9ucyB0byBkaXNwbGF5IGFsbCBkYXRhXG5jb25zdCBkaXNwbGF5RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YURpdlwiKTtcbiAgY29uc3QgY3VycmVudERUID0gZnJvbVVuaXhUaW1lKHdlYXRoZXJPYmplY3QuZGF0ZVRpbWUpO1xuICBjb25zdCBuaWdodFN0YXJ0ID0gZnJvbVVuaXhUaW1lKHdlYXRoZXJPYmplY3Quc3Vuc2V0KTtcbiAgY29uc3QgbmlnaHRFbmQgPSBmcm9tVW5peFRpbWUod2VhdGhlck9iamVjdC5zdW5yaXNlKTtcblxuICAvLyBDb252ZXJ0cyB0ZW1wIHVuaXRzIGZyb20gS2VsdmluIHRvIEZhcmVuaGVpdC9DZWxzaXVzXG4gIGNvbnN0IGZhaHJlbmhlaXQgPSAoa2VsdmluKSA9PiBNYXRoLnRydW5jKChrZWx2aW4gLSAyNzMuMTUpICogMS44ICsgMzIpO1xuICBjb25zdCBjZWxzaXVzID0gKGtlbHZpbikgPT4gTWF0aC50cnVuYyhrZWx2aW4gLSAyNzMuMTUpO1xuXG4gIC8vIENsZWFycyBzZWFyY2ggYmFyXG4gIGNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaEJhclwiKTtcbiAgICBzZWFyY2hCYXIucmVzZXQoKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBjaXR5IG5hbWVcbiAgY29uc3QgZGlzcGxheUNpdHkgPSAoKSA9PiB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjaXR5TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNpdHlOYW1lXCIpO1xuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gd2VhdGhlck9iamVjdC5uYW1lO1xuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xuICB9O1xuXG4gIC8vIENvbnZlcnRzIHRpbWUgZnJvbSB1bml4IGFuZCBkaXNwbGF5c1xuICBjb25zdCBkaXNwbGF5VGltZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcbiAgICB0aW1lLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKHRpbWUpO1xuICB9O1xuXG4gIGNvbnN0IHNldEJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJEaXZcIik7XG4gICAgLy8gSWYgaXQncyBkYXkgYW5kIG5vIHJhaW5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xlYXJcIiB8fFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xvdWRzXCIgfHxcbiAgICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlcklEID4gNzAwICYmIHdlYXRoZXJPYmplY3Qud2VhdGhlcklEIDwgODAwKSlcbiAgICApIHtcbiAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vZGlzdC9pbWcvc3VubnkuanBnJylcIjtcblxuICAgICAgLy8gSWYgaXQncyBuaWdodCBhbmQgbm8gcmFpblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPj0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUIDwgbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xlYXJcIiB8fCB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xvdWRzXCIpXG4gICAgKSB7XG4gICAgICBjb250YWluZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1nL25pZ2h0LmpwZycpXCI7XG5cbiAgICAgIC8vIElmIGl0J3MgcmFpbmluZ1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiVGh1bmRlcnN0b3JtXCIgfHxcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJEcml6emxlXCIgfHxcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJSYWluXCJcbiAgICApIHtcbiAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi9pbWcvcmFpbnkuanBnJylcIjtcbiAgICB9XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgYXBwcm9wcmlhdGUgd2VhdGhlciBwaWMgZGVwZW5kaW5nIG9uIHdlYXRoZXIgY29uZGlkaXRvbnNcbiAgY29uc3QgZGlzcGxheVdlYXRoZXJQaWMgPSAoKSA9PiB7XG4gICAgLy8gSWYgaXQncyBkYXkgdGltZSBhbmQgY2xlYXJcbiAgICBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbGVhclwiXG4gICAgKSB7XG4gICAgICBjb25zdCBteVN1bmNsb3VkcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlTdW5jbG91ZHMuc3JjID0gU3VuY2xvdWRzO1xuICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChteVN1bmNsb3Vkcyk7XG5cbiAgICAgIC8vIElmIGl0J3MgZGF5IHRpbWUgYW5kIGNsb3VkeS9hdG1vc3BoZXJlXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnREVCA8PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPiBuaWdodEVuZCAmJlxuICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbG91ZHNcIiB8fFxuICAgICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVySUQgPiA3MDAgJiYgd2VhdGhlck9iamVjdC53ZWF0aGVySUQgPCA4MDApKVxuICAgICkge1xuICAgICAgY29uc3QgbXlDbG91ZHkgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15Q2xvdWR5LnNyYyA9IENsb3VkeTtcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlDbG91ZHkpO1xuXG4gICAgICAvLyBJZiBpdCdzIGRheSB0aW1lIGFuZCByYWluaW5nXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnREVCA8PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPiBuaWdodEVuZCAmJlxuICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJUaHVuZGVyc3Rvcm1cIiB8fFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiRHJpenpsZVwiIHx8XG4gICAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJSYWluXCIpXG4gICAgKSB7XG4gICAgICBjb25zdCBteVJhaW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15UmFpbi5zcmMgPSBSYWluO1xuICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChteVJhaW4pO1xuXG4gICAgICAvLyBJZiBpdCdzIGRheSB0aW1lIGFuZCBzbm93aW5nXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnREVCA8PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPiBuaWdodEVuZCAmJlxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlNub3dcIlxuICAgICkge1xuICAgICAgY29uc3QgbXlTbm93ID0gbmV3IEltYWdlKCk7XG4gICAgICBteVNub3cuc3JjID0gU25vdztcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlTbm93KTtcblxuICAgICAgLy8gSWYgaXQncyBuaWdodCB0aW1lXG4gICAgfSBlbHNlIGlmIChjdXJyZW50RFQgPj0gbmlnaHRTdGFydCAmJiBjdXJyZW50RFQgPCBuaWdodEVuZCkge1xuICAgICAgY29uc3QgbXlNb29uY2xvdWRzID0gbmV3IEltYWdlKCk7XG4gICAgICBteU1vb25jbG91ZHMuc3JjID0gTW9vbmNsb3VkcztcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlNb29uY2xvdWRzKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgY3VycmVudCB0ZW1wZXJhdHVyZSBhbmQgdW5pdCBidXR0b25zXG4gIGNvbnN0IGRpc3BsYXlUZW1wID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBVbml0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB1bml0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZmFocmVuaGVpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2Vsc2l1c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3Qgc2xhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHRlbXBVbml0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcFVuaXREaXZcIik7XG4gICAgdW5pdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVuaXREaXZcIik7XG4gICAgZmFocmVuaGVpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZhaHJlbmhlaXRCdXR0b25cIik7XG4gICAgY2Vsc2l1c0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNlbHNpdXNCdXR0b25cIik7XG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXBcIik7XG5cbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7ZmFocmVuaGVpdCh3ZWF0aGVyT2JqZWN0LnRlbXApfVxcdTAwQjBgO1xuICAgIGZhaHJlbmhlaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgICBjZWxzaXVzQnV0dG9uLnRleHRDb250ZW50ID0gXCJDXCI7XG4gICAgc2xhc2gudGV4dENvbnRlbnQgPSBcIi9cIjtcblxuICAgIGZhaHJlbmhlaXRCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuXG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZCh0ZW1wVW5pdERpdik7XG4gICAgdGVtcFVuaXREaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gICAgdGVtcFVuaXREaXYuYXBwZW5kQ2hpbGQodW5pdERpdik7XG4gICAgdGVtcERpdi5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICB1bml0RGl2LmFwcGVuZENoaWxkKGZhaHJlbmhlaXRCdXR0b24pO1xuICAgIHVuaXREaXYuYXBwZW5kQ2hpbGQoc2xhc2gpO1xuICAgIHVuaXREaXYuYXBwZW5kQ2hpbGQoY2Vsc2l1c0J1dHRvbik7XG4gIH07XG5cbiAgLy8gQ2hhbmdlIHRlbXAgZGlzcGxheSB3aGVuIHVuaXRzIGNsaWNrZWRcbiAgY29uc3QgY29udmVydFVuaXRCdXR0b25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGZhaHJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZhaHJlbmhlaXRCdXR0b25cIik7XG4gICAgY29uc3QgY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjZWxzaXVzQnV0dG9uXCIpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmZWVsc0xpa2VcIik7XG5cbiAgICBmYWhyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7ZmFocmVuaGVpdCh3ZWF0aGVyT2JqZWN0LnRlbXApfVxcdTAwQjBgO1xuICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7ZmFocmVuaGVpdChcbiAgICAgICAgd2VhdGhlck9iamVjdC5mZWVsc0xpa2VcbiAgICAgICl9XFx1MDBCMGA7XG5cbiAgICAgIGNlbEJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJub3JtYWxcIjtcbiAgICAgIGZhaHJCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgIH0pO1xuXG4gICAgY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7Y2Vsc2l1cyh3ZWF0aGVyT2JqZWN0LnRlbXApfVxcdTAwQjBgO1xuICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7Y2Vsc2l1cyhcbiAgICAgICAgd2VhdGhlck9iamVjdC5mZWVsc0xpa2VcbiAgICAgICl9XFx1MDBCMGA7XG5cbiAgICAgIGZhaHJCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwibm9ybWFsXCI7XG4gICAgICBjZWxCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIGZlZWxzTGlrZSB0ZW1wXG4gIGNvbnN0IGRpc3BsYXlGZWVsc0xpa2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmVlbHNMaWtlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmVlbHNMaWtlXCIpO1xuXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7ZmFocmVuaGVpdChcbiAgICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlXG4gICAgKX1cXHUwMEIwYDtcblxuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBzdW5yaXNlIHRpbWVcbiAgY29uc3QgZGlzcGxheVN1bnJpc2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9yZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN1bnJpc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN1bnJpc2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHN1bnJpc2VUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBtb3JlSW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vcmVJbmZvXCIpO1xuICAgIHN1bnJpc2VUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1RpdGxlXCIpO1xuICAgIHN1bnJpc2VUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuXG4gICAgc3VucmlzZVRpdGxlLnRleHRDb250ZW50ID0gXCJTdW5yaXNlOlwiO1xuICAgIHN1bnJpc2VUaW1lLnRleHRDb250ZW50ID0gZnJvbVVuaXhUaW1lKFxuICAgICAgd2VhdGhlck9iamVjdC5zdW5yaXNlXG4gICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcblxuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobW9yZUluZm8pO1xuICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKHN1bnJpc2VEaXYpO1xuICAgIHN1bnJpc2VEaXYuYXBwZW5kQ2hpbGQoc3VucmlzZVRpdGxlKTtcbiAgICBzdW5yaXNlRGl2LmFwcGVuZENoaWxkKHN1bnJpc2VUaW1lKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBzdW5zZXQgdGltZVxuICBjb25zdCBkaXNwbGF5U3Vuc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3JlSW5mb1wiKTtcbiAgICBjb25zdCBzdW5zZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN1bnNldFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3Qgc3Vuc2V0VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgc3Vuc2V0VGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm9UaXRsZVwiKTtcbiAgICBzdW5zZXRUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuXG4gICAgc3Vuc2V0VGl0bGUudGV4dENvbnRlbnQgPSBcIlN1bnNldDpcIjtcbiAgICBzdW5zZXRUaW1lLnRleHRDb250ZW50ID0gZnJvbVVuaXhUaW1lKFxuICAgICAgd2VhdGhlck9iamVjdC5zdW5zZXRcbiAgICApLnRvTG9jYWxlVGltZVN0cmluZygpO1xuXG4gICAgbW9yZUluZm8uYXBwZW5kQ2hpbGQoc3Vuc2V0RGl2KTtcbiAgICBzdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3Vuc2V0VGl0bGUpO1xuICAgIHN1bnNldERpdi5hcHBlbmRDaGlsZChzdW5zZXRUaW1lKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBodW1pZGl0eVxuICBjb25zdCBkaXNwbGF5SHVtaWRpdHkgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9yZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vcmVJbmZvXCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBodW1pZGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgaHVtaWRpdHlUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBodW1pZGl0eVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvVGl0bGVcIik7XG4gICAgaHVtaWRpdHlUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuXG4gICAgaHVtaWRpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHk6XCI7XG4gICAgaHVtaWRpdHlUaW1lLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iamVjdC5odW1pZGl0eX0lYDtcblxuICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKGh1bWlkaXR5RGl2KTtcbiAgICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVRpdGxlKTtcbiAgICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVRpbWUpO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIHdpbmQgc3BlZWRcbiAgY29uc3QgZGlzcGxheVdpbmRTcGVlZCA9ICgpID0+IHtcbiAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9yZUluZm9cIik7XG4gICAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgd2luZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBjb25zdCBzcGVlZE1QSCA9IE1hdGgucm91bmQod2VhdGhlck9iamVjdC53aW5kU3BlZWQgKiAyLjIzNyk7XG5cbiAgICB3aW5kVGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm9UaXRsZVwiKTtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG5cbiAgICB3aW5kVGl0bGUudGV4dENvbnRlbnQgPSBcIldpbmQgU3BlZWQ6XCI7XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7c3BlZWRNUEh9IE1QSGA7XG5cbiAgICBtb3JlSW5mby5hcHBlbmRDaGlsZCh3aW5kRGl2KTtcbiAgICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRUaXRsZSk7XG4gICAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuICB9O1xuXG4gIGNsZWFyRm9ybSgpO1xuICBzZXRCYWNrZ3JvdW5kKCk7XG4gIGRpc3BsYXlDaXR5KCk7XG4gIGRpc3BsYXlUaW1lKCk7XG4gIGRpc3BsYXlXZWF0aGVyUGljKCk7XG4gIGRpc3BsYXlUZW1wKCk7XG4gIGRpc3BsYXlGZWVsc0xpa2UoKTtcbiAgY29udmVydFVuaXRCdXR0b25zKCk7XG4gIGRpc3BsYXlTdW5yaXNlKCk7XG4gIGRpc3BsYXlTdW5zZXQoKTtcbiAgZGlzcGxheUh1bWlkaXR5KCk7XG4gIGRpc3BsYXlXaW5kU3BlZWQoKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlFcnJvciA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yRGl2XCIpO1xuICBjb25zdCBlcnJvclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgY29ycmVjdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBlcnJvclRleHQudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uIG5vdCBmb3VuZC5cIjtcbiAgY29ycmVjdGlvblRleHQudGV4dENvbnRlbnQgPVxuICAgICdTZWFyY2ggbXVzdCBiZSBpbiB0aGUgZm9ybSBvZiBcIkNpdHlcIiwgXCJDaXR5LCBTdGF0ZVwiIG9yIFwiQ2l0eSwgQ291bnRyeVwiLic7XG5cbiAgZXJyb3JEaXYuYXBwZW5kQ2hpbGQoZXJyb3JUZXh0KTtcbiAgZXJyb3JEaXYuYXBwZW5kQ2hpbGQoY29ycmVjdGlvblRleHQpO1xufTtcblxuY29uc3QgcmVtb3ZlRXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvckRpdlwiKTtcbiAgd2hpbGUgKGVycm9yRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICBlcnJvckRpdi5yZW1vdmVDaGlsZChlcnJvckRpdi5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgcmVtb3ZlSW5mbyA9ICgpID0+IHtcbiAgY29uc3QgZGF0YURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YURpdlwiKTtcbiAgd2hpbGUgKGRhdGFEaXYuZmlyc3RDaGlsZCkge1xuICAgIGRhdGFEaXYucmVtb3ZlQ2hpbGQoZGF0YURpdi5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheURhdGEsIGRpc3BsYXlFcnJvciwgcmVtb3ZlSW5mbywgcmVtb3ZlRXJyb3IgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==