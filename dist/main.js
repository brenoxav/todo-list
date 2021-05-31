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
/* harmony export */   "renderSideBar": () => (/* binding */ renderSideBar),
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");




const getDateString = (date) => {
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toJSON().slice(0, 10);
};

// let renderSideBar;
// let renderTodos;

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

  const sideBar = renderSideBar(projects);// eslint-disable-line no-use-before-define
  main.appendChild(sideBar);

  let todosContainer;
  if (project instanceof _project__WEBPACK_IMPORTED_MODULE_0__.default) {
    todosContainer = renderTodos(project);// eslint-disable-line no-use-before-define
  } else {
    todosContainer = renderTodos(_storage__WEBPACK_IMPORTED_MODULE_2__.default.defaultProject);// eslint-disable-line no-use-before-define
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

const renderTodos = (project) => {
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
const renderSideBar = (projects) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/Y2RkNiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQU87O0FBRTdCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdTMEI7QUFDTTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLDhDQUE4QywwQ0FBSTtBQUNsRCwyQkFBMkIsNkNBQU87QUFDbEM7QUFDQSx1REFBdUQsNkNBQU87QUFDOUQ7QUFDQSxrREFBa0QsMENBQUk7QUFDdEQsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJEQUEyRCw2Q0FBTztBQUNsRTtBQUNBLHdEQUF3RCwwQ0FBSTtBQUM1RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7Ozs7Ozs7Ozs7O0FDekZ0QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEU7Ozs7OztVQ3RCbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDRTs7QUFFbEMsK0NBQU0sRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDU1MgUkVTRVQgQkVHSU4gKi9cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICAtYXBwbGUtc3lzdGVtLFxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIOKAnFNlZ29lIFVJ4oCdLFxcbiAgICDigJxSb2JvdG/igJ0sXFxuICAgIOKAnE94eWdlbuKAnSxcXG4gICAg4oCcVWJ1bnR14oCdLFxcbiAgICDigJxDYW50YXJlbGzigJ0sXFxuICAgIOKAnEZpcmEgU2Fuc+KAnSxcXG4gICAg4oCcRHJvaWQgU2Fuc+KAnSxcXG4gICAg4oCcSGVsdmV0aWNhIE5ldWXigJ0sXFxuICAgIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTo6YmVmb3JlLFxcbmJsb2NrcXVvdGU6OmFmdGVyLFxcbnE6OmJlZm9yZSxcXG5xOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogQ1NTIFJFU0VUIEVORCAqL1xcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhmO1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxuLnNpZGUtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1JTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuLnByb2plY3QtYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICAvKiBib3JkZXItcmFkaXVzOiAuNXJlbTsgKi9cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ucHJvamVjdC1idG46Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjZyZW07XFxuICByaWdodDogMXJlbTtcXG4gIGJvdHRvbTogMC41cmVtO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLnByb2plY3QtYnRuOmhvdmVyIC5wcm9qZWN0LWRlbGV0ZS1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4ucHJvamVjdC1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjYwO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzA4ZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMwOGY7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW5hbWUge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNhdmUtcHJvamVjdC1idG4ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBUT0RPIExJU1QgKi9cXG4udG9kby1saXN0IHtcXG4gIGZsZXg6IDE7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMDhmO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udG9kby1jaGVja2JveCB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gIG1hcmdpbjogMCAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udG9kby1hY3Rpb25zLXdyYXBwZXIge1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZG8tZWRpdCxcXG4udG9kby1kZWxldGUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktbG93IHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzQ4ZjtcXG59XFxuXFxuLnByaW9yaXR5LW1pZCB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmYzA7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2Y2MDtcXG59XFxuXFxuLyogQUREIFRPRE8gRk9STSAqL1xcbi5hZGQtdG9kby1idG4ge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwOGY7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzA4ZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubmV3LXRvZG8td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5ldy10b2RvLXdyYXBwZXIgKiB7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLm5ldy10b2RvLXRpdGxlIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIE1PREFMIEJPWCAqL1xcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwYTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBzdHJvbmcge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm1vZGFsLWNsb3NlLWJ0biB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBp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O0FBRUEsY0FBYztBQUNkO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1NTIFJFU0VUIEJFR0lOICovXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTpcXG4gICAgLWFwcGxlLXN5c3RlbSxcXG4gICAgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICDigJxTZWdvZSBVSeKAnSxcXG4gICAg4oCcUm9ib3Rv4oCdLFxcbiAgICDigJxPeHlnZW7igJ0sXFxuICAgIOKAnFVidW50deKAnSxcXG4gICAg4oCcQ2FudGFyZWxs4oCdLFxcbiAgICDigJxGaXJhIFNhbnPigJ0sXFxuICAgIOKAnERyb2lkIFNhbnPigJ0sXFxuICAgIOKAnEhlbHZldGljYSBOZXVl4oCdLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6OmJlZm9yZSxcXG5ibG9ja3F1b3RlOjphZnRlcixcXG5xOjpiZWZvcmUsXFxucTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIENTUyBSRVNFVCBFTkQgKi9cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZjtcXG59XFxuXFxuLyogU0lERUJBUiAqL1xcbi5zaWRlLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNSU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbi5wcm9qZWN0LWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgLyogYm9yZGVyLXJhZGl1czogLjVyZW07ICovXFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnByb2plY3QtYnRuOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC42cmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBib3R0b206IDAuNXJlbTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOGY7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5wcm9qZWN0LWJ0bjpob3ZlciAucHJvamVjdC1kZWxldGUtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnByb2plY3Qtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2MDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwOGY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMDhmO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5uZXctcHJvamVjdC1uYW1lIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5zYXZlLXByb2plY3QtYnRuIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogVE9ETyBMSVNUICovXFxuLnRvZG8tbGlzdCB7XFxuICBmbGV4OiAxO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzA4ZjtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWE7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3gge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udG9kby1kdWUtZGF0ZSB7XFxuICBtYXJnaW46IDAgMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRvZG8tYWN0aW9ucy13cmFwcGVyIHtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi50b2RvLWVkaXQsXFxuLnRvZG8tZGVsZXRlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICM0OGY7XFxufVxcblxcbi5wcmlvcml0eS1taWQge1xcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjZmMwO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmNjA7XFxufVxcblxcbi8qIEFERCBUT0RPIEZPUk0gKi9cXG4uYWRkLXRvZG8tYnRuIHtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDhmO1xcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICMwOGY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLm5ldy10b2RvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXctdG9kby13cmFwcGVyICoge1xcbiAgbWF4LXdpZHRoOiA3NSU7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5uZXctdG9kby10aXRsZSB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBNT0RBTCBCT1ggKi9cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMGE7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiAzNjBweDtcXG4gIG1hcmdpbjogMTUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgc3Ryb25nIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5tb2RhbC1jbG9zZS1idG4ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRvZG9zID0gW10pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9kb3MgPSB0b2RvcztcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMudG9kb3MucHVzaChuZXcgVG9kbyh0b2RvKSk7XG4gIH1cblxuICBkZWxldGVUb2RvKHRvZG9JbmRleCkge1xuICAgIHRoaXMudG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc3RvcmFnZSc7XG5cbmNvbnN0IGdldERhdGVTdHJpbmcgPSAoZGF0ZSkgPT4ge1xuICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgLSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICByZXR1cm4gZGF0ZS50b0pTT04oKS5zbGljZSgwLCAxMCk7XG59O1xuXG4vLyBsZXQgcmVuZGVyU2lkZUJhcjtcbi8vIGxldCByZW5kZXJUb2Rvcztcblxuc3RvcmFnZS5jaGVja0xvY2FsU3RvcmFnZSgpO1xuY29uc3QgeyBwcm9qZWN0cyB9ID0gc3RvcmFnZTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbm1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbmNvbnN0IHJlbmRlciA9IChwcm9qZWN0ID0ge30pID0+IHtcbiAgc3RvcmFnZS51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcblxuICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IHNpZGVCYXIgPSByZW5kZXJTaWRlQmFyKHByb2plY3RzKTsvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIG1haW4uYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG5cbiAgbGV0IHRvZG9zQ29udGFpbmVyO1xuICBpZiAocHJvamVjdCBpbnN0YW5jZW9mIFByb2plY3QpIHtcbiAgICB0b2Rvc0NvbnRhaW5lciA9IHJlbmRlclRvZG9zKHByb2plY3QpOy8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgfSBlbHNlIHtcbiAgICB0b2Rvc0NvbnRhaW5lciA9IHJlbmRlclRvZG9zKHN0b3JhZ2UuZGVmYXVsdFByb2plY3QpOy8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgfVxuXG4gIG1haW4uYXBwZW5kQ2hpbGQodG9kb3NDb250YWluZXIpO1xufTtcblxuY2xhc3MgVG9kb0Zvcm0ge1xuICBjb25zdHJ1Y3RvciguLi5wYXJhbXMpIHtcbiAgICBbdGhpcy50b2RvT2JqLCB0aGlzLnByb2plY3RdID0gcGFyYW1zO1xuICAgIC8vIGxldCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5O1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlID0gJycsIGRlc2NyaXB0aW9uID0gJycsIGR1ZURhdGUgPSBnZXREYXRlU3RyaW5nKG5ldyBEYXRlKCkpLCBwcmlvcml0eSA9ICcnLFxuICAgIH0gPSB0aGlzLnRvZG9PYmo7XG5cbiAgICB0aGlzLnRpdGxlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMuZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGhpcy5kdWVEYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRoaXMucHJpb3JpdHlGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gICAgdGhpcy50aXRsZUZpZWxkLnZhbHVlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbkZpZWxkLnZhbHVlID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlRmllbGQudmFsdWUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHlGaWVsZC52YWx1ZSA9IHByaW9yaXR5O1xuXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgcmVuZGVyKCkgeyAvLyBkZWZpbmUgdHlwZSBvZiBidXR0b24gYWN0aW9uXG4gICAgdGhpcy50b2RvRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gU1RZTElORyBGT1JNIEVMRU1FTlRTXG4gICAgdGhpcy50b2RvRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctdG9kby13cmFwcGVyJyk7XG4gICAgdGhpcy50aXRsZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLXRpdGxlJyk7XG4gICAgdGhpcy50aXRsZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uRmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tZGVzY3JpcHRpb24nKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uRmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgIHRoaXMuZHVlRGF0ZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWR1ZS1kYXRlJyk7XG4gICAgdGhpcy5kdWVEYXRlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICB0aGlzLnByaW9yaXR5RmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tcHJpb3JpdHknKTtcbiAgICB0aGlzLnByaW9yaXR5RmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25ldy10b2RvLXByaW9yaXR5Jyk7XG5cbiAgICBsZXQgW2xvd1NlbGVjdGVkLCBtaWRTZWxlY3RlZCwgaGlnaFNlbGVjdGVkXSA9IFsnJywgJycsICcnXTtcblxuICAgIHN3aXRjaCAodGhpcy5wcmlvcml0eSkge1xuICAgICAgY2FzZSAnaGlnaCc6XG4gICAgICAgIGhpZ2hTZWxlY3RlZCA9ICdzZWxlY3RlZCA9IFwic2VsZWN0ZWRcIic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWlkJzpcbiAgICAgICAgbWlkU2VsZWN0ZWQgPSAnc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCInO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxvd1NlbGVjdGVkID0gJ3NlbGVjdGVkID0gXCJzZWxlY3RlZFwiJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5wcmlvcml0eUZpZWxkLmlubmVySFRNTCA9IGBcbiAgICA8b3B0aW9uIHZhbHVlPVwibG93XCIgJHtsb3dTZWxlY3RlZH0+bG93PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1pZFwiICR7bWlkU2VsZWN0ZWR9Pm1pZDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCIgJHtoaWdoU2VsZWN0ZWR9PmhpZ2g8L29wdGlvbj5cbiAgICBgO1xuXG4gICAgLy8gTU9EQUwgQk9YXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdoaWRkZW4nKTtcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY29udGVudCcpO1xuICAgIGNvbnN0IG1vZGFsQ2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbW9kYWxDbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jbG9zZS1idG4nKTtcbiAgICBtb2RhbENsb3NlQnRuLnRleHRDb250ZW50ID0gJ+KclSc7XG4gICAgbW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICAgIGNvbnN0IG1vZGFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxDbG9zZUJ0bik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsVGV4dCk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgIC8vIFNBVkUgQlROXG4gICAgdGhpcy5zYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5zYXZlQnRuLmNsYXNzTGlzdC5hZGQoJ3NhdmUtdG9kby1idG4nKTtcbiAgICB0aGlzLnNhdmVCdG4udGV4dENvbnRlbnQgPSAnc2F2ZSc7XG4gICAgdGhpcy5zYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbmV3VG9kb09iaiA9IHtcbiAgICAgICAgdGl0bGU6IHRoaXMudGl0bGVGaWVsZC52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb25GaWVsZC52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZTogdGhpcy5kdWVEYXRlRmllbGQudmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5RmllbGQudmFsdWUsXG4gICAgICB9O1xuXG4gICAgICAvLyBDSEVDSyBJRiBGSUVMRCBJUyBFTVBUWVxuICAgICAgY29uc3QgaW5wdXRJc1ZhbGlkID0gT2JqZWN0LmVudHJpZXMobmV3VG9kb09iaikuZXZlcnkoKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZFsxXSA9PT0gJycpIHtcbiAgICAgICAgICBtb2RhbFRleHQuaW5uZXJIVE1MID0gYFRoZSA8c3Ryb25nPiR7ZmllbGRbMF19PC9zdHJvbmc+IGZpZWxkIGNhbid0IGJlIGVtcHR5IWA7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGlucHV0SXNWYWxpZCkge1xuICAgICAgICBpZiAodGhpcy50b2RvT2JqIGluc3RhbmNlb2YgVG9kbykge1xuICAgICAgICAgIHRoaXMudG9kb09iai51cGRhdGVUb2RvKG5ld1RvZG9PYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJvamVjdC5hZGRUb2RvKG5ld1RvZG9PYmopO1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcih0aGlzLnByb2plY3QpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50b2RvRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlRmllbGQpO1xuICAgIHRoaXMudG9kb0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kZXNjcmlwdGlvbkZpZWxkKTtcbiAgICB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZHVlRGF0ZUZpZWxkKTtcbiAgICB0aGlzLnRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucHJpb3JpdHlGaWVsZCk7XG4gICAgdGhpcy50b2RvRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnNhdmVCdG4pOyAvLyBCVVRUT04hXG5cbiAgICByZXR1cm4gdGhpcy50b2RvRm9ybUNvbnRhaW5lcjtcbiAgfVxufVxuXG5jb25zdCByZW5kZXJUb2RvcyA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICB0b2Rvc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgLy8gQUREIEVBQ0ggVE9ETyBJVEVNXG4gIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJywgYHByaW9yaXR5LSR7dG9kby5wcmlvcml0eX1gKTtcbiAgICBjb25zdCB0b2RvQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9DaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICB0b2RvQ2hlY2suY2xhc3NMaXN0LmFkZCgndG9kby1jaGVjaycpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kdWUtZGF0ZScpO1xuICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgIGNvbnN0IHRvZG9BY3Rpb25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b2RvQWN0aW9uc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndG9kby1hY3Rpb25zLXdyYXBwZXInKTtcblxuICAgIGxldCB0b2RvRWRpdEZvcm0gPSBuZXcgVG9kb0Zvcm0odG9kbywgcHJvamVjdCk7XG4gICAgdG9kb0VkaXRGb3JtID0gdG9kb0VkaXRGb3JtLnJlbmRlcigpO1xuICAgIHRvZG9FZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIGNvbnN0IHRvZG9FZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1lZGl0LWJ0bicpO1xuICAgIHRvZG9FZGl0QnRuLnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgIHRvZG9FZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9kb0VkaXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9EZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgndG9kby1kZWxldGUtYnRuJyk7XG4gICAgdG9kb0RlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdkZWxldGUnO1xuICAgIHRvZG9EZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0LmRlbGV0ZVRvZG8oaW5kZXgpO1xuICAgICAgcmVuZGVyKHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgdG9kb0FjdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHRvZG9FZGl0QnRuKTtcbiAgICB0b2RvQWN0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodG9kb0RlbGV0ZUJ0bik7XG5cbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvQ2hlY2spO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9BY3Rpb25zV3JhcHBlcik7XG5cbiAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XG5cbiAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWRpdEZvcm0pO1xuICB9KTtcblxuICAvLyBORVcgVE9ET3MgRk9STVxuICBsZXQgdG9kb05ld0Zvcm0gPSBuZXcgVG9kb0Zvcm0oe30sIHByb2plY3QpO1xuICB0b2RvTmV3Rm9ybSA9IHRvZG9OZXdGb3JtLnJlbmRlcigpO1xuICB0b2RvTmV3Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb05ld0Zvcm0pO1xuXG4gIC8vIEFERCBUT0RPIEJVVFRPTlxuICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tYnRuJyk7XG4gIGFkZFRvZG9CdG4udGV4dENvbnRlbnQgPSAnQWRkIHRvZG8nO1xuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9OZXdGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9KTtcbiAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bik7XG5cbiAgcmV0dXJuIHRvZG9zQ29udGFpbmVyO1xufTtcblxuLy8gUkVOREVSIFNJREVCQVJcbmNvbnN0IHJlbmRlclNpZGVCYXIgPSAocHJvamVjdHMpID0+IHtcbiAgLy8gQ0xFQVIgU0lERUJBUiBUTyBSRU5ERVIgVVBEQVRFRCBMSVNUXG4gIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdzaWRlLWJhcicpO1xuICBzaWRlQmFyLmlubmVySFRNTCA9ICcnO1xuXG4gIC8vIFJFTkRFUiBFQUNIIFBST0pFQ1QgTkFNRSBJTiBTSURFQkFSXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcbiAgICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXIocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgIGNvbnN0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtYnRuJyk7XG4gICAgICBwcm9qZWN0RGVsZXRlQnRuLnRleHRDb250ZW50ID0gJyBYICc7XG4gICAgICBwcm9qZWN0RGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9qZWN0QnRuLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuICAgIH1cblxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XG4gIH0pO1xuXG4gIC8vICBORVcgUFJPSkVDVCBGT1JNXG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Byb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0LXdyYXBwZXInLCAnaGlkZGVuJyk7XG5cbiAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtbmFtZScpO1xuXG4gIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdzYXZlLXByb2plY3QtYnRuJyk7XG4gIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnc2F2ZSc7XG4gIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChpbnB1dEZpZWxkLnZhbHVlKSk7XG5cbiAgICByZW5kZXIocHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0pO1xuICB9KTtcblxuICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc2F2ZUJ0bik7XG5cbiAgc2lkZUJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG5cbiAgLy8gQUREIFBST0pFQ1QgQlVUVE9OXG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKTtcbiAgYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5cbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdQcm9qZWN0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgfSk7XG5cbiAgc2lkZUJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcblxuICByZXR1cm4gc2lkZUJhcjtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciwgcmVuZGVyU2lkZUJhciwgcmVuZGVyVG9kb3MgfTsiLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxubGV0IGV4YW1wbGVUb2RvcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnQ3JlYXRlIEdpdEh1YiBSZXBvJyxcbiAgICBkZXNjcmlwdGlvbjogJ1B1c2ggY29uZmlnIGZpbGVzIHRvIEdpdEh1YicsXG4gICAgZHVlRGF0ZTogJzIwMjEtMDQtMjgnLFxuICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0NvbmZpZ3VyZSBMaW50ZXJzJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCB1cCBsaW50ZXJzIG9uIGxvY2FsIGVudmlyb25tZW50JyxcbiAgICBkdWVEYXRlOiAnMjAyMS0wNC0yOScsXG4gICAgcHJpb3JpdHk6ICdtaWQnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTdWJtaXQgUHJvamVjdCBmb3IgUmV2aWV3JyxcbiAgICBkZXNjcmlwdGlvbjogJ1N1Ym1pdCByZXZpZXcgZm9ybScsXG4gICAgZHVlRGF0ZTogJzIwMjEtMDQtMzAnLFxuICAgIHByaW9yaXR5OiAnbG93JyxcbiAgfSxcbl07XG5cbmxldCBleGFtcGxlUHJvamVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiAnd29yaycsXG4gICAgdG9kb3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdsaW50ZXJzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdjaGVjayBmb3IgbGludGVyIGVycm9ycycsXG4gICAgICAgIGR1ZURhdGU6ICcyMDIwLTA5LTAzJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICd0ZXN0cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnY2hlY2sgZm9yIHRlc3QgZXJyb3JzJyxcbiAgICAgICAgZHVlRGF0ZTogJzIwMjAtMDktMDMnLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3BlcnNvbmFsJyxcbiAgICB0b2RvczogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogJ3JlYWRtZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndXBkYXRlIHJlYWRtZSBvbiBnaXRodWInLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMC0wOS0wMycsXG4gICAgICAgIHByaW9yaXR5OiAnbWlkJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmNvbnN0IHByb2plY3RzQXJyID0gW107XG5cbmV4YW1wbGVUb2RvcyA9IGV4YW1wbGVUb2Rvcy5tYXAoKHRvZG8pID0+IG5ldyBUb2RvKHRvZG8pKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ3RvZG9zJywgZXhhbXBsZVRvZG9zKTtcbnByb2plY3RzQXJyLnB1c2goZGVmYXVsdFByb2plY3QpO1xuZXhhbXBsZVByb2plY3RzID0gZXhhbXBsZVByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gbmV3IFByb2plY3QocHJvamVjdC5uYW1lLCBwcm9qZWN0LnRvZG9zKSk7XG5leGFtcGxlUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICBwcm9qZWN0LnRvZG9zID0gcHJvamVjdC50b2Rvcy5tYXAoKHRvZG8pID0+IG5ldyBUb2RvKHRvZG8pKTtcbn0pO1xucHJvamVjdHNBcnIucHVzaCguLi5leGFtcGxlUHJvamVjdHMpO1xuXG5jb25zdCBzdG9yYWdlID0ge1xuICBwcm9qZWN0czogcHJvamVjdHNBcnIsXG4gIGRlZmF1bHRQcm9qZWN0OiBwcm9qZWN0c0FyclswXSxcblxuICBjaGVja0xvY2FsU3RvcmFnZSgpIHtcbiAgICBsZXQgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICBpZiAoc3RvcmVkUHJvamVjdHMgPT09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzKTtcbiAgICAgIHN0b3JlZFByb2plY3RzID0gc3RvcmVkUHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiBuZXcgUHJvamVjdChwcm9qZWN0Lm5hbWUsIHByb2plY3QudG9kb3MpKTtcbiAgICAgIHN0b3JlZFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC50b2RvcyA9IHByb2plY3QudG9kb3MubWFwKCh0b2RvKSA9PiBuZXcgVG9kbyh0b2RvKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvamVjdHMgPSBzdG9yZWRQcm9qZWN0cztcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvamVjdHMpKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7IiwiY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LFxuICB9KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIHVwZGF0ZVRvZG8oe1xuICAgIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksXG4gIH0pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4vcmVuZGVyJztcblxucmVuZGVyKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==