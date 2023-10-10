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

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domDayHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domDayHandler */ \"./src/domDayHandler.js\");\n\nasync function getData(city)\n{\n    try\n    {\n    const apikey = \"https://api.weatherapi.com/v1/forecast.json?key=54f04930550144f0b9c04423230710&q=\"+city+\"&days=3&aqi=yes&alerts=yes\"\n    const response = await fetch(apikey)\n    const data = await response.json()\n    const dataDays = data.forecast.forecastday\n    localStorage.setItem(\"city\",city)\n    return await dataDays\n    \n    }\n    catch(error)\n    {\n        alert(\"please insert a valid city!\")\n        return \"error\"\n    }\n\n\n}\nconst formInput = document.querySelector('.cityInput')\n\ndocument.addEventListener('keydown', function(event) {onEnter(event)});\n\nasync function onEnter(event)\n{\n    if(event.keyCode === 13) {\n        console.log(formInput.value)\n        const city = await getData(formInput.value)\n        ;(0,_domDayHandler__WEBPACK_IMPORTED_MODULE_0__.insertDays)(city,formInput.value)\n        document.querySelector('.currentLocation').value = \"We are currently in: \" + formInput.value\n        formInput.textContent =\"\"\n    }\n\n}\n\nif(!localStorage.getItem(\"city\"))\n{\n    (0,_domDayHandler__WEBPACK_IMPORTED_MODULE_0__.insertDays)(await getData(\"London\"),\"London\")\n    \n}\nelse\n{\n    console.log(\"hawo\")\n    ;(0,_domDayHandler__WEBPACK_IMPORTED_MODULE_0__.insertDays)(await getData(localStorage.getItem(\"city\")),localStorage.getItem(\"city\"))\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// const weatherData = function(inputTemp,InputWind,InputCondition,inputRain,inputHumidity)\n// // {\n// //     const temp = inputTemp;\n// //     const rain = inputRain;\n// //     const wind = InputWind;\n// //     const condition = InputCondition;\n// //     const humidity = inputHumidity\n\n\n// //     return{temp,rain,wind,condition,humidity}\n\n// // }//\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://weather-web-odin-/./src/main.js?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;