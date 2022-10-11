"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/assets/scss/style.scss");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


window.addEventListener('DOMContentLoaded', function () {
  // Get DOM Element
  // let titEffect    = document.querySelector('.titEffect');
  // let isTitVisible = titEffect.classList.contains('titEffect-visible');
  var titEffects = document.getElementsByClassName('titEffect');

  var _iterator = _createForOfIteratorHelper(titEffects),
      _step;

  try {
    var _loop = function _loop() {
      var titEffect = _step.value;
      var isTitVisible = titEffect.classList.contains('titEffect-visible');
      ScrollTrigger.create({
        trigger: titEffect,
        start: 'top 90%',
        markers: true,
        onEnter: function onEnter() {
          return creareNewTitEffectContent(isTitVisible, titEffect);
        },
        once: true
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    } // Create New DOM Content

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  function creareNewTitEffectContent(bool, el) {
    if (bool) {
      el.classList.add('titEffect-animated');
      el.find('.titEffect__clone').remove();
      el.find('.titEffect__cover').remove();
    } else {
      var titEffectClone = "<span class=\"titEffect__clone\">".concat(el.textContent, "</span>"),
          titEffectCover = "<span class=\"titEffect__cover\">".concat(el.textContent, "</span>"),
          titEffectDuplication = "<span class=\"titEffect__detail\">".concat(el.textContent, "</span>");
      el.innerHTML = "".concat(titEffectDuplication).concat(titEffectClone).concat(titEffectCover);
      animateNewTitEffectContent(bool, el);
    }
  } // Animate New DOM Content


  function animateNewTitEffectContent(bool, el) {
    if (!bool) {
      var newTitEffectClone = document.querySelector('.titEffect__clone'),
          newTitEffectCover = document.querySelector('.titEffect__cover');
      var elemHeight = el.offsetHeight,
          elemWidth = el.offsetWidth;
      var initialCloneRect = "rect(0px 0px ".concat(elemHeight, "px 0px)"),
          archivedCloneRect = "rect(0px ".concat(elemWidth, "px ").concat(elemHeight, "px 0px"),
          initialCoverRect = "rect(0px ".concat(elemWidth, "px ").concat(elemHeight, "px 0px"),
          archivedCoverRect = "rect(0px ".concat(elemWidth, "px ").concat(elemHeight, "px ").concat(elemWidth, "px");
      newTitEffectClone.style.clip = initialCloneRect;
      newTitEffectCover.style.clip = initialCoverRect;
      el.classList.add('titEffect-visible');
      gsap.to(newTitEffectClone, 1.5, {
        clip: archivedCloneRect,
        ease: Power3.easeOut
      });
      gsap.to(newTitEffectCover, 1.5, {
        clip: archivedCoverRect,
        ease: Power3.easeOut,
        onComplete: function onComplete() {
          el.classList.add('titEffect-animated'), newTitEffectClone.remove(), newTitEffectCover.remove();
        }
      });
    }
  }
}, false);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5bc12ef86e404df1ab19"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.21bf93653fad04186a98.hot-update.js.map