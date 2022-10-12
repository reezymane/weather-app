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
___CSS_LOADER_EXPORT___.push([module.id, "/*Remove margin and padding from all elements*/\n* {\n  margin: 0;\n  padding: 0;\n}\n\n/*Set font color and style for entire page*/\nhtml {\n  color: white;\n  font-family: Bookman, URW Bookman L, serif;\n}\n\n/*align page vertically*/\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(12, 12, 76);\n}\n\n/*Set background color, styling and alignment*/\nheader,\nfooter {\n  background-color: rgb(0, 0, 56);\n  height: 125px;\n  display: flex;\n  align-items: center;\n}\n\n/*Header spacing*/\nheader {\n  justify-content: center;\n  gap: 300px;\n}\n\n/*Search bar alignment and spacing*/\n#searchBar {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  margin-bottom: 5px;\n}\n\n/*Title alignment and spacing*/\n#titleDiv {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n/*Set form height and alignment*/\n#formDiv {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n/*Search bar input sizing, background color and border*/\n#city {\n  height: 20px;\n  width: 300px;\n\n  background-color: rgba(255, 255, 255, 0);\n  color: whitesmoke;\n\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 2px solid whitesmoke;\n}\n\n/*Set search button size*/\n#searchBar img {\n  height: 25px;\n}\n\n/*Set styling for error message*/\n#errorDiv {\n  font-size: 13px;\n  padding-bottom: 25px;\n  height: 25px;\n  width: 400px;\n}\n\n/*Button background, font color, and border*/\nbutton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  font-size: 20px;\n}\n\n/*Change cursor to pointer on hover*/\nbutton:hover {\n  cursor: pointer;\n}\n\n/*Alignment and spacing between footer items*/\nfooter {\n  justify-content: center;\n  gap: 5px;\n  font-style: italic;\n}\n\nspan {\n  font-size: 20px;\n}\n\n/*Styling for main container*/\n#containerDiv {\n  align-self: center;\n  height: max(calc(100vh - 250px), 500px);\n  width: 800px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: aliceblue;\n  border-radius: 15px;\n\n  box-shadow: 0 0 7px white;\n}\n\n/*Styling for weather data container*/\n#dataDiv {\n  background-color: rgba(0, 0, 0, 0.059);\n  width: 500px;\n  height: 400px;\n  border-radius: 15px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  padding: 0 50px;\n}\n\n/*Size of city name*/\n#cityName {\n  font-size: 40px;\n}\n\n/*weather icon size*/\n#dataDiv img {\n  height: 50px;\n  width: 50px;\n}\n\n/*Align temp and units horizontally*/\n#tempUnitDiv {\n  display: flex;\n}\n\n/*Size of temperature*/\n#temp {\n  font-size: 50px;\n}\n\n/*Align units horizontally and space*/\n#unitDiv {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  font-size: 20px;\n  padding-bottom: 10px;\n}\n\n/*Italicize feels like temp*/\n#feelsLike {\n  font-style: italic;\n}\n\n/*Align items in moreInfo*/\n#moreInfo {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n}\n\n/*Styling each div in moreInfo*/\n#moreInfo div {\n  width: 25%;\n  padding-left: 15px;\n\n  border-left: 1px solid rgb(156, 156, 156);\n}\n\n/*Remove left border from first info div*/\n#moreInfo div:first-child {\n  border-left: none;\n}\n\n/*Styling for infoTitles*/\n#infoTitle {\n  font-weight: bold;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;EACE,SAAS;EACT,UAAU;AACZ;;AAEA,2CAA2C;AAC3C;EACE,YAAY;EACZ,0CAA0C;AAC5C;;AAEA,wBAAwB;AACxB;EACE,aAAa;EACb,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA,8CAA8C;AAC9C;;EAEE,+BAA+B;EAC/B,aAAa;EACb,aAAa;EACb,mBAAmB;AACrB;;AAEA,iBAAiB;AACjB;EACE,uBAAuB;EACvB,UAAU;AACZ;;AAEA,mCAAmC;AACnC;EACE,OAAO;EACP,aAAa;EACb,qBAAqB;;EAErB,kBAAkB;AACpB;;AAEA,8BAA8B;AAC9B;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA,gCAAgC;AAChC;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA,uDAAuD;AACvD;EACE,YAAY;EACZ,YAAY;;EAEZ,wCAAwC;EACxC,iBAAiB;;EAEjB,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mCAAmC;AACrC;;AAEA,yBAAyB;AACzB;EACE,YAAY;AACd;;AAEA,gCAAgC;AAChC;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,YAAY;AACd;;AAEA,4CAA4C;AAC5C;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,YAAY;EACZ,wCAAwC;EACxC,YAAY;EACZ,eAAe;AACjB;;AAEA,oCAAoC;AACpC;EACE,eAAe;AACjB;;AAEA,6CAA6C;AAC7C;EACE,uBAAuB;EACvB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA,6BAA6B;AAC7B;EACE,kBAAkB;EAClB,uCAAuC;EACvC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,2BAA2B;EAC3B,mBAAmB;;EAEnB,yBAAyB;AAC3B;;AAEA,qCAAqC;AACrC;EACE,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,mBAAmB;;EAEnB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;;EAEnB,eAAe;AACjB;;AAEA,oBAAoB;AACpB;EACE,eAAe;AACjB;;AAEA,oBAAoB;AACpB;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,oCAAoC;AACpC;EACE,aAAa;AACf;;AAEA,sBAAsB;AACtB;EACE,eAAe;AACjB;;AAEA,qCAAqC;AACrC;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,eAAe;EACf,oBAAoB;AACtB;;AAEA,4BAA4B;AAC5B;EACE,kBAAkB;AACpB;;AAEA,0BAA0B;AAC1B;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;AACb;;AAEA,+BAA+B;AAC/B;EACE,UAAU;EACV,kBAAkB;;EAElB,yCAAyC;AAC3C;;AAEA,yCAAyC;AACzC;EACE,iBAAiB;AACnB;;AAEA,yBAAyB;AACzB;EACE,iBAAiB;AACnB","sourcesContent":["/*Remove margin and padding from all elements*/\n* {\n  margin: 0;\n  padding: 0;\n}\n\n/*Set font color and style for entire page*/\nhtml {\n  color: white;\n  font-family: Bookman, URW Bookman L, serif;\n}\n\n/*align page vertically*/\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(12, 12, 76);\n}\n\n/*Set background color, styling and alignment*/\nheader,\nfooter {\n  background-color: rgb(0, 0, 56);\n  height: 125px;\n  display: flex;\n  align-items: center;\n}\n\n/*Header spacing*/\nheader {\n  justify-content: center;\n  gap: 300px;\n}\n\n/*Search bar alignment and spacing*/\n#searchBar {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n\n  margin-bottom: 5px;\n}\n\n/*Title alignment and spacing*/\n#titleDiv {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n/*Set form height and alignment*/\n#formDiv {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n/*Search bar input sizing, background color and border*/\n#city {\n  height: 20px;\n  width: 300px;\n\n  background-color: rgba(255, 255, 255, 0);\n  color: whitesmoke;\n\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 2px solid whitesmoke;\n}\n\n/*Set search button size*/\n#searchBar img {\n  height: 25px;\n}\n\n/*Set styling for error message*/\n#errorDiv {\n  font-size: 13px;\n  padding-bottom: 25px;\n  height: 25px;\n  width: 400px;\n}\n\n/*Button background, font color, and border*/\nbutton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: white;\n  background-color: rgba(255, 255, 255, 0);\n  border: none;\n  font-size: 20px;\n}\n\n/*Change cursor to pointer on hover*/\nbutton:hover {\n  cursor: pointer;\n}\n\n/*Alignment and spacing between footer items*/\nfooter {\n  justify-content: center;\n  gap: 5px;\n  font-style: italic;\n}\n\nspan {\n  font-size: 20px;\n}\n\n/*Styling for main container*/\n#containerDiv {\n  align-self: center;\n  height: max(calc(100vh - 250px), 500px);\n  width: 800px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: aliceblue;\n  border-radius: 15px;\n\n  box-shadow: 0 0 7px white;\n}\n\n/*Styling for weather data container*/\n#dataDiv {\n  background-color: rgba(0, 0, 0, 0.059);\n  width: 500px;\n  height: 400px;\n  border-radius: 15px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  padding: 0 50px;\n}\n\n/*Size of city name*/\n#cityName {\n  font-size: 40px;\n}\n\n/*weather icon size*/\n#dataDiv img {\n  height: 50px;\n  width: 50px;\n}\n\n/*Align temp and units horizontally*/\n#tempUnitDiv {\n  display: flex;\n}\n\n/*Size of temperature*/\n#temp {\n  font-size: 50px;\n}\n\n/*Align units horizontally and space*/\n#unitDiv {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  font-size: 20px;\n  padding-bottom: 10px;\n}\n\n/*Italicize feels like temp*/\n#feelsLike {\n  font-style: italic;\n}\n\n/*Align items in moreInfo*/\n#moreInfo {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n}\n\n/*Styling each div in moreInfo*/\n#moreInfo div {\n  width: 25%;\n  padding-left: 15px;\n\n  border-left: 1px solid rgb(156, 156, 156);\n}\n\n/*Remove left border from first info div*/\n#moreInfo div:first-child {\n  border-left: none;\n}\n\n/*Styling for infoTitles*/\n#infoTitle {\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZnJvbVVuaXhUaW1lL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypSZW1vdmUgbWFyZ2luIGFuZCBwYWRkaW5nIGZyb20gYWxsIGVsZW1lbnRzKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qU2V0IGZvbnQgY29sb3IgYW5kIHN0eWxlIGZvciBlbnRpcmUgcGFnZSovXFxuaHRtbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogQm9va21hbiwgVVJXIEJvb2ttYW4gTCwgc2VyaWY7XFxufVxcblxcbi8qYWxpZ24gcGFnZSB2ZXJ0aWNhbGx5Ki9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgNzYpO1xcbn1cXG5cXG4vKlNldCBiYWNrZ3JvdW5kIGNvbG9yLCBzdHlsaW5nIGFuZCBhbGlnbm1lbnQqL1xcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDU2KTtcXG4gIGhlaWdodDogMTI1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLypIZWFkZXIgc3BhY2luZyovXFxuaGVhZGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMDBweDtcXG59XFxuXFxuLypTZWFyY2ggYmFyIGFsaWdubWVudCBhbmQgc3BhY2luZyovXFxuI3NlYXJjaEJhciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLypUaXRsZSBhbGlnbm1lbnQgYW5kIHNwYWNpbmcqL1xcbiN0aXRsZURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLypTZXQgZm9ybSBoZWlnaHQgYW5kIGFsaWdubWVudCovXFxuI2Zvcm1EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qU2VhcmNoIGJhciBpbnB1dCBzaXppbmcsIGJhY2tncm91bmQgY29sb3IgYW5kIGJvcmRlciovXFxuI2NpdHkge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4vKlNldCBzZWFyY2ggYnV0dG9uIHNpemUqL1xcbiNzZWFyY2hCYXIgaW1nIHtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuLypTZXQgc3R5bGluZyBmb3IgZXJyb3IgbWVzc2FnZSovXFxuI2Vycm9yRGl2IHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4vKkJ1dHRvbiBiYWNrZ3JvdW5kLCBmb250IGNvbG9yLCBhbmQgYm9yZGVyKi9cXG5idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qQ2hhbmdlIGN1cnNvciB0byBwb2ludGVyIG9uIGhvdmVyKi9cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKkFsaWdubWVudCBhbmQgc3BhY2luZyBiZXR3ZWVuIGZvb3RlciBpdGVtcyovXFxuZm9vdGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbnNwYW4ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKlN0eWxpbmcgZm9yIG1haW4gY29udGFpbmVyKi9cXG4jY29udGFpbmVyRGl2IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogbWF4KGNhbGMoMTAwdmggLSAyNTBweCksIDUwMHB4KTtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgYm94LXNoYWRvdzogMCAwIDdweCB3aGl0ZTtcXG59XFxuXFxuLypTdHlsaW5nIGZvciB3ZWF0aGVyIGRhdGEgY29udGFpbmVyKi9cXG4jZGF0YURpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDU5KTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nOiAwIDUwcHg7XFxufVxcblxcbi8qU2l6ZSBvZiBjaXR5IG5hbWUqL1xcbiNjaXR5TmFtZSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi8qd2VhdGhlciBpY29uIHNpemUqL1xcbiNkYXRhRGl2IGltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuLypBbGlnbiB0ZW1wIGFuZCB1bml0cyBob3Jpem9udGFsbHkqL1xcbiN0ZW1wVW5pdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKlNpemUgb2YgdGVtcGVyYXR1cmUqL1xcbiN0ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLypBbGlnbiB1bml0cyBob3Jpem9udGFsbHkgYW5kIHNwYWNlKi9cXG4jdW5pdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qSXRhbGljaXplIGZlZWxzIGxpa2UgdGVtcCovXFxuI2ZlZWxzTGlrZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qQWxpZ24gaXRlbXMgaW4gbW9yZUluZm8qL1xcbiNtb3JlSW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKlN0eWxpbmcgZWFjaCBkaXYgaW4gbW9yZUluZm8qL1xcbiNtb3JlSW5mbyBkaXYge1xcbiAgd2lkdGg6IDI1JTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG5cXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDE1NiwgMTU2LCAxNTYpO1xcbn1cXG5cXG4vKlJlbW92ZSBsZWZ0IGJvcmRlciBmcm9tIGZpcnN0IGluZm8gZGl2Ki9cXG4jbW9yZUluZm8gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4vKlN0eWxpbmcgZm9yIGluZm9UaXRsZXMqL1xcbiNpbmZvVGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOENBQThDO0FBQzlDO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0FBQzVDOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUNBQWlDO0FBQ25DOztBQUVBLDhDQUE4QztBQUM5Qzs7RUFFRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHFCQUFxQjs7RUFFckIsa0JBQWtCO0FBQ3BCOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBLHVEQUF1RDtBQUN2RDtFQUNFLFlBQVk7RUFDWixZQUFZOztFQUVaLHdDQUF3QztFQUN4QyxpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQ0FBbUM7QUFDckM7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsWUFBWTtBQUNkOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSw0Q0FBNEM7QUFDNUM7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLDZDQUE2QztBQUM3QztFQUNFLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjs7RUFFbkIseUJBQXlCO0FBQzNCOztBQUVBLHFDQUFxQztBQUNyQztFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1COztFQUVuQixlQUFlO0FBQ2pCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGVBQWU7QUFDakI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjs7RUFFbEIseUNBQXlDO0FBQzNDOztBQUVBLHlDQUF5QztBQUN6QztFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypSZW1vdmUgbWFyZ2luIGFuZCBwYWRkaW5nIGZyb20gYWxsIGVsZW1lbnRzKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qU2V0IGZvbnQgY29sb3IgYW5kIHN0eWxlIGZvciBlbnRpcmUgcGFnZSovXFxuaHRtbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogQm9va21hbiwgVVJXIEJvb2ttYW4gTCwgc2VyaWY7XFxufVxcblxcbi8qYWxpZ24gcGFnZSB2ZXJ0aWNhbGx5Ki9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgNzYpO1xcbn1cXG5cXG4vKlNldCBiYWNrZ3JvdW5kIGNvbG9yLCBzdHlsaW5nIGFuZCBhbGlnbm1lbnQqL1xcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDU2KTtcXG4gIGhlaWdodDogMTI1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLypIZWFkZXIgc3BhY2luZyovXFxuaGVhZGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMDBweDtcXG59XFxuXFxuLypTZWFyY2ggYmFyIGFsaWdubWVudCBhbmQgc3BhY2luZyovXFxuI3NlYXJjaEJhciB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLypUaXRsZSBhbGlnbm1lbnQgYW5kIHNwYWNpbmcqL1xcbiN0aXRsZURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLypTZXQgZm9ybSBoZWlnaHQgYW5kIGFsaWdubWVudCovXFxuI2Zvcm1EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qU2VhcmNoIGJhciBpbnB1dCBzaXppbmcsIGJhY2tncm91bmQgY29sb3IgYW5kIGJvcmRlciovXFxuI2NpdHkge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4vKlNldCBzZWFyY2ggYnV0dG9uIHNpemUqL1xcbiNzZWFyY2hCYXIgaW1nIHtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuLypTZXQgc3R5bGluZyBmb3IgZXJyb3IgbWVzc2FnZSovXFxuI2Vycm9yRGl2IHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4vKkJ1dHRvbiBiYWNrZ3JvdW5kLCBmb250IGNvbG9yLCBhbmQgYm9yZGVyKi9cXG5idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qQ2hhbmdlIGN1cnNvciB0byBwb2ludGVyIG9uIGhvdmVyKi9cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKkFsaWdubWVudCBhbmQgc3BhY2luZyBiZXR3ZWVuIGZvb3RlciBpdGVtcyovXFxuZm9vdGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbnNwYW4ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKlN0eWxpbmcgZm9yIG1haW4gY29udGFpbmVyKi9cXG4jY29udGFpbmVyRGl2IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogbWF4KGNhbGMoMTAwdmggLSAyNTBweCksIDUwMHB4KTtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgYm94LXNoYWRvdzogMCAwIDdweCB3aGl0ZTtcXG59XFxuXFxuLypTdHlsaW5nIGZvciB3ZWF0aGVyIGRhdGEgY29udGFpbmVyKi9cXG4jZGF0YURpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDU5KTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBwYWRkaW5nOiAwIDUwcHg7XFxufVxcblxcbi8qU2l6ZSBvZiBjaXR5IG5hbWUqL1xcbiNjaXR5TmFtZSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi8qd2VhdGhlciBpY29uIHNpemUqL1xcbiNkYXRhRGl2IGltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuLypBbGlnbiB0ZW1wIGFuZCB1bml0cyBob3Jpem9udGFsbHkqL1xcbiN0ZW1wVW5pdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKlNpemUgb2YgdGVtcGVyYXR1cmUqL1xcbiN0ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLypBbGlnbiB1bml0cyBob3Jpem9udGFsbHkgYW5kIHNwYWNlKi9cXG4jdW5pdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi8qSXRhbGljaXplIGZlZWxzIGxpa2UgdGVtcCovXFxuI2ZlZWxzTGlrZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi8qQWxpZ24gaXRlbXMgaW4gbW9yZUluZm8qL1xcbiNtb3JlSW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKlN0eWxpbmcgZWFjaCBkaXYgaW4gbW9yZUluZm8qL1xcbiNtb3JlSW5mbyBkaXYge1xcbiAgd2lkdGg6IDI1JTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG5cXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDE1NiwgMTU2LCAxNTYpO1xcbn1cXG5cXG4vKlJlbW92ZSBsZWZ0IGJvcmRlciBmcm9tIGZpcnN0IGluZm8gZGl2Ki9cXG4jbW9yZUluZm8gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4vKlN0eWxpbmcgZm9yIGluZm9UaXRsZXMqL1xcbiNpbmZvVGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZyb21Vbml4VGltZVxuICogQGNhdGVnb3J5IFRpbWVzdGFtcCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDcmVhdGUgYSBkYXRlIGZyb20gYSBVbml4IHRpbWVzdGFtcC5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKS4gRGVjaW1hbCB2YWx1ZXMgd2lsbCBiZSBkaXNjYXJkZWQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHVuaXhUaW1lIC0gdGhlIGdpdmVuIFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKVxuICogQHJldHVybnMge0RhdGV9IHRoZSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlIHRoZSBkYXRlIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDU6XG4gKiBjb25zdCByZXN1bHQgPSBmcm9tVW5peFRpbWUoMTMzMDUxNTkwNSlcbiAqIC8vPT4gV2VkIEZlYiAyOSAyMDEyIDExOjQ1OjA1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnJvbVVuaXhUaW1lKGRpcnR5VW5peFRpbWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB1bml4VGltZSA9IHRvSW50ZWdlcihkaXJ0eVVuaXhUaW1lKTtcbiAgcmV0dXJuIHRvRGF0ZSh1bml4VGltZSAqIDEwMDApO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZnJvbVVuaXhUaW1lIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyB3ZWF0aGVyT2JqZWN0IH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5pbXBvcnQgQ2xvdWR5IGZyb20gXCIuL2ltZy9jbG91ZHkucG5nXCI7XG5pbXBvcnQgTW9vbmNsb3VkcyBmcm9tIFwiLi9pbWcvbW9vbmNsb3Vkcy5wbmdcIjtcbmltcG9ydCBSYWluIGZyb20gXCIuL2ltZy9yYWluLnBuZ1wiO1xuaW1wb3J0IFNub3cgZnJvbSBcIi4vaW1nL3Nub3cucG5nXCI7XG5pbXBvcnQgU3VuY2xvdWRzIGZyb20gXCIuL2ltZy9zdW5jbG91ZHMucG5nXCI7XG5cbi8vIFJ1bnMgZnVuY3Rpb25zIHRvIGRpc3BsYXkgYWxsIGRhdGFcbmNvbnN0IGRpc3BsYXlEYXRhID0gKCkgPT4ge1xuICBjb25zdCBkYXRhRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhRGl2XCIpO1xuICBjb25zdCBjdXJyZW50RFQgPSBmcm9tVW5peFRpbWUod2VhdGhlck9iamVjdC5kYXRlVGltZSk7XG4gIGNvbnN0IG5pZ2h0U3RhcnQgPSBmcm9tVW5peFRpbWUod2VhdGhlck9iamVjdC5zdW5zZXQpO1xuICBjb25zdCBuaWdodEVuZCA9IGZyb21Vbml4VGltZSh3ZWF0aGVyT2JqZWN0LnN1bnJpc2UpO1xuXG4gIC8vIENvbnZlcnRzIHRlbXAgdW5pdHMgZnJvbSBLZWx2aW4gdG8gRmFyZW5oZWl0L0NlbHNpdXNcbiAgY29uc3QgZmFocmVuaGVpdCA9IChrZWx2aW4pID0+IE1hdGgudHJ1bmMoKGtlbHZpbiAtIDI3My4xNSkgKiAxLjggKyAzMik7XG4gIGNvbnN0IGNlbHNpdXMgPSAoa2VsdmluKSA9PiBNYXRoLnRydW5jKGtlbHZpbiAtIDI3My4xNSk7XG5cbiAgLy8gQ2xlYXJzIHNlYXJjaCBiYXJcbiAgY29uc3QgY2xlYXJGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoQmFyXCIpO1xuICAgIHNlYXJjaEJhci5yZXNldCgpO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIGNpdHkgbmFtZVxuICBjb25zdCBkaXNwbGF5Q2l0eSA9ICgpID0+IHtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNpdHlOYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2l0eU5hbWVcIik7XG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqZWN0Lm5hbWU7XG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XG4gIH07XG5cbiAgLy8gQ29udmVydHMgdGltZSBmcm9tIHVuaXggYW5kIGRpc3BsYXlzXG4gIGNvbnN0IGRpc3BsYXlUaW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aW1lLmNsYXNzTGlzdC5hZGQoXCJ0aW1lXCIpO1xuICAgIHRpbWUudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIGRhdGFEaXYuYXBwZW5kQ2hpbGQodGltZSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0QmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lckRpdlwiKTtcbiAgICAvLyBJZiBpdCdzIGRheSBhbmQgbm8gcmFpblxuICAgIGlmIChcbiAgICAgIGN1cnJlbnREVCA8PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPiBuaWdodEVuZCAmJlxuICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbGVhclwiIHx8XG4gICAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbG91ZHNcIiB8fFxuICAgICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVySUQgPiA3MDAgJiYgd2VhdGhlck9iamVjdC53ZWF0aGVySUQgPCA4MDApKVxuICAgICkge1xuICAgICAgY29udGFpbmVyRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9kaXN0L2ltZy9zdW5ueS5qcGcnKVwiO1xuXG4gICAgICAvLyBJZiBpdCdzIG5pZ2h0IGFuZCBubyByYWluXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGN1cnJlbnREVCA+PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPCBuaWdodEVuZCAmJlxuICAgICAgKHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbGVhclwiIHx8IHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJDbG91ZHNcIilcbiAgICApIHtcbiAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi9pbWcvbmlnaHQuanBnJylcIjtcblxuICAgICAgLy8gSWYgaXQncyByYWluaW5nXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJUaHVuZGVyc3Rvcm1cIiB8fFxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkRyaXp6bGVcIiB8fFxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlJhaW5cIlxuICAgICkge1xuICAgICAgY29udGFpbmVyRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltZy9yYWlueS5qcGcnKVwiO1xuICAgIH1cbiAgfTtcblxuICAvLyBEaXNwbGF5cyBhcHByb3ByaWF0ZSB3ZWF0aGVyIHBpYyBkZXBlbmRpbmcgb24gd2VhdGhlciBjb25kaWRpdG9uc1xuICBjb25zdCBkaXNwbGF5V2VhdGhlclBpYyA9ICgpID0+IHtcbiAgICAvLyBJZiBpdCdzIGRheSB0aW1lIGFuZCBjbGVhclxuICAgIGlmIChcbiAgICAgIGN1cnJlbnREVCA8PSBuaWdodFN0YXJ0ICYmXG4gICAgICBjdXJyZW50RFQgPiBuaWdodEVuZCAmJlxuICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsZWFyXCJcbiAgICApIHtcbiAgICAgIGNvbnN0IG15U3VuY2xvdWRzID0gbmV3IEltYWdlKCk7XG4gICAgICBteVN1bmNsb3Vkcy5zcmMgPSBTdW5jbG91ZHM7XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15U3VuY2xvdWRzKTtcblxuICAgICAgLy8gSWYgaXQncyBkYXkgdGltZSBhbmQgY2xvdWR5L2F0bW9zcGhlcmVcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIkNsb3Vkc1wiIHx8XG4gICAgICAgICh3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA+IDcwMCAmJiB3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA8IDgwMCkpXG4gICAgKSB7XG4gICAgICBjb25zdCBteUNsb3VkeSA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlDbG91ZHkuc3JjID0gQ2xvdWR5O1xuICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChteUNsb3VkeSk7XG5cbiAgICAgIC8vIElmIGl0J3MgZGF5IHRpbWUgYW5kIHJhaW5pbmdcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICAod2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlRodW5kZXJzdG9ybVwiIHx8XG4gICAgICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9PT0gXCJEcml6emxlXCIgfHxcbiAgICAgICAgd2VhdGhlck9iamVjdC53ZWF0aGVyID09PSBcIlJhaW5cIilcbiAgICApIHtcbiAgICAgIGNvbnN0IG15UmFpbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgbXlSYWluLnNyYyA9IFJhaW47XG4gICAgICBkYXRhRGl2LmFwcGVuZENoaWxkKG15UmFpbik7XG5cbiAgICAgIC8vIElmIGl0J3MgZGF5IHRpbWUgYW5kIHNub3dpbmdcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgY3VycmVudERUIDw9IG5pZ2h0U3RhcnQgJiZcbiAgICAgIGN1cnJlbnREVCA+IG5pZ2h0RW5kICYmXG4gICAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXIgPT09IFwiU25vd1wiXG4gICAgKSB7XG4gICAgICBjb25zdCBteVNub3cgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15U25vdy5zcmMgPSBTbm93O1xuICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChteVNub3cpO1xuXG4gICAgICAvLyBJZiBpdCdzIG5pZ2h0IHRpbWVcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnREVCA+PSBuaWdodFN0YXJ0ICYmIGN1cnJlbnREVCA8IG5pZ2h0RW5kKSB7XG4gICAgICBjb25zdCBteU1vb25jbG91ZHMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIG15TW9vbmNsb3Vkcy5zcmMgPSBNb29uY2xvdWRzO1xuICAgICAgZGF0YURpdi5hcHBlbmRDaGlsZChteU1vb25jbG91ZHMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBEaXNwbGF5cyBjdXJyZW50IHRlbXBlcmF0dXJlIGFuZCB1bml0IGJ1dHRvbnNcbiAgY29uc3QgZGlzcGxheVRlbXAgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcFVuaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHVuaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBmYWhyZW5oZWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjZWxzaXVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBzbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgdGVtcFVuaXREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wVW5pdERpdlwiKTtcbiAgICB1bml0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidW5pdERpdlwiKTtcbiAgICBmYWhyZW5oZWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmFocmVuaGVpdEJ1dHRvblwiKTtcbiAgICBjZWxzaXVzQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2Vsc2l1c0J1dHRvblwiKTtcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcFwiKTtcblxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtmYWhyZW5oZWl0KHdlYXRoZXJPYmplY3QudGVtcCl9XFx1MDBCMGA7XG4gICAgZmFocmVuaGVpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRlwiO1xuICAgIGNlbHNpdXNCdXR0b24udGV4dENvbnRlbnQgPSBcIkNcIjtcbiAgICBzbGFzaC50ZXh0Q29udGVudCA9IFwiL1wiO1xuXG4gICAgZmFocmVuaGVpdEJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG5cbiAgICBkYXRhRGl2LmFwcGVuZENoaWxkKHRlbXBVbml0RGl2KTtcbiAgICB0ZW1wVW5pdERpdi5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbiAgICB0ZW1wVW5pdERpdi5hcHBlbmRDaGlsZCh1bml0RGl2KTtcbiAgICB0ZW1wRGl2LmFwcGVuZENoaWxkKHRlbXApO1xuICAgIHVuaXREaXYuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdEJ1dHRvbik7XG4gICAgdW5pdERpdi5hcHBlbmRDaGlsZChzbGFzaCk7XG4gICAgdW5pdERpdi5hcHBlbmRDaGlsZChjZWxzaXVzQnV0dG9uKTtcbiAgfTtcblxuICAvLyBDaGFuZ2UgdGVtcCBkaXNwbGF5IHdoZW4gdW5pdHMgY2xpY2tlZFxuICBjb25zdCBjb252ZXJ0VW5pdEJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZmFockJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmFocmVuaGVpdEJ1dHRvblwiKTtcbiAgICBjb25zdCBjZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NlbHNpdXNCdXR0b25cIik7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcFwiKTtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzTGlrZVwiKTtcblxuICAgIGZhaHJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtmYWhyZW5oZWl0KHdlYXRoZXJPYmplY3QudGVtcCl9XFx1MDBCMGA7XG4gICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtmYWhyZW5oZWl0KFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZVxuICAgICAgKX1cXHUwMEIwYDtcblxuICAgICAgY2VsQnV0dG9uLnN0eWxlLmZvbnRXZWlnaHQgPSBcIm5vcm1hbFwiO1xuICAgICAgZmFockJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgfSk7XG5cbiAgICBjZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtjZWxzaXVzKHdlYXRoZXJPYmplY3QudGVtcCl9XFx1MDBCMGA7XG4gICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtjZWxzaXVzKFxuICAgICAgICB3ZWF0aGVyT2JqZWN0LmZlZWxzTGlrZVxuICAgICAgKX1cXHUwMEIwYDtcblxuICAgICAgZmFockJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJub3JtYWxcIjtcbiAgICAgIGNlbEJ1dHRvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgZmVlbHNMaWtlIHRlbXBcbiAgY29uc3QgZGlzcGxheUZlZWxzTGlrZSA9ICgpID0+IHtcbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmZWVsc0xpa2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmZWVsc0xpa2VcIik7XG5cbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtmYWhyZW5oZWl0KFxuICAgICAgd2VhdGhlck9iamVjdC5mZWVsc0xpa2VcbiAgICApfVxcdTAwQjBgO1xuXG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIHN1bnJpc2UgdGltZVxuICBjb25zdCBkaXNwbGF5U3VucmlzZSA9ICgpID0+IHtcbiAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3VucmlzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3VucmlzZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3Qgc3VucmlzZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIG1vcmVJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9yZUluZm9cIik7XG4gICAgc3VucmlzZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvVGl0bGVcIik7XG4gICAgc3VucmlzZVRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG5cbiAgICBzdW5yaXNlVGl0bGUudGV4dENvbnRlbnQgPSBcIlN1bnJpc2U6XCI7XG4gICAgc3VucmlzZVRpbWUudGV4dENvbnRlbnQgPSBmcm9tVW5peFRpbWUoXG4gICAgICB3ZWF0aGVyT2JqZWN0LnN1bnJpc2VcbiAgICApLnRvTG9jYWxlVGltZVN0cmluZygpO1xuXG4gICAgZGF0YURpdi5hcHBlbmRDaGlsZChtb3JlSW5mbyk7XG4gICAgbW9yZUluZm8uYXBwZW5kQ2hpbGQoc3VucmlzZURpdik7XG4gICAgc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlVGl0bGUpO1xuICAgIHN1bnJpc2VEaXYuYXBwZW5kQ2hpbGQoc3VucmlzZVRpbWUpO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIHN1bnNldCB0aW1lXG4gIGNvbnN0IGRpc3BsYXlTdW5zZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9yZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vcmVJbmZvXCIpO1xuICAgIGNvbnN0IHN1bnNldERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3Vuc2V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBzdW5zZXRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBzdW5zZXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1RpdGxlXCIpO1xuICAgIHN1bnNldFRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG5cbiAgICBzdW5zZXRUaXRsZS50ZXh0Q29udGVudCA9IFwiU3Vuc2V0OlwiO1xuICAgIHN1bnNldFRpbWUudGV4dENvbnRlbnQgPSBmcm9tVW5peFRpbWUoXG4gICAgICB3ZWF0aGVyT2JqZWN0LnN1bnNldFxuICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG5cbiAgICBtb3JlSW5mby5hcHBlbmRDaGlsZChzdW5zZXREaXYpO1xuICAgIHN1bnNldERpdi5hcHBlbmRDaGlsZChzdW5zZXRUaXRsZSk7XG4gICAgc3Vuc2V0RGl2LmFwcGVuZENoaWxkKHN1bnNldFRpbWUpO1xuICB9O1xuXG4gIC8vIERpc3BsYXlzIGh1bWlkaXR5XG4gIGNvbnN0IGRpc3BsYXlIdW1pZGl0eSA9ICgpID0+IHtcbiAgICBjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9yZUluZm9cIik7XG4gICAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGh1bWlkaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBodW1pZGl0eVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGh1bWlkaXR5VGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm9UaXRsZVwiKTtcbiAgICBodW1pZGl0eVRpbWUuY2xhc3NMaXN0LmFkZChcInRpbWVcIik7XG5cbiAgICBodW1pZGl0eVRpdGxlLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eTpcIjtcbiAgICBodW1pZGl0eVRpbWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqZWN0Lmh1bWlkaXR5fSVgO1xuXG4gICAgbW9yZUluZm8uYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXYpO1xuICAgIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGl0bGUpO1xuICAgIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGltZSk7XG4gIH07XG5cbiAgLy8gRGlzcGxheXMgd2luZCBzcGVlZFxuICBjb25zdCBkaXNwbGF5V2luZFNwZWVkID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vcmVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3JlSW5mb1wiKTtcbiAgICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB3aW5kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnN0IHNwZWVkTVBIID0gTWF0aC5yb3VuZCh3ZWF0aGVyT2JqZWN0LndpbmRTcGVlZCAqIDIuMjM3KTtcblxuICAgIHdpbmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW5mb1RpdGxlXCIpO1xuICAgIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKFwidGltZVwiKTtcblxuICAgIHdpbmRUaXRsZS50ZXh0Q29udGVudCA9IFwiV2luZCBTcGVlZDpcIjtcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtzcGVlZE1QSH0gTVBIYDtcblxuICAgIG1vcmVJbmZvLmFwcGVuZENoaWxkKHdpbmREaXYpO1xuICAgIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlKTtcbiAgICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG4gIH07XG5cbiAgY2xlYXJGb3JtKCk7XG4gIHNldEJhY2tncm91bmQoKTtcbiAgZGlzcGxheUNpdHkoKTtcbiAgZGlzcGxheVRpbWUoKTtcbiAgZGlzcGxheVdlYXRoZXJQaWMoKTtcbiAgZGlzcGxheVRlbXAoKTtcbiAgZGlzcGxheUZlZWxzTGlrZSgpO1xuICBjb252ZXJ0VW5pdEJ1dHRvbnMoKTtcbiAgZGlzcGxheVN1bnJpc2UoKTtcbiAgZGlzcGxheVN1bnNldCgpO1xuICBkaXNwbGF5SHVtaWRpdHkoKTtcbiAgZGlzcGxheVdpbmRTcGVlZCgpO1xufTtcblxuY29uc3QgZGlzcGxheUVycm9yID0gKCkgPT4ge1xuICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3JEaXZcIik7XG4gIGNvbnN0IGVycm9yVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBjb3JyZWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGVycm9yVGV4dC50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gbm90IGZvdW5kLlwiO1xuICBjb3JyZWN0aW9uVGV4dC50ZXh0Q29udGVudCA9XG4gICAgJ1NlYXJjaCBtdXN0IGJlIGluIHRoZSBmb3JtIG9mIFwiQ2l0eVwiLCBcIkNpdHksIFN0YXRlXCIgb3IgXCJDaXR5LCBDb3VudHJ5XCIuJztcblxuICBlcnJvckRpdi5hcHBlbmRDaGlsZChlcnJvclRleHQpO1xuICBlcnJvckRpdi5hcHBlbmRDaGlsZChjb3JyZWN0aW9uVGV4dCk7XG59O1xuXG5jb25zdCByZW1vdmVFcnJvciA9ICgpID0+IHtcbiAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yRGl2XCIpO1xuICB3aGlsZSAoZXJyb3JEaXYuZmlyc3RDaGlsZCkge1xuICAgIGVycm9yRGl2LnJlbW92ZUNoaWxkKGVycm9yRGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVJbmZvID0gKCkgPT4ge1xuICBjb25zdCBkYXRhRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRhRGl2XCIpO1xuICB3aGlsZSAoZGF0YURpdi5maXJzdENoaWxkKSB7XG4gICAgZGF0YURpdi5yZW1vdmVDaGlsZChkYXRhRGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5RGF0YSwgZGlzcGxheUVycm9yLCByZW1vdmVJbmZvLCByZW1vdmVFcnJvciB9O1xuIiwiY29uc3Qgd2VhdGhlck9iamVjdCA9IHt9O1xuXG5leHBvcnQgeyB3ZWF0aGVyT2JqZWN0IH07XG4iLCJpbXBvcnQgeyB3ZWF0aGVyT2JqZWN0IH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5pbXBvcnQgeyBkaXNwbGF5RGF0YSwgZGlzcGxheUVycm9yLCByZW1vdmVJbmZvLCByZW1vdmVFcnJvciB9IGZyb20gXCIuL0RPTVwiO1xuXG4vLyBSZXR1cm5zIHdlYXRoZXIgZGF0YSBwcm9taXNlIGZyb20gQVBJXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbG9jYXRpb25TdHJpbmcgPSBjaXR5LnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKTtcbiAgICBjb25zdCBsb2NhdGlvblVSTCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvblN0cmluZ30mQVBQSUQ9ZjVjMGI5ZTAzMjY1ZDU0MzBmNWRhNjcwOWNlMDJiMGZgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobG9jYXRpb25VUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAvLyBTdG9yZSBkYXRhIGludG8gd2VhdGhlck9iamVjdFxuICAgIHdlYXRoZXJPYmplY3QubmFtZSA9IHdlYXRoZXJKU09OLm5hbWU7XG4gICAgd2VhdGhlck9iamVjdC50ZW1wID0gd2VhdGhlckpTT04ubWFpbi50ZW1wO1xuICAgIHdlYXRoZXJPYmplY3QuaHVtaWRpdHkgPSB3ZWF0aGVySlNPTi5tYWluLmh1bWlkaXR5O1xuICAgIHdlYXRoZXJPYmplY3QuZmVlbHNMaWtlID0gd2VhdGhlckpTT04ubWFpbi5mZWVsc19saWtlO1xuICAgIHdlYXRoZXJPYmplY3Qud2VhdGhlciA9IHdlYXRoZXJKU09OLndlYXRoZXJbMF0ubWFpbjtcbiAgICB3ZWF0aGVyT2JqZWN0LndpbmRTcGVlZCA9IHdlYXRoZXJKU09OLndpbmQuc3BlZWQ7XG4gICAgd2VhdGhlck9iamVjdC5kYXRlVGltZSA9IHdlYXRoZXJKU09OLmR0O1xuICAgIHdlYXRoZXJPYmplY3Quc3VucmlzZSA9IHdlYXRoZXJKU09OLnN5cy5zdW5yaXNlO1xuICAgIHdlYXRoZXJPYmplY3Quc3Vuc2V0ID0gd2VhdGhlckpTT04uc3lzLnN1bnNldDtcbiAgICB3ZWF0aGVyT2JqZWN0LndlYXRoZXJJRCA9IHdlYXRoZXJKU09OLndlYXRoZXJbMF0uaWQ7XG5cbiAgICAvLyBSZW1vdmVzIGN1cnJlbnQgZXJyb3IgbWVzc2FnZVxuICAgIHJlbW92ZUVycm9yKCk7XG5cbiAgICAvLyBSZW1vdmVzIGN1cnJlbnQgd2VhdGhlciBkYXRhXG4gICAgcmVtb3ZlSW5mbygpO1xuXG4gICAgLy8gRGlzcGxheSB3ZWF0aGVyIGRhdGFcbiAgICBkaXNwbGF5RGF0YSgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIFJlbW92ZXMgY3VycmVudCBlcnJvciBtZXNzYWdlXG4gICAgcmVtb3ZlRXJyb3IoKTtcblxuICAgIC8vIERpc3BsYXlzIGVycm9yIG1lc3NhZ2VcbiAgICBkaXNwbGF5RXJyb3IoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRXZWF0aGVyRGF0YSB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG4oKCkgPT4ge1xuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaEJ1dHRvblwiKTtcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eVwiKS52YWx1ZTtcbiAgICBpZiAoY2l0eSkge1xuICAgICAgZ2V0V2VhdGhlckRhdGEoY2l0eSk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=