/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domDayHandler.js":
/*!******************************!*\
  !*** ./src/domDayHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   insertDays: () => (/* binding */ insertDays)\n/* harmony export */ });\nconst insertDays = function(dataDays)\n{\n    console.log(dataDays)\n    if(dataDays !== \"error\")\n    {\n        for(let i = 0;i<dataDays.length;i++)\n    {\n        const forecastDay = dataDays[i].day\n        makeDay(forecastDay.avghumidity,forecastDay.avgtemp_c,forecastDay.condition.text,forecastDay.maxwind_kph,forecastDay.totalprecip_in)\n    }\n    }\n}\n\nconst makeDay = function(humidity,temp,condition,maxWind,rainChance)\n{\n    console.log(\"humidity: \"+humidity)\n    console.log(\"temperature: \"+temp)\n    console.log(\"Condition: \"+condition)\n    console.log(\"WindSpeed: \"+maxWind)\n    console.log(\"chance of rain: \"+rainChance)\n}\n\nconst removeDays = function()\n{\n\n}\n\n\n\n//# sourceURL=webpack://weather-web-odin-/./src/domDayHandler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/domDayHandler.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;