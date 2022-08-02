/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _infoManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoManager */ "./src/infoManager.js");\n\n\nconst locInput = document.querySelector("input");\nconst searchButton = document.querySelector("button");\nlet loc;\n\nasync function getCurrentWeather() {\n  try {\n    const response = await fetch(\n      `http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=586fd04639d371332e510190e8fa897c&units=metric`,\n      { mode: "cors" }\n    );\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n}\n\nasync function getForecast() {\n  try {\n    const coords = await fetch(\n      `http://api.openweathermap.org/geo/1.0/direct?q=${loc},+46&limit=1&appid=586fd04639d371332e510190e8fa897c`\n    );\n    const coordinates = await coords.json();\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]["lat"]}&lon=${coordinates[0]["lon"]}&exclude=current,hourly,minutely,alerts&units=metric&appid=586fd04639d371332e510190e8fa897c`,\n      { mode: "cors" }\n    );\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n}\n\nsearchButton.addEventListener("click", () => {\n  loc = locInput.value;\n  Promise.all([getCurrentWeather(), getForecast()]).then((values) =>\n    (0,_infoManager__WEBPACK_IMPORTED_MODULE_0__["default"])(values[0], values[1])\n  );\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/infoManager.js":
      /*!****************************!*\
  !*** ./src/infoManager.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst locationTitle = document.querySelector("#title");\nconst locationName = document.querySelector("#location-name");\nconst currentTemp = document.querySelector("#temp");\nconst weather = document.querySelector("#weather");\nconst minTemp = document.querySelector("#min-temp");\nconst maxTemp = document.querySelector("#max-temp");\nconst feelsLike = document.querySelector("#feels-like");\nconst wind = document.querySelector("#wind");\nconst pressure = document.querySelector("#pressure");\nconst humidity = document.querySelector("#humidity");\nconst tomorrow = document.querySelector("#tomorrow");\nconst overTomorrow = document.querySelector("#overtomorrow");\n\nfunction setInfo(todayObj, forecastObj) {\n  console.log(forecastObj);\n\n  locationTitle.textContent = todayObj.name;\n  locationName.textContent = todayObj.name;\n  currentTemp.textContent = `${todayObj.main.temp}°C`;\n  weather.textContent = todayObj.weather[0]["main"];\n  minTemp.textContent = `Min: ${todayObj.main.temp_min}°C`;\n  maxTemp.textContent = `Max: ${todayObj.main.temp_max}°C`;\n  feelsLike.textContent = `${todayObj.main.feels_like}°C`;\n  wind.textContent = `${todayObj.wind.speed} m/s`;\n  pressure.textContent = `${todayObj.main.pressure}hPa`;\n  humidity.textContent = `${todayObj.main.humidity}%`;\n  tomorrow.textContent = `Tomorrow: ${forecastObj.daily[1].temp.day}°C`;\n  overTomorrow.textContent = `Day after tomorrow: ${forecastObj.daily[2].temp.day}°C`;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setInfo);\n\n\n//# sourceURL=webpack://weather-app/./src/infoManager.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
