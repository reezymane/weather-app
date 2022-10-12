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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLG9EQUFZO0FBQzFDLE1BQU0sNkRBQXFCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsb0RBQVk7QUFDekMsTUFBTSw0REFBb0I7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsOERBQXNCLENBQUM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsK0RBQXVCOztBQUV2RDtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLFVBQVU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZnJvbVVuaXhUaW1lL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmcm9tVW5peFRpbWVcbiAqIEBjYXRlZ29yeSBUaW1lc3RhbXAgSGVscGVyc1xuICogQHN1bW1hcnkgQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcykuIERlY2ltYWwgdmFsdWVzIHdpbGwgYmUgZGlzY2FyZGVkLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB1bml4VGltZSAtIHRoZSBnaXZlbiBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcylcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSB0aGUgZGF0ZSAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1OlxuICogY29uc3QgcmVzdWx0ID0gZnJvbVVuaXhUaW1lKDEzMzA1MTU5MDUpXG4gKiAvLz0+IFdlZCBGZWIgMjkgMjAxMiAxMTo0NTowNVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyb21Vbml4VGltZShkaXJ0eVVuaXhUaW1lKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgdW5peFRpbWUgPSB0b0ludGVnZXIoZGlydHlVbml4VGltZSk7XG4gIHJldHVybiB0b0RhdGUodW5peFRpbWUgKiAxMDAwKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiY29uc3Qgd2VhdGhlck9iamVjdCA9IHt9O1xuXG5leHBvcnQgeyB3ZWF0aGVyT2JqZWN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBmcm9tVW5peFRpbWUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHdlYXRoZXJPYmplY3QgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcbmltcG9ydCBDbG91ZHkgZnJvbSBcIi4vaW1nL2Nsb3VkeS5wbmdcIjtcbmltcG9ydCBNb29uY2xvdWRzIGZyb20gXCIuL2ltZy9tb29uY2xvdWRzLnBuZ1wiO1xuaW1wb3J0IFJhaW4gZnJvbSBcIi4vaW1nL3JhaW4ucG5nXCI7XG5pbXBvcnQgU25vdyBmcm9tIFwiLi9pbWcvc25vdy5wbmdcIjtcbmltcG9ydCBTdW5jbG91ZHMgZnJvbSBcIi4vaW1nL3N1bmNsb3Vkcy5wbmdcIjtcblxuLy8gUnVucyBmdW5jdGlvbnMgdG8gZGlzcGxheSBhbGwgZGF0YVxuY29uc3QgZGlzcGxheURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGFEaXZcIik7XG4gIGNvbnN0IGN1cnJlbnREVCA9IGZyb21Vbml4VGltZSh3ZWF0aGVyT2JqZWN0LmRhdGVUaW1lKTtcbiAgY29uc3QgbmlnaHRTdGFydCA9IGZyb21Vbml4VGltZSh3ZWF0aGVyT2JqZWN0LnN1bnNldCk7XG4gIGNvbnN0IG5pZ2h0RW5kID0gZnJvbVVuaXhUaW1lKHdlYXRoZXJPYmplY3Quc3VucmlzZSk7XG5cbiAgLy8gQ29udmVydHMgdGVtcCB1bml0cyBmcm9tIEtlbHZpbiB0byBGYXJlbmhlaXQvQ2Vsc2l1c1xuICBjb25zdCBmYWhyZW5oZWl0ID0gKGtlbHZpbikgPT4gTWF0aC50cnVuYygoa2VsdmluIC0gMjczLjE1KSAqIDEuOCArIDMyKTtcbiAgY29uc3QgY2Vsc2l1cyA9IChrZWx2aW4pID0+IE1hdGgudHJ1bmMoa2VsdmluIC0gMjczLjE1KTtcblxuICAvLyBDbGVhcnMgc2VhcmNoIGJhclxuICBjb25zdCBjbGVhckZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hCYXJcIik7XG4gICAgc2VhcmNoQmFyLnJlc2V0KCk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgY2l0eSBuYW1lXG4gIGNvbnN0IGRpc3BsYXlDaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2l0eU5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaXR5TmFtZVwiKTtcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmplY3QubmFtZTtcbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcbiAgfTtcblxuICAvLyBDb252ZXJ0cyB0aW1lIGZyb20gdW5peCBhbmQgZGlzcGxheXNcbiAgY29uc3QgZGlzcGxheVRpbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG4gICAgdGltZS50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgfTtcblxuICBjb25zdCBzZXRCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyRGl2XCIpO1xuICAgIC8vIElmIGl0J3MgZGF5IGFuZCBubyByYWluXG4gICAgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsZWFyXCIgfHxcbiAgICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsb3Vkc1wiIHx8XG4gICAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA+IDcwMCAmJiB3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA8IDgwMCkpXG4gICAgKSB7XG4gICAgICBjb250YWluZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWcvc3VubnkuanBnJylcIjtcblxuICAgICAgLy8gSWYgaXQncyBuaWdodCBhbmQgbm8gcmFpblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPj0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUIDwgbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xlYXJcIiB8fCB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xvdWRzXCIpXG4gICAgKSB7XG4gICAgICBjb250YWluZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWcvbmlnaHQuanBnJylcIjtcblxuICAgICAgLy8gSWYgaXQncyByYWluaW5nXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJUaHVuZGVyc3Rvcm1cIiB8fFxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkRyaXp6bGVcIiB8fFxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlJhaW5cIlxuICAgICkge1xuICAgICAgY29udGFpbmVyRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1nL3JhaW55LmpwZycpXCI7XG4gICAgfVxuICB9O1xuXG4gIC8vIERpc3BsYXlzIGFwcHJvcHJpYXRlIHdlYXRoZXIgcGljIGRlcGVuZGluZyBvbiB3ZWF0aGVyIGNvbmRpZGl0b25zXG4gIGNvbnN0IGRpc3BsYXlXZWF0aGVyUGljID0gKCkgPT4ge1xuICAgIC8vIElmIGl0J3MgZGF5IHRpbWUgYW5kIGNsZWFyXG4gICAgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xlYXJcIlxuICAgICkge1xuICAgICAgY29uc3QgbXlTdW5jbG91ZHMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15U3VuY2xvdWRzLnNyYyA9IFN1bmNsb3VkcztcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlTdW5jbG91ZHMpO1xuXG4gICAgICAvLyBJZiBpdCdzIGRheSB0aW1lIGFuZCBjbG91ZHkvYXRtb3NwaGVyZVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xvdWRzXCIgfHxcbiAgICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlcklEID4gNzAwICYmIHdlYXRoZXJPYmplY3Qud2VhdGhlcklEIDwgODAwKSlcbiAgICApIHtcbiAgICAgIGNvbnN0IG15Q2xvdWR5ID0gbmV3IEltYWdlKCk7XG4gICAgICBteUNsb3VkeS5zcmMgPSBDbG91ZHk7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15Q2xvdWR5KTtcblxuICAgICAgLy8gSWYgaXQncyBkYXkgdGltZSBhbmQgcmFpbmluZ1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiVGh1bmRlcnN0b3JtXCIgfHxcbiAgICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkRyaXp6bGVcIiB8fFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiUmFpblwiKVxuICAgICkge1xuICAgICAgY29uc3QgbXlSYWluID0gbmV3IEltYWdlKCk7XG4gICAgICBteVJhaW4uc3JjID0gUmFpbjtcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlSYWluKTtcblxuICAgICAgLy8gSWYgaXQncyBkYXkgdGltZSBhbmQgc25vd2luZ1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJTbm93XCJcbiAgICApIHtcbiAgICAgIGNvbnN0IG15U25vdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlTbm93LnNyYyA9IFNub3c7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15U25vdyk7XG5cbiAgICAgIC8vIElmIGl0J3MgbmlnaHQgdGltZVxuICAgIH0gZWxzZSBpZiAoY3VycmVudERUID49IG5pZ2h0U3RhcnQgJiYgY3VycmVudERUIDwgbmlnaHRFbmQpIHtcbiAgICAgIGNvbnN0IG15TW9vbmNsb3VkcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlNb29uY2xvdWRzLnNyYyA9IE1vb25jbG91ZHM7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15TW9vbmNsb3Vkcyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERpc3BsYXlzIGN1cnJlbnQgdGVtcGVyYXR1cmUgYW5kIHVuaXQgYnV0dG9uc1xuICBjb25zdCBkaXNwbGF5VGVtcCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wVW5pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdW5pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNlbHNpdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHNsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICB0ZW1wVW5pdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXBVbml0RGl2XCIpO1xuICAgIHVuaXREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1bml0RGl2XCIpO1xuICAgIGZhaHJlbmhlaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmYWhyZW5oZWl0QnV0dG9uXCIpO1xuICAgIGNlbHNpdXNCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjZWxzaXVzQnV0dG9uXCIpO1xuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wXCIpO1xuXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2ZhaHJlbmhlaXQod2VhdGhlck9iamVjdC50ZW1wKX1cXHUwMEIwYDtcbiAgICBmYWhyZW5oZWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJGXCI7XG4gICAgY2Vsc2l1c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ1wiO1xuICAgIHNsYXNoLnRleHRDb250ZW50ID0gXCIvXCI7XG5cbiAgICBmYWhyZW5oZWl0QnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcblxuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQodGVtcFVuaXREaXYpO1xuICAgIHRlbXBVbml0RGl2LmFwcGVuZENoaWxkKHRlbXBEaXYpO1xuICAgIHRlbXBVbml0RGl2LmFwcGVuZENoaWxkKHVuaXREaXYpO1xuICAgIHRlbXBEaXYuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgdW5pdERpdi5hcHBlbmRDaGlsZChmYWhyZW5oZWl0QnV0dG9uKTtcbiAgICB1bml0RGl2LmFwcGVuZENoaWxkKHNsYXNoKTtcbiAgICB1bml0RGl2LmFwcGVuZENoaWxkKGNlbHNpdXNCdXR0b24pO1xuICB9O1xuXG4gIC8vIENoYW5nZSB0ZW1wIGRpc3BsYXkgd2hlbiB1bml0cyBjbGlja2VkXG4gIGNvbnN0IGNvbnZlcnRVbml0QnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBmYWhyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYWhyZW5oZWl0QnV0dG9uXCIpO1xuICAgIGNvbnN0IGNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2Vsc2l1c0J1dHRvblwiKTtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmVlbHNMaWtlXCIpO1xuXG4gICAgZmFockJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2ZhaHJlbmhlaXQod2VhdGhlck9iamVjdC50ZW1wKX1cXHUwMEIwYDtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2ZhaHJlbmhlaXQoXG4gICAgICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlXG4gICAgICApfVxcdTAwQjBgO1xuXG4gICAgICBjZWxCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwibm9ybWFsXCI7XG4gICAgICBmYWhyQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICB9KTtcblxuICAgIGNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2NlbHNpdXMod2VhdGhlck9iamVjdC50ZW1wKX1cXHUwMEIwYDtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2NlbHNpdXMoXG4gICAgICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlXG4gICAgICApfVxcdTAwQjBgO1xuXG4gICAgICBmYWhyQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiO1xuICAgICAgY2VsQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBmZWVsc0xpa2UgdGVtcFxuICBjb25zdCBkaXNwbGF5RmVlbHNMaWtlID0gKCkgPT4ge1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZlZWxzTGlrZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZlZWxzTGlrZVwiKTtcblxuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2ZhaHJlbmhlaXQoXG4gICAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZVxuICAgICl9XFx1MDBCMGA7XG5cbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgc3VucmlzZSB0aW1lXG4gIGNvbnN0IGRpc3BsYXlTdW5yaXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdW5yaXNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdW5yaXNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBzdW5yaXNlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgbW9yZUluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb3JlSW5mb1wiKTtcbiAgICBzdW5yaXNlVGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm9UaXRsZVwiKTtcbiAgICBzdW5yaXNlVGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIHN1bnJpc2VUaXRsZS50ZXh0Q29udGVudCA9IFwiU3VucmlzZTpcIjtcbiAgICBzdW5yaXNlVGltZS50ZXh0Q29udGVudCA9IGZyb21Vbml4VGltZShcbiAgICAgIHdlYXRoZXJPYmplY3Quc3VucmlzZVxuICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG5cbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG1vcmVJbmZvKTtcbiAgICBtb3JlSW5mby5hcHBlbmRDaGlsZChzdW5yaXNlRGl2KTtcbiAgICBzdW5yaXNlRGl2LmFwcGVuZENoaWxkKHN1bnJpc2VUaXRsZSk7XG4gICAgc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlVGltZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgc3Vuc2V0IHRpbWVcbiAgY29uc3QgZGlzcGxheVN1bnNldCA9ICgpID0+IHtcbiAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9yZUluZm9cIik7XG4gICAgY29uc3Qgc3Vuc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdW5zZXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHN1bnNldFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHN1bnNldFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvVGl0bGVcIik7XG4gICAgc3Vuc2V0VGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIHN1bnNldFRpdGxlLnRleHRDb250ZW50ID0gXCJTdW5zZXQ6XCI7XG4gICAgc3Vuc2V0VGltZS50ZXh0Q29udGVudCA9IGZyb21Vbml4VGltZShcbiAgICAgIHdlYXRoZXJPYmplY3Quc3Vuc2V0XG4gICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcblxuICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKHN1bnNldERpdik7XG4gICAgc3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnNldFRpdGxlKTtcbiAgICBzdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3Vuc2V0VGltZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgaHVtaWRpdHlcbiAgY29uc3QgZGlzcGxheUh1bWlkaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3JlSW5mb1wiKTtcbiAgICBjb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaHVtaWRpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgaHVtaWRpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1RpdGxlXCIpO1xuICAgIGh1bWlkaXR5VGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIGh1bWlkaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIkh1bWlkaXR5OlwiO1xuICAgIGh1bWlkaXR5VGltZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmplY3QuaHVtaWRpdHl9JWA7XG5cbiAgICBtb3JlSW5mby5hcHBlbmRDaGlsZChodW1pZGl0eURpdik7XG4gICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUaXRsZSk7XG4gICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUaW1lKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyB3aW5kIHNwZWVkXG4gIGNvbnN0IGRpc3BsYXlXaW5kU3BlZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9yZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vcmVJbmZvXCIpO1xuICAgIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHdpbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY29uc3Qgc3BlZWRNUEggPSBNYXRoLnJvdW5kKHdlYXRoZXJPYmplY3Qud2luZFNwZWVkICogMi4yMzcpO1xuXG4gICAgd2luZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvVGl0bGVcIik7XG4gICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuXG4gICAgd2luZFRpdGxlLnRleHRDb250ZW50ID0gXCJXaW5kIFNwZWVkOlwiO1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke3NwZWVkTVBIfSBNUEhgO1xuXG4gICAgbW9yZUluZm8uYXBwZW5kQ2hpbGQod2luZERpdik7XG4gICAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kVGl0bGUpO1xuICAgIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgfTtcblxuICAvLyBNYWtlcyBtYWluIGNvbnRhaW5lckRpdiBhcHBlYXJcbiAgY29uc3Qgc2hvd0NvbnRhaW5lckRpdiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lckRpdlwiKTtcbiAgICBjb250YWluZXJEaXYuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICB9O1xuXG4gIGNsZWFyRm9ybSgpO1xuICBzaG93Q29udGFpbmVyRGl2KCk7XG4gIHNldEJhY2tncm91bmQoKTtcbiAgZGlzcGxheUNpdHkoKTtcbiAgZGlzcGxheVRpbWUoKTtcbiAgZGlzcGxheVdlYXRoZXJQaWMoKTtcbiAgZGlzcGxheVRlbXAoKTtcbiAgZGlzcGxheUZlZWxzTGlrZSgpO1xuICBjb252ZXJ0VW5pdEJ1dHRvbnMoKTtcbiAgZGlzcGxheVN1bnJpc2UoKTtcbiAgZGlzcGxheVN1bnNldCgpO1xuICBkaXNwbGF5SHVtaWRpdHkoKTtcbiAgZGlzcGxheVdpbmRTcGVlZCgpO1xufTtcblxuY29uc3QgZGlzcGxheUVycm9yID0gKCkgPT4ge1xuICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXZcIik7XG4gIGNvbnN0IGVycm9yVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb3JyZWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGVycm9yVGV4dC50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gbm90IGZvdW5kLlwiO1xuICBjb3JyZWN0aW9uVGV4dC50ZXh0Q29udGVudCA9XG4gICAgJ1NlYXJjaCBtdXN0IGJlIGluIHRoZSBmb3JtIG9mIFwiQ2l0eVwiLCBcIkNpdHksIFN0YXRlXCIgb3IgXCJDaXR5LCBDb3VudHJ5XCIuJztcblxuICBlcnJvckRpdi5hcHBlbmRDaGlsZChlcnJvclRleHQpO1xuICBlcnJvckRpdi5hcHBlbmRDaGlsZChjb3JyZWN0aW9uVGV4dCk7XG59O1xuXG5jb25zdCByZW1vdmVFcnJvciA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yRGl2XCIpO1xuICB3aGlsZSAoZXJyb3JEaXYuZmlyc3RDaGlsZCkge1xuICAgIGVycm9yRGl2LnJlbW92ZUNoaWxkKGVycm9yRGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVJbmZvID0gKCkgPT4ge1xuICBjb25zdCBkYXRhRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhRGl2XCIpO1xuICB3aGlsZSAoZGF0YURpdi5maXJzdENoaWxkKSB7XG4gICAgZGF0YURpdi5yZW1vdmVDaGlsZChkYXRhRGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5RGF0YSwgZGlzcGxheUVycm9yLCByZW1vdmVJbmZvLCByZW1vdmVFcnJvciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9