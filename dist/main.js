/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS RESET BEGIN */\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 16px;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    “Segoe UI”,\n    “Roboto”,\n    “Oxygen”,\n    “Ubuntu”,\n    “Cantarell”,\n    “Fira Sans”,\n    “Droid Sans”,\n    “Helvetica Neue”,\n    sans-serif;\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* CSS RESET END */\n\n.main {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.header {\n  width: 100%;\n  height: 80px;\n  background-color: #08f;\n}\n\n/* SIDEBAR */\n.side-bar {\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  min-height: 100vh;\n  padding: 2rem;\n  font-size: 1.5rem;\n  background-color: #eee;\n}\n\n.project-btn {\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: 1rem;\n\n  /* border-radius: .5rem; */\n  border: none;\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #fff;\n  font-weight: bold;\n  background-color: #08f;\n  position: relative;\n\n  /* overflow: hidden; */\n  word-wrap: break-word;\n}\n\n.project-btn:focus {\n  outline: none;\n}\n\n.project-delete-btn {\n  display: none;\n  position: absolute;\n  top: 0.6rem;\n  right: 1rem;\n  bottom: 0.5rem;\n  float: right;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  border: 2px solid #fff;\n  background-color: #08f;\n  color: #fff;\n  font-weight: 900;\n}\n\n.project-btn:hover .project-delete-btn {\n  display: inline-block;\n}\n\n.project-selected {\n  background-color: #f60;\n}\n\n.add-project-btn {\n  padding: 1rem;\n  border-radius: 2rem;\n  border: 2px solid #08f;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #08f;\n}\n\n.add-project-btn:focus {\n  outline: none;\n}\n\n.new-project-name {\n  margin: 1rem 0;\n  font-size: 1.5rem;\n}\n\n.save-project-btn {\n  float: right;\n  font-size: 1rem;\n}\n\n/* TODO LIST */\n.todo-list {\n  flex: 1;\n  min-height: 100vh;\n  padding: 2rem;\n}\n\n.project-name {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #08f;\n}\n\n.todo-item {\n  display: flex;\n  align-items: baseline;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  padding: 1rem;\n  border-bottom: 1px solid #aaa;\n  font-size: 1.5rem;\n}\n\n.todo-checkbox {\n  margin: 0;\n  margin-right: 1rem;\n}\n\n.todo-title {\n  flex: 1;\n}\n\n.todo-due-date {\n  margin: 0 1rem;\n  font-size: 1rem;\n}\n\n.todo-actions-wrapper {\n  justify-self: flex-end;\n}\n\n.todo-edit,\n.todo-delete {\n  font-size: 1rem;\n}\n\n.priority-low {\n  border-left: 8px solid #48f;\n}\n\n.priority-mid {\n  border-left: 8px solid #fc0;\n}\n\n.priority-high {\n  border-left: 8px solid #f60;\n}\n\n/* ADD TODO FORM */\n.add-todo-btn {\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: 2px solid #08f;\n  border-radius: 1.5rem;\n  font-size: 1rem;\n  color: #08f;\n  background-color: transparent;\n}\n\n.new-todo-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-todo-wrapper * {\n  max-width: 75%;\n  margin: 1rem 0;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n\n.new-todo-title {\n  margin: 1rem 0;\n  font-size: 1.5rem;\n}\n\n/* MODAL BOX */\n.modal {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #000a;\n}\n\n.modal-content {\n  width: 360px;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  font-size: 1.5rem;\n  background-color: #eee;\n}\n\n.modal-content strong {\n  text-transform: uppercase;\n}\n\n.modal-close-btn {\n  float: right;\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/* CSS RESET BEGIN */\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 16px;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    “Segoe UI”,\n    “Roboto”,\n    “Oxygen”,\n    “Ubuntu”,\n    “Cantarell”,\n    “Fira Sans”,\n    “Droid Sans”,\n    “Helvetica Neue”,\n    sans-serif;\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* CSS RESET END */\n\n.main {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.header {\n  width: 100%;\n  height: 80px;\n  background-color: #08f;\n}\n\n/* SIDEBAR */\n.side-bar {\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  min-height: 100vh;\n  padding: 2rem;\n  font-size: 1.5rem;\n  background-color: #eee;\n}\n\n.project-btn {\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: 1rem;\n\n  /* border-radius: .5rem; */\n  border: none;\n  font-size: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #fff;\n  font-weight: bold;\n  background-color: #08f;\n  position: relative;\n\n  /* overflow: hidden; */\n  word-wrap: break-word;\n}\n\n.project-btn:focus {\n  outline: none;\n}\n\n.project-delete-btn {\n  display: none;\n  position: absolute;\n  top: 0.6rem;\n  right: 1rem;\n  bottom: 0.5rem;\n  float: right;\n  border-radius: 50%;\n  width: 2rem;\n  height: 2rem;\n  border: 2px solid #fff;\n  background-color: #08f;\n  color: #fff;\n  font-weight: 900;\n}\n\n.project-btn:hover .project-delete-btn {\n  display: inline-block;\n}\n\n.project-selected {\n  background-color: #f60;\n}\n\n.add-project-btn {\n  padding: 1rem;\n  border-radius: 2rem;\n  border: 2px solid #08f;\n  font-size: 1rem;\n  font-weight: bold;\n  color: #08f;\n}\n\n.add-project-btn:focus {\n  outline: none;\n}\n\n.new-project-name {\n  margin: 1rem 0;\n  font-size: 1.5rem;\n}\n\n.save-project-btn {\n  float: right;\n  font-size: 1rem;\n}\n\n/* TODO LIST */\n.todo-list {\n  flex: 1;\n  min-height: 100vh;\n  padding: 2rem;\n}\n\n.project-name {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  color: #08f;\n}\n\n.todo-item {\n  display: flex;\n  align-items: baseline;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  padding: 1rem;\n  border-bottom: 1px solid #aaa;\n  font-size: 1.5rem;\n}\n\n.todo-checkbox {\n  margin: 0;\n  margin-right: 1rem;\n}\n\n.todo-title {\n  flex: 1;\n}\n\n.todo-due-date {\n  margin: 0 1rem;\n  font-size: 1rem;\n}\n\n.todo-actions-wrapper {\n  justify-self: flex-end;\n}\n\n.todo-edit,\n.todo-delete {\n  font-size: 1rem;\n}\n\n.priority-low {\n  border-left: 8px solid #48f;\n}\n\n.priority-mid {\n  border-left: 8px solid #fc0;\n}\n\n.priority-high {\n  border-left: 8px solid #f60;\n}\n\n/* ADD TODO FORM */\n.add-todo-btn {\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: 2px solid #08f;\n  border-radius: 1.5rem;\n  font-size: 1rem;\n  color: #08f;\n  background-color: transparent;\n}\n\n.new-todo-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-todo-wrapper * {\n  max-width: 75%;\n  margin: 1rem 0;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n\n.new-todo-title {\n  margin: 1rem 0;\n  font-size: 1.5rem;\n}\n\n/* MODAL BOX */\n.modal {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #000a;\n}\n\n.modal-content {\n  width: 360px;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  font-size: 1.5rem;\n  background-color: #eee;\n}\n\n.modal-content strong {\n  text-transform: uppercase;\n}\n\n.modal-close-btn {\n  float: right;\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


class Project {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(new _todo__WEBPACK_IMPORTED_MODULE_0__.default(todo));
  }

  deleteTodo(todoIndex) {
    this.todos.splice(todoIndex, 1);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderSideBar": () => (/* binding */ renderSideBar)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




const getDateString = (date) => {
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toJSON().slice(0, 10);
};

let renderSideBar;
let renderTodos;

_storage__WEBPACK_IMPORTED_MODULE_2__.default.checkLocalStorage();
const { projects } = _storage__WEBPACK_IMPORTED_MODULE_2__.default;

const main = document.querySelector('main');
main.classList.add('main');

const render = (project = {}) => {
  _storage__WEBPACK_IMPORTED_MODULE_2__.default.updateLocalStorage();

  main.innerHTML = '';

  const header = document.createElement('header');
  header.classList.add('header');

  main.appendChild(header);

  const sideBar = renderSideBar(projects);
  main.appendChild(sideBar);

  let todosContainer;
  if (project instanceof _project__WEBPACK_IMPORTED_MODULE_0__.default) {
    todosContainer = renderTodos(project);
  } else {
    todosContainer = renderTodos(_storage__WEBPACK_IMPORTED_MODULE_2__.default.defaultProject);
  }

  main.appendChild(todosContainer);
};

class TodoForm {
  constructor(...params) {
    [this.todoObj, this.project] = params;
    // let title, description, dueDate, priority;
    const {
      title = '', description = '', dueDate = getDateString(new Date()), priority = '',
    } = this.todoObj;

    this.titleField = document.createElement('input');
    this.descriptionField = document.createElement('textarea');
    this.dueDateField = document.createElement('input');
    this.priorityField = document.createElement('select');

    this.titleField.value = title;
    this.descriptionField.value = description;
    this.dueDateField.value = dueDate;
    this.priorityField.value = priority;

    this.priority = priority;
  }

  render() { // define type of button action
    this.todoFormContainer = document.createElement('div');

    // STYLING FORM ELEMENTS
    this.todoFormContainer.classList.add('new-todo-wrapper');
    this.titleField.classList.add('new-todo-title');
    this.titleField.setAttribute('placeholder', 'Title');
    this.descriptionField.classList.add('new-todo-description');
    this.descriptionField.setAttribute('placeholder', 'Description');
    this.dueDateField.classList.add('new-todo-due-date');
    this.dueDateField.setAttribute('type', 'date');
    this.priorityField.classList.add('new-todo-priority');
    this.priorityField.setAttribute('name', 'new-todo-priority');

    let [lowSelected, midSelected, highSelected] = ['', '', ''];

    switch (this.priority) {
      case 'high':
        highSelected = 'selected = "selected"';
        break;
      case 'mid':
        midSelected = 'selected = "selected"';
        break;
      default:
        lowSelected = 'selected = "selected"';
        break;
    }

    this.priorityField.innerHTML = `
    <option value="low" ${lowSelected}>low</option>
    <option value="mid" ${midSelected}>mid</option>
    <option value="high" ${highSelected}>high</option>
    `;

    // MODAL BOX
    const modal = document.createElement('div');
    modal.classList.add('modal', 'hidden');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const modalCloseBtn = document.createElement('span');
    modalCloseBtn.classList.add('modal-close-btn');
    modalCloseBtn.textContent = '✕';
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.toggle('hidden');
    });
    const modalText = document.createElement('p');
    modalContent.appendChild(modalCloseBtn);
    modalContent.appendChild(modalText);
    modal.appendChild(modalContent);
    main.appendChild(modal);

    // SAVE BTN
    this.saveBtn = document.createElement('button');
    this.saveBtn.classList.add('save-todo-btn');
    this.saveBtn.textContent = 'save';
    this.saveBtn.addEventListener('click', () => {
      const newTodoObj = {
        title: this.titleField.value,
        description: this.descriptionField.value,
        dueDate: this.dueDateField.value,
        priority: this.priorityField.value,
      };

      // CHECK IF FIELD IS EMPTY
      const inputIsValid = Object.entries(newTodoObj).every((field) => {
        if (field[1] === '') {
          modalText.innerHTML = `The <strong>${field[0]}</strong> field can't be empty!`;
          modal.classList.toggle('hidden');
          return false;
        }

        return true;
      });

      if (inputIsValid) {
        if (this.todoObj instanceof _todo__WEBPACK_IMPORTED_MODULE_1__.default) {
          this.todoObj.updateTodo(newTodoObj);
        } else {
          this.project.addTodo(newTodoObj);
        }
        render(this.project);
      }
    });

    this.todoFormContainer.appendChild(this.titleField);
    this.todoFormContainer.appendChild(this.descriptionField);
    this.todoFormContainer.appendChild(this.dueDateField);
    this.todoFormContainer.appendChild(this.priorityField);
    this.todoFormContainer.appendChild(this.saveBtn); // BUTTON!

    return this.todoFormContainer;
  }
}

renderTodos = (project) => {
  const todosContainer = document.createElement('div');
  todosContainer.classList.add('todo-list');
  todosContainer.innerHTML = '';

  const projectName = document.createElement('h1');
  projectName.classList.add('project-name');
  projectName.textContent = project.name;

  todosContainer.appendChild(projectName);

  // ADD EACH TODO ITEM
  project.todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');

    todoItem.classList.add('todo-item', `priority-${todo.priority}`);
    const todoCheck = document.createElement('input');
    todoCheck.setAttribute('type', 'checkbox');
    todoCheck.classList.add('todo-check');
    const todoTitle = document.createElement('span');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;
    const todoDueDate = document.createElement('span');
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.textContent = todo.dueDate;
    const todoActionsWrapper = document.createElement('span');
    todoActionsWrapper.classList.add('todo-actions-wrapper');

    let todoEditForm = new TodoForm(todo, project);
    todoEditForm = todoEditForm.render();
    todoEditForm.classList.add('hidden');

    const todoEditBtn = document.createElement('button');
    todoEditBtn.classList.add('todo-edit-btn');
    todoEditBtn.textContent = 'edit';
    todoEditBtn.addEventListener('click', () => {
      todoEditForm.classList.toggle('hidden');
    });

    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.classList.add('todo-delete-btn');
    todoDeleteBtn.textContent = 'delete';
    todoDeleteBtn.addEventListener('click', () => {
      project.deleteTodo(index);
      render(project);
    });

    todoActionsWrapper.appendChild(todoEditBtn);
    todoActionsWrapper.appendChild(todoDeleteBtn);

    todoItem.appendChild(todoCheck);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDueDate);
    todoItem.appendChild(todoActionsWrapper);

    todosContainer.appendChild(todoItem);

    todosContainer.appendChild(todoEditForm);
  });

  // NEW TODOs FORM
  let todoNewForm = new TodoForm({}, project);
  todoNewForm = todoNewForm.render();
  todoNewForm.classList.add('hidden');
  todosContainer.appendChild(todoNewForm);

  // ADD TODO BUTTON
  const addTodoBtn = document.createElement('button');
  addTodoBtn.classList.add('add-todo-btn');
  addTodoBtn.textContent = 'Add todo';
  addTodoBtn.addEventListener('click', () => {
    todoNewForm.classList.toggle('hidden');
  });
  todosContainer.appendChild(addTodoBtn);

  return todosContainer;
};

// RENDER SIDEBAR
renderSideBar = (projects) => {
  // CLEAR SIDEBAR TO RENDER UPDATED LIST
  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');
  sideBar.innerHTML = '';

  // RENDER EACH PROJECT NAME IN SIDEBAR
  projects.forEach((project, index) => {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.textContent = project.name;
    projectBtn.addEventListener('click', () => {
      render(project);
    });

    if (index !== 0) {
      const projectDeleteBtn = document.createElement('button');
      projectDeleteBtn.classList.add('project-delete-btn');
      projectDeleteBtn.textContent = ' X ';
      projectDeleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        projects.splice(index, 1);
        render();
      });

      projectBtn.appendChild(projectDeleteBtn);
    }

    sideBar.appendChild(projectBtn);
  });

  //  NEW PROJECT FORM
  const newProjectForm = document.createElement('div');
  newProjectForm.classList.add('new-project-wrapper', 'hidden');

  const inputField = document.createElement('input');
  inputField.classList.add('new-project-name');

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('save-project-btn');
  saveBtn.textContent = 'save';
  saveBtn.addEventListener('click', () => {
    projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.default(inputField.value));

    render(projects[projects.length - 1]);
  });

  newProjectForm.appendChild(inputField);
  newProjectForm.appendChild(saveBtn);

  sideBar.appendChild(newProjectForm);

  // ADD PROJECT BUTTON
  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('add-project-btn');
  addProjectBtn.textContent = 'Add Project';

  addProjectBtn.addEventListener('click', () => {
    newProjectForm.classList.toggle('hidden');
  });

  sideBar.appendChild(addProjectBtn);

  return sideBar;
};



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



let exampleTodos = [
  {
    title: 'Create GitHub Repo',
    description: 'Push config files to GitHub',
    dueDate: '2021-04-28',
    priority: 'high',
  },
  {
    title: 'Configure Linters',
    description: 'Set up linters on local environment',
    dueDate: '2021-04-29',
    priority: 'mid',
  },
  {
    title: 'Submit Project for Review',
    description: 'Submit review form',
    dueDate: '2021-04-30',
    priority: 'low',
  },
];

let exampleProjects = [
  {
    name: 'work',
    todos: [
      {
        title: 'linters',
        description: 'check for linter errors',
        dueDate: '2020-09-03',
        priority: 'low',
      },
      {
        title: 'tests',
        description: 'check for test errors',
        dueDate: '2020-09-03',
        priority: 'high',
      },
    ],
  },
  {
    name: 'personal',
    todos: [
      {
        title: 'readme',
        description: 'update readme on github',
        dueDate: '2020-09-03',
        priority: 'mid',
      },
    ],
  },
];

const projectsArr = [];

exampleTodos = exampleTodos.map((todo) => new _todo__WEBPACK_IMPORTED_MODULE_0__.default(todo));
const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_1__.default('todos', exampleTodos);
projectsArr.push(defaultProject);
exampleProjects = exampleProjects.map((project) => new _project__WEBPACK_IMPORTED_MODULE_1__.default(project.name, project.todos));
exampleProjects.forEach((project) => {
  project.todos = project.todos.map((todo) => new _todo__WEBPACK_IMPORTED_MODULE_0__.default(todo));
});
projectsArr.push(...exampleProjects);

const storage = {
  projects: projectsArr,
  defaultProject: projectsArr[0],

  checkLocalStorage() {
    let storedProjects = localStorage.getItem('projects');
    if (storedProjects === null) {
      localStorage.setItem('projects', JSON.stringify(this.projects));
    } else {
      storedProjects = JSON.parse(storedProjects);
      storedProjects = storedProjects.map((project) => new _project__WEBPACK_IMPORTED_MODULE_1__.default(project.name, project.todos));
      storedProjects.forEach((project) => {
        project.todos = project.todos.map((todo) => new _todo__WEBPACK_IMPORTED_MODULE_0__.default(todo));
      });
      this.projects = storedProjects;
    }
  },

  updateLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
  constructor({
    title, description, dueDate, priority,
  }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  updateTodo({
    title, description, dueDate, priority,
  }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    return this;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");



(0,_render__WEBPACK_IMPORTED_MODULE_1__.render)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/Y2RkNiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxvRUFBb0UsMkJBQTJCLEdBQUcsZ2tCQUFna0IsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLDZCQUE2QixHQUFHLHVHQUF1RyxtQkFBbUIsR0FBRyxVQUFVLDBOQUEwTixtQkFBbUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLG9CQUFvQixpQkFBaUIsR0FBRyxtRUFBbUUsZ0JBQWdCLGtCQUFrQixHQUFHLFdBQVcsOEJBQThCLHNCQUFzQixHQUFHLGtDQUFrQyxrQkFBa0Isb0JBQW9CLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLDJCQUEyQixHQUFHLDhCQUE4QixrQkFBa0IsMkJBQTJCLGVBQWUsc0JBQXNCLGtCQUFrQixzQkFBc0IsMkJBQTJCLEdBQUcsa0JBQWtCLGdCQUFnQix3QkFBd0Isa0JBQWtCLDhCQUE4QixvQkFBb0Isb0JBQW9CLDhCQUE4Qix3QkFBd0IsZ0JBQWdCLHNCQUFzQiwyQkFBMkIsdUJBQXVCLDBCQUEwQiw2QkFBNkIsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcseUJBQXlCLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsaUJBQWlCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLDJCQUEyQiwyQkFBMkIsZ0JBQWdCLHFCQUFxQixHQUFHLDRDQUE0QywwQkFBMEIsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsMkJBQTJCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLHVCQUF1QixtQkFBbUIsc0JBQXNCLEdBQUcsdUJBQXVCLGlCQUFpQixvQkFBb0IsR0FBRyxpQ0FBaUMsWUFBWSxzQkFBc0Isa0JBQWtCLEdBQUcsbUJBQW1CLG9CQUFvQix3QkFBd0IsOEJBQThCLHNCQUFzQixnQkFBZ0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDBCQUEwQixnQkFBZ0IsMEJBQTBCLGtCQUFrQixrQ0FBa0Msc0JBQXNCLEdBQUcsb0JBQW9CLGNBQWMsdUJBQXVCLEdBQUcsaUJBQWlCLFlBQVksR0FBRyxvQkFBb0IsbUJBQW1CLG9CQUFvQixHQUFHLDJCQUEyQiwyQkFBMkIsR0FBRywrQkFBK0Isb0JBQW9CLEdBQUcsbUJBQW1CLGdDQUFnQyxHQUFHLG1CQUFtQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsd0NBQXdDLG1CQUFtQix5QkFBeUIsMkJBQTJCLDBCQUEwQixvQkFBb0IsZ0JBQWdCLGtDQUFrQyxHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLEdBQUcseUJBQXlCLG1CQUFtQixtQkFBbUIsc0JBQXNCLHlCQUF5QixHQUFHLHFCQUFxQixtQkFBbUIsc0JBQXNCLEdBQUcsNkJBQTZCLG9CQUFvQixlQUFlLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1CQUFtQiw0QkFBNEIsR0FBRyxvQkFBb0IsaUJBQWlCLHFCQUFxQixrQkFBa0IsMkJBQTJCLHNCQUFzQiwyQkFBMkIsR0FBRywyQkFBMkIsOEJBQThCLEdBQUcsc0JBQXNCLGlCQUFpQixvQkFBb0IsR0FBRyxhQUFhLGtCQUFrQixHQUFHLFNBQVMsa0dBQWtHLE1BQU0sWUFBWSxPQUFPLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxlQUFlLFVBQVUsT0FBTyxLQUFLLGVBQWUsS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sUUFBUSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxtREFBbUQsMkJBQTJCLEdBQUcsZ2tCQUFna0IsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLDZCQUE2QixHQUFHLHVHQUF1RyxtQkFBbUIsR0FBRyxVQUFVLDBOQUEwTixtQkFBbUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLG9CQUFvQixpQkFBaUIsR0FBRyxtRUFBbUUsZ0JBQWdCLGtCQUFrQixHQUFHLFdBQVcsOEJBQThCLHNCQUFzQixHQUFHLGtDQUFrQyxrQkFBa0Isb0JBQW9CLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLDJCQUEyQixHQUFHLDhCQUE4QixrQkFBa0IsMkJBQTJCLGVBQWUsc0JBQXNCLGtCQUFrQixzQkFBc0IsMkJBQTJCLEdBQUcsa0JBQWtCLGdCQUFnQix3QkFBd0Isa0JBQWtCLDhCQUE4QixvQkFBb0Isb0JBQW9CLDhCQUE4Qix3QkFBd0IsZ0JBQWdCLHNCQUFzQiwyQkFBMkIsdUJBQXVCLDBCQUEwQiw2QkFBNkIsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcseUJBQXlCLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsaUJBQWlCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLDJCQUEyQiwyQkFBMkIsZ0JBQWdCLHFCQUFxQixHQUFHLDRDQUE0QywwQkFBMEIsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsMkJBQTJCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLHVCQUF1QixtQkFBbUIsc0JBQXNCLEdBQUcsdUJBQXVCLGlCQUFpQixvQkFBb0IsR0FBRyxpQ0FBaUMsWUFBWSxzQkFBc0Isa0JBQWtCLEdBQUcsbUJBQW1CLG9CQUFvQix3QkFBd0IsOEJBQThCLHNCQUFzQixnQkFBZ0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDBCQUEwQixnQkFBZ0IsMEJBQTBCLGtCQUFrQixrQ0FBa0Msc0JBQXNCLEdBQUcsb0JBQW9CLGNBQWMsdUJBQXVCLEdBQUcsaUJBQWlCLFlBQVksR0FBRyxvQkFBb0IsbUJBQW1CLG9CQUFvQixHQUFHLDJCQUEyQiwyQkFBMkIsR0FBRywrQkFBK0Isb0JBQW9CLEdBQUcsbUJBQW1CLGdDQUFnQyxHQUFHLG1CQUFtQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsd0NBQXdDLG1CQUFtQix5QkFBeUIsMkJBQTJCLDBCQUEwQixvQkFBb0IsZ0JBQWdCLGtDQUFrQyxHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLEdBQUcseUJBQXlCLG1CQUFtQixtQkFBbUIsc0JBQXNCLHlCQUF5QixHQUFHLHFCQUFxQixtQkFBbUIsc0JBQXNCLEdBQUcsNkJBQTZCLG9CQUFvQixlQUFlLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1CQUFtQiw0QkFBNEIsR0FBRyxvQkFBb0IsaUJBQWlCLHFCQUFxQixrQkFBa0IsMkJBQTJCLHNCQUFzQiwyQkFBMkIsR0FBRywyQkFBMkIsOEJBQThCLEdBQUcsc0JBQXNCLGlCQUFpQixvQkFBb0IsR0FBRyxhQUFhLGtCQUFrQixHQUFHLHFCQUFxQjtBQUN4b1c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CK0Y7QUFDL0YsWUFBNkY7O0FBRTdGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSXhCLGlFQUFlLDBGQUFjLE1BQU0sRTs7Ozs7Ozs7OztBQ1p0Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7OztBQzVRMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsMENBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlU7QUFDTjtBQUNNOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtEQUF5QjtBQUN6QixPQUFPLFdBQVcsR0FBRyw2Q0FBTzs7QUFFNUI7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUIsRUFBRSxnRUFBMEI7O0FBRTVCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qiw2Q0FBTztBQUNoQztBQUNBLEdBQUc7QUFDSCxpQ0FBaUMsNERBQXNCO0FBQ3ZEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEMsMEJBQTBCLFlBQVk7QUFDdEMsMkJBQTJCLGFBQWE7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxvQ0FBb0MsMENBQUk7QUFDeEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFPOztBQUU3QjtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzUzBCO0FBQ007O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQSw4Q0FBOEMsMENBQUk7QUFDbEQsMkJBQTJCLDZDQUFPO0FBQ2xDO0FBQ0EsdURBQXVELDZDQUFPO0FBQzlEO0FBQ0Esa0RBQWtELDBDQUFJO0FBQ3RELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyREFBMkQsNkNBQU87QUFDbEU7QUFDQSx3REFBd0QsMENBQUk7QUFDNUQsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsT0FBTyxFOzs7Ozs7Ozs7Ozs7OztBQ3pGdEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFOzs7Ozs7VUN0Qm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ0U7O0FBRWxDLCtDQUFNLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ1NTIFJFU0VUIEJFR0lOICovXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTpcXG4gICAgLWFwcGxlLXN5c3RlbSxcXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICDigJxTZWdvZSBVSeKAnSxcXG4gICAg4oCcUm9ib3Rv4oCdLFxcbiAgICDigJxPeHlnZW7igJ0sXFxuICAgIOKAnFVidW50deKAnSxcXG4gICAg4oCcQ2FudGFyZWxs4oCdLFxcbiAgICDigJxGaXJhIFNhbnPigJ0sXFxuICAgIOKAnERyb2lkIFNhbnPigJ0sXFxuICAgIOKAnEhlbHZldGljYSBOZXVl4oCdLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6OmJlZm9yZSxcXG5ibG9ja3F1b3RlOjphZnRlcixcXG5xOjpiZWZvcmUsXFxucTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIENTUyBSRVNFVCBFTkQgKi9cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZjtcXG59XFxuXFxuLyogU0lERUJBUiAqL1xcbi5zaWRlLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNSU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbi5wcm9qZWN0LWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgLyogYm9yZGVyLXJhZGl1czogLjVyZW07ICovXFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnByb2plY3QtYnRuOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC42cmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBib3R0b206IDAuNXJlbTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5wcm9qZWN0LWJ0bjpob3ZlciAucHJvamVjdC1kZWxldGUtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2MDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwOGY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMDhmO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5uZXctcHJvamVjdC1uYW1lIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zYXZlLXByb2plY3QtYnRuIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogVE9ETyBMSVNUICovXFxuLnRvZG8tbGlzdCB7XFxuICBmbGV4OiAxO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzA4ZjtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udG9kby1kdWUtZGF0ZSB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRvZG8tYWN0aW9ucy13cmFwcGVyIHtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi50b2RvLWVkaXQsXFxuLnRvZG8tZGVsZXRlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICM0OGY7XFxufVxcblxcbi5wcmlvcml0eS1taWQge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZmMwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmNjA7XFxufVxcblxcbi8qIEFERCBUT0RPIEZPUk0gKi9cXG4uYWRkLXRvZG8tYnRuIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDhmO1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICMwOGY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLm5ldy10b2RvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXctdG9kby13cmFwcGVyICoge1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5uZXctdG9kby10aXRsZSB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBNT0RBTCBCT1ggKi9cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGE7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiAzNjBweDtcXG4gIG1hcmdpbjogMTUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgc3Ryb25nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5tb2RhbC1jbG9zZS1idG4ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7QUFDcEI7RUFDRSxz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QUFVO0VBQ1YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENTUyBSRVNFVCBCRUdJTiAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIC1hcHBsZS1zeXN0ZW0sXFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAg4oCcU2Vnb2UgVUnigJ0sXFxuICAgIOKAnFJvYm90b+KAnSxcXG4gICAg4oCcT3h5Z2Vu4oCdLFxcbiAgICDigJxVYnVudHXigJ0sXFxuICAgIOKAnENhbnRhcmVsbOKAnSxcXG4gICAg4oCcRmlyYSBTYW5z4oCdLFxcbiAgICDigJxEcm9pZCBTYW5z4oCdLFxcbiAgICDigJxIZWx2ZXRpY2EgTmV1ZeKAnSxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOjpiZWZvcmUsXFxuYmxvY2txdW90ZTo6YWZ0ZXIsXFxucTo6YmVmb3JlLFxcbnE6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBDU1MgUkVTRVQgRU5EICovXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGY7XFxufVxcblxcbi8qIFNJREVCQVIgKi9cXG4uc2lkZS1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjUlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4ucHJvamVjdC1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIC8qIGJvcmRlci1yYWRpdXM6IC41cmVtOyAqL1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5wcm9qZWN0LWJ0bjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNnJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm90dG9tOiAwLjVyZW07XFxuICBmbG9hdDogcmlnaHQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhmO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4ucHJvamVjdC1idG46aG92ZXIgLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjA7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDhmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzA4ZjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtbmFtZSB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2F2ZS1wcm9qZWN0LWJ0biB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIFRPRE8gTElTVCAqL1xcbi50b2RvLWxpc3Qge1xcbiAgZmxleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMwOGY7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50b2RvLWNoZWNrYm94IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRvZG8tZHVlLWRhdGUge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50b2RvLWFjdGlvbnMtd3JhcHBlciB7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLWRlbGV0ZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjNDhmO1xcbn1cXG5cXG4ucHJpb3JpdHktbWlkIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2ZjMDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZjYwO1xcbn1cXG5cXG4vKiBBREQgVE9ETyBGT1JNICovXFxuLmFkZC10b2RvLWJ0biB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzA4ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjMDhmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5uZXctdG9kby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmV3LXRvZG8td3JhcHBlciAqIHtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4ubmV3LXRvZG8tdGl0bGUge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogTU9EQUwgQk9YICovXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBhO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICB3aWR0aDogMzYwcHg7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHN0cm9uZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2UtYnRuIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0b2RvcyA9IFtdKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRvZG8odG9kbykpO1xuICB9XG5cbiAgZGVsZXRlVG9kbyh0b2RvSW5kZXgpIHtcbiAgICB0aGlzLnRvZG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5jb25zdCBnZXREYXRlU3RyaW5nID0gKGRhdGUpID0+IHtcbiAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpIC0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgcmV0dXJuIGRhdGUudG9KU09OKCkuc2xpY2UoMCwgMTApO1xufTtcblxubGV0IHJlbmRlclNpZGVCYXI7XG5sZXQgcmVuZGVyVG9kb3M7XG5cbnN0b3JhZ2UuY2hlY2tMb2NhbFN0b3JhZ2UoKTtcbmNvbnN0IHsgcHJvamVjdHMgfSA9IHN0b3JhZ2U7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5tYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuY29uc3QgcmVuZGVyID0gKHByb2plY3QgPSB7fSkgPT4ge1xuICBzdG9yYWdlLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3Qgc2lkZUJhciA9IHJlbmRlclNpZGVCYXIocHJvamVjdHMpO1xuICBtYWluLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuXG4gIGxldCB0b2Rvc0NvbnRhaW5lcjtcbiAgaWYgKHByb2plY3QgaW5zdGFuY2VvZiBQcm9qZWN0KSB7XG4gICAgdG9kb3NDb250YWluZXIgPSByZW5kZXJUb2Rvcyhwcm9qZWN0KTtcbiAgfSBlbHNlIHtcbiAgICB0b2Rvc0NvbnRhaW5lciA9IHJlbmRlclRvZG9zKHN0b3JhZ2UuZGVmYXVsdFByb2plY3QpO1xuICB9XG5cbiAgbWFpbi5hcHBlbmRDaGlsZCh0b2Rvc0NvbnRhaW5lcik7XG59O1xuXG5jbGFzcyBUb2RvRm9ybSB7XG4gIGNvbnN0cnVjdG9yKC4uLnBhcmFtcykge1xuICAgIFt0aGlzLnRvZG9PYmosIHRoaXMucHJvamVjdF0gPSBwYXJhbXM7XG4gICAgLy8gbGV0IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHk7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUgPSAnJywgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSA9IGdldERhdGVTdHJpbmcobmV3IERhdGUoKSksIHByaW9yaXR5ID0gJycsXG4gICAgfSA9IHRoaXMudG9kb09iajtcblxuICAgIHRoaXMudGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0aGlzLmR1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5wcmlvcml0eUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICB0aGlzLnRpdGxlRmllbGQudmFsdWUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uRmllbGQudmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGVGaWVsZC52YWx1ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eUZpZWxkLnZhbHVlID0gcHJpb3JpdHk7XG5cbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICByZW5kZXIoKSB7IC8vIGRlZmluZSB0eXBlIG9mIGJ1dHRvbiBhY3Rpb25cbiAgICB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBTVFlMSU5HIEZPUk0gRUxFTUVOVFNcbiAgICB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLXdyYXBwZXInKTtcbiAgICB0aGlzLnRpdGxlRmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tdGl0bGUnKTtcbiAgICB0aGlzLnRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgIHRoaXMuZGVzY3JpcHRpb25GaWVsZC5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1kZXNjcmlwdGlvbicpO1xuICAgIHRoaXMuZGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgdGhpcy5kdWVEYXRlRmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tZHVlLWRhdGUnKTtcbiAgICB0aGlzLmR1ZURhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHRoaXMucHJpb3JpdHlGaWVsZC5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1wcmlvcml0eScpO1xuICAgIHRoaXMucHJpb3JpdHlGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmV3LXRvZG8tcHJpb3JpdHknKTtcblxuICAgIGxldCBbbG93U2VsZWN0ZWQsIG1pZFNlbGVjdGVkLCBoaWdoU2VsZWN0ZWRdID0gWycnLCAnJywgJyddO1xuXG4gICAgc3dpdGNoICh0aGlzLnByaW9yaXR5KSB7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgaGlnaFNlbGVjdGVkID0gJ3NlbGVjdGVkID0gXCJzZWxlY3RlZFwiJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtaWQnOlxuICAgICAgICBtaWRTZWxlY3RlZCA9ICdzZWxlY3RlZCA9IFwic2VsZWN0ZWRcIic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbG93U2VsZWN0ZWQgPSAnc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCInO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnByaW9yaXR5RmllbGQuaW5uZXJIVE1MID0gYFxuICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIiAke2xvd1NlbGVjdGVkfT5sb3c8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwibWlkXCIgJHttaWRTZWxlY3RlZH0+bWlkPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiAke2hpZ2hTZWxlY3RlZH0+aGlnaDwvb3B0aW9uPlxuICAgIGA7XG5cbiAgICAvLyBNT0RBTCBCT1hcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2hpZGRlbicpO1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG4gICAgY29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtb2RhbENsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NlLWJ0bicpO1xuICAgIG1vZGFsQ2xvc2VCdG4udGV4dENvbnRlbnQgPSAn4pyVJztcbiAgICBtb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gICAgY29uc3QgbW9kYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbENsb3NlQnRuKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgLy8gU0FWRSBCVE5cbiAgICB0aGlzLnNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLnNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnc2F2ZS10b2RvLWJ0bicpO1xuICAgIHRoaXMuc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdzYXZlJztcbiAgICB0aGlzLnNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdUb2RvT2JqID0ge1xuICAgICAgICB0aXRsZTogdGhpcy50aXRsZUZpZWxkLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbkZpZWxkLnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiB0aGlzLmR1ZURhdGVGaWVsZC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHlGaWVsZC52YWx1ZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIENIRUNLIElGIEZJRUxEIElTIEVNUFRZXG4gICAgICBjb25zdCBpbnB1dElzVmFsaWQgPSBPYmplY3QuZW50cmllcyhuZXdUb2RvT2JqKS5ldmVyeSgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkWzFdID09PSAnJykge1xuICAgICAgICAgIG1vZGFsVGV4dC5pbm5lckhUTUwgPSBgVGhlIDxzdHJvbmc+JHtmaWVsZFswXX08L3N0cm9uZz4gZmllbGQgY2FuJ3QgYmUgZW1wdHkhYDtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5wdXRJc1ZhbGlkKSB7XG4gICAgICAgIGlmICh0aGlzLnRvZG9PYmogaW5zdGFuY2VvZiBUb2RvKSB7XG4gICAgICAgICAgdGhpcy50b2RvT2JqLnVwZGF0ZVRvZG8obmV3VG9kb09iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9qZWN0LmFkZFRvZG8obmV3VG9kb09iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKHRoaXMucHJvamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGVGaWVsZCk7XG4gICAgdGhpcy50b2RvRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uRmllbGQpO1xuICAgIHRoaXMudG9kb0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kdWVEYXRlRmllbGQpO1xuICAgIHRoaXMudG9kb0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wcmlvcml0eUZpZWxkKTtcbiAgICB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc2F2ZUJ0bik7IC8vIEJVVFRPTiFcblxuICAgIHJldHVybiB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyO1xuICB9XG59XG5cbnJlbmRlclRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAvLyBBREQgRUFDSCBUT0RPIElURU1cbiAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nLCBgcHJpb3JpdHktJHt0b2RvLnByaW9yaXR5fWApO1xuICAgIGNvbnN0IHRvZG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIHRvZG9DaGVjay5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrJyk7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZS1kYXRlJyk7XG4gICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgY29uc3QgdG9kb0FjdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRvZG9BY3Rpb25zV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0b2RvLWFjdGlvbnMtd3JhcHBlcicpO1xuXG4gICAgbGV0IHRvZG9FZGl0Rm9ybSA9IG5ldyBUb2RvRm9ybSh0b2RvLCBwcm9qZWN0KTtcbiAgICB0b2RvRWRpdEZvcm0gPSB0b2RvRWRpdEZvcm0ucmVuZGVyKCk7XG4gICAgdG9kb0VkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgY29uc3QgdG9kb0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtYnRuJyk7XG4gICAgdG9kb0VkaXRCdG4udGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgdG9kb0VkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2RvRWRpdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlbGV0ZS1idG4nKTtcbiAgICB0b2RvRGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgdG9kb0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByb2plY3QuZGVsZXRlVG9kbyhpbmRleCk7XG4gICAgICByZW5kZXIocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICB0b2RvQWN0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb0VkaXRCdG4pO1xuICAgIHRvZG9BY3Rpb25zV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnRuKTtcblxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9DaGVjayk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0FjdGlvbnNXcmFwcGVyKTtcblxuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcblxuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FZGl0Rm9ybSk7XG4gIH0pO1xuXG4gIC8vIE5FVyBUT0RPcyBGT1JNXG4gIGxldCB0b2RvTmV3Rm9ybSA9IG5ldyBUb2RvRm9ybSh7fSwgcHJvamVjdCk7XG4gIHRvZG9OZXdGb3JtID0gdG9kb05ld0Zvcm0ucmVuZGVyKCk7XG4gIHRvZG9OZXdGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTmV3Rm9ybSk7XG5cbiAgLy8gQUREIFRPRE8gQlVUVE9OXG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1idG4nKTtcbiAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9ICdBZGQgdG9kbyc7XG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb05ld0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH0pO1xuICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKTtcblxuICByZXR1cm4gdG9kb3NDb250YWluZXI7XG59O1xuXG4vLyBSRU5ERVIgU0lERUJBUlxucmVuZGVyU2lkZUJhciA9IChwcm9qZWN0cykgPT4ge1xuICAvLyBDTEVBUiBTSURFQkFSIFRPIFJFTkRFUiBVUERBVEVEIExJU1RcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyJyk7XG4gIHNpZGVCYXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgLy8gUkVOREVSIEVBQ0ggUFJPSkVDVCBOQU1FIElOIFNJREVCQVJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpO1xuICAgIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbmRlcihwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1idG4nKTtcbiAgICAgIHByb2plY3REZWxldGVCdG4udGV4dENvbnRlbnQgPSAnIFggJztcbiAgICAgIHByb2plY3REZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gICAgfVxuXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcbiAgfSk7XG5cbiAgLy8gIE5FVyBQUk9KRUNUIEZPUk1cbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3Qtd3JhcHBlcicsICdoaWRkZW4nKTtcblxuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1uYW1lJyk7XG5cbiAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoJ3NhdmUtcHJvamVjdC1idG4nKTtcbiAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdzYXZlJztcbiAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KGlucHV0RmllbGQudmFsdWUpKTtcblxuICAgIHJlbmRlcihwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXSk7XG4gIH0pO1xuXG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzYXZlQnRuKTtcblxuICBzaWRlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcblxuICAvLyBBREQgUFJPSkVDVCBCVVRUT05cbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcblxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9KTtcblxuICBzaWRlQmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG4gIHJldHVybiBzaWRlQmFyO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyLCByZW5kZXJTaWRlQmFyIH07IiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmxldCBleGFtcGxlVG9kb3MgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0NyZWF0ZSBHaXRIdWIgUmVwbycsXG4gICAgZGVzY3JpcHRpb246ICdQdXNoIGNvbmZpZyBmaWxlcyB0byBHaXRIdWInLFxuICAgIGR1ZURhdGU6ICcyMDIxLTA0LTI4JyxcbiAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDb25maWd1cmUgTGludGVycycsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgdXAgbGludGVycyBvbiBsb2NhbCBlbnZpcm9ubWVudCcsXG4gICAgZHVlRGF0ZTogJzIwMjEtMDQtMjknLFxuICAgIHByaW9yaXR5OiAnbWlkJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU3VibWl0IFByb2plY3QgZm9yIFJldmlldycsXG4gICAgZGVzY3JpcHRpb246ICdTdWJtaXQgcmV2aWV3IGZvcm0nLFxuICAgIGR1ZURhdGU6ICcyMDIxLTA0LTMwJyxcbiAgICBwcmlvcml0eTogJ2xvdycsXG4gIH0sXG5dO1xuXG5sZXQgZXhhbXBsZVByb2plY3RzID0gW1xuICB7XG4gICAgbmFtZTogJ3dvcmsnLFxuICAgIHRvZG9zOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnbGludGVycycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnY2hlY2sgZm9yIGxpbnRlciBlcnJvcnMnLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMC0wOS0wMycsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAndGVzdHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ2NoZWNrIGZvciB0ZXN0IGVycm9ycycsXG4gICAgICAgIGR1ZURhdGU6ICcyMDIwLTA5LTAzJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwZXJzb25hbCcsXG4gICAgdG9kb3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdyZWFkbWUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ3VwZGF0ZSByZWFkbWUgb24gZ2l0aHViJyxcbiAgICAgICAgZHVlRGF0ZTogJzIwMjAtMDktMDMnLFxuICAgICAgICBwcmlvcml0eTogJ21pZCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5jb25zdCBwcm9qZWN0c0FyciA9IFtdO1xuXG5leGFtcGxlVG9kb3MgPSBleGFtcGxlVG9kb3MubWFwKCh0b2RvKSA9PiBuZXcgVG9kbyh0b2RvKSk7XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCd0b2RvcycsIGV4YW1wbGVUb2Rvcyk7XG5wcm9qZWN0c0Fyci5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbmV4YW1wbGVQcm9qZWN0cyA9IGV4YW1wbGVQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IG5ldyBQcm9qZWN0KHByb2plY3QubmFtZSwgcHJvamVjdC50b2RvcykpO1xuZXhhbXBsZVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgcHJvamVjdC50b2RvcyA9IHByb2plY3QudG9kb3MubWFwKCh0b2RvKSA9PiBuZXcgVG9kbyh0b2RvKSk7XG59KTtcbnByb2plY3RzQXJyLnB1c2goLi4uZXhhbXBsZVByb2plY3RzKTtcblxuY29uc3Qgc3RvcmFnZSA9IHtcbiAgcHJvamVjdHM6IHByb2plY3RzQXJyLFxuICBkZWZhdWx0UHJvamVjdDogcHJvamVjdHNBcnJbMF0sXG5cbiAgY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbGV0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgaWYgKHN0b3JlZFByb2plY3RzID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0cyk7XG4gICAgICBzdG9yZWRQcm9qZWN0cyA9IHN0b3JlZFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gbmV3IFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LnRvZG9zKSk7XG4gICAgICBzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MgPSBwcm9qZWN0LnRvZG9zLm1hcCgodG9kbykgPT4gbmV3IFRvZG8odG9kbykpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnByb2plY3RzID0gc3RvcmVkUHJvamVjdHM7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSxcbiAgfSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICB1cGRhdGVUb2RvKHtcbiAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LFxuICB9KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL3JlbmRlcic7XG5cbnJlbmRlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=