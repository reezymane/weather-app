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
    const locationURL = `https://api.openweathermap.org/data/2.5/weather?q=${locationString}&APPID=f5c0b9e03265d5430f5da6709ce02b0f`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ0FxQjtBQUN3Qjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQWM7QUFDcEI7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mcm9tVW5peFRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlJlbW92ZSBtYXJnaW4gYW5kIHBhZGRpbmcgZnJvbSBhbGwgZWxlbWVudHMqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypTZXQgZm9udCBjb2xvciBhbmQgc3R5bGUgZm9yIGVudGlyZSBwYWdlKi9cXG5odG1sIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBCb29rbWFuLCBVUlcgQm9va21hbiBMLCBzZXJpZjtcXG59XFxuXFxuLyphbGlnbiBwYWdlIHZlcnRpY2FsbHkqL1xcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDEyLCA3Nik7XFxufVxcblxcbi8qU2V0IGJhY2tncm91bmQgY29sb3IsIHN0eWxpbmcgYW5kIGFsaWdubWVudCovXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgNTYpO1xcbiAgaGVpZ2h0OiAxMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKkhlYWRlciBzcGFjaW5nKi9cXG5oZWFkZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwMHB4O1xcbn1cXG5cXG4vKlNlYXJjaCBiYXIgYWxpZ25tZW50IGFuZCBzcGFjaW5nKi9cXG4jc2VhcmNoQmFyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4vKlRpdGxlIGFsaWdubWVudCBhbmQgc3BhY2luZyovXFxuI3RpdGxlRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4vKlNldCBmb3JtIGhlaWdodCBhbmQgYWxpZ25tZW50Ki9cXG4jZm9ybURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLypTZWFyY2ggYmFyIGlucHV0IHNpemluZywgYmFja2dyb3VuZCBjb2xvciBhbmQgYm9yZGVyKi9cXG4jY2l0eSB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuXFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxufVxcblxcbi8qU2V0IHNlYXJjaCBidXR0b24gc2l6ZSovXFxuI3NlYXJjaEJhciBpbWcge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4vKlNldCBzdHlsaW5nIGZvciBlcnJvciBtZXNzYWdlKi9cXG4jZXJyb3JEaXYge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi8qQnV0dG9uIGJhY2tncm91bmQsIGZvbnQgY29sb3IsIGFuZCBib3JkZXIqL1xcbmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLypDaGFuZ2UgY3Vyc29yIHRvIHBvaW50ZXIgb24gaG92ZXIqL1xcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qQWxpZ25tZW50IGFuZCBzcGFjaW5nIGJldHdlZW4gZm9vdGVyIGl0ZW1zKi9cXG5mb290ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuc3BhbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qU3R5bGluZyBmb3IgbWFpbiBjb250YWluZXIqL1xcbiNjb250YWluZXJEaXYge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiBtYXgoY2FsYygxMDB2aCAtIDI1MHB4KSwgNTAwcHgpO1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG4gIGJveC1zaGFkb3c6IDAgMCA3cHggd2hpdGU7XFxuXFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDRzO1xcbn1cXG5cXG4vKlN0eWxpbmcgZm9yIHdlYXRoZXIgZGF0YSBjb250YWluZXIqL1xcbiNkYXRhRGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHBhZGRpbmc6IDAgNTBweDtcXG59XFxuXFxuLypTaXplIG9mIGNpdHkgbmFtZSovXFxuI2NpdHlOYW1lIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLyp3ZWF0aGVyIGljb24gc2l6ZSovXFxuI2RhdGFEaXYgaW1nIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4vKkFsaWduIHRlbXAgYW5kIHVuaXRzIGhvcml6b250YWxseSovXFxuI3RlbXBVbml0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qU2l6ZSBvZiB0ZW1wZXJhdHVyZSovXFxuI3RlbXAge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG5cXG4vKkFsaWduIHVuaXRzIGhvcml6b250YWxseSBhbmQgc3BhY2UqL1xcbiN1bml0RGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLypJdGFsaWNpemUgZmVlbHMgbGlrZSB0ZW1wKi9cXG4jZmVlbHNMaWtlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLypBbGlnbiBpdGVtcyBpbiBtb3JlSW5mbyovXFxuI21vcmVJbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qU3R5bGluZyBlYWNoIGRpdiBpbiBtb3JlSW5mbyovXFxuI21vcmVJbmZvIGRpdiB7XFxuICB3aWR0aDogMjUlO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcblxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTU2LCAxNTYsIDE1Nik7XFxufVxcblxcbi8qUmVtb3ZlIGxlZnQgYm9yZGVyIGZyb20gZmlyc3QgaW5mbyBkaXYqL1xcbiNtb3JlSW5mbyBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbi8qU3R5bGluZyBmb3IgaW5mb1RpdGxlcyovXFxuI2luZm9UaXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4Q0FBOEM7QUFDOUM7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBLDJDQUEyQztBQUMzQztFQUNFLFlBQVk7RUFDWiwwQ0FBMEM7QUFDNUM7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUEsOENBQThDO0FBQzlDOztFQUVFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBLG1DQUFtQztBQUNuQztFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IscUJBQXFCOztFQUVyQixrQkFBa0I7QUFDcEI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUEsdURBQXVEO0FBQ3ZEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7O0VBRVosd0NBQXdDO0VBQ3hDLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1DQUFtQztBQUNyQzs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBLDRDQUE0QztBQUM1QztFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGVBQWU7QUFDakI7O0FBRUEsNkNBQTZDO0FBQzdDO0VBQ0UsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDRCQUE0Qjs7RUFFNUIseUJBQXlCOztFQUV6QixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLHVCQUF1QjtBQUN6Qjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjs7RUFFbkIsZUFBZTtBQUNqQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsYUFBYTtBQUNmOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGVBQWU7QUFDakI7O0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBLCtCQUErQjtBQUMvQjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7O0VBRWxCLHlDQUF5QztBQUMzQzs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qUmVtb3ZlIG1hcmdpbiBhbmQgcGFkZGluZyBmcm9tIGFsbCBlbGVtZW50cyovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlNldCBmb250IGNvbG9yIGFuZCBzdHlsZSBmb3IgZW50aXJlIHBhZ2UqL1xcbmh0bWwge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IEJvb2ttYW4sIFVSVyBCb29rbWFuIEwsIHNlcmlmO1xcbn1cXG5cXG4vKmFsaWduIHBhZ2UgdmVydGljYWxseSovXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDc2KTtcXG59XFxuXFxuLypTZXQgYmFja2dyb3VuZCBjb2xvciwgc3R5bGluZyBhbmQgYWxpZ25tZW50Ki9cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCA1Nik7XFxuICBoZWlnaHQ6IDEyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qSGVhZGVyIHNwYWNpbmcqL1xcbmhlYWRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzAwcHg7XFxufVxcblxcbi8qU2VhcmNoIGJhciBhbGlnbm1lbnQgYW5kIHNwYWNpbmcqL1xcbiNzZWFyY2hCYXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi8qVGl0bGUgYWxpZ25tZW50IGFuZCBzcGFjaW5nKi9cXG4jdGl0bGVEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi8qU2V0IGZvcm0gaGVpZ2h0IGFuZCBhbGlnbm1lbnQqL1xcbiNmb3JtRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKlNlYXJjaCBiYXIgaW5wdXQgc2l6aW5nLCBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBib3JkZXIqL1xcbiNjaXR5IHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG5cXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG59XFxuXFxuLypTZXQgc2VhcmNoIGJ1dHRvbiBzaXplKi9cXG4jc2VhcmNoQmFyIGltZyB7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbi8qU2V0IHN0eWxpbmcgZm9yIGVycm9yIG1lc3NhZ2UqL1xcbiNlcnJvckRpdiB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLypCdXR0b24gYmFja2dyb3VuZCwgZm9udCBjb2xvciwgYW5kIGJvcmRlciovXFxuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKkNoYW5nZSBjdXJzb3IgdG8gcG9pbnRlciBvbiBob3ZlciovXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypBbGlnbm1lbnQgYW5kIHNwYWNpbmcgYmV0d2VlbiBmb290ZXIgaXRlbXMqL1xcbmZvb3RlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5zcGFuIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLypTdHlsaW5nIGZvciBtYWluIGNvbnRhaW5lciovXFxuI2NvbnRhaW5lckRpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IG1heChjYWxjKDEwMHZoIC0gMjUwcHgpLCA1MDBweCk7XFxuICB3aWR0aDogODAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbiAgYm94LXNoYWRvdzogMCAwIDdweCB3aGl0ZTtcXG5cXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNHM7XFxufVxcblxcbi8qU3R5bGluZyBmb3Igd2VhdGhlciBkYXRhIGNvbnRhaW5lciovXFxuI2RhdGFEaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgcGFkZGluZzogMCA1MHB4O1xcbn1cXG5cXG4vKlNpemUgb2YgY2l0eSBuYW1lKi9cXG4jY2l0eU5hbWUge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4vKndlYXRoZXIgaWNvbiBzaXplKi9cXG4jZGF0YURpdiBpbWcge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi8qQWxpZ24gdGVtcCBhbmQgdW5pdHMgaG9yaXpvbnRhbGx5Ki9cXG4jdGVtcFVuaXREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLypTaXplIG9mIHRlbXBlcmF0dXJlKi9cXG4jdGVtcCB7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi8qQWxpZ24gdW5pdHMgaG9yaXpvbnRhbGx5IGFuZCBzcGFjZSovXFxuI3VuaXREaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4vKkl0YWxpY2l6ZSBmZWVscyBsaWtlIHRlbXAqL1xcbiNmZWVsc0xpa2Uge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKkFsaWduIGl0ZW1zIGluIG1vcmVJbmZvKi9cXG4jbW9yZUluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLypTdHlsaW5nIGVhY2ggZGl2IGluIG1vcmVJbmZvKi9cXG4jbW9yZUluZm8gZGl2IHtcXG4gIHdpZHRoOiAyNSU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxNTYsIDE1NiwgMTU2KTtcXG59XFxuXFxuLypSZW1vdmUgbGVmdCBib3JkZXIgZnJvbSBmaXJzdCBpbmZvIGRpdiovXFxuI21vcmVJbmZvIGRpdjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuXFxuLypTdHlsaW5nIGZvciBpbmZvVGl0bGVzKi9cXG4jaW5mb1RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmcm9tVW5peFRpbWVcbiAqIEBjYXRlZ29yeSBUaW1lc3RhbXAgSGVscGVyc1xuICogQHN1bW1hcnkgQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcykuIERlY2ltYWwgdmFsdWVzIHdpbGwgYmUgZGlzY2FyZGVkLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB1bml4VGltZSAtIHRoZSBnaXZlbiBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcylcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENyZWF0ZSB0aGUgZGF0ZSAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjA1OlxuICogY29uc3QgcmVzdWx0ID0gZnJvbVVuaXhUaW1lKDEzMzA1MTU5MDUpXG4gKiAvLz0+IFdlZCBGZWIgMjkgMjAxMiAxMTo0NTowNVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyb21Vbml4VGltZShkaXJ0eVVuaXhUaW1lKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgdW5peFRpbWUgPSB0b0ludGVnZXIoZGlydHlVbml4VGltZSk7XG4gIHJldHVybiB0b0RhdGUodW5peFRpbWUgKiAxMDAwKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZyb21Vbml4VGltZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgd2VhdGhlck9iamVjdCB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuaW1wb3J0IENsb3VkeSBmcm9tIFwiLi9pbWcvY2xvdWR5LnBuZ1wiO1xuaW1wb3J0IE1vb25jbG91ZHMgZnJvbSBcIi4vaW1nL21vb25jbG91ZHMucG5nXCI7XG5pbXBvcnQgUmFpbiBmcm9tIFwiLi9pbWcvcmFpbi5wbmdcIjtcbmltcG9ydCBTbm93IGZyb20gXCIuL2ltZy9zbm93LnBuZ1wiO1xuaW1wb3J0IFN1bmNsb3VkcyBmcm9tIFwiLi9pbWcvc3VuY2xvdWRzLnBuZ1wiO1xuXG4vLyBSdW5zIGZ1bmN0aW9ucyB0byBkaXNwbGF5IGFsbCBkYXRhXG5jb25zdCBkaXNwbGF5RGF0YSA9ICgpID0+IHtcbiAgY29uc3QgZGF0YURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0YURpdlwiKTtcbiAgY29uc3QgY3VycmVudERUID0gZnJvbVVuaXhUaW1lKHdlYXRoZXJPYmplY3QuZGF0ZVRpbWUpO1xuICBjb25zdCBuaWdodFN0YXJ0ID0gZnJvbVVuaXhUaW1lKHdlYXRoZXJPYmplY3Quc3Vuc2V0KTtcbiAgY29uc3QgbmlnaHRFbmQgPSBmcm9tVW5peFRpbWUod2VhdGhlck9iamVjdC5zdW5yaXNlKTtcblxuICAvLyBDb252ZXJ0cyB0ZW1wIHVuaXRzIGZyb20gS2VsdmluIHRvIEZhcmVuaGVpdC9DZWxzaXVzXG4gIGNvbnN0IGZhaHJlbmhlaXQgPSAoa2VsdmluKSA9PiBNYXRoLnRydW5jKChrZWx2aW4gLSAyNzMuMTUpICogMS44ICsgMzIpO1xuICBjb25zdCBjZWxzaXVzID0gKGtlbHZpbikgPT4gTWF0aC50cnVuYyhrZWx2aW4gLSAyNzMuMTUpO1xuXG4gIC8vIENsZWFycyBzZWFyY2ggYmFyXG4gIGNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaEJhclwiKTtcbiAgICBzZWFyY2hCYXIucmVzZXQoKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBjaXR5IG5hbWVcbiAgY29uc3QgZGlzcGxheUNpdHkgPSAoKSA9PiB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjaXR5TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNpdHlOYW1lXCIpO1xuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gd2VhdGhlck9iamVjdC5uYW1lO1xuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xuICB9O1xuXG4gIC8vIENvbnZlcnRzIHRpbWUgZnJvbSB1bml4IGFuZCBkaXNwbGF5c1xuICBjb25zdCBkaXNwbGF5VGltZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGltZS5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcbiAgICB0aW1lLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKHRpbWUpO1xuICB9O1xuXG4gIGNvbnN0IHNldEJhY2tncm91bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJEaXZcIik7XG4gICAgLy8gSWYgaXQncyBkYXkgYW5kIG5vIHJhaW5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xlYXJcIiB8fFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiQ2xvdWRzXCIgfHxcbiAgICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlcklEID4gNzAwICYmIHdlYXRoZXJPYmplY3Qud2VhdGhlcklEIDwgODAwKSlcbiAgICApIHtcbiAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltZy9zdW5ueS5qcGcnKVwiO1xuXG4gICAgICAvLyBJZiBpdCdzIG5pZ2h0IGFuZCBubyByYWluXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnREVCA+PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPCBuaWdodEVuZCAmJlxuICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbGVhclwiIHx8IHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbG91ZHNcIilcbiAgICApIHtcbiAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vc3JjL2ltZy9uaWdodC5qcGcnKVwiO1xuXG4gICAgICAvLyBJZiBpdCdzIHJhaW5pbmdcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlRodW5kZXJzdG9ybVwiIHx8XG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiRHJpenpsZVwiIHx8XG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiUmFpblwiXG4gICAgKSB7XG4gICAgICBjb250YWluZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL3NyYy9pbWcvcmFpbnkuanBnJylcIjtcbiAgICB9XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgYXBwcm9wcmlhdGUgd2VhdGhlciBwaWMgZGVwZW5kaW5nIG9uIHdlYXRoZXIgY29uZGlkaXRvbnNcbiAgY29uc3QgZGlzcGxheVdlYXRoZXJQaWMgPSAoKSA9PiB7XG4gICAgLy8gSWYgaXQncyBkYXkgdGltZSBhbmQgY2xlYXJcbiAgICBpZiAoXG4gICAgICBjdXJyZW50RFQgPD0gbmlnaHRTdGFydCAmJlxuICAgICAgY3VycmVudERUID4gbmlnaHRFbmQgJiZcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbGVhclwiXG4gICAgKSB7XG4gICAgICBjb25zdCBteVN1bmNsb3VkcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlTdW5jbG91ZHMuc3JjID0gU3VuY2xvdWRzO1xuICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChteVN1bmNsb3Vkcyk7XG5cbiAgICAgIC8vIElmIGl0J3MgZGF5IHRpbWUgYW5kIGNsb3VkeS9hdG1vc3BoZXJlXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnREVCA8PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPiBuaWdodEVuZCAmJlxuICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbG91ZHNcIiB8fFxuICAgICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVySUQgPiA3MDAgJiYgd2VhdGhlck9iamVjdC53ZWF0aGVySUQgPCA4MDApKVxuICAgICkge1xuICAgICAgY29uc3QgbXlDbG91ZHkgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15Q2xvdWR5LnNyYyA9IENsb3VkeTtcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlDbG91ZHkpO1xuXG4gICAgICAvLyBJZiBpdCdzIGRheSB0aW1lIGFuZCByYWluaW5nXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnREVCA8PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPiBuaWdodEVuZCAmJlxuICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJUaHVuZGVyc3Rvcm1cIiB8fFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiRHJpenpsZVwiIHx8XG4gICAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJSYWluXCIpXG4gICAgKSB7XG4gICAgICBjb25zdCBteVJhaW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15UmFpbi5zcmMgPSBSYWluO1xuICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChteVJhaW4pO1xuXG4gICAgICAvLyBJZiBpdCdzIGRheSB0aW1lIGFuZCBzbm93aW5nXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnREVCA8PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPiBuaWdodEVuZCAmJlxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlNub3dcIlxuICAgICkge1xuICAgICAgY29uc3QgbXlTbm93ID0gbmV3IEltYWdlKCk7XG4gICAgICBteVNub3cuc3JjID0gU25vdztcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlTbm93KTtcblxuICAgICAgLy8gSWYgaXQncyBuaWdodCB0aW1lXG4gICAgfSBlbHNlIGlmIChjdXJyZW50RFQgPj0gbmlnaHRTdGFydCAmJiBjdXJyZW50RFQgPCBuaWdodEVuZCkge1xuICAgICAgY29uc3QgbXlNb29uY2xvdWRzID0gbmV3IEltYWdlKCk7XG4gICAgICBteU1vb25jbG91ZHMuc3JjID0gTW9vbmNsb3VkcztcbiAgICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobXlNb29uY2xvdWRzKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgY3VycmVudCB0ZW1wZXJhdHVyZSBhbmQgdW5pdCBidXR0b25zXG4gIGNvbnN0IGRpc3BsYXlUZW1wID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBVbml0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB1bml0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZmFocmVuaGVpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2Vsc2l1c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3Qgc2xhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHRlbXBVbml0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcFVuaXREaXZcIik7XG4gICAgdW5pdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInVuaXREaXZcIik7XG4gICAgZmFocmVuaGVpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZhaHJlbmhlaXRCdXR0b25cIik7XG4gICAgY2Vsc2l1c0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNlbHNpdXNCdXR0b25cIik7XG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXBcIik7XG5cbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7ZmFocmVuaGVpdCh3ZWF0aGVyT2JqZWN0LnRlbXApfVxcdTAwQjBgO1xuICAgIGZhaHJlbmhlaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgICBjZWxzaXVzQnV0dG9uLnRleHRDb250ZW50ID0gXCJDXCI7XG4gICAgc2xhc2gudGV4dENvbnRlbnQgPSBcIi9cIjtcblxuICAgIGZhaHJlbmhlaXRCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuXG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZCh0ZW1wVW5pdERpdik7XG4gICAgdGVtcFVuaXREaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gICAgdGVtcFVuaXREaXYuYXBwZW5kQ2hpbGQodW5pdERpdik7XG4gICAgdGVtcERpdi5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICB1bml0RGl2LmFwcGVuZENoaWxkKGZhaHJlbmhlaXRCdXR0b24pO1xuICAgIHVuaXREaXYuYXBwZW5kQ2hpbGQoc2xhc2gpO1xuICAgIHVuaXREaXYuYXBwZW5kQ2hpbGQoY2Vsc2l1c0J1dHRvbik7XG4gIH07XG5cbiAgLy8gQ2hhbmdlIHRlbXAgZGlzcGxheSB3aGVuIHVuaXRzIGNsaWNrZWRcbiAgY29uc3QgY29udmVydFVuaXRCdXR0b25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGZhaHJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZhaHJlbmhlaXRCdXR0b25cIik7XG4gICAgY29uc3QgY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjZWxzaXVzQnV0dG9uXCIpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmZWVsc0xpa2VcIik7XG5cbiAgICBmYWhyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7ZmFocmVuaGVpdCh3ZWF0aGVyT2JqZWN0LnRlbXApfVxcdTAwQjBgO1xuICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7ZmFocmVuaGVpdChcbiAgICAgICAgd2VhdGhlck9iamVjdC5mZWVsc0xpa2VcbiAgICAgICl9XFx1MDBCMGA7XG5cbiAgICAgIGNlbEJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJub3JtYWxcIjtcbiAgICAgIGZhaHJCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgIH0pO1xuXG4gICAgY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7Y2Vsc2l1cyh3ZWF0aGVyT2JqZWN0LnRlbXApfVxcdTAwQjBgO1xuICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7Y2Vsc2l1cyhcbiAgICAgICAgd2VhdGhlck9iamVjdC5mZWVsc0xpa2VcbiAgICAgICl9XFx1MDBCMGA7XG5cbiAgICAgIGZhaHJCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwibm9ybWFsXCI7XG4gICAgICBjZWxCdXR0b24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIGZlZWxzTGlrZSB0ZW1wXG4gIGNvbnN0IGRpc3BsYXlGZWVsc0xpa2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmVlbHNMaWtlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmVlbHNMaWtlXCIpO1xuXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7ZmFocmVuaGVpdChcbiAgICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlXG4gICAgKX1cXHUwMEIwYDtcblxuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBzdW5yaXNlIHRpbWVcbiAgY29uc3QgZGlzcGxheVN1bnJpc2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9yZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN1bnJpc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN1bnJpc2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHN1bnJpc2VUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBtb3JlSW5mby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vcmVJbmZvXCIpO1xuICAgIHN1bnJpc2VUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1RpdGxlXCIpO1xuICAgIHN1bnJpc2VUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuXG4gICAgc3VucmlzZVRpdGxlLnRleHRDb250ZW50ID0gXCJTdW5yaXNlOlwiO1xuICAgIHN1bnJpc2VUaW1lLnRleHRDb250ZW50ID0gZnJvbVVuaXhUaW1lKFxuICAgICAgd2VhdGhlck9iamVjdC5zdW5yaXNlXG4gICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcblxuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQobW9yZUluZm8pO1xuICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKHN1bnJpc2VEaXYpO1xuICAgIHN1bnJpc2VEaXYuYXBwZW5kQ2hpbGQoc3VucmlzZVRpdGxlKTtcbiAgICBzdW5yaXNlRGl2LmFwcGVuZENoaWxkKHN1bnJpc2VUaW1lKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBzdW5zZXQgdGltZVxuICBjb25zdCBkaXNwbGF5U3Vuc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3JlSW5mb1wiKTtcbiAgICBjb25zdCBzdW5zZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN1bnNldFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3Qgc3Vuc2V0VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgc3Vuc2V0VGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm9UaXRsZVwiKTtcbiAgICBzdW5zZXRUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuXG4gICAgc3Vuc2V0VGl0bGUudGV4dENvbnRlbnQgPSBcIlN1bnNldDpcIjtcbiAgICBzdW5zZXRUaW1lLnRleHRDb250ZW50ID0gZnJvbVVuaXhUaW1lKFxuICAgICAgd2VhdGhlck9iamVjdC5zdW5zZXRcbiAgICApLnRvTG9jYWxlVGltZVN0cmluZygpO1xuXG4gICAgbW9yZUluZm8uYXBwZW5kQ2hpbGQoc3Vuc2V0RGl2KTtcbiAgICBzdW5zZXREaXYuYXBwZW5kQ2hpbGQoc3Vuc2V0VGl0bGUpO1xuICAgIHN1bnNldERpdi5hcHBlbmRDaGlsZChzdW5zZXRUaW1lKTtcbiAgfTtcblxuICAvLyBEaXNwbGF5cyBodW1pZGl0eVxuICBjb25zdCBkaXNwbGF5SHVtaWRpdHkgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9yZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vcmVJbmZvXCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBodW1pZGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgaHVtaWRpdHlUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBodW1pZGl0eVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvVGl0bGVcIik7XG4gICAgaHVtaWRpdHlUaW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuXG4gICAgaHVtaWRpdHlUaXRsZS50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHk6XCI7XG4gICAgaHVtaWRpdHlUaW1lLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iamVjdC5odW1pZGl0eX0lYDtcblxuICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKGh1bWlkaXR5RGl2KTtcbiAgICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVRpdGxlKTtcbiAgICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVRpbWUpO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIHdpbmQgc3BlZWRcbiAgY29uc3QgZGlzcGxheVdpbmRTcGVlZCA9ICgpID0+IHtcbiAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9yZUluZm9cIik7XG4gICAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgd2luZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBjb25zdCBzcGVlZE1QSCA9IE1hdGgucm91bmQod2VhdGhlck9iamVjdC53aW5kU3BlZWQgKiAyLjIzNyk7XG5cbiAgICB3aW5kVGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm9UaXRsZVwiKTtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG5cbiAgICB3aW5kVGl0bGUudGV4dENvbnRlbnQgPSBcIldpbmQgU3BlZWQ6XCI7XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7c3BlZWRNUEh9IE1QSGA7XG5cbiAgICBtb3JlSW5mby5hcHBlbmRDaGlsZCh3aW5kRGl2KTtcbiAgICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRUaXRsZSk7XG4gICAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuICB9O1xuXG4gIC8vIE1ha2VzIG1haW4gY29udGFpbmVyRGl2IGFwcGVhclxuICBjb25zdCBzaG93Q29udGFpbmVyRGl2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyRGl2XCIpO1xuICAgIGNvbnRhaW5lckRpdi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gIH07XG5cbiAgY2xlYXJGb3JtKCk7XG4gIHNob3dDb250YWluZXJEaXYoKTtcbiAgc2V0QmFja2dyb3VuZCgpO1xuICBkaXNwbGF5Q2l0eSgpO1xuICBkaXNwbGF5VGltZSgpO1xuICBkaXNwbGF5V2VhdGhlclBpYygpO1xuICBkaXNwbGF5VGVtcCgpO1xuICBkaXNwbGF5RmVlbHNMaWtlKCk7XG4gIGNvbnZlcnRVbml0QnV0dG9ucygpO1xuICBkaXNwbGF5U3VucmlzZSgpO1xuICBkaXNwbGF5U3Vuc2V0KCk7XG4gIGRpc3BsYXlIdW1pZGl0eSgpO1xuICBkaXNwbGF5V2luZFNwZWVkKCk7XG59O1xuXG5jb25zdCBkaXNwbGF5RXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvckRpdlwiKTtcbiAgY29uc3QgZXJyb3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNvcnJlY3Rpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgZXJyb3JUZXh0LnRleHRDb250ZW50ID0gXCJMb2NhdGlvbiBub3QgZm91bmQuXCI7XG4gIGNvcnJlY3Rpb25UZXh0LnRleHRDb250ZW50ID1cbiAgICAnU2VhcmNoIG11c3QgYmUgaW4gdGhlIGZvcm0gb2YgXCJDaXR5XCIsIFwiQ2l0eSwgU3RhdGVcIiBvciBcIkNpdHksIENvdW50cnlcIi4nO1xuXG4gIGVycm9yRGl2LmFwcGVuZENoaWxkKGVycm9yVGV4dCk7XG4gIGVycm9yRGl2LmFwcGVuZENoaWxkKGNvcnJlY3Rpb25UZXh0KTtcbn07XG5cbmNvbnN0IHJlbW92ZUVycm9yID0gKCkgPT4ge1xuICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXZcIik7XG4gIHdoaWxlIChlcnJvckRpdi5maXJzdENoaWxkKSB7XG4gICAgZXJyb3JEaXYucmVtb3ZlQ2hpbGQoZXJyb3JEaXYuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGFEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGFEaXZcIik7XG4gIHdoaWxlIChkYXRhRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICBkYXRhRGl2LnJlbW92ZUNoaWxkKGRhdGFEaXYuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlEYXRhLCBkaXNwbGF5RXJyb3IsIHJlbW92ZUluZm8sIHJlbW92ZUVycm9yIH07XG4iLCJjb25zdCB3ZWF0aGVyT2JqZWN0ID0ge307XG5cbmV4cG9ydCB7IHdlYXRoZXJPYmplY3QgfTtcbiIsImltcG9ydCB7IHdlYXRoZXJPYmplY3QgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcbmltcG9ydCB7IGRpc3BsYXlEYXRhLCBkaXNwbGF5RXJyb3IsIHJlbW92ZUluZm8sIHJlbW92ZUVycm9yIH0gZnJvbSBcIi4vRE9NXCI7XG5cbi8vIFJldHVybnMgd2VhdGhlciBkYXRhIHByb21pc2UgZnJvbSBBUElcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvblN0cmluZyA9IGNpdHkuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpO1xuICAgIGNvbnN0IGxvY2F0aW9uVVJMID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvblN0cmluZ30mQVBQSUQ9ZjVjMGI5ZTAzMjY1ZDU0MzBmNWRhNjcwOWNlMDJiMGZgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jYXRpb25VUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAvLyBTdG9yZSBkYXRhIGludG8gd2VhdGhlck9iamVjdFxuICAgIHdlYXRoZXJPYmplY3QubmFtZSA9IHdlYXRoZXJKU09OLm5hbWU7XG4gICAgd2VhdGhlck9iamVjdC50ZW1wID0gd2VhdGhlckpTT04ubWFpbi50ZW1wO1xuICAgIHdlYXRoZXJPYmplY3QuaHVtaWRpdHkgPSB3ZWF0aGVySlNPTi5tYWluLmh1bWlkaXR5O1xuICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlID0gd2VhdGhlckpTT04ubWFpbi5mZWVsc19saWtlO1xuICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9IHdlYXRoZXJKU09OLndlYXRoZXJbMF0ubWFpbjtcbiAgICB3ZWF0aGVyT2JqZWN0LndpbmRTcGVlZCA9IHdlYXRoZXJKU09OLndpbmQuc3BlZWQ7XG4gICAgd2VhdGhlck9iamVjdC5kYXRlVGltZSA9IHdlYXRoZXJKU09OLmR0O1xuICAgIHdlYXRoZXJPYmplY3Quc3VucmlzZSA9IHdlYXRoZXJKU09OLnN5cy5zdW5yaXNlO1xuICAgIHdlYXRoZXJPYmplY3Quc3Vuc2V0ID0gd2VhdGhlckpTT04uc3lzLnN1bnNldDtcbiAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA9IHdlYXRoZXJKU09OLndlYXRoZXJbMF0uaWQ7XG5cbiAgICAvLyBSZW1vdmVzIGN1cnJlbnQgZXJyb3IgbWVzc2FnZVxuICAgIHJlbW92ZUVycm9yKCk7XG5cbiAgICAvLyBSZW1vdmVzIGN1cnJlbnQgd2VhdGhlciBkYXRhXG4gICAgcmVtb3ZlSW5mbygpO1xuXG4gICAgLy8gRGlzcGxheSB3ZWF0aGVyIGRhdGFcbiAgICBkaXNwbGF5RGF0YSgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIFJlbW92ZXMgY3VycmVudCBlcnJvciBtZXNzYWdlXG4gICAgcmVtb3ZlRXJyb3IoKTtcblxuICAgIC8vIERpc3BsYXlzIGVycm9yIG1lc3NhZ2VcbiAgICBkaXNwbGF5RXJyb3IoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG4oKCkgPT4ge1xuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaEJ1dHRvblwiKTtcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eVwiKS52YWx1ZTtcbiAgICBpZiAoY2l0eSkge1xuICAgICAgZ2V0V2VhdGhlckRhdGEoY2l0eSk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=