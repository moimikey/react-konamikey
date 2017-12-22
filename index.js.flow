'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Konami = function (_React$Component) {
  _inherits(Konami, _React$Component);

  function Konami() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Konami);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Konami.__proto__ || Object.getPrototypeOf(Konami)).call.apply(_ref, [this].concat(args))), _this), _this.pressed = 0, _this.element = void 0, _this.onkeydown = function (evt) {
      var _ref2 = _this.props || {},
          _ref2$payload = _ref2.payload,
          payload = _ref2$payload === undefined ? function () {} : _ref2$payload,
          sequence = _ref2.sequence;

      evt.key === sequence[_this.pressed] || evt.key.substr(5).toLowerCase() === sequence[_this.pressed] // ArrowXXXX
      ? _this.pressed += 1 : _this.pressed = 0;
      if (_this.pressed === sequence.length) {
        payload();
        _this.pressed = 0;
      }
    }, _this.listen = function () {
      if (_this.element && _this.element.addEventListener) {
        _this.element.addEventListener('keydown', _this.onkeydown);
      }
    }, _this.unlisten = function () {
      if (_this.element && _this.element.removeEventListener) {
        _this.element.removeEventListener('keydown', _this.onkeydown);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Konami, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unlisten();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _ref3 = this.props || {},
          element = _ref3.element;

      if (!(element instanceof Function)) {
        this.element = element;
      }

      this.listen();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _ref4 = this.props || {},
          children = _ref4.children,
          element = _ref4.element;

      if (element instanceof Function) {
        return element({
          refFn: function refFn(ref) {
            _this2.element = ref;
          }
        });
      }

      return children ? children : null;
    }
  }]);

  return Konami;
}(React.Component);

exports.default = Konami;