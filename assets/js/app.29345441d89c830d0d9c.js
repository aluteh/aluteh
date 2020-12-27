/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/assets/scss/main.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/scss/main.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/main.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/assets/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/swiper-bundle.css */ \"./node_modules/swiper/swiper-bundle.css\");\n/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/ */ \"./src/js/index.js\");\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scss/main.scss */ \"./src/assets/scss/main.scss\");\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__);\n// CSS (example)\n// import { createPopper } from '@popperjs/core';\n\n\n // import 'bootstrap/dist/js/bootstrap.min.js'\n// window.Vue = require('vue')\n\nwindow.$ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"); // JS\n\n // SCSS\n\n // Vue components (for use in html)\n// Vue.component('example-component', require('./components/Example.vue').default)\n// Vue init\n// const app = new Vue({\n//   el: '#app'\n// })\n\n$('#list-tab a').on('click', function (e) {\n  console.log('e:', e);\n  e.preventDefault();\n  $(this).tab('show');\n});\n$('.decision').on('click', function () {\n  fullDecisionForDesktop.style.display = 'block';\n  document.body.style.overflow = 'hidden';\n});\n$(closedCross).on('click', function () {\n  fullDecisionForDesktop.style.display = 'none';\n  document.body.style.overflow = 'initial';\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/header.search.js":
/*!*********************************!*\
  !*** ./src/js/header.search.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var searchState = false;\nvar headerMenu = document.querySelector('.header__main-menu-items');\nvar headerSearchInput = document.querySelector('.header__search-input');\nvar headerSearchIco = document.querySelector('.header__search-button');\nheaderSearchIco.addEventListener('click', function () {\n  if (searchState) {\n    hideSearchInput();\n  } else {\n    showSearchInput();\n  }\n\n  searchState = !searchState;\n});\n\nfunction showSearchInput() {\n  headerMenu.style.display = 'none';\n  headerSearchInput.style.display = 'block';\n  document.querySelector('.search-input').focus();\n}\n\nfunction hideSearchInput() {\n  headerSearchInput.style.display = 'none';\n  headerMenu.style.display = 'flex';\n}\n\n//# sourceURL=webpack:///./src/js/header.search.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders */ \"./src/js/sliders.js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _header_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.search */ \"./src/js/header.search.js\");\n/* harmony import */ var _header_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_search__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _header_search__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _header_search__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ \"./src/js/tabs.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tabs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tabs__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tabs__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _uploadFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploadFile */ \"./src/js/uploadFile.js\");\n/* harmony import */ var _uploadFile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_uploadFile__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uploadFile__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uploadFile__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n// Main js file\n// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/sliders.js":
/*!***************************!*\
  !*** ./src/js/sliders.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ \"./node_modules/swiper/swiper-bundle.esm.js\");\n\nvar brandSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.brand__block.pc .swiper-container', {\n  slidesPerView: 4,\n  slidesPerColumn: 2,\n  spaceBetween: 0,\n  navigation: {\n    nextEl: '.pc .brand__right-row',\n    prevEl: '.pc .brand__left-row'\n  }\n});\nvar mobBrandSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.brand__block.mob .swiper-container', {\n  slidesPerView: 4,\n  slidesPerColumn: 0,\n  spaceBetween: 0,\n  navigation: {\n    nextEl: '.mob .brand__right-row',\n    prevEl: '.mob .brand__left-row'\n  },\n  breakpoints: {\n    768: {\n      slidesPerView: 4,\n      slidesPerColumn: 0,\n      spaceBetween: 0\n    },\n    0: {\n      slidesPerView: 2,\n      slidesPerColumn: 2\n    }\n  }\n});\nvar mainSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.main-slider__mob.swiper-container', {\n  effect: 'fade',\n  fadeEffect: {\n    crossFade: true\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    type: 'fraction'\n  },\n  navigation: {\n    nextEl: '.main__slider-next',\n    prevEl: '.main__slider-prev'\n  }\n});\nvar alProfSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.al-prof.swiper-container', {\n  slidesPerView: 'auto',\n  spaceBetween: 10,\n  navigation: {\n    nextEl: '.al-prof__slider-next',\n    prevEl: '.al-prof__slider-prev '\n  }\n});\n\n//# sourceURL=webpack:///./src/js/sliders.js?");

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$('#list-tab a').on('click', function (e) {\n  e.preventDefault();\n  $(this).tab('show');\n});\n$(\".tab__block\").not(\":first\").hide();\n$(\".vertical-tabs .tab__title\").on(\"click\", function () {\n  $(\".vertical-tabs .tab__title\").removeClass(\"active\").eq($(this).index()).addClass(\"active\");\n  $(\".tab__block\").hide().eq($(this).index()).fadeIn();\n}).eq(0).addClass(\"active\");\n$('.header__mob-menu-ico').on('click', function (event) {\n  console.log('event:', event);\n  $(this).dropdown();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/js/tabs.js?");

/***/ }),

/***/ "./src/js/uploadFile.js":
/*!******************************!*\
  !*** ./src/js/uploadFile.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {var formUpload = $('.form__uploadFile');\nvar inputFile = $(\".input__file\");\nvar uploadLabel = $(\".upload-label\");\nvar labelText = uploadLabel.find('span').html();\ninputFile.on(\"change\", function (e) {\n  var uploadFileName = e.target.value.split('\\\\').pop();\n\n  if (uploadFileName) {\n    uploadLabel.find('span').html(uploadFileName);\n    formUpload.find('svg.attach').removeClass('active');\n    formUpload.find('svg.reset').addClass('active');\n    inputFile.attr('disabled', 'true');\n  }\n});\nvar resetButton = $('.upload-pic.reset');\nresetButton.on('click', function () {\n  inputFile.val('');\n  formUpload.find('svg.reset').removeClass('active');\n  formUpload.find('svg.attach').addClass('active');\n  uploadLabel.find('span').html(labelText);\n  inputFile.removeAttr('disabled');\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/js/uploadFile.js?");

/***/ })

/******/ });