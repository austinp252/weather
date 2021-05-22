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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getWeather */ \"./src/modules/getWeather.js\");\n/* harmony import */ var _modules_initCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initCard */ \"./src/modules/initCard.js\");\n/* harmony import */ var _modules_initCity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initCity */ \"./src/modules/initCity.js\");\n/* harmony import */ var _modules_toggleUnits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toggleUnits */ \"./src/modules/toggleUnits.js\");\n/* harmony import */ var _modules_updateTemp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/updateTemp */ \"./src/modules/updateTemp.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet unit = 'f';\r\n\r\nconst cards = document.querySelectorAll('.weather-card');\r\nconst btn = document.querySelector('.toggle-btn');\r\nconst submit = document.querySelector('button');\r\n\r\nsubmit.addEventListener('click', handleSubmit);\r\n\r\nfunction handleSubmit(e) {\r\n    e.preventDefault();\r\n    (0,_modules_initCity__WEBPACK_IMPORTED_MODULE_2__.default)(document.getElementById('city').value, unit);\r\n}\r\n\r\nbtn.addEventListener('click', () => {\r\n    unit = (0,_modules_toggleUnits__WEBPACK_IMPORTED_MODULE_3__.default)(unit);\r\n    cards.forEach(card => {\r\n        (0,_modules_updateTemp__WEBPACK_IMPORTED_MODULE_4__.default)(card, unit);\r\n    });\r\n})\r\n\r\nfunction test() {\r\n    console.log('testin');\r\n}\r\n\r\n(0,_modules_initCity__WEBPACK_IMPORTED_MODULE_2__.default)('Boulder', unit);\r\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/modules/getWeather.js":
/*!***********************************!*\
  !*** ./src/modules/getWeather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst key = 'e41bf52cf3280052dad033ef26730a89';\r\n\r\nasync function getCityData(city) {\r\n    try {\r\n        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,{mode: 'cors'});\r\n        const coord_data = await weather.json();\r\n        const coords = await coord_data.coord;\r\n        let data = await getWeather(coords);\r\n        console.log(data);\r\n        document.getElementById('city').value = '';\r\n        return data;\r\n    } catch(error) {\r\n        alert(error);\r\n    }\r\n}\r\n\r\nasync function getWeather(coords) {\r\n    const weather = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly&appid=${key}`,{mode: 'cors'});\r\n    const data = await weather.json();\r\n    return data;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCityData);\r\n\n\n//# sourceURL=webpack://weather/./src/modules/getWeather.js?");

/***/ }),

/***/ "./src/modules/initCard.js":
/*!*********************************!*\
  !*** ./src/modules/initCard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initCard(data, card, iterator, unit) {\r\n    let date = new Date();\r\n    let imageURL = `http://openweathermap.org/img/wn/${imageHandler(data)}@2x.png`;\r\n    \r\n    card.querySelector('.card-header').innerText = dateHandler((date.getDay()+iterator)%7);\r\n    card.querySelector('img').src = imageURL;\r\n    card.querySelector('.generic p').innerText = data.weather[0].description;\r\n    card.querySelector('.stats .temp').innerText = fromKelvin(data.temp.day, unit)\r\n    card.querySelector('.stats .unit').innerText = '°'+unit.toUpperCase();\r\n    \r\n}\r\n\r\nfunction imageHandler(data) {\r\n    let weather = data.weather[0].main;\r\n    if(weather === 'Clear') {\r\n        return '01d';\r\n    } else if (weather === 'Clouds') {\r\n        return '04d';\r\n    } else if (weather === 'Drizzle' || weather === 'Rain') {\r\n        return '10d';\r\n    } else if (weather === 'Thunderstorm') {\r\n        return '11d';\r\n    } else if(weather === 'snow') {\r\n        return '13d';\r\n    } else { //should handle specific names for mist\r\n        return '50d'; //Mist Smoke Haze Dust Fog Sand Ash Squall Tornado\r\n    }\r\n}\r\n\r\nfunction dateHandler(date) {\r\n    var weekday = new Array(7);\r\n    weekday[0] = \"Sunday\";\r\n    weekday[1] = \"Monday\";\r\n    weekday[2] = \"Tuesday\";\r\n    weekday[3] = \"Wednesday\";\r\n    weekday[4] = \"Thursday\";\r\n    weekday[5] = \"Friday\";\r\n    weekday[6] = \"Saturday\";\r\n    return weekday[date];\r\n}\r\n\r\nfunction fromKelvin(temp, unit) {\r\n    if(unit === 'c') {\r\n        return (temp-273.15).toFixed(1);\r\n    } else if(unit === 'f') {\r\n        return ((temp-273.15)*(9/5)+32).toFixed(1);\r\n    } else {\r\n        return temp;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCard);\n\n//# sourceURL=webpack://weather/./src/modules/initCard.js?");

/***/ }),

/***/ "./src/modules/initCity.js":
/*!*********************************!*\
  !*** ./src/modules/initCity.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ \"./src/modules/getWeather.js\");\n/* harmony import */ var _initCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initCard */ \"./src/modules/initCard.js\");\n\r\n\r\n\r\nfunction initCity(city, unit) {\r\n    (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.default)(city).then(data => {\r\n        let cityData = data;\r\n        console.log(cityData);\r\n        let cards = document.querySelectorAll('.weather-card');\r\n        cards.forEach((card, index) => {\r\n            (0,_initCard__WEBPACK_IMPORTED_MODULE_1__.default)(cityData.daily[index], card, index, unit); //unit needs to be set outside\r\n        });\r\n        document.querySelector('.city-header').innerText = city;\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCity);\n\n//# sourceURL=webpack://weather/./src/modules/initCity.js?");

/***/ }),

/***/ "./src/modules/toggleUnits.js":
/*!************************************!*\
  !*** ./src/modules/toggleUnits.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toggleUnits(unit) {\r\n    if(unit === 'f') {\r\n        return 'c';\r\n    } else if(unit === 'c') {\r\n        return 'f';\r\n    } else {\r\n        return unit;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleUnits);\n\n//# sourceURL=webpack://weather/./src/modules/toggleUnits.js?");

/***/ }),

/***/ "./src/modules/updateTemp.js":
/*!***********************************!*\
  !*** ./src/modules/updateTemp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateTemp(card, unit) { //updates under assumption of old units (not current unit)\r\n    let temp = card.querySelector('.stats .temp');\r\n    let card_unit = card.querySelector('.stats .unit');\r\n    let card_temp = parseFloat(card.querySelector('.stats .temp').innerHTML);\r\n    card_unit.innerHTML = '°'+unit.toUpperCase();\r\n    if(unit === 'f') {\r\n        temp.innerHTML = (card_temp * (9/5) + 32).toFixed(1);;\r\n    } else if(unit === 'c') {\r\n        temp.innerHTML = ((card_temp-32)*(5/9)).toFixed(1);;\r\n    } else {\r\n        return;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTemp);\n\n//# sourceURL=webpack://weather/./src/modules/updateTemp.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;