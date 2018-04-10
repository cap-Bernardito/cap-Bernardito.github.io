/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _saleChart = __webpack_require__(6);\n\nvar _saleChart2 = _interopRequireDefault(_saleChart);\n\nvar _salesFlowChart = __webpack_require__(7);\n\nvar _salesFlowChart2 = _interopRequireDefault(_salesFlowChart);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import toTop from './lib/_to-top';\n\n// toTop();\n\n// pixel();\n\n// import pixel from 'pixel-glass/script.js';\nwindow.charts = {};\nwindow.charts.saleChart = (0, _saleChart2.default)();\nwindow.charts.salesFlowChart = (0, _salesFlowChart2.default)();\n\nwindow.addEventListener('DOMContentLoaded', domCreated);\nfunction domCreated() {}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHBpeGVsIGZyb20gJ3BpeGVsLWdsYXNzL3NjcmlwdC5qcyc7XG5pbXBvcnQgc2FsZUNoYXJ0IGZyb20gJy4vbGliL3NhbGVDaGFydCc7XG5pbXBvcnQgc2FsZXNGbG93Q2hhcnQgZnJvbSAnLi9saWIvc2FsZXNGbG93Q2hhcnQnO1xuLy8gaW1wb3J0IHRvVG9wIGZyb20gJy4vbGliL190by10b3AnO1xuXG4vLyB0b1RvcCgpO1xuXG4vLyBwaXhlbCgpO1xuXG53aW5kb3cuY2hhcnRzID0ge307XG53aW5kb3cuY2hhcnRzLnNhbGVDaGFydCA9IHNhbGVDaGFydCgpO1xud2luZG93LmNoYXJ0cy5zYWxlc0Zsb3dDaGFydCA9IHNhbGVzRmxvd0NoYXJ0KCk7XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRvbUNyZWF0ZWQpO1xuZnVuY3Rpb24gZG9tQ3JlYXRlZCgpIHtcblxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function () {\n    var ctx = document.getElementById(\"saleChart\");\n    if (!ctx) return;\n\n    ctx.getContext('2d');\n    var saleChart = new Chart(ctx, {\n        type: 'bar',\n        data: {\n            labels: [\"Jan\", \"\", \"\", \"Apr\", \"\", \"\", \"\", \"Aug\", \"\", \"\", \"\", \"Dec\"],\n            datasets: [{\n                label: 'Sales',\n                data: [12, 19, 15, 13, 17, 18, 12, 19, 15, 13, 17, 18],\n                backgroundColor: 'rgba(54, 162, 235, 1)',\n                borderWidth: 1\n            }]\n        },\n        options: {\n            layout: {\n                padding: {\n                    left: 20,\n                    right: 20,\n                    top: 0,\n                    bottom: 0\n                }\n            },\n            scales: {\n                yAxes: [{\n                    ticks: {\n                        beginAtZero: true\n                    }\n                }],\n                xAxes: [{\n                    barThickness: 10\n                }]\n            }\n        }\n    });\n\n    return saleChart;\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3NhbGVDaGFydC5qcz8wMzlmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYWxlQ2hhcnRcIilcbiAgaWYgKCFjdHgpIHJldHVybjtcblxuICBjdHguZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3Qgc2FsZUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgdHlwZTogJ2JhcicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgICAgbGFiZWxzOiBbXCJKYW5cIiwgXCJcIiwgXCJcIiwgXCJBcHJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJBdWdcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJEZWNcIl0sXG4gICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgIGxhYmVsOiAnU2FsZXMnLFxuICAgICAgICAgICAgICBkYXRhOiBbMTIsIDE5LCAxNSwgMTMsIDE3LCAxOCwgMTIsIDE5LCAxNSwgMTMsIDE3LCAxOF0sXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxXG4gICAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAyMCxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMCxcbiAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMFxuICAgICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgIGJhclRoaWNrbmVzczogMTAsXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzYWxlQ2hhcnQ7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpYi9zYWxlQ2hhcnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQURBO0FBTkE7QUFUQTtBQVhBO0FBQ0E7QUFnQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var ctx = document.getElementById(\"salesFlowChart\");\n  if (!ctx) return;\n\n  ctx.getContext('2d');\n\n  var salesFlowChart = new Chart(ctx, {\n    type: 'line',\n    data: {\n      labels: [\"\", \"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"],\n      datasets: [{\n        label: 'All Commision',\n        data: [20, 30, 25, 15, 32, 32, 22, 32, 30, 18, 29, 33, 20],\n        backgroundColor: '#f95738',\n        borderWidth: 1\n      }, {\n        label: 'All Sale',\n        data: [25, 35, 30, 20, 37, 37, 27, 37, 35, 23, 35, 39, 25],\n        backgroundColor: 'rgba(0, 0, 0, .7)',\n        borderWidth: 1\n      }]\n    },\n    options: {\n      legend: {\n        display: true,\n        position: 'bottom',\n        usePointStyle: true,\n        labels: {\n          fontSize: 25,\n          fontFamily: 'Roboto-regular',\n          fontColor: '#858585'\n        }\n      },\n      layout: {\n        padding: {\n          left: 20,\n          right: 20,\n          top: 0,\n          bottom: 0\n        }\n      },\n      elements: {\n        point: {\n          radius: 0\n        }\n      },\n      scales: {\n        yAxes: [{\n          ticks: {\n            beginAtZero: true\n          }\n        }],\n        xAxes: [{\n          barThickness: 10\n        }]\n      }\n    }\n  });\n\n  return salesFlowChart;\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3NhbGVzRmxvd0NoYXJ0LmpzPzNmNjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhbGVzRmxvd0NoYXJ0XCIpXG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgY3R4LmdldENvbnRleHQoJzJkJyk7XG5cbiAgY29uc3Qgc2FsZXNGbG93Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgdHlwZTogJ2xpbmUnLFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsczogW1wiXCIsIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnQWxsIENvbW1pc2lvbicsXG4gICAgICAgICAgZGF0YTogWzIwLCAzMCwgMjUsIDE1LCAzMiwgMzIsIDIyLCAzMiwgMzAsIDE4LCAyOSwgMzMsIDIwXSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjk1NzM4JyxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdBbGwgU2FsZScsXG4gICAgICAgICAgZGF0YTogWzI1LCAzNSwgMzAsIDIwLCAzNywgMzcsIDI3LCAzNywgMzUsIDIzLCAzNSwgMzksIDI1XSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC43KScsXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgZm9udFNpemU6IDI1LFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnUm9ib3RvLXJlZ3VsYXInLFxuICAgICAgICAgICAgICBmb250Q29sb3I6ICcjODU4NTg1J1xuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMCxcbiAgICAgICAgICAgICAgICByaWdodDogMjAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMFxuICAgICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICByYWRpdXM6IDBcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XSxcbiAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgIGJhclRoaWNrbmVzczogMTAsXG4gICAgICAgICAgfV1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzYWxlc0Zsb3dDaGFydDtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbGliL3NhbGVzRmxvd0NoYXJ0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFUQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBREE7QUFOQTtBQXhCQTtBQW5CQTtBQUNBO0FBdURBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);