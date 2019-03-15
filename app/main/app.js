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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/configs/config.js":
/*!************************************!*\
  !*** ./src/main/configs/config.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron-store */ \"electron-store\");\n/* harmony import */ var electron_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron_store__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new electron_store__WEBPACK_IMPORTED_MODULE_0___default.a({ name: 'store' }));\n\n\n//# sourceURL=webpack:///./src/main/configs/config.js?");

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var electron_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron-is */ \"electron-is\");\n/* harmony import */ var electron_is__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron_is__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var electron_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron-log */ \"electron-log\");\n/* harmony import */ var electron_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron_log__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/application */ \"./src/main/services/application.js\");\n/* harmony import */ var _services_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/window */ \"./src/main/services/window.js\");\n/* harmony import */ var _services_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/menu */ \"./src/main/services/menu.js\");\n/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configs/config */ \"./src/main/configs/config.js\");\n\n\n\n\n\n\n\n\nelectron_log__WEBPACK_IMPORTED_MODULE_2___default.a.transports.file.level = 'info';\n\nelectron_log__WEBPACK_IMPORTED_MODULE_2___default.a.info('(main/index) app start');\nelectron_log__WEBPACK_IMPORTED_MODULE_2___default.a.info(`(main/index) log file at ${electron_log__WEBPACK_IMPORTED_MODULE_2___default.a.transports.file.file}`);\n\nconsole.log('test test', electron_is__WEBPACK_IMPORTED_MODULE_1___default.a);\nif (electron_is__WEBPACK_IMPORTED_MODULE_1___default.a.dev()) {\n  __webpack_require__(/*! electron-debug */ \"electron-debug\")(); // eslint-disable-line global-require\n}\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('ready', () => {\n  electron_log__WEBPACK_IMPORTED_MODULE_2___default.a.info('(main/index) app ready');\n  _services_application__WEBPACK_IMPORTED_MODULE_3__[\"init\"]();\n  _services_menu__WEBPACK_IMPORTED_MODULE_5__[\"init\"]();\n\n  // 加载 devtools extension\n  if (electron_is__WEBPACK_IMPORTED_MODULE_1___default.a.dev()) {\n  }\n});\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('window-all-closed', () => {\n  if (process.platform !== 'darwin') {\n    electron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].quit();\n  }\n});\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('activate', () => {\n  if (_services_window__WEBPACK_IMPORTED_MODULE_4__[\"getCount\"]() === 0) {\n    _services_application__WEBPACK_IMPORTED_MODULE_3__[\"init\"]();\n  }\n});\n\nelectron__WEBPACK_IMPORTED_MODULE_0__[\"app\"].on('quit', () => {\n  electron_log__WEBPACK_IMPORTED_MODULE_2___default.a.info('(main/index) app quit');\n  electron_log__WEBPACK_IMPORTED_MODULE_2___default.a.info('(main/index) <<<<<<<<<<<<<<<<<<<');\n});\n\n// Register to global, so renderer can access these with remote.getGlobal\nglobal.services = {\n  application: _services_application__WEBPACK_IMPORTED_MODULE_3__,\n  window: _services_window__WEBPACK_IMPORTED_MODULE_4__,\n};\nglobal.configs = {\n  config: _configs_config__WEBPACK_IMPORTED_MODULE_6__,\n};\n\n\n//# sourceURL=webpack:///./src/main/index.js?");

/***/ }),

/***/ "./src/main/services/application.js":
/*!******************************************!*\
  !*** ./src/main/services/application.js ***!
  \******************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window */ \"./src/main/services/window.js\");\n\n\nfunction init() {\n  const win = Object(_window__WEBPACK_IMPORTED_MODULE_0__[\"create\"])({ width: 800, height: 600 });\n  win.loadURL(Object(_window__WEBPACK_IMPORTED_MODULE_0__[\"getPath\"])());\n}\n\n\n//# sourceURL=webpack:///./src/main/services/application.js?");

/***/ }),

/***/ "./src/main/services/menu.js":
/*!***********************************!*\
  !*** ./src/main/services/menu.js ***!
  \***********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var electron_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron-log */ \"electron-log\");\n/* harmony import */ var electron_log__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron_log__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction getTemplate() {\n  return [\n    {\n      label: 'MyApp',\n      submenu: [\n        { role: 'hide' },\n        { role: 'hideothers' },\n        { role: 'unhide' },\n        { type: 'separator' },\n        { role: 'quit' },\n      ],\n    },\n    {\n      label: 'Edit',\n      submenu: [\n        { role: 'undo' },\n        { role: 'redo' },\n        { type: 'separator' },\n        { role: 'cut' },\n        { role: 'copy' },\n        { role: 'paste' },\n        { role: 'selectall' },\n      ],\n    },\n    {\n      label: 'View',\n      submenu: [\n        { role: 'reload' },\n        { role: 'toggledevtools' },\n        { type: 'separator' },\n        { role: 'togglefullscreen' },\n      ],\n    },\n    {\n      role: 'window',\n      label: 'Window',\n      submenu: [\n        { role: 'minimize' },\n        { role: 'close' },\n      ],\n    },\n  ];\n}\n\nfunction init() {\n  electron_log__WEBPACK_IMPORTED_MODULE_1___default.a.info('(menu) init');\n  const menu = electron__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"].buildFromTemplate(getTemplate());\n  electron__WEBPACK_IMPORTED_MODULE_0__[\"Menu\"].setApplicationMenu(menu);\n}\n\n\n//# sourceURL=webpack:///./src/main/services/menu.js?");

/***/ }),

/***/ "./src/main/services/window.js":
/*!*************************************!*\
  !*** ./src/main/services/window.js ***!
  \*************************************/
/*! exports provided: create, getCount, getPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCount\", function() { return getCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPath\", function() { return getPath; });\n/* harmony import */ var electron_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron-is */ \"electron-is\");\n/* harmony import */ var electron_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron_is__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nlet count = 0;\n\nfunction create(opts) {\n  count += 1;\n  let win = new electron__WEBPACK_IMPORTED_MODULE_2__[\"BrowserWindow\"](opts);\n  win.on('close', () => {\n    count -= 1;\n    win = null;\n  });\n  return win;\n}\n\nfunction getCount() {\n  return count;\n}\n\nfunction getPath() {\n  let path = `file://${Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(__dirname, '..', 'renderer')}/index.html`;\n  if (electron_is__WEBPACK_IMPORTED_MODULE_0___default.a.dev()) {\n    path = 'http://127.0.0.1:8000/';\n  }\n  return path;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/main/services/window.js?");

/***/ }),

/***/ "electron":
/*!***************************************!*\
  !*** external "require('electron');" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require('electron');;\n\n//# sourceURL=webpack:///external_%22require('electron');%22?");

/***/ }),

/***/ "electron-debug":
/*!*********************************************!*\
  !*** external "require('electron-debug');" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require('electron-debug');;\n\n//# sourceURL=webpack:///external_%22require('electron-debug');%22?");

/***/ }),

/***/ "electron-is":
/*!******************************************!*\
  !*** external "require('electron-is');" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require('electron-is');;\n\n//# sourceURL=webpack:///external_%22require('electron-is');%22?");

/***/ }),

/***/ "electron-log":
/*!*******************************************!*\
  !*** external "require('electron-log');" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require('electron-log');;\n\n//# sourceURL=webpack:///external_%22require('electron-log');%22?");

/***/ }),

/***/ "electron-store":
/*!*********************************************!*\
  !*** external "require('electron-store');" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require('electron-store');;\n\n//# sourceURL=webpack:///external_%22require('electron-store');%22?");

/***/ }),

/***/ "path":
/*!***********************************!*\
  !*** external "require('path');" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require('path');;\n\n//# sourceURL=webpack:///external_%22require('path');%22?");

/***/ })

/******/ });