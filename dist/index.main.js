/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*Remove margin and padding from all elements*/\n* {\n  margin: 0;\n  padding: 0;\n}\n\n/*Set font color and style for entire page*/\nhtml {\n  color: white;\n  font-family: Bookman, URW Bookman L, serif;\n}\n\n/*align page vertically*/\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(12, 12, 76);\n}\n\n/*Set background color, styling and alignment*/\nheader,\nfooter {\n  background-color: rgb(0, 0, 56);\n  height: 125px;\n  display: flex;\n  align-items: center;\n}\n\n/*Header spacing*/\nheader {\n  justify-content: center;\n  gap: 300px;\n}\n\n/*Search bar alignment and spacing*/\n#searchBar {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  margin-bottom: 5px;\n}\n\n/*Title alignment and spacing*/\n#titleDiv {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n/*Set form height and alignment*/\n#formDiv {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n/*Search bar input sizing, background color and border*/\n#city {\n  height: 20px;\n  width: 300px;\n\n  background-color: rgba(255, 255, 255, 0);\n  color: whitesmoke;\n\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 2px solid whitesmoke;\n}\n\n/*Set search button size*/\n#searchBar img {\n  height: 25px;\n}\n\n/*Set styling for error message*/\n#errorDiv {\n  font-size: 13px;\n  padding-bottom: 25px;\n  height: 25px;\n  width: 400px;\n}\n\n/*Button background, font color, and border*/\nbutton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  font-size: 20px;\n}\n\n/*Change cursor to pointer on hover*/\nbutton:hover {\n  cursor: pointer;\n}\n\n/*Alignment and spacing between footer items*/\nfooter {\n  justify-content: center;\n  gap: 5px;\n  font-style: italic;\n}\n\nspan {\n  font-size: 20px;\n}\n\n/*Styling for main container*/\n#containerDiv {\n  align-self: center;\n  height: max(calc(100vh - 250px), 500px);\n  width: 800px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 15px;\n  background-size: cover;\n  background-repeat: no-repeat;\n\n  box-shadow: 0 0 7px white;\n\n  opacity: 0;\n  transition-property: opacity;\n  transition-duration: 4s;\n}\n\n/*Styling for weather data container*/\n#dataDiv {\n  background-color: rgba(0, 0, 0, 0.178);\n  width: 500px;\n  height: 400px;\n  border-radius: 15px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  padding: 0 50px;\n}\n\n/*Size of city name*/\n#cityName {\n  font-size: 40px;\n}\n\n/*weather icon size*/\n#dataDiv img {\n  height: 50px;\n  width: 50px;\n}\n\n/*Align temp and units horizontally*/\n#tempUnitDiv {\n  display: flex;\n}\n\n/*Size of temperature*/\n#temp {\n  font-size: 50px;\n}\n\n/*Align units horizontally and space*/\n#unitDiv {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  font-size: 20px;\n  padding-bottom: 10px;\n}\n\n/*Italicize feels like temp*/\n#feelsLike {\n  font-style: italic;\n}\n\n/*Align items in moreInfo*/\n#moreInfo {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n}\n\n/*Styling each div in moreInfo*/\n#moreInfo div {\n  width: 25%;\n  padding-left: 15px;\n\n  border-left: 1px solid rgb(156, 156, 156);\n}\n\n/*Remove left border from first info div*/\n#moreInfo div:first-child {\n  border-left: none;\n}\n\n/*Styling for infoTitles*/\n#infoTitle {\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;EACE,SAAS;EACT,UAAU;AACZ;;AAEA,2CAA2C;AAC3C;EACE,YAAY;EACZ,0CAA0C;AAC5C;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA,8CAA8C;AAC9C;;EAEE,+BAA+B;EAC/B,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA,iBAAiB;AACjB;EACE,uBAAuB;EACvB,UAAU;AACZ;;AAEA,mCAAmC;AACnC;EACE,OAAO;EACP,aAAa;EACb,qBAAqB;;EAErB,kBAAkB;AACpB;;AAEA,8BAA8B;AAC9B;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA,gCAAgC;AAChC;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA,uDAAuD;AACvD;EACE,YAAY;EACZ,YAAY;;EAEZ,wCAAwC;EACxC,iBAAiB;;EAEjB,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mCAAmC;AACrC;;AAEA,yBAAyB;AACzB;EACE,YAAY;AACd;;AAEA,gCAAgC;AAChC;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,YAAY;AACd;;AAEA,4CAA4C;AAC5C;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,YAAY;EACZ,wCAAwC;EACxC,YAAY;EACZ,eAAe;AACjB;;AAEA,oCAAoC;AACpC;EACE,eAAe;AACjB;;AAEA,6CAA6C;AAC7C;EACE,uBAAuB;EACvB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA,6BAA6B;AAC7B;EACE,kBAAkB;EAClB,uCAAuC;EACvC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,mBAAmB;EACnB,sBAAsB;EACtB,4BAA4B;;EAE5B,yBAAyB;;EAEzB,UAAU;EACV,4BAA4B;EAC5B,uBAAuB;AACzB;;AAEA,qCAAqC;AACrC;EACE,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,mBAAmB;;EAEnB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;;EAEnB,eAAe;AACjB;;AAEA,oBAAoB;AACpB;EACE,eAAe;AACjB;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,oCAAoC;AACpC;EACE,aAAa;AACf;;AAEA,sBAAsB;AACtB;EACE,eAAe;AACjB;;AAEA,qCAAqC;AACrC;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,eAAe;EACf,oBAAoB;AACtB;;AAEA,4BAA4B;AAC5B;EACE,kBAAkB;AACpB;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;AACb;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,kBAAkB;;EAElB,yCAAyC;AAC3C;;AAEA,yCAAyC;AACzC;EACE,iBAAiB;AACnB;;AAEA,yBAAyB;AACzB;EACE,iBAAiB;AACnB","sourcesContent":["/*Remove margin and padding from all elements*/\n* {\n  margin: 0;\n  padding: 0;\n}\n\n/*Set font color and style for entire page*/\nhtml {\n  color: white;\n  font-family: Bookman, URW Bookman L, serif;\n}\n\n/*align page vertically*/\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(12, 12, 76);\n}\n\n/*Set background color, styling and alignment*/\nheader,\nfooter {\n  background-color: rgb(0, 0, 56);\n  height: 125px;\n  display: flex;\n  align-items: center;\n}\n\n/*Header spacing*/\nheader {\n  justify-content: center;\n  gap: 300px;\n}\n\n/*Search bar alignment and spacing*/\n#searchBar {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  margin-bottom: 5px;\n}\n\n/*Title alignment and spacing*/\n#titleDiv {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n/*Set form height and alignment*/\n#formDiv {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n/*Search bar input sizing, background color and border*/\n#city {\n  height: 20px;\n  width: 300px;\n\n  background-color: rgba(255, 255, 255, 0);\n  color: whitesmoke;\n\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 2px solid whitesmoke;\n}\n\n/*Set search button size*/\n#searchBar img {\n  height: 25px;\n}\n\n/*Set styling for error message*/\n#errorDiv {\n  font-size: 13px;\n  padding-bottom: 25px;\n  height: 25px;\n  width: 400px;\n}\n\n/*Button background, font color, and border*/\nbutton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  font-size: 20px;\n}\n\n/*Change cursor to pointer on hover*/\nbutton:hover {\n  cursor: pointer;\n}\n\n/*Alignment and spacing between footer items*/\nfooter {\n  justify-content: center;\n  gap: 5px;\n  font-style: italic;\n}\n\nspan {\n  font-size: 20px;\n}\n\n/*Styling for main container*/\n#containerDiv {\n  align-self: center;\n  height: max(calc(100vh - 250px), 500px);\n  width: 800px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 15px;\n  background-size: cover;\n  background-repeat: no-repeat;\n\n  box-shadow: 0 0 7px white;\n\n  opacity: 0;\n  transition-property: opacity;\n  transition-duration: 4s;\n}\n\n/*Styling for weather data container*/\n#dataDiv {\n  background-color: rgba(0, 0, 0, 0.178);\n  width: 500px;\n  height: 400px;\n  border-radius: 15px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  padding: 0 50px;\n}\n\n/*Size of city name*/\n#cityName {\n  font-size: 40px;\n}\n\n/*weather icon size*/\n#dataDiv img {\n  height: 50px;\n  width: 50px;\n}\n\n/*Align temp and units horizontally*/\n#tempUnitDiv {\n  display: flex;\n}\n\n/*Size of temperature*/\n#temp {\n  font-size: 50px;\n}\n\n/*Align units horizontally and space*/\n#unitDiv {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  font-size: 20px;\n  padding-bottom: 10px;\n}\n\n/*Italicize feels like temp*/\n#feelsLike {\n  font-style: italic;\n}\n\n/*Align items in moreInfo*/\n#moreInfo {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n}\n\n/*Styling each div in moreInfo*/\n#moreInfo div {\n  width: 25%;\n  padding-left: 15px;\n\n  border-left: 1px solid rgb(156, 156, 156);\n}\n\n/*Remove left border from first info div*/\n#moreInfo div:first-child {\n  border-left: none;\n}\n\n/*Styling for infoTitles*/\n#infoTitle {\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

    // Hide containerDiv
    const hideContainerDiv = document.querySelector("#containerDiv");
    hideContainerDiv.style.opacity = "0";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./src/functions.js");



(() => {
  const searchButton = document.querySelector("#searchButton");
  searchButton.addEventListener("click", () => {
    const city = document.querySelector("#city").value;
    if (city) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(city);
    }
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDd0I7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFjO0FBQ3BCO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZnJvbVVuaXhUaW1lL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypSZW1vdmUgbWFyZ2luIGFuZCBwYWRkaW5nIGZyb20gYWxsIGVsZW1lbnRzKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qU2V0IGZvbnQgY29sb3IgYW5kIHN0eWxlIGZvciBlbnRpcmUgcGFnZSovXFxuaHRtbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogQm9va21hbiwgVVJXIEJvb2ttYW4gTCwgc2VyaWY7XFxufVxcblxcbi8qYWxpZ24gcGFnZSB2ZXJ0aWNhbGx5Ki9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgNzYpO1xcbn1cXG5cXG4vKlNldCBiYWNrZ3JvdW5kIGNvbG9yLCBzdHlsaW5nIGFuZCBhbGlnbm1lbnQqL1xcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDU2KTtcXG4gIGhlaWdodDogMTI1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLypIZWFkZXIgc3BhY2luZyovXFxuaGVhZGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMDBweDtcXG59XFxuXFxuLypTZWFyY2ggYmFyIGFsaWdubWVudCBhbmQgc3BhY2luZyovXFxuI3NlYXJjaEJhciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLypUaXRsZSBhbGlnbm1lbnQgYW5kIHNwYWNpbmcqL1xcbiN0aXRsZURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLypTZXQgZm9ybSBoZWlnaHQgYW5kIGFsaWdubWVudCovXFxuI2Zvcm1EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qU2VhcmNoIGJhciBpbnB1dCBzaXppbmcsIGJhY2tncm91bmQgY29sb3IgYW5kIGJvcmRlciovXFxuI2NpdHkge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4vKlNldCBzZWFyY2ggYnV0dG9uIHNpemUqL1xcbiNzZWFyY2hCYXIgaW1nIHtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuLypTZXQgc3R5bGluZyBmb3IgZXJyb3IgbWVzc2FnZSovXFxuI2Vycm9yRGl2IHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4vKkJ1dHRvbiBiYWNrZ3JvdW5kLCBmb250IGNvbG9yLCBhbmQgYm9yZGVyKi9cXG5idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qQ2hhbmdlIGN1cnNvciB0byBwb2ludGVyIG9uIGhvdmVyKi9cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKkFsaWdubWVudCBhbmQgc3BhY2luZyBiZXR3ZWVuIGZvb3RlciBpdGVtcyovXFxuZm9vdGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbnNwYW4ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKlN0eWxpbmcgZm9yIG1haW4gY29udGFpbmVyKi9cXG4jY29udGFpbmVyRGl2IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogbWF4KGNhbGMoMTAwdmggLSAyNTBweCksIDUwMHB4KTtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICBib3gtc2hhZG93OiAwIDAgN3B4IHdoaXRlO1xcblxcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0cztcXG59XFxuXFxuLypTdHlsaW5nIGZvciB3ZWF0aGVyIGRhdGEgY29udGFpbmVyKi9cXG4jZGF0YURpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTc4KTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nOiAwIDUwcHg7XFxufVxcblxcbi8qU2l6ZSBvZiBjaXR5IG5hbWUqL1xcbiNjaXR5TmFtZSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi8qd2VhdGhlciBpY29uIHNpemUqL1xcbiNkYXRhRGl2IGltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuLypBbGlnbiB0ZW1wIGFuZCB1bml0cyBob3Jpem9udGFsbHkqL1xcbiN0ZW1wVW5pdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKlNpemUgb2YgdGVtcGVyYXR1cmUqL1xcbiN0ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLypBbGlnbiB1bml0cyBob3Jpem9udGFsbHkgYW5kIHNwYWNlKi9cXG4jdW5pdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qSXRhbGljaXplIGZlZWxzIGxpa2UgdGVtcCovXFxuI2ZlZWxzTGlrZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qQWxpZ24gaXRlbXMgaW4gbW9yZUluZm8qL1xcbiNtb3JlSW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKlN0eWxpbmcgZWFjaCBkaXYgaW4gbW9yZUluZm8qL1xcbiNtb3JlSW5mbyBkaXYge1xcbiAgd2lkdGg6IDI1JTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG5cXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDE1NiwgMTU2LCAxNTYpO1xcbn1cXG5cXG4vKlJlbW92ZSBsZWZ0IGJvcmRlciBmcm9tIGZpcnN0IGluZm8gZGl2Ki9cXG4jbW9yZUluZm8gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4vKlN0eWxpbmcgZm9yIGluZm9UaXRsZXMqL1xcbiNpbmZvVGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOENBQThDO0FBQzlDO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0FBQzVDOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUNBQWlDO0FBQ25DOztBQUVBLDhDQUE4QztBQUM5Qzs7RUFFRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHFCQUFxQjs7RUFFckIsa0JBQWtCO0FBQ3BCOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBLHVEQUF1RDtBQUN2RDtFQUNFLFlBQVk7RUFDWixZQUFZOztFQUVaLHdDQUF3QztFQUN4QyxpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQ0FBbUM7QUFDckM7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsWUFBWTtBQUNkOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLDZDQUE2QztBQUM3QztFQUNFLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw0QkFBNEI7O0VBRTVCLHlCQUF5Qjs7RUFFekIsVUFBVTtFQUNWLDRCQUE0QjtFQUM1Qix1QkFBdUI7QUFDekI7O0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7O0VBRW5CLGVBQWU7QUFDakI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGFBQWE7QUFDZjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLHFDQUFxQztBQUNyQztFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsU0FBUztFQUNULGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCOztFQUVsQix5Q0FBeUM7QUFDM0M7O0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlJlbW92ZSBtYXJnaW4gYW5kIHBhZGRpbmcgZnJvbSBhbGwgZWxlbWVudHMqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypTZXQgZm9udCBjb2xvciBhbmQgc3R5bGUgZm9yIGVudGlyZSBwYWdlKi9cXG5odG1sIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBCb29rbWFuLCBVUlcgQm9va21hbiBMLCBzZXJpZjtcXG59XFxuXFxuLyphbGlnbiBwYWdlIHZlcnRpY2FsbHkqL1xcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDEyLCA3Nik7XFxufVxcblxcbi8qU2V0IGJhY2tncm91bmQgY29sb3IsIHN0eWxpbmcgYW5kIGFsaWdubWVudCovXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgNTYpO1xcbiAgaGVpZ2h0OiAxMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKkhlYWRlciBzcGFjaW5nKi9cXG5oZWFkZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwMHB4O1xcbn1cXG5cXG4vKlNlYXJjaCBiYXIgYWxpZ25tZW50IGFuZCBzcGFjaW5nKi9cXG4jc2VhcmNoQmFyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4vKlRpdGxlIGFsaWdubWVudCBhbmQgc3BhY2luZyovXFxuI3RpdGxlRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4vKlNldCBmb3JtIGhlaWdodCBhbmQgYWxpZ25tZW50Ki9cXG4jZm9ybURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLypTZWFyY2ggYmFyIGlucHV0IHNpemluZywgYmFja2dyb3VuZCBjb2xvciBhbmQgYm9yZGVyKi9cXG4jY2l0eSB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuXFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxufVxcblxcbi8qU2V0IHNlYXJjaCBidXR0b24gc2l6ZSovXFxuI3NlYXJjaEJhciBpbWcge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4vKlNldCBzdHlsaW5nIGZvciBlcnJvciBtZXNzYWdlKi9cXG4jZXJyb3JEaXYge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi8qQnV0dG9uIGJhY2tncm91bmQsIGZvbnQgY29sb3IsIGFuZCBib3JkZXIqL1xcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLypDaGFuZ2UgY3Vyc29yIHRvIHBvaW50ZXIgb24gaG92ZXIqL1xcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qQWxpZ25tZW50IGFuZCBzcGFjaW5nIGJldHdlZW4gZm9vdGVyIGl0ZW1zKi9cXG5mb290ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuc3BhbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qU3R5bGluZyBmb3IgbWFpbiBjb250YWluZXIqL1xcbiNjb250YWluZXJEaXYge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiBtYXgoY2FsYygxMDB2aCAtIDI1MHB4KSwgNTAwcHgpO1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggd2hpdGU7XFxuXFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDRzO1xcbn1cXG5cXG4vKlN0eWxpbmcgZm9yIHdlYXRoZXIgZGF0YSBjb250YWluZXIqL1xcbiNkYXRhRGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDAgNTBweDtcXG59XFxuXFxuLypTaXplIG9mIGNpdHkgbmFtZSovXFxuI2NpdHlOYW1lIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLyp3ZWF0aGVyIGljb24gc2l6ZSovXFxuI2RhdGFEaXYgaW1nIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4vKkFsaWduIHRlbXAgYW5kIHVuaXRzIGhvcml6b250YWxseSovXFxuI3RlbXBVbml0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qU2l6ZSBvZiB0ZW1wZXJhdHVyZSovXFxuI3RlbXAge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4vKkFsaWduIHVuaXRzIGhvcml6b250YWxseSBhbmQgc3BhY2UqL1xcbiN1bml0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLypJdGFsaWNpemUgZmVlbHMgbGlrZSB0ZW1wKi9cXG4jZmVlbHNMaWtlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLypBbGlnbiBpdGVtcyBpbiBtb3JlSW5mbyovXFxuI21vcmVJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qU3R5bGluZyBlYWNoIGRpdiBpbiBtb3JlSW5mbyovXFxuI21vcmVJbmZvIGRpdiB7XFxuICB3aWR0aDogMjUlO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcblxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTU2LCAxNTYsIDE1Nik7XFxufVxcblxcbi8qUmVtb3ZlIGxlZnQgYm9yZGVyIGZyb20gZmlyc3QgaW5mbyBkaXYqL1xcbiNtb3JlSW5mbyBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbi8qU3R5bGluZyBmb3IgaW5mb1RpdGxlcyovXFxuI2luZm9UaXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZnJvbVVuaXhUaW1lXG4gKiBAY2F0ZWdvcnkgVGltZXN0YW1wIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpLiBEZWNpbWFsIHZhbHVlcyB3aWxsIGJlIGRpc2NhcmRlZC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdW5peFRpbWUgLSB0aGUgZ2l2ZW4gVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGUgdGhlIGRhdGUgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb21Vbml4VGltZSgxMzMwNTE1OTA1KVxuICogLy89PiBXZWQgRmViIDI5IDIwMTIgMTE6NDU6MDVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmcm9tVW5peFRpbWUoZGlydHlVbml4VGltZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHVuaXhUaW1lID0gdG9JbnRlZ2VyKGRpcnR5VW5peFRpbWUpO1xuICByZXR1cm4gdG9EYXRlKHVuaXhUaW1lICogMTAwMCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmcm9tVW5peFRpbWUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHdlYXRoZXJPYmplY3QgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcbmltcG9ydCBDbG91ZHkgZnJvbSBcIi4vaW1nL2Nsb3VkeS5wbmdcIjtcbmltcG9ydCBNb29uY2xvdWRzIGZyb20gXCIuL2ltZy9tb29uY2xvdWRzLnBuZ1wiO1xuaW1wb3J0IFJhaW4gZnJvbSBcIi4vaW1nL3JhaW4ucG5nXCI7XG5pbXBvcnQgU25vdyBmcm9tIFwiLi9pbWcvc25vdy5wbmdcIjtcbmltcG9ydCBTdW5jbG91ZHMgZnJvbSBcIi4vaW1nL3N1bmNsb3Vkcy5wbmdcIjtcblxuLy8gUnVucyBmdW5jdGlvbnMgdG8gZGlzcGxheSBhbGwgZGF0YVxuY29uc3QgZGlzcGxheURhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGFEaXZcIik7XG4gIGNvbnN0IGN1cnJlbnREVCA9IGZyb21Vbml4VGltZSh3ZWF0aGVyT2JqZWN0LmRhdGVUaW1lKTtcbiAgY29uc3QgbmlnaHRTdGFydCA9IGZyb21Vbml4VGltZSh3ZWF0aGVyT2JqZWN0LnN1bnNldCk7XG4gIGNvbnN0IG5pZ2h0RW5kID0gZnJvbVVuaXhUaW1lKHdlYXRoZXJPYmplY3Quc3VucmlzZSk7XG5cbiAgLy8gQ29udmVydHMgdGVtcCB1bml0cyBmcm9tIEtlbHZpbiB0byBGYXJlbmhlaXQvQ2Vsc2l1c1xuICBjb25zdCBmYWhyZW5oZWl0ID0gKGtlbHZpbikgPT4gTWF0aC50cnVuYygoa2VsdmluIC0gMjczLjE1KSAqIDEuOCArIDMyKTtcbiAgY29uc3QgY2Vsc2l1cyA9IChrZWx2aW4pID0+IE1hdGgudHJ1bmMoa2VsdmluIC0gMjczLjE1KTtcblxuICAvLyBDbGVhcnMgc2VhcmNoIGJhclxuICBjb25zdCBjbGVhckZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hCYXJcIik7XG4gICAgc2VhcmNoQmFyLnJlc2V0KCk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgY2l0eSBuYW1lXG4gIGNvbnN0IGRpc3BsYXlDaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2l0eU5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaXR5TmFtZVwiKTtcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmplY3QubmFtZTtcbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcbiAgfTtcblxuICAvLyBDb252ZXJ0cyB0aW1lIGZyb20gdW5peCBhbmQgZGlzcGxheXNcbiAgY29uc3QgZGlzcGxheVRpbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG4gICAgdGltZS50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgfTtcblxuICBjb25zdCBzZXRCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyRGl2XCIpO1xuICAgIC8vIElmIGl0J3MgZGF5IGFuZCBubyByYWluXG4gICAgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsZWFyXCIgfHxcbiAgICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsb3Vkc1wiIHx8XG4gICAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA+IDcwMCAmJiB3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA8IDgwMCkpXG4gICAgKSB7XG4gICAgICBjb250YWluZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWcvc3VubnkuanBnJylcIjtcblxuICAgICAgLy8gSWYgaXQncyBuaWdodCBhbmQgbm8gcmFpblxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPj0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUIDwgbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xlYXJcIiB8fCB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xvdWRzXCIpXG4gICAgKSB7XG4gICAgICBjb250YWluZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWcvbmlnaHQuanBnJylcIjtcblxuICAgICAgLy8gSWYgaXQncyByYWluaW5nXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJUaHVuZGVyc3Rvcm1cIiB8fFxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkRyaXp6bGVcIiB8fFxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlJhaW5cIlxuICAgICkge1xuICAgICAgY29udGFpbmVyRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9zcmMvaW1nL3JhaW55LmpwZycpXCI7XG4gICAgfVxuICB9O1xuXG4gIC8vIERpc3BsYXlzIGFwcHJvcHJpYXRlIHdlYXRoZXIgcGljIGRlcGVuZGluZyBvbiB3ZWF0aGVyIGNvbmRpZGl0b25zXG4gIGNvbnN0IGRpc3BsYXlXZWF0aGVyUGljID0gKCkgPT4ge1xuICAgIC8vIElmIGl0J3MgZGF5IHRpbWUgYW5kIGNsZWFyXG4gICAgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xlYXJcIlxuICAgICkge1xuICAgICAgY29uc3QgbXlTdW5jbG91ZHMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15U3VuY2xvdWRzLnNyYyA9IFN1bmNsb3VkcztcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlTdW5jbG91ZHMpO1xuXG4gICAgICAvLyBJZiBpdCdzIGRheSB0aW1lIGFuZCBjbG91ZHkvYXRtb3NwaGVyZVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xvdWRzXCIgfHxcbiAgICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlcklEID4gNzAwICYmIHdlYXRoZXJPYmplY3Qud2VhdGhlcklEIDwgODAwKSlcbiAgICApIHtcbiAgICAgIGNvbnN0IG15Q2xvdWR5ID0gbmV3IEltYWdlKCk7XG4gICAgICBteUNsb3VkeS5zcmMgPSBDbG91ZHk7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15Q2xvdWR5KTtcblxuICAgICAgLy8gSWYgaXQncyBkYXkgdGltZSBhbmQgcmFpbmluZ1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiVGh1bmRlcnN0b3JtXCIgfHxcbiAgICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkRyaXp6bGVcIiB8fFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiUmFpblwiKVxuICAgICkge1xuICAgICAgY29uc3QgbXlSYWluID0gbmV3IEltYWdlKCk7XG4gICAgICBteVJhaW4uc3JjID0gUmFpbjtcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlSYWluKTtcblxuICAgICAgLy8gSWYgaXQncyBkYXkgdGltZSBhbmQgc25vd2luZ1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJTbm93XCJcbiAgICApIHtcbiAgICAgIGNvbnN0IG15U25vdyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlTbm93LnNyYyA9IFNub3c7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15U25vdyk7XG5cbiAgICAgIC8vIElmIGl0J3MgbmlnaHQgdGltZVxuICAgIH0gZWxzZSBpZiAoY3VycmVudERUID49IG5pZ2h0U3RhcnQgJiYgY3VycmVudERUIDwgbmlnaHRFbmQpIHtcbiAgICAgIGNvbnN0IG15TW9vbmNsb3VkcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlNb29uY2xvdWRzLnNyYyA9IE1vb25jbG91ZHM7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15TW9vbmNsb3Vkcyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIERpc3BsYXlzIGN1cnJlbnQgdGVtcGVyYXR1cmUgYW5kIHVuaXQgYnV0dG9uc1xuICBjb25zdCBkaXNwbGF5VGVtcCA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wVW5pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdW5pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGZhaHJlbmhlaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNlbHNpdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHNsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICB0ZW1wVW5pdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXBVbml0RGl2XCIpO1xuICAgIHVuaXREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1bml0RGl2XCIpO1xuICAgIGZhaHJlbmhlaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmYWhyZW5oZWl0QnV0dG9uXCIpO1xuICAgIGNlbHNpdXNCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjZWxzaXVzQnV0dG9uXCIpO1xuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wXCIpO1xuXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2ZhaHJlbmhlaXQod2VhdGhlck9iamVjdC50ZW1wKX1cXHUwMEIwYDtcbiAgICBmYWhyZW5oZWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJGXCI7XG4gICAgY2Vsc2l1c0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ1wiO1xuICAgIHNsYXNoLnRleHRDb250ZW50ID0gXCIvXCI7XG5cbiAgICBmYWhyZW5oZWl0QnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcblxuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQodGVtcFVuaXREaXYpO1xuICAgIHRlbXBVbml0RGl2LmFwcGVuZENoaWxkKHRlbXBEaXYpO1xuICAgIHRlbXBVbml0RGl2LmFwcGVuZENoaWxkKHVuaXREaXYpO1xuICAgIHRlbXBEaXYuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgdW5pdERpdi5hcHBlbmRDaGlsZChmYWhyZW5oZWl0QnV0dG9uKTtcbiAgICB1bml0RGl2LmFwcGVuZENoaWxkKHNsYXNoKTtcbiAgICB1bml0RGl2LmFwcGVuZENoaWxkKGNlbHNpdXNCdXR0b24pO1xuICB9O1xuXG4gIC8vIENoYW5nZSB0ZW1wIGRpc3BsYXkgd2hlbiB1bml0cyBjbGlja2VkXG4gIGNvbnN0IGNvbnZlcnRVbml0QnV0dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBmYWhyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYWhyZW5oZWl0QnV0dG9uXCIpO1xuICAgIGNvbnN0IGNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2Vsc2l1c0J1dHRvblwiKTtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpO1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmVlbHNMaWtlXCIpO1xuXG4gICAgZmFockJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2ZhaHJlbmhlaXQod2VhdGhlck9iamVjdC50ZW1wKX1cXHUwMEIwYDtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2ZhaHJlbmhlaXQoXG4gICAgICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlXG4gICAgICApfVxcdTAwQjBgO1xuXG4gICAgICBjZWxCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwibm9ybWFsXCI7XG4gICAgICBmYWhyQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICB9KTtcblxuICAgIGNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2NlbHNpdXMod2VhdGhlck9iamVjdC50ZW1wKX1cXHUwMEIwYDtcbiAgICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2NlbHNpdXMoXG4gICAgICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlXG4gICAgICApfVxcdTAwQjBgO1xuXG4gICAgICBmYWhyQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiO1xuICAgICAgY2VsQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBmZWVsc0xpa2UgdGVtcFxuICBjb25zdCBkaXNwbGF5RmVlbHNMaWtlID0gKCkgPT4ge1xuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZlZWxzTGlrZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZlZWxzTGlrZVwiKTtcblxuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke2ZhaHJlbmhlaXQoXG4gICAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZVxuICAgICl9XFx1MDBCMGA7XG5cbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgc3VucmlzZSB0aW1lXG4gIGNvbnN0IGRpc3BsYXlTdW5yaXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdW5yaXNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdW5yaXNlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBzdW5yaXNlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgbW9yZUluZm8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb3JlSW5mb1wiKTtcbiAgICBzdW5yaXNlVGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm9UaXRsZVwiKTtcbiAgICBzdW5yaXNlVGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIHN1bnJpc2VUaXRsZS50ZXh0Q29udGVudCA9IFwiU3VucmlzZTpcIjtcbiAgICBzdW5yaXNlVGltZS50ZXh0Q29udGVudCA9IGZyb21Vbml4VGltZShcbiAgICAgIHdlYXRoZXJPYmplY3Quc3VucmlzZVxuICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG5cbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG1vcmVJbmZvKTtcbiAgICBtb3JlSW5mby5hcHBlbmRDaGlsZChzdW5yaXNlRGl2KTtcbiAgICBzdW5yaXNlRGl2LmFwcGVuZENoaWxkKHN1bnJpc2VUaXRsZSk7XG4gICAgc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlVGltZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgc3Vuc2V0IHRpbWVcbiAgY29uc3QgZGlzcGxheVN1bnNldCA9ICgpID0+IHtcbiAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9yZUluZm9cIik7XG4gICAgY29uc3Qgc3Vuc2V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdW5zZXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHN1bnNldFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHN1bnNldFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvVGl0bGVcIik7XG4gICAgc3Vuc2V0VGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIHN1bnNldFRpdGxlLnRleHRDb250ZW50ID0gXCJTdW5zZXQ6XCI7XG4gICAgc3Vuc2V0VGltZS50ZXh0Q29udGVudCA9IGZyb21Vbml4VGltZShcbiAgICAgIHdlYXRoZXJPYmplY3Quc3Vuc2V0XG4gICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcblxuICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKHN1bnNldERpdik7XG4gICAgc3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnNldFRpdGxlKTtcbiAgICBzdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3Vuc2V0VGltZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgaHVtaWRpdHlcbiAgY29uc3QgZGlzcGxheUh1bWlkaXR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3JlSW5mb1wiKTtcbiAgICBjb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaHVtaWRpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgaHVtaWRpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1RpdGxlXCIpO1xuICAgIGh1bWlkaXR5VGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIGh1bWlkaXR5VGl0bGUudGV4dENvbnRlbnQgPSBcIkh1bWlkaXR5OlwiO1xuICAgIGh1bWlkaXR5VGltZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmplY3QuaHVtaWRpdHl9JWA7XG5cbiAgICBtb3JlSW5mby5hcHBlbmRDaGlsZChodW1pZGl0eURpdik7XG4gICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUaXRsZSk7XG4gICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUaW1lKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyB3aW5kIHNwZWVkXG4gIGNvbnN0IGRpc3BsYXlXaW5kU3BlZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9yZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vcmVJbmZvXCIpO1xuICAgIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHdpbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY29uc3Qgc3BlZWRNUEggPSBNYXRoLnJvdW5kKHdlYXRoZXJPYmplY3Qud2luZFNwZWVkICogMi4yMzcpO1xuXG4gICAgd2luZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvVGl0bGVcIik7XG4gICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuXG4gICAgd2luZFRpdGxlLnRleHRDb250ZW50ID0gXCJXaW5kIFNwZWVkOlwiO1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke3NwZWVkTVBIfSBNUEhgO1xuXG4gICAgbW9yZUluZm8uYXBwZW5kQ2hpbGQod2luZERpdik7XG4gICAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kVGl0bGUpO1xuICAgIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgfTtcblxuICAvLyBNYWtlcyBtYWluIGNvbnRhaW5lckRpdiBhcHBlYXJcbiAgY29uc3Qgc2hvd0NvbnRhaW5lckRpdiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lckRpdlwiKTtcbiAgICBjb250YWluZXJEaXYuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICB9O1xuXG4gIGNsZWFyRm9ybSgpO1xuICBzaG93Q29udGFpbmVyRGl2KCk7XG4gIHNldEJhY2tncm91bmQoKTtcbiAgZGlzcGxheUNpdHkoKTtcbiAgZGlzcGxheVRpbWUoKTtcbiAgZGlzcGxheVdlYXRoZXJQaWMoKTtcbiAgZGlzcGxheVRlbXAoKTtcbiAgZGlzcGxheUZlZWxzTGlrZSgpO1xuICBjb252ZXJ0VW5pdEJ1dHRvbnMoKTtcbiAgZGlzcGxheVN1bnJpc2UoKTtcbiAgZGlzcGxheVN1bnNldCgpO1xuICBkaXNwbGF5SHVtaWRpdHkoKTtcbiAgZGlzcGxheVdpbmRTcGVlZCgpO1xufTtcblxuY29uc3QgZGlzcGxheUVycm9yID0gKCkgPT4ge1xuICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXZcIik7XG4gIGNvbnN0IGVycm9yVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb3JyZWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGVycm9yVGV4dC50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gbm90IGZvdW5kLlwiO1xuICBjb3JyZWN0aW9uVGV4dC50ZXh0Q29udGVudCA9XG4gICAgJ1NlYXJjaCBtdXN0IGJlIGluIHRoZSBmb3JtIG9mIFwiQ2l0eVwiLCBcIkNpdHksIFN0YXRlXCIgb3IgXCJDaXR5LCBDb3VudHJ5XCIuJztcblxuICBlcnJvckRpdi5hcHBlbmRDaGlsZChlcnJvclRleHQpO1xuICBlcnJvckRpdi5hcHBlbmRDaGlsZChjb3JyZWN0aW9uVGV4dCk7XG59O1xuXG5jb25zdCByZW1vdmVFcnJvciA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yRGl2XCIpO1xuICB3aGlsZSAoZXJyb3JEaXYuZmlyc3RDaGlsZCkge1xuICAgIGVycm9yRGl2LnJlbW92ZUNoaWxkKGVycm9yRGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVJbmZvID0gKCkgPT4ge1xuICBjb25zdCBkYXRhRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhRGl2XCIpO1xuICB3aGlsZSAoZGF0YURpdi5maXJzdENoaWxkKSB7XG4gICAgZGF0YURpdi5yZW1vdmVDaGlsZChkYXRhRGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5RGF0YSwgZGlzcGxheUVycm9yLCByZW1vdmVJbmZvLCByZW1vdmVFcnJvciB9O1xuIiwiY29uc3Qgd2VhdGhlck9iamVjdCA9IHt9O1xuXG5leHBvcnQgeyB3ZWF0aGVyT2JqZWN0IH07XG4iLCJpbXBvcnQgeyB3ZWF0aGVyT2JqZWN0IH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5pbXBvcnQgeyBkaXNwbGF5RGF0YSwgZGlzcGxheUVycm9yLCByZW1vdmVJbmZvLCByZW1vdmVFcnJvciB9IGZyb20gXCIuL0RPTVwiO1xuXG4vLyBSZXR1cm5zIHdlYXRoZXIgZGF0YSBwcm9taXNlIGZyb20gQVBJXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbG9jYXRpb25TdHJpbmcgPSBjaXR5LnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKTtcbiAgICBjb25zdCBsb2NhdGlvblVSTCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvblN0cmluZ30mQVBQSUQ9ZjVjMGI5ZTAzMjY1ZDU0MzBmNWRhNjcwOWNlMDJiMGZgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jYXRpb25VUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAvLyBTdG9yZSBkYXRhIGludG8gd2VhdGhlck9iamVjdFxuICAgIHdlYXRoZXJPYmplY3QubmFtZSA9IHdlYXRoZXJKU09OLm5hbWU7XG4gICAgd2VhdGhlck9iamVjdC50ZW1wID0gd2VhdGhlckpTT04ubWFpbi50ZW1wO1xuICAgIHdlYXRoZXJPYmplY3QuaHVtaWRpdHkgPSB3ZWF0aGVySlNPTi5tYWluLmh1bWlkaXR5O1xuICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlID0gd2VhdGhlckpTT04ubWFpbi5mZWVsc19saWtlO1xuICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9IHdlYXRoZXJKU09OLndlYXRoZXJbMF0ubWFpbjtcbiAgICB3ZWF0aGVyT2JqZWN0LndpbmRTcGVlZCA9IHdlYXRoZXJKU09OLndpbmQuc3BlZWQ7XG4gICAgd2VhdGhlck9iamVjdC5kYXRlVGltZSA9IHdlYXRoZXJKU09OLmR0O1xuICAgIHdlYXRoZXJPYmplY3Quc3VucmlzZSA9IHdlYXRoZXJKU09OLnN5cy5zdW5yaXNlO1xuICAgIHdlYXRoZXJPYmplY3Quc3Vuc2V0ID0gd2VhdGhlckpTT04uc3lzLnN1bnNldDtcbiAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA9IHdlYXRoZXJKU09OLndlYXRoZXJbMF0uaWQ7XG5cbiAgICAvLyBIaWRlIGNvbnRhaW5lckRpdlxuICAgIGNvbnN0IGhpZGVDb250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lckRpdlwiKTtcbiAgICBoaWRlQ29udGFpbmVyRGl2LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICAgIC8vIFJlbW92ZXMgY3VycmVudCBlcnJvciBtZXNzYWdlXG4gICAgcmVtb3ZlRXJyb3IoKTtcblxuICAgIC8vIFJlbW92ZXMgY3VycmVudCB3ZWF0aGVyIGRhdGFcbiAgICByZW1vdmVJbmZvKCk7XG5cbiAgICAvLyBEaXNwbGF5IHdlYXRoZXIgZGF0YVxuICAgIGRpc3BsYXlEYXRhKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gUmVtb3ZlcyBjdXJyZW50IGVycm9yIG1lc3NhZ2VcbiAgICByZW1vdmVFcnJvcigpO1xuXG4gICAgLy8gRGlzcGxheXMgZXJyb3IgbWVzc2FnZVxuICAgIGRpc3BsYXlFcnJvcigpO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5cbigoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoQnV0dG9uXCIpO1xuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpLnZhbHVlO1xuICAgIGlmIChjaXR5KSB7XG4gICAgICBnZXRXZWF0aGVyRGF0YShjaXR5KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==