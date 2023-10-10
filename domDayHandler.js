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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   insertDays: () => (/* binding */ insertDays)\n/* harmony export */ });\nconst insertDays = function(dataDays,city)\n{\n    if(dataDays !== \"error\")\n    {\n        console.log(city)\n        const currentCityDiv = document.querySelector('.currentLocation');\n        currentCityDiv.textContent = \"Current Location: \"+ city;\n        for(let i = 0;i<dataDays.length;i++)\n    {\n        const forecastDay = dataDays[i].day\n        makeDay(forecastDay.avghumidity,forecastDay.avgtemp_c,forecastDay.condition.text,forecastDay.maxwind_kph,forecastDay.totalprecip_in,i)\n    }\n    }\n}\n\nconst makeDay = function(humidity,temp,condition,maxWind,rainChance,number)\n{\n    const content = document.querySelector('.displayContent')\n    const tasks = content.querySelectorAll('.taskHolder')\n    const humidityDiv = tasks[number].querySelector('.humidity')\n    const tempDiv = tasks[number].querySelector('.temperature')\n    const conditionDiv = tasks[number].querySelector('.condition')\n    const WindSpeedDiv = tasks[number].querySelector('.wind')\n    const rainchanceDiv = tasks[number].querySelector('.rain')\n    humidityDiv.textContent = \"humidity: \"+humidity +\"%\"\n    tempDiv.textContent = temp + \"°\"\n    conditionDiv.textContent = condition\n    WindSpeedDiv.textContent = \"WindSpeed: \"+ maxWind\n    rainchanceDiv.textContent = \"chance of rain: \"+rainChance +\"%\"\n}\n\n\n\n//# sourceURL=webpack://weather-web-odin-/./src/domDayHandler.js?");

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