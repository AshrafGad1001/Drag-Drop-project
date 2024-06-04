"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Base = exports.Base = /*#__PURE__*/function () {
  function Base(private _templateId, private _hostId, private _elementId, private _positionElementStart) {
    _classCallCheck(this, Base);
    _defineProperty(this, "_template", void 0);
    _defineProperty(this, "_hostElement", void 0);
    _defineProperty(this, "element", void 0);
    //Assign Template Element
    this._template = document.getElementById(this._templateId);
    this._hostElement = document.getElementById(this._hostId);
    // Import Template Content
    var _templateContent = document.importNode(this._template.content, true);
    this.element = _templateContent.firstElementChild;
    if (this._elementId) {
      this.element.id = this._elementId;
      this._insertElement(this._positionElementStart);
    }
  }
  return _createClass(Base, [{
    key: "_insertElement",
    value: function _insertElement(positionStart) {
      var isInsertStart = positionStart ? "afterbegin" : "beforeend";
      this._hostElement.insertAdjacentElement(isInsertStart, this.element);
    }
  }]);
}();