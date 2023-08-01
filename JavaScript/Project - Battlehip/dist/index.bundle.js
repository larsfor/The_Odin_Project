(self["webpackChunkproject_battlehip"] = self["webpackChunkproject_battlehip"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    max-width: 600px;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(10, auto);
    grid-gap: 2px;
    background-color: #2196F3;
    padding: 2.5px;
}

.grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 4px;
    font-size: 20px;
}

form {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,aAAa;IACb,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;AACpB","sourcesContent":["body {\r\n    max-width: 600px;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.grid-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, auto);\r\n    grid-gap: 2px;\r\n    background-color: #2196F3;\r\n    padding: 2.5px;\r\n}\r\n\r\n.grid-container > div {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n    text-align: center;\r\n    padding: 4px;\r\n    font-size: 20px;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 2rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameInfo.js":
/*!*************************!*\
  !*** ./src/gameInfo.js ***!
  \*************************/
/***/ ((module) => {

const GameInfo = () => {
    return {
        curPlayer: null,
        curBoard: null,
        playerOne: null,
        playerTwo: null,
        boardOne: null,
        boardTwo: null,
    }
}

module.exports = GameInfo;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

const Gameboard = (player) => {
    let ships = [];
    let missed = [];
    let board = Array.from(Array(10), () => new Array(10).fill(0));

    const receiveAttack = (coords) => {
        const [x, y] = coords;
        const attack = board[x][y];

        const a = JSON.stringify(missed);
        const b = JSON.stringify(coords);
        const occupied = a.indexOf(b);

        // Check if the attack has been picked previously
        if ( occupied === 1 ||  attack === 'X' ) {
            return 'Coordinates already chosen, try again.';
        };

        // Check if the cell is a blank cell (0).
        // If not, the ship gets hit.
        if ( attack != 0 ) {
            const hitShip = attack;
            hitShip.hit();
            board[x][y] = 'X';

            // If all boats are sunk, it's game over!
            if ( allSunk() ) {
                return 'You lose!';
            };
            return true;
        };

        // If the cell is a blank cell, the attack misses
        missed.push(coords);
        board[x][y] = 'X';
        return 'Miss!';
    };

    const placeShip = (coords) => {
        if ( !validShipPlacement(coords, board) ) { return false };
        
        // If valid placement, place the ship on the board with the coords
        let ship = Ship(4);
        ship.type = 'D';
        coords.forEach((c) => {
            ships.push(ship)
            ship.coords.push(c);
            const [x, y] = c;
            board[x][y] = ship;
        });

        return true;
    };

    const allSunk = () => ships.every(s => s.isSunk());
    
    return { placeShip, allSunk, receiveAttack, player, missed, board };
}

function validShipPlacement(coords, board) {
    let isValid = true;

    coords.forEach((c) => {
        const [x, y] = c;

        // Checking if the coords are out of bounds 
        if ( x < 0 || y < 0 || x > 9 || y > 9 ) {
            return isValid = false;
        };

        // Checking if the coords are taken / already chosen
        if ( (board[x][y]) != 0 ) {
            return isValid = false;
        };
    });

    // Checking if the coords aren't vertical or horizontal
    const [ start, end ] = [ coords[0], coords[coords.length - 1] ]
    if ( end[0] > start[0] && end[1] > start[1] ) {
        return isValid = false;
    };

    return isValid;
}

module.exports = Gameboard;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");
const Board = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
const Player = __webpack_require__(/*! ./player */ "./src/player.js");
const GameInfo = __webpack_require__(/*! ./gameInfo */ "./src/gameInfo.js");


let game = GameInfo(); // An object to handle the game logic (current board, current player etc.)

function components() {
    const titleOne = document.createElement('h3');
    titleOne.innerHTML = 'Player One Board'

    const titleTwo = document.createElement('h3');
    titleTwo.innerHTML = 'Player Two Board'

    // Creating the one board for each player
    let playerOneHTMLBoard = renderHTMLMBoard('p1');
    let playerTwoHTMLBoard = renderHTMLMBoard('p2');
    
    // Creating a button to start the game
    let startButton = document.createElement('button');
    startButton.innerText = 'Start game'
    
    // Creating player one input
    let playerOneInput = document.createElement('input'); 
    playerOneInput.placeholder = 'Player one';
    playerOneInput.required = true;
    
    // Creating player two input
    let playerTwoInput = document.createElement('input');     
    playerTwoInput.placeholder = 'Player two';
    playerTwoInput.required = true;

    // Split board one and board two and add game start and player form
    const splitter = document.createElement('div');
    splitter.classList.add('splitter');
    // TODO: Add check box to chose between computer and non-computer enemy

    // Adding an onsubmit function to start the game
    const form = document.createElement('form');
    form.onsubmit = (e) => {
        e.preventDefault();

        playerOneInput.disabled = true;
        playerTwoInput.disabled = true;

        console.log('Starting the game');
        gameStart(game, playerOneInput.value, playerTwoInput.value);
    };

    // Adding the form to the div separating the boards
    splitter.appendChild(form);

     [ playerOneInput, playerTwoInput, startButton ].forEach( (e) => {
         form.appendChild(e);
     });

    return [ titleOne, playerOneHTMLBoard, splitter, titleTwo, playerTwoHTMLBoard];
}

function playerAction() {
    getCurPlayer(); // Setting curPlayer to the player whose turn it is to play
    getCurBoard(); // Setting curBoard to the board of the corresponding current player
    
    // console.log(this.id);
    // console.log(curPlayer);

    // To not let the current player attack it's own board
    disablePlayerBoard(game.curPlayer);

    // Placing the coordinates in the board that the player chose
    playerAttack(game.curPlayer, this.id);

    // Re-render the board to show the attack on the HTML board
    renderBoard(game.curBoard);
};

function renderBoard(board) {
    console.log('Rendering board');
    let oppPlayer = null;
    ( board.player === 1 ? oppPlayer = 'p2' : oppPlayer = 'p1' );

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.getElementById(`${oppPlayer}-${i}-${j}`)
            cell = board.board[i][j];
        };
    };
};

function playerAttack(player, coords) {
    let p = coords.slice(1, 2);
    let i = coords.slice(3, 4);
    let j = coords.slice(5);
    let attackedBoard = null;
    ( player.ID === 1 ? attackedBoard = game.boardTwo : attackedBoard = game.boardOne )
    attackedBoard.receiveAttack([i, j]);
    console.log(attackedBoard);
};

function getCurPlayer() {
    if ( game.curPlayer === null ) {
        return game.curPlayer = game.playerOne;
    }
    return ( game.curPlayer.ID === 1 ?  game.curPlayer = game.playerTwo : game.curPlayer = game.playerOne );
}

function getCurBoard() {
    if ( game.curBoard === null ) {
        return game.curBoard = game.boardOne;
    }
    return ( game.curPlayer.ID === 1 ?  game.curBoard = game.boardOne : game.curBoard = game.boardTwo );
}

function disablePlayerBoard(curPlayer) {
    let playerOneHTMLBoard = document.getElementById('p1BoardDiv');
    let playerTwoHTMLBoard = document.getElementById('p2BoardDiv');

    if ( curPlayer.ID === 1 ) {
        playerOneHTMLBoard.disabled = true;
        playerTwoHTMLBoard.disabled = false;
    } else if ( curPlayer.ID === 2 ) {
        playerOneHTMLBoard.disabled = false;
        playerTwoHTMLBoard.disabled = true;
    }
};

function gameStart(game, playerOneName, playerTwoName) {
    // Creating player one
    game.playerOne = Player(playerOneName);
    game.playerOne.ID = 1;

    // Creating player two, and setting it as a computer
    game.playerTwo = Player(playerOneName);
    game.playerTwo.ID = 2;
    game.playerTwo.computer = true;

    // Creating a board for each player
    game.boardOne = Board(playerOneName);
    game.boardTwo = Board(playerTwoName);

    // Setting player one as the starting player
    game.curPlayer = game.playerOne;
    game.curBoard = game.boardOne;
};

function renderHTMLMBoard(player) {
    let gridPlayer = document.createElement('div');
    const playerBoardDiv = document.createElement('div');
    playerBoardDiv.classList.add('grid-container');
    playerBoardDiv.id = `${player}BoardDiv`;
    
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement('div');
            cell.onclick = playerAction;
            cell.id = `${player}-${i}-${j}`;
            cell.innerText = 0;
            playerBoardDiv.appendChild(cell);
        };
    };
    
    gridPlayer.appendChild(playerBoardDiv);
    return gridPlayer;
};

// Placing the game elements on the web page
let elements = components();
elements.forEach((e) => {
    document.body.appendChild(e);
});


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

const Player = (name) => {
    let attacks = [];
    let computer = false;
    const ID = 0;
 
    // If computer is true, then the computer chooses a random coordinate
    const attack = () => {
        while ( true ) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);

            const a = JSON.stringify(attacks);
            const b = JSON.stringify([x, y]);
            const taken = a.indexOf(b);

            // Check if the attack has been picked previously (1)
            // If not (-1), add it to the attack array and return the coordinates
            if ( taken === -1 ) {
                attacks.push([x, y])
                return [x, y]
            };

            return false;
        };
    };
    
    return { attack, name, computer }
};

module.exports = Player;

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const Ship = (size) => {
  let hits = 0;
  let coords = [];
  let type = '';
  const getSize = () => size - hits;
  const hit = () => hits += 1;
  const isSunk = () => hits >= size;
  
  return { hit, isSunk, getSize, coords, type }
} 

module.exports = Ship;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQSxvQkFBb0IsUUFBUTtBQUM1Qix3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0EseUJBQXlCLE9BQU8sR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDMUtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC0tLWJhdHRsZWhpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC0tLWJhdHRsZWhpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC0tLWJhdHRsZWhpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtLS1iYXR0bGVoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC0tLWJhdHRsZWhpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LS0tYmF0dGxlaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LS0tYmF0dGxlaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtLS1iYXR0bGVoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC0tLWJhdHRsZWhpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtLS1iYXR0bGVoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LS0tYmF0dGxlaGlwLy4vc3JjL2dhbWVJbmZvLmpzIiwid2VicGFjazovL3Byb2plY3QtLS1iYXR0bGVoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3Byb2plY3QtLS1iYXR0bGVoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC0tLWJhdHRsZWhpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC0tLWJhdHRsZWhpcC8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIGF1dG8pO1xyXG4gICAgZ3JpZC1nYXA6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbiAgICBwYWRkaW5nOiAyLjVweDtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBhdXRvKTtcXHJcXG4gICAgZ3JpZC1nYXA6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXHJcXG4gICAgcGFkZGluZzogMi41cHg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNvbnRhaW5lciA+IGRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEdhbWVJbmZvID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjdXJQbGF5ZXI6IG51bGwsXHJcbiAgICAgICAgY3VyQm9hcmQ6IG51bGwsXHJcbiAgICAgICAgcGxheWVyT25lOiBudWxsLFxyXG4gICAgICAgIHBsYXllclR3bzogbnVsbCxcclxuICAgICAgICBib2FyZE9uZTogbnVsbCxcclxuICAgICAgICBib2FyZFR3bzogbnVsbCxcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHYW1lSW5mbzsiLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJyk7XHJcblxyXG5jb25zdCBHYW1lYm9hcmQgPSAocGxheWVyKSA9PiB7XHJcbiAgICBsZXQgc2hpcHMgPSBbXTtcclxuICAgIGxldCBtaXNzZWQgPSBbXTtcclxuICAgIGxldCBib2FyZCA9IEFycmF5LmZyb20oQXJyYXkoMTApLCAoKSA9PiBuZXcgQXJyYXkoMTApLmZpbGwoMCkpO1xyXG5cclxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3gsIHldID0gY29vcmRzO1xyXG4gICAgICAgIGNvbnN0IGF0dGFjayA9IGJvYXJkW3hdW3ldO1xyXG5cclxuICAgICAgICBjb25zdCBhID0gSlNPTi5zdHJpbmdpZnkobWlzc2VkKTtcclxuICAgICAgICBjb25zdCBiID0gSlNPTi5zdHJpbmdpZnkoY29vcmRzKTtcclxuICAgICAgICBjb25zdCBvY2N1cGllZCA9IGEuaW5kZXhPZihiKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGF0dGFjayBoYXMgYmVlbiBwaWNrZWQgcHJldmlvdXNseVxyXG4gICAgICAgIGlmICggb2NjdXBpZWQgPT09IDEgfHwgIGF0dGFjayA9PT0gJ1gnICkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0Nvb3JkaW5hdGVzIGFscmVhZHkgY2hvc2VuLCB0cnkgYWdhaW4uJztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2VsbCBpcyBhIGJsYW5rIGNlbGwgKDApLlxyXG4gICAgICAgIC8vIElmIG5vdCwgdGhlIHNoaXAgZ2V0cyBoaXQuXHJcbiAgICAgICAgaWYgKCBhdHRhY2sgIT0gMCApIHtcclxuICAgICAgICAgICAgY29uc3QgaGl0U2hpcCA9IGF0dGFjaztcclxuICAgICAgICAgICAgaGl0U2hpcC5oaXQoKTtcclxuICAgICAgICAgICAgYm9hcmRbeF1beV0gPSAnWCc7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBhbGwgYm9hdHMgYXJlIHN1bmssIGl0J3MgZ2FtZSBvdmVyIVxyXG4gICAgICAgICAgICBpZiAoIGFsbFN1bmsoKSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnWW91IGxvc2UhJztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGNlbGwgaXMgYSBibGFuayBjZWxsLCB0aGUgYXR0YWNrIG1pc3Nlc1xyXG4gICAgICAgIG1pc3NlZC5wdXNoKGNvb3Jkcyk7XHJcbiAgICAgICAgYm9hcmRbeF1beV0gPSAnWCc7XHJcbiAgICAgICAgcmV0dXJuICdNaXNzISc7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZHMpID0+IHtcclxuICAgICAgICBpZiAoICF2YWxpZFNoaXBQbGFjZW1lbnQoY29vcmRzLCBib2FyZCkgKSB7IHJldHVybiBmYWxzZSB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIHZhbGlkIHBsYWNlbWVudCwgcGxhY2UgdGhlIHNoaXAgb24gdGhlIGJvYXJkIHdpdGggdGhlIGNvb3Jkc1xyXG4gICAgICAgIGxldCBzaGlwID0gU2hpcCg0KTtcclxuICAgICAgICBzaGlwLnR5cGUgPSAnRCc7XHJcbiAgICAgICAgY29vcmRzLmZvckVhY2goKGMpID0+IHtcclxuICAgICAgICAgICAgc2hpcHMucHVzaChzaGlwKVxyXG4gICAgICAgICAgICBzaGlwLmNvb3Jkcy5wdXNoKGMpO1xyXG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBjO1xyXG4gICAgICAgICAgICBib2FyZFt4XVt5XSA9IHNoaXA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4gc2hpcHMuZXZlcnkocyA9PiBzLmlzU3VuaygpKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgcGxhY2VTaGlwLCBhbGxTdW5rLCByZWNlaXZlQXR0YWNrLCBwbGF5ZXIsIG1pc3NlZCwgYm9hcmQgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRTaGlwUGxhY2VtZW50KGNvb3JkcywgYm9hcmQpIHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBjb29yZHMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGM7XHJcblxyXG4gICAgICAgIC8vIENoZWNraW5nIGlmIHRoZSBjb29yZHMgYXJlIG91dCBvZiBib3VuZHMgXHJcbiAgICAgICAgaWYgKCB4IDwgMCB8fCB5IDwgMCB8fCB4ID4gOSB8fCB5ID4gOSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBDaGVja2luZyBpZiB0aGUgY29vcmRzIGFyZSB0YWtlbiAvIGFscmVhZHkgY2hvc2VuXHJcbiAgICAgICAgaWYgKCAoYm9hcmRbeF1beV0pICE9IDAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENoZWNraW5nIGlmIHRoZSBjb29yZHMgYXJlbid0IHZlcnRpY2FsIG9yIGhvcml6b250YWxcclxuICAgIGNvbnN0IFsgc3RhcnQsIGVuZCBdID0gWyBjb29yZHNbMF0sIGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0gXVxyXG4gICAgaWYgKCBlbmRbMF0gPiBzdGFydFswXSAmJiBlbmRbMV0gPiBzdGFydFsxXSApIHtcclxuICAgICAgICByZXR1cm4gaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XHJcbiIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAnKTtcclxuY29uc3QgQm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xyXG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xyXG5jb25zdCBHYW1lSW5mbyA9IHJlcXVpcmUoJy4vZ2FtZUluZm8nKTtcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5sZXQgZ2FtZSA9IEdhbWVJbmZvKCk7IC8vIEFuIG9iamVjdCB0byBoYW5kbGUgdGhlIGdhbWUgbG9naWMgKGN1cnJlbnQgYm9hcmQsIGN1cnJlbnQgcGxheWVyIGV0Yy4pXHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnRzKCkge1xyXG4gICAgY29uc3QgdGl0bGVPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdGl0bGVPbmUuaW5uZXJIVE1MID0gJ1BsYXllciBPbmUgQm9hcmQnXHJcblxyXG4gICAgY29uc3QgdGl0bGVUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdGl0bGVUd28uaW5uZXJIVE1MID0gJ1BsYXllciBUd28gQm9hcmQnXHJcblxyXG4gICAgLy8gQ3JlYXRpbmcgdGhlIG9uZSBib2FyZCBmb3IgZWFjaCBwbGF5ZXJcclxuICAgIGxldCBwbGF5ZXJPbmVIVE1MQm9hcmQgPSByZW5kZXJIVE1MTUJvYXJkKCdwMScpO1xyXG4gICAgbGV0IHBsYXllclR3b0hUTUxCb2FyZCA9IHJlbmRlckhUTUxNQm9hcmQoJ3AyJyk7XHJcbiAgICBcclxuICAgIC8vIENyZWF0aW5nIGEgYnV0dG9uIHRvIHN0YXJ0IHRoZSBnYW1lXHJcbiAgICBsZXQgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN0YXJ0QnV0dG9uLmlubmVyVGV4dCA9ICdTdGFydCBnYW1lJ1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGluZyBwbGF5ZXIgb25lIGlucHV0XHJcbiAgICBsZXQgcGxheWVyT25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyBcclxuICAgIHBsYXllck9uZUlucHV0LnBsYWNlaG9sZGVyID0gJ1BsYXllciBvbmUnO1xyXG4gICAgcGxheWVyT25lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGluZyBwbGF5ZXIgdHdvIGlucHV0XHJcbiAgICBsZXQgcGxheWVyVHdvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyAgICAgXHJcbiAgICBwbGF5ZXJUd29JbnB1dC5wbGFjZWhvbGRlciA9ICdQbGF5ZXIgdHdvJztcclxuICAgIHBsYXllclR3b0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBTcGxpdCBib2FyZCBvbmUgYW5kIGJvYXJkIHR3byBhbmQgYWRkIGdhbWUgc3RhcnQgYW5kIHBsYXllciBmb3JtXHJcbiAgICBjb25zdCBzcGxpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3BsaXR0ZXIuY2xhc3NMaXN0LmFkZCgnc3BsaXR0ZXInKTtcclxuICAgIC8vIFRPRE86IEFkZCBjaGVjayBib3ggdG8gY2hvc2UgYmV0d2VlbiBjb21wdXRlciBhbmQgbm9uLWNvbXB1dGVyIGVuZW15XHJcblxyXG4gICAgLy8gQWRkaW5nIGFuIG9uc3VibWl0IGZ1bmN0aW9uIHRvIHN0YXJ0IHRoZSBnYW1lXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBwbGF5ZXJPbmVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGxheWVyVHdvSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgdGhlIGdhbWUnKTtcclxuICAgICAgICBnYW1lU3RhcnQoZ2FtZSwgcGxheWVyT25lSW5wdXQudmFsdWUsIHBsYXllclR3b0lucHV0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQWRkaW5nIHRoZSBmb3JtIHRvIHRoZSBkaXYgc2VwYXJhdGluZyB0aGUgYm9hcmRzXHJcbiAgICBzcGxpdHRlci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAgWyBwbGF5ZXJPbmVJbnB1dCwgcGxheWVyVHdvSW5wdXQsIHN0YXJ0QnV0dG9uIF0uZm9yRWFjaCggKGUpID0+IHtcclxuICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChlKTtcclxuICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gWyB0aXRsZU9uZSwgcGxheWVyT25lSFRNTEJvYXJkLCBzcGxpdHRlciwgdGl0bGVUd28sIHBsYXllclR3b0hUTUxCb2FyZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXllckFjdGlvbigpIHtcclxuICAgIGdldEN1clBsYXllcigpOyAvLyBTZXR0aW5nIGN1clBsYXllciB0byB0aGUgcGxheWVyIHdob3NlIHR1cm4gaXQgaXMgdG8gcGxheVxyXG4gICAgZ2V0Q3VyQm9hcmQoKTsgLy8gU2V0dGluZyBjdXJCb2FyZCB0byB0aGUgYm9hcmQgb2YgdGhlIGNvcnJlc3BvbmRpbmcgY3VycmVudCBwbGF5ZXJcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJQbGF5ZXIpO1xyXG5cclxuICAgIC8vIFRvIG5vdCBsZXQgdGhlIGN1cnJlbnQgcGxheWVyIGF0dGFjayBpdCdzIG93biBib2FyZFxyXG4gICAgZGlzYWJsZVBsYXllckJvYXJkKGdhbWUuY3VyUGxheWVyKTtcclxuXHJcbiAgICAvLyBQbGFjaW5nIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgYm9hcmQgdGhhdCB0aGUgcGxheWVyIGNob3NlXHJcbiAgICBwbGF5ZXJBdHRhY2soZ2FtZS5jdXJQbGF5ZXIsIHRoaXMuaWQpO1xyXG5cclxuICAgIC8vIFJlLXJlbmRlciB0aGUgYm9hcmQgdG8gc2hvdyB0aGUgYXR0YWNrIG9uIHRoZSBIVE1MIGJvYXJkXHJcbiAgICByZW5kZXJCb2FyZChnYW1lLmN1ckJvYXJkKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckJvYXJkKGJvYXJkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUmVuZGVyaW5nIGJvYXJkJyk7XHJcbiAgICBsZXQgb3BwUGxheWVyID0gbnVsbDtcclxuICAgICggYm9hcmQucGxheWVyID09PSAxID8gb3BwUGxheWVyID0gJ3AyJyA6IG9wcFBsYXllciA9ICdwMScgKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtvcHBQbGF5ZXJ9LSR7aX0tJHtqfWApXHJcbiAgICAgICAgICAgIGNlbGwgPSBib2FyZC5ib2FyZFtpXVtqXTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHBsYXllckF0dGFjayhwbGF5ZXIsIGNvb3Jkcykge1xyXG4gICAgbGV0IHAgPSBjb29yZHMuc2xpY2UoMSwgMik7XHJcbiAgICBsZXQgaSA9IGNvb3Jkcy5zbGljZSgzLCA0KTtcclxuICAgIGxldCBqID0gY29vcmRzLnNsaWNlKDUpO1xyXG4gICAgbGV0IGF0dGFja2VkQm9hcmQgPSBudWxsO1xyXG4gICAgKCBwbGF5ZXIuSUQgPT09IDEgPyBhdHRhY2tlZEJvYXJkID0gZ2FtZS5ib2FyZFR3byA6IGF0dGFja2VkQm9hcmQgPSBnYW1lLmJvYXJkT25lIClcclxuICAgIGF0dGFja2VkQm9hcmQucmVjZWl2ZUF0dGFjayhbaSwgal0pO1xyXG4gICAgY29uc29sZS5sb2coYXR0YWNrZWRCb2FyZCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJQbGF5ZXIoKSB7XHJcbiAgICBpZiAoIGdhbWUuY3VyUGxheWVyID09PSBudWxsICkge1xyXG4gICAgICAgIHJldHVybiBnYW1lLmN1clBsYXllciA9IGdhbWUucGxheWVyT25lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICggZ2FtZS5jdXJQbGF5ZXIuSUQgPT09IDEgPyAgZ2FtZS5jdXJQbGF5ZXIgPSBnYW1lLnBsYXllclR3byA6IGdhbWUuY3VyUGxheWVyID0gZ2FtZS5wbGF5ZXJPbmUgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VyQm9hcmQoKSB7XHJcbiAgICBpZiAoIGdhbWUuY3VyQm9hcmQgPT09IG51bGwgKSB7XHJcbiAgICAgICAgcmV0dXJuIGdhbWUuY3VyQm9hcmQgPSBnYW1lLmJvYXJkT25lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICggZ2FtZS5jdXJQbGF5ZXIuSUQgPT09IDEgPyAgZ2FtZS5jdXJCb2FyZCA9IGdhbWUuYm9hcmRPbmUgOiBnYW1lLmN1ckJvYXJkID0gZ2FtZS5ib2FyZFR3byApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlUGxheWVyQm9hcmQoY3VyUGxheWVyKSB7XHJcbiAgICBsZXQgcGxheWVyT25lSFRNTEJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AxQm9hcmREaXYnKTtcclxuICAgIGxldCBwbGF5ZXJUd29IVE1MQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDJCb2FyZERpdicpO1xyXG5cclxuICAgIGlmICggY3VyUGxheWVyLklEID09PSAxICkge1xyXG4gICAgICAgIHBsYXllck9uZUhUTUxCb2FyZC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgcGxheWVyVHdvSFRNTEJvYXJkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCBjdXJQbGF5ZXIuSUQgPT09IDIgKSB7XHJcbiAgICAgICAgcGxheWVyT25lSFRNTEJvYXJkLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgcGxheWVyVHdvSFRNTEJvYXJkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdhbWVTdGFydChnYW1lLCBwbGF5ZXJPbmVOYW1lLCBwbGF5ZXJUd29OYW1lKSB7XHJcbiAgICAvLyBDcmVhdGluZyBwbGF5ZXIgb25lXHJcbiAgICBnYW1lLnBsYXllck9uZSA9IFBsYXllcihwbGF5ZXJPbmVOYW1lKTtcclxuICAgIGdhbWUucGxheWVyT25lLklEID0gMTtcclxuXHJcbiAgICAvLyBDcmVhdGluZyBwbGF5ZXIgdHdvLCBhbmQgc2V0dGluZyBpdCBhcyBhIGNvbXB1dGVyXHJcbiAgICBnYW1lLnBsYXllclR3byA9IFBsYXllcihwbGF5ZXJPbmVOYW1lKTtcclxuICAgIGdhbWUucGxheWVyVHdvLklEID0gMjtcclxuICAgIGdhbWUucGxheWVyVHdvLmNvbXB1dGVyID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBDcmVhdGluZyBhIGJvYXJkIGZvciBlYWNoIHBsYXllclxyXG4gICAgZ2FtZS5ib2FyZE9uZSA9IEJvYXJkKHBsYXllck9uZU5hbWUpO1xyXG4gICAgZ2FtZS5ib2FyZFR3byA9IEJvYXJkKHBsYXllclR3b05hbWUpO1xyXG5cclxuICAgIC8vIFNldHRpbmcgcGxheWVyIG9uZSBhcyB0aGUgc3RhcnRpbmcgcGxheWVyXHJcbiAgICBnYW1lLmN1clBsYXllciA9IGdhbWUucGxheWVyT25lO1xyXG4gICAgZ2FtZS5jdXJCb2FyZCA9IGdhbWUuYm9hcmRPbmU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJIVE1MTUJvYXJkKHBsYXllcikge1xyXG4gICAgbGV0IGdyaWRQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwbGF5ZXJCb2FyZERpdi5jbGFzc0xpc3QuYWRkKCdncmlkLWNvbnRhaW5lcicpO1xyXG4gICAgcGxheWVyQm9hcmREaXYuaWQgPSBgJHtwbGF5ZXJ9Qm9hcmREaXZgO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2VsbC5vbmNsaWNrID0gcGxheWVyQWN0aW9uO1xyXG4gICAgICAgICAgICBjZWxsLmlkID0gYCR7cGxheWVyfS0ke2l9LSR7an1gO1xyXG4gICAgICAgICAgICBjZWxsLmlubmVyVGV4dCA9IDA7XHJcbiAgICAgICAgICAgIHBsYXllckJvYXJkRGl2LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBncmlkUGxheWVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkRGl2KTtcclxuICAgIHJldHVybiBncmlkUGxheWVyO1xyXG59O1xyXG5cclxuLy8gUGxhY2luZyB0aGUgZ2FtZSBlbGVtZW50cyBvbiB0aGUgd2ViIHBhZ2VcclxubGV0IGVsZW1lbnRzID0gY29tcG9uZW50cygpO1xyXG5lbGVtZW50cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpO1xyXG59KTtcclxuIiwiY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcclxuICAgIGxldCBhdHRhY2tzID0gW107XHJcbiAgICBsZXQgY29tcHV0ZXIgPSBmYWxzZTtcclxuICAgIGNvbnN0IElEID0gMDtcclxuIFxyXG4gICAgLy8gSWYgY29tcHV0ZXIgaXMgdHJ1ZSwgdGhlbiB0aGUgY29tcHV0ZXIgY2hvb3NlcyBhIHJhbmRvbSBjb29yZGluYXRlXHJcbiAgICBjb25zdCBhdHRhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKCB0cnVlICkge1xyXG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gSlNPTi5zdHJpbmdpZnkoYXR0YWNrcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBKU09OLnN0cmluZ2lmeShbeCwgeV0pO1xyXG4gICAgICAgICAgICBjb25zdCB0YWtlbiA9IGEuaW5kZXhPZihiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBhdHRhY2sgaGFzIGJlZW4gcGlja2VkIHByZXZpb3VzbHkgKDEpXHJcbiAgICAgICAgICAgIC8vIElmIG5vdCAoLTEpLCBhZGQgaXQgdG8gdGhlIGF0dGFjayBhcnJheSBhbmQgcmV0dXJuIHRoZSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgICBpZiAoIHRha2VuID09PSAtMSApIHtcclxuICAgICAgICAgICAgICAgIGF0dGFja3MucHVzaChbeCwgeV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3gsIHldXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiB7IGF0dGFjaywgbmFtZSwgY29tcHV0ZXIgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7IiwiY29uc3QgU2hpcCA9IChzaXplKSA9PiB7XHJcbiAgbGV0IGhpdHMgPSAwO1xyXG4gIGxldCBjb29yZHMgPSBbXTtcclxuICBsZXQgdHlwZSA9ICcnO1xyXG4gIGNvbnN0IGdldFNpemUgPSAoKSA9PiBzaXplIC0gaGl0cztcclxuICBjb25zdCBoaXQgPSAoKSA9PiBoaXRzICs9IDE7XHJcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gaGl0cyA+PSBzaXplO1xyXG4gIFxyXG4gIHJldHVybiB7IGhpdCwgaXNTdW5rLCBnZXRTaXplLCBjb29yZHMsIHR5cGUgfVxyXG59IFxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTaGlwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==