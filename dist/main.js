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

const main = document.createElement('main');
main.classList.add('main');
const body = document.querySelector('body');
body.appendChild(main);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/Y2RkNiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxvRUFBb0UsMkJBQTJCLEdBQUcsZ2tCQUFna0IsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLDZCQUE2QixHQUFHLHVHQUF1RyxtQkFBbUIsR0FBRyxVQUFVLDBOQUEwTixtQkFBbUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLG9CQUFvQixpQkFBaUIsR0FBRyxtRUFBbUUsZ0JBQWdCLGtCQUFrQixHQUFHLFdBQVcsOEJBQThCLHNCQUFzQixHQUFHLGtDQUFrQyxrQkFBa0Isb0JBQW9CLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLDJCQUEyQixHQUFHLDhCQUE4QixrQkFBa0IsMkJBQTJCLGVBQWUsc0JBQXNCLGtCQUFrQixzQkFBc0IsMkJBQTJCLEdBQUcsa0JBQWtCLGdCQUFnQix3QkFBd0Isa0JBQWtCLDhCQUE4QixvQkFBb0Isb0JBQW9CLDhCQUE4Qix3QkFBd0IsZ0JBQWdCLHNCQUFzQiwyQkFBMkIsdUJBQXVCLDBCQUEwQiw2QkFBNkIsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcseUJBQXlCLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsaUJBQWlCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLDJCQUEyQiwyQkFBMkIsZ0JBQWdCLHFCQUFxQixHQUFHLDRDQUE0QywwQkFBMEIsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsMkJBQTJCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLHVCQUF1QixtQkFBbUIsc0JBQXNCLEdBQUcsdUJBQXVCLGlCQUFpQixvQkFBb0IsR0FBRyxpQ0FBaUMsWUFBWSxzQkFBc0Isa0JBQWtCLEdBQUcsbUJBQW1CLG9CQUFvQix3QkFBd0IsOEJBQThCLHNCQUFzQixnQkFBZ0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDBCQUEwQixnQkFBZ0IsMEJBQTBCLGtCQUFrQixrQ0FBa0Msc0JBQXNCLEdBQUcsb0JBQW9CLGNBQWMsdUJBQXVCLEdBQUcsaUJBQWlCLFlBQVksR0FBRyxvQkFBb0IsbUJBQW1CLG9CQUFvQixHQUFHLDJCQUEyQiwyQkFBMkIsR0FBRywrQkFBK0Isb0JBQW9CLEdBQUcsbUJBQW1CLGdDQUFnQyxHQUFHLG1CQUFtQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsd0NBQXdDLG1CQUFtQix5QkFBeUIsMkJBQTJCLDBCQUEwQixvQkFBb0IsZ0JBQWdCLGtDQUFrQyxHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLEdBQUcseUJBQXlCLG1CQUFtQixtQkFBbUIsc0JBQXNCLHlCQUF5QixHQUFHLHFCQUFxQixtQkFBbUIsc0JBQXNCLEdBQUcsNkJBQTZCLG9CQUFvQixlQUFlLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1CQUFtQiw0QkFBNEIsR0FBRyxvQkFBb0IsaUJBQWlCLHFCQUFxQixrQkFBa0IsMkJBQTJCLHNCQUFzQiwyQkFBMkIsR0FBRywyQkFBMkIsOEJBQThCLEdBQUcsc0JBQXNCLGlCQUFpQixvQkFBb0IsR0FBRyxhQUFhLGtCQUFrQixHQUFHLFNBQVMsa0dBQWtHLE1BQU0sWUFBWSxPQUFPLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxlQUFlLFVBQVUsT0FBTyxLQUFLLGVBQWUsS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sUUFBUSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxtREFBbUQsMkJBQTJCLEdBQUcsZ2tCQUFna0IsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLDZCQUE2QixHQUFHLHVHQUF1RyxtQkFBbUIsR0FBRyxVQUFVLDBOQUEwTixtQkFBbUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLG9CQUFvQixpQkFBaUIsR0FBRyxtRUFBbUUsZ0JBQWdCLGtCQUFrQixHQUFHLFdBQVcsOEJBQThCLHNCQUFzQixHQUFHLGtDQUFrQyxrQkFBa0Isb0JBQW9CLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLDJCQUEyQixHQUFHLDhCQUE4QixrQkFBa0IsMkJBQTJCLGVBQWUsc0JBQXNCLGtCQUFrQixzQkFBc0IsMkJBQTJCLEdBQUcsa0JBQWtCLGdCQUFnQix3QkFBd0Isa0JBQWtCLDhCQUE4QixvQkFBb0Isb0JBQW9CLDhCQUE4Qix3QkFBd0IsZ0JBQWdCLHNCQUFzQiwyQkFBMkIsdUJBQXVCLDBCQUEwQiw2QkFBNkIsR0FBRyx3QkFBd0Isa0JBQWtCLEdBQUcseUJBQXlCLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsaUJBQWlCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLDJCQUEyQiwyQkFBMkIsZ0JBQWdCLHFCQUFxQixHQUFHLDRDQUE0QywwQkFBMEIsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsMkJBQTJCLG9CQUFvQixzQkFBc0IsZ0JBQWdCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLHVCQUF1QixtQkFBbUIsc0JBQXNCLEdBQUcsdUJBQXVCLGlCQUFpQixvQkFBb0IsR0FBRyxpQ0FBaUMsWUFBWSxzQkFBc0Isa0JBQWtCLEdBQUcsbUJBQW1CLG9CQUFvQix3QkFBd0IsOEJBQThCLHNCQUFzQixnQkFBZ0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDBCQUEwQixnQkFBZ0IsMEJBQTBCLGtCQUFrQixrQ0FBa0Msc0JBQXNCLEdBQUcsb0JBQW9CLGNBQWMsdUJBQXVCLEdBQUcsaUJBQWlCLFlBQVksR0FBRyxvQkFBb0IsbUJBQW1CLG9CQUFvQixHQUFHLDJCQUEyQiwyQkFBMkIsR0FBRywrQkFBK0Isb0JBQW9CLEdBQUcsbUJBQW1CLGdDQUFnQyxHQUFHLG1CQUFtQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsd0NBQXdDLG1CQUFtQix5QkFBeUIsMkJBQTJCLDBCQUEwQixvQkFBb0IsZ0JBQWdCLGtDQUFrQyxHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLEdBQUcseUJBQXlCLG1CQUFtQixtQkFBbUIsc0JBQXNCLHlCQUF5QixHQUFHLHFCQUFxQixtQkFBbUIsc0JBQXNCLEdBQUcsNkJBQTZCLG9CQUFvQixlQUFlLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1CQUFtQiw0QkFBNEIsR0FBRyxvQkFBb0IsaUJBQWlCLHFCQUFxQixrQkFBa0IsMkJBQTJCLHNCQUFzQiwyQkFBMkIsR0FBRywyQkFBMkIsOEJBQThCLEdBQUcsc0JBQXNCLGlCQUFpQixvQkFBb0IsR0FBRyxhQUFhLGtCQUFrQixHQUFHLHFCQUFxQjtBQUN4b1c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CK0Y7QUFDL0YsWUFBNkY7O0FBRTdGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSXhCLGlFQUFlLDBGQUFjLE1BQU0sRTs7Ozs7Ozs7OztBQ1p0Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7OztBQzVRMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsMENBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlU7QUFDTjtBQUNNOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtEQUF5QjtBQUN6QixPQUFPLFdBQVcsR0FBRyw2Q0FBTzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCLEVBQUUsZ0VBQTBCOztBQUU1Qjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsNkNBQU87QUFDaEM7QUFDQSxHQUFHO0FBQ0gsaUNBQWlDLDREQUFzQjtBQUN2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDLDBCQUEwQixZQUFZO0FBQ3RDLDJCQUEyQixhQUFhO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsU0FBUztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0Esb0NBQW9DLDBDQUFJO0FBQ3hDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9ELGNBQWM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBTzs7QUFFN0I7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1MwQjtBQUNNOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUEsOENBQThDLDBDQUFJO0FBQ2xELDJCQUEyQiw2Q0FBTztBQUNsQztBQUNBLHVEQUF1RCw2Q0FBTztBQUM5RDtBQUNBLGtEQUFrRCwwQ0FBSTtBQUN0RCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkRBQTJELDZDQUFPO0FBQ2xFO0FBQ0Esd0RBQXdELDBDQUFJO0FBQzVELE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLE9BQU8sRTs7Ozs7Ozs7Ozs7Ozs7QUN6RnRCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRTs7Ozs7O1VDdEJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNFOztBQUVsQywrQ0FBTSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENTUyBSRVNFVCBCRUdJTiAqL1xcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIC1hcHBsZS1zeXN0ZW0sXFxuICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAg4oCcU2Vnb2UgVUnigJ0sXFxuICAgIOKAnFJvYm90b+KAnSxcXG4gICAg4oCcT3h5Z2Vu4oCdLFxcbiAgICDigJxVYnVudHXigJ0sXFxuICAgIOKAnENhbnRhcmVsbOKAnSxcXG4gICAg4oCcRmlyYSBTYW5z4oCdLFxcbiAgICDigJxEcm9pZCBTYW5z4oCdLFxcbiAgICDigJxIZWx2ZXRpY2EgTmV1ZeKAnSxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOjpiZWZvcmUsXFxuYmxvY2txdW90ZTo6YWZ0ZXIsXFxucTo6YmVmb3JlLFxcbnE6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBDU1MgUkVTRVQgRU5EICovXFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGY7XFxufVxcblxcbi8qIFNJREVCQVIgKi9cXG4uc2lkZS1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjUlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4ucHJvamVjdC1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIC8qIGJvcmRlci1yYWRpdXM6IC41cmVtOyAqL1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5wcm9qZWN0LWJ0bjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNnJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm90dG9tOiAwLjVyZW07XFxuICBmbG9hdDogcmlnaHQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhmO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4ucHJvamVjdC1idG46aG92ZXIgLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5wcm9qZWN0LXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjA7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDhmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzA4ZjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtbmFtZSB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2F2ZS1wcm9qZWN0LWJ0biB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIFRPRE8gTElTVCAqL1xcbi50b2RvLWxpc3Qge1xcbiAgZmxleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMwOGY7XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50b2RvLWNoZWNrYm94IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRvZG8tZHVlLWRhdGUge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50b2RvLWFjdGlvbnMtd3JhcHBlciB7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kby1lZGl0LFxcbi50b2RvLWRlbGV0ZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjNDhmO1xcbn1cXG5cXG4ucHJpb3JpdHktbWlkIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2ZjMDtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZjYwO1xcbn1cXG5cXG4vKiBBREQgVE9ETyBGT1JNICovXFxuLmFkZC10b2RvLWJ0biB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzA4ZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjMDhmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5uZXctdG9kby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmV3LXRvZG8td3JhcHBlciAqIHtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4ubmV3LXRvZG8tdGl0bGUge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogTU9EQUwgQk9YICovXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBhO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICB3aWR0aDogMzYwcHg7XFxuICBtYXJnaW46IDE1JSBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHN0cm9uZyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2UtYnRuIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0JBQW9CO0FB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QUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDU1MgUkVTRVQgQkVHSU4gKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICAtYXBwbGUtc3lzdGVtLFxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIOKAnFNlZ29lIFVJ4oCdLFxcbiAgICDigJxSb2JvdG/igJ0sXFxuICAgIOKAnE94eWdlbuKAnSxcXG4gICAg4oCcVWJ1bnR14oCdLFxcbiAgICDigJxDYW50YXJlbGzigJ0sXFxuICAgIOKAnEZpcmEgU2Fuc+KAnSxcXG4gICAg4oCcRHJvaWQgU2Fuc+KAnSxcXG4gICAg4oCcSGVsdmV0aWNhIE5ldWXigJ0sXFxuICAgIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTo6YmVmb3JlLFxcbmJsb2NrcXVvdGU6OmFmdGVyLFxcbnE6OmJlZm9yZSxcXG5xOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogQ1NTIFJFU0VUIEVORCAqL1xcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhmO1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxuLnNpZGUtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1JTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuLnByb2plY3QtYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICAvKiBib3JkZXItcmFkaXVzOiAuNXJlbTsgKi9cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ucHJvamVjdC1idG46Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjZyZW07XFxuICByaWdodDogMXJlbTtcXG4gIGJvdHRvbTogMC41cmVtO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnByb2plY3QtYnRuOmhvdmVyIC5wcm9qZWN0LWRlbGV0ZS1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjYwO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzA4ZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMwOGY7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW5hbWUge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNhdmUtcHJvamVjdC1idG4ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBUT0RPIExJU1QgKi9cXG4udG9kby1saXN0IHtcXG4gIGZsZXg6IDE7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMDhmO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kby1jaGVja2JveCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udG9kby1hY3Rpb25zLXdyYXBwZXIge1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZG8tZWRpdCxcXG4udG9kby1kZWxldGUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzQ4ZjtcXG59XFxuXFxuLnByaW9yaXR5LW1pZCB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmYzA7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2Y2MDtcXG59XFxuXFxuLyogQUREIFRPRE8gRk9STSAqL1xcbi5hZGQtdG9kby1idG4ge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwOGY7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzA4ZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubmV3LXRvZG8td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5ldy10b2RvLXdyYXBwZXIgKiB7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLm5ldy10b2RvLXRpdGxlIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIE1PREFMIEJPWCAqL1xcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBzdHJvbmcge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm1vZGFsLWNsb3NlLWJ0biB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdG9kb3MgPSBbXSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgdGhpcy50b2Rvcy5wdXNoKG5ldyBUb2RvKHRvZG8pKTtcbiAgfVxuXG4gIGRlbGV0ZVRvZG8odG9kb0luZGV4KSB7XG4gICAgdGhpcy50b2Rvcy5zcGxpY2UodG9kb0luZGV4LCAxKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJztcblxuY29uc3QgZ2V0RGF0ZVN0cmluZyA9IChkYXRlKSA9PiB7XG4gIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSAtIGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG4gIHJldHVybiBkYXRlLnRvSlNPTigpLnNsaWNlKDAsIDEwKTtcbn07XG5cbmxldCByZW5kZXJTaWRlQmFyO1xubGV0IHJlbmRlclRvZG9zO1xuXG5zdG9yYWdlLmNoZWNrTG9jYWxTdG9yYWdlKCk7XG5jb25zdCB7IHByb2plY3RzIH0gPSBzdG9yYWdlO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xubWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxuY29uc3QgcmVuZGVyID0gKHByb2plY3QgPSB7fSkgPT4ge1xuICBzdG9yYWdlLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuXG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3Qgc2lkZUJhciA9IHJlbmRlclNpZGVCYXIocHJvamVjdHMpO1xuICBtYWluLmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuXG4gIGxldCB0b2Rvc0NvbnRhaW5lcjtcbiAgaWYgKHByb2plY3QgaW5zdGFuY2VvZiBQcm9qZWN0KSB7XG4gICAgdG9kb3NDb250YWluZXIgPSByZW5kZXJUb2Rvcyhwcm9qZWN0KTtcbiAgfSBlbHNlIHtcbiAgICB0b2Rvc0NvbnRhaW5lciA9IHJlbmRlclRvZG9zKHN0b3JhZ2UuZGVmYXVsdFByb2plY3QpO1xuICB9XG5cbiAgbWFpbi5hcHBlbmRDaGlsZCh0b2Rvc0NvbnRhaW5lcik7XG59O1xuXG5jbGFzcyBUb2RvRm9ybSB7XG4gIGNvbnN0cnVjdG9yKC4uLnBhcmFtcykge1xuICAgIFt0aGlzLnRvZG9PYmosIHRoaXMucHJvamVjdF0gPSBwYXJhbXM7XG4gICAgLy8gbGV0IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHk7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUgPSAnJywgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSA9IGdldERhdGVTdHJpbmcobmV3IERhdGUoKSksIHByaW9yaXR5ID0gJycsXG4gICAgfSA9IHRoaXMudG9kb09iajtcblxuICAgIHRoaXMudGl0bGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0aGlzLmR1ZURhdGVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGhpcy5wcmlvcml0eUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICB0aGlzLnRpdGxlRmllbGQudmFsdWUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uRmllbGQudmFsdWUgPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGVGaWVsZC52YWx1ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eUZpZWxkLnZhbHVlID0gcHJpb3JpdHk7XG5cbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICByZW5kZXIoKSB7IC8vIGRlZmluZSB0eXBlIG9mIGJ1dHRvbiBhY3Rpb25cbiAgICB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBTVFlMSU5HIEZPUk0gRUxFTUVOVFNcbiAgICB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLXdyYXBwZXInKTtcbiAgICB0aGlzLnRpdGxlRmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tdGl0bGUnKTtcbiAgICB0aGlzLnRpdGxlRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgIHRoaXMuZGVzY3JpcHRpb25GaWVsZC5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1kZXNjcmlwdGlvbicpO1xuICAgIHRoaXMuZGVzY3JpcHRpb25GaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgdGhpcy5kdWVEYXRlRmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tZHVlLWRhdGUnKTtcbiAgICB0aGlzLmR1ZURhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHRoaXMucHJpb3JpdHlGaWVsZC5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1wcmlvcml0eScpO1xuICAgIHRoaXMucHJpb3JpdHlGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmV3LXRvZG8tcHJpb3JpdHknKTtcblxuICAgIGxldCBbbG93U2VsZWN0ZWQsIG1pZFNlbGVjdGVkLCBoaWdoU2VsZWN0ZWRdID0gWycnLCAnJywgJyddO1xuXG4gICAgc3dpdGNoICh0aGlzLnByaW9yaXR5KSB7XG4gICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgaGlnaFNlbGVjdGVkID0gJ3NlbGVjdGVkID0gXCJzZWxlY3RlZFwiJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtaWQnOlxuICAgICAgICBtaWRTZWxlY3RlZCA9ICdzZWxlY3RlZCA9IFwic2VsZWN0ZWRcIic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbG93U2VsZWN0ZWQgPSAnc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCInO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnByaW9yaXR5RmllbGQuaW5uZXJIVE1MID0gYFxuICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIiAke2xvd1NlbGVjdGVkfT5sb3c8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwibWlkXCIgJHttaWRTZWxlY3RlZH0+bWlkPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIiAke2hpZ2hTZWxlY3RlZH0+aGlnaDwvb3B0aW9uPlxuICAgIGA7XG5cbiAgICAvLyBNT0RBTCBCT1hcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2hpZGRlbicpO1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG4gICAgY29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtb2RhbENsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NlLWJ0bicpO1xuICAgIG1vZGFsQ2xvc2VCdG4udGV4dENvbnRlbnQgPSAn4pyVJztcbiAgICBtb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gICAgY29uc3QgbW9kYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbENsb3NlQnRuKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgLy8gU0FWRSBCVE5cbiAgICB0aGlzLnNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLnNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnc2F2ZS10b2RvLWJ0bicpO1xuICAgIHRoaXMuc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdzYXZlJztcbiAgICB0aGlzLnNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdUb2RvT2JqID0ge1xuICAgICAgICB0aXRsZTogdGhpcy50aXRsZUZpZWxkLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbkZpZWxkLnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiB0aGlzLmR1ZURhdGVGaWVsZC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHlGaWVsZC52YWx1ZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIENIRUNLIElGIEZJRUxEIElTIEVNUFRZXG4gICAgICBjb25zdCBpbnB1dElzVmFsaWQgPSBPYmplY3QuZW50cmllcyhuZXdUb2RvT2JqKS5ldmVyeSgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkWzFdID09PSAnJykge1xuICAgICAgICAgIG1vZGFsVGV4dC5pbm5lckhUTUwgPSBgVGhlIDxzdHJvbmc+JHtmaWVsZFswXX08L3N0cm9uZz4gZmllbGQgY2FuJ3QgYmUgZW1wdHkhYDtcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5wdXRJc1ZhbGlkKSB7XG4gICAgICAgIGlmICh0aGlzLnRvZG9PYmogaW5zdGFuY2VvZiBUb2RvKSB7XG4gICAgICAgICAgdGhpcy50b2RvT2JqLnVwZGF0ZVRvZG8obmV3VG9kb09iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9qZWN0LmFkZFRvZG8obmV3VG9kb09iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKHRoaXMucHJvamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGVGaWVsZCk7XG4gICAgdGhpcy50b2RvRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRlc2NyaXB0aW9uRmllbGQpO1xuICAgIHRoaXMudG9kb0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kdWVEYXRlRmllbGQpO1xuICAgIHRoaXMudG9kb0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wcmlvcml0eUZpZWxkKTtcbiAgICB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuc2F2ZUJ0bik7IC8vIEJVVFRPTiFcblxuICAgIHJldHVybiB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyO1xuICB9XG59XG5cbnJlbmRlclRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAvLyBBREQgRUFDSCBUT0RPIElURU1cbiAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nLCBgcHJpb3JpdHktJHt0b2RvLnByaW9yaXR5fWApO1xuICAgIGNvbnN0IHRvZG9DaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0NoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIHRvZG9DaGVjay5jbGFzc0xpc3QuYWRkKCd0b2RvLWNoZWNrJyk7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWR1ZS1kYXRlJyk7XG4gICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgY29uc3QgdG9kb0FjdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRvZG9BY3Rpb25zV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0b2RvLWFjdGlvbnMtd3JhcHBlcicpO1xuXG4gICAgbGV0IHRvZG9FZGl0Rm9ybSA9IG5ldyBUb2RvRm9ybSh0b2RvLCBwcm9qZWN0KTtcbiAgICB0b2RvRWRpdEZvcm0gPSB0b2RvRWRpdEZvcm0ucmVuZGVyKCk7XG4gICAgdG9kb0VkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgY29uc3QgdG9kb0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWVkaXQtYnRuJyk7XG4gICAgdG9kb0VkaXRCdG4udGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgdG9kb0VkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2RvRWRpdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlbGV0ZS1idG4nKTtcbiAgICB0b2RvRGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgdG9kb0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByb2plY3QuZGVsZXRlVG9kbyhpbmRleCk7XG4gICAgICByZW5kZXIocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICB0b2RvQWN0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb0VkaXRCdG4pO1xuICAgIHRvZG9BY3Rpb25zV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnRuKTtcblxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9DaGVjayk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0FjdGlvbnNXcmFwcGVyKTtcblxuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcblxuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FZGl0Rm9ybSk7XG4gIH0pO1xuXG4gIC8vIE5FVyBUT0RPcyBGT1JNXG4gIGxldCB0b2RvTmV3Rm9ybSA9IG5ldyBUb2RvRm9ybSh7fSwgcHJvamVjdCk7XG4gIHRvZG9OZXdGb3JtID0gdG9kb05ld0Zvcm0ucmVuZGVyKCk7XG4gIHRvZG9OZXdGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTmV3Rm9ybSk7XG5cbiAgLy8gQUREIFRPRE8gQlVUVE9OXG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVG9kb0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1idG4nKTtcbiAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9ICdBZGQgdG9kbyc7XG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb05ld0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH0pO1xuICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKTtcblxuICByZXR1cm4gdG9kb3NDb250YWluZXI7XG59O1xuXG4vLyBSRU5ERVIgU0lERUJBUlxucmVuZGVyU2lkZUJhciA9IChwcm9qZWN0cykgPT4ge1xuICAvLyBDTEVBUiBTSURFQkFSIFRPIFJFTkRFUiBVUERBVEVEIExJU1RcbiAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtYmFyJyk7XG4gIHNpZGVCYXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgLy8gUkVOREVSIEVBQ0ggUFJPSkVDVCBOQU1FIElOIFNJREVCQVJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpO1xuICAgIHByb2plY3RCdG4udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbmRlcihwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGlmIChpbmRleCAhPT0gMCkge1xuICAgICAgY29uc3QgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS1idG4nKTtcbiAgICAgIHByb2plY3REZWxldGVCdG4udGV4dENvbnRlbnQgPSAnIFggJztcbiAgICAgIHByb2plY3REZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gICAgfVxuXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChwcm9qZWN0QnRuKTtcbiAgfSk7XG5cbiAgLy8gIE5FVyBQUk9KRUNUIEZPUk1cbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3Qtd3JhcHBlcicsICdoaWRkZW4nKTtcblxuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1uYW1lJyk7XG5cbiAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzYXZlQnRuLmNsYXNzTGlzdC5hZGQoJ3NhdmUtcHJvamVjdC1idG4nKTtcbiAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdzYXZlJztcbiAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KGlucHV0RmllbGQudmFsdWUpKTtcblxuICAgIHJlbmRlcihwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXSk7XG4gIH0pO1xuXG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzYXZlQnRuKTtcblxuICBzaWRlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcblxuICAvLyBBREQgUFJPSkVDVCBCVVRUT05cbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ0bicpO1xuICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcblxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9KTtcblxuICBzaWRlQmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG4gIHJldHVybiBzaWRlQmFyO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyLCByZW5kZXJTaWRlQmFyIH07IiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmxldCBleGFtcGxlVG9kb3MgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0NyZWF0ZSBHaXRIdWIgUmVwbycsXG4gICAgZGVzY3JpcHRpb246ICdQdXNoIGNvbmZpZyBmaWxlcyB0byBHaXRIdWInLFxuICAgIGR1ZURhdGU6ICcyMDIxLTA0LTI4JyxcbiAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDb25maWd1cmUgTGludGVycycsXG4gICAgZGVzY3JpcHRpb246ICdTZXQgdXAgbGludGVycyBvbiBsb2NhbCBlbnZpcm9ubWVudCcsXG4gICAgZHVlRGF0ZTogJzIwMjEtMDQtMjknLFxuICAgIHByaW9yaXR5OiAnbWlkJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU3VibWl0IFByb2plY3QgZm9yIFJldmlldycsXG4gICAgZGVzY3JpcHRpb246ICdTdWJtaXQgcmV2aWV3IGZvcm0nLFxuICAgIGR1ZURhdGU6ICcyMDIxLTA0LTMwJyxcbiAgICBwcmlvcml0eTogJ2xvdycsXG4gIH0sXG5dO1xuXG5sZXQgZXhhbXBsZVByb2plY3RzID0gW1xuICB7XG4gICAgbmFtZTogJ3dvcmsnLFxuICAgIHRvZG9zOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnbGludGVycycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnY2hlY2sgZm9yIGxpbnRlciBlcnJvcnMnLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMC0wOS0wMycsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAndGVzdHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ2NoZWNrIGZvciB0ZXN0IGVycm9ycycsXG4gICAgICAgIGR1ZURhdGU6ICcyMDIwLTA5LTAzJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdwZXJzb25hbCcsXG4gICAgdG9kb3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdyZWFkbWUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ3VwZGF0ZSByZWFkbWUgb24gZ2l0aHViJyxcbiAgICAgICAgZHVlRGF0ZTogJzIwMjAtMDktMDMnLFxuICAgICAgICBwcmlvcml0eTogJ21pZCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5jb25zdCBwcm9qZWN0c0FyciA9IFtdO1xuXG5leGFtcGxlVG9kb3MgPSBleGFtcGxlVG9kb3MubWFwKCh0b2RvKSA9PiBuZXcgVG9kbyh0b2RvKSk7XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCd0b2RvcycsIGV4YW1wbGVUb2Rvcyk7XG5wcm9qZWN0c0Fyci5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcbmV4YW1wbGVQcm9qZWN0cyA9IGV4YW1wbGVQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IG5ldyBQcm9qZWN0KHByb2plY3QubmFtZSwgcHJvamVjdC50b2RvcykpO1xuZXhhbXBsZVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgcHJvamVjdC50b2RvcyA9IHByb2plY3QudG9kb3MubWFwKCh0b2RvKSA9PiBuZXcgVG9kbyh0b2RvKSk7XG59KTtcbnByb2plY3RzQXJyLnB1c2goLi4uZXhhbXBsZVByb2plY3RzKTtcblxuY29uc3Qgc3RvcmFnZSA9IHtcbiAgcHJvamVjdHM6IHByb2plY3RzQXJyLFxuICBkZWZhdWx0UHJvamVjdDogcHJvamVjdHNBcnJbMF0sXG5cbiAgY2hlY2tMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbGV0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgaWYgKHN0b3JlZFByb2plY3RzID09PSBudWxsKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShzdG9yZWRQcm9qZWN0cyk7XG4gICAgICBzdG9yZWRQcm9qZWN0cyA9IHN0b3JlZFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gbmV3IFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LnRvZG9zKSk7XG4gICAgICBzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MgPSBwcm9qZWN0LnRvZG9zLm1hcCgodG9kbykgPT4gbmV3IFRvZG8odG9kbykpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnByb2plY3RzID0gc3RvcmVkUHJvamVjdHM7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3RzKSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSxcbiAgfSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICB1cGRhdGVUb2RvKHtcbiAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LFxuICB9KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL3JlbmRlcic7XG5cbnJlbmRlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=