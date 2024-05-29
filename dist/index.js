'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _getClassName=require('babel-plugin-react-css-modules/dist/browser/getClassName'),React=require('react'),PropTypes=require('prop-types'),classnames=require('classnames'),RCTooltip=require('rc-tooltip'),RCSlider=require('rc-slider'),fill=require('lodash/fill'),isEqual=require('lodash/isEqual'),reactDom=require('react-dom'),arrayMove=require('array-move'),reactSortableHoc=require('react-sortable-hoc'),sortBy=require('lodash/sortBy'),isEmpty=require('lodash/isEmpty'),compact=require('lodash/compact'),dayjs=require('dayjs');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var _getClassName__default=/*#__PURE__*/_interopDefaultLegacy(_getClassName);var React__default=/*#__PURE__*/_interopDefaultLegacy(React);var PropTypes__default=/*#__PURE__*/_interopDefaultLegacy(PropTypes);var classnames__default=/*#__PURE__*/_interopDefaultLegacy(classnames);var RCTooltip__default=/*#__PURE__*/_interopDefaultLegacy(RCTooltip);var RCSlider__default=/*#__PURE__*/_interopDefaultLegacy(RCSlider);var fill__default=/*#__PURE__*/_interopDefaultLegacy(fill);var isEqual__default=/*#__PURE__*/_interopDefaultLegacy(isEqual);var arrayMove__default=/*#__PURE__*/_interopDefaultLegacy(arrayMove);var sortBy__default=/*#__PURE__*/_interopDefaultLegacy(sortBy);var isEmpty__default=/*#__PURE__*/_interopDefaultLegacy(isEmpty);var compact__default=/*#__PURE__*/_interopDefaultLegacy(compact);var dayjs__default=/*#__PURE__*/_interopDefaultLegacy(dayjs);function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var _styleModuleImportMap = {
  "./styles.scss": {
    "c-icon": "vizzuality__c-icon",
    "-tiny": "vizzuality__-tiny",
    "-smaller": "vizzuality__-smaller",
    "-small": "vizzuality__-small",
    "-medium": "vizzuality__-medium",
    "-big": "vizzuality__-big",
    "-huge": "vizzuality__-huge",
    "-star": "vizzuality__-star"
  }
};

var Icon = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Icon, _React$PureComponent);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          className = _this$props.className,
          style = _this$props.style;
      var classNames = classnames__default['default'](_defineProperty({}, className, !!className));
      return /*#__PURE__*/React__default['default'].createElement("svg", {
        style: style,
        className: _getClassName__default['default']("c-icon ".concat(classNames), _styleModuleImportMap)
      }, /*#__PURE__*/React__default['default'].createElement("use", {
        xlinkHref: "#".concat(name)
      }));
    }
  }]);

  return Icon;
}(React__default['default'].PureComponent);

_defineProperty(Icon, "propTypes", {
  name: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  style: PropTypes__default['default'].object
});

_defineProperty(Icon, "defaultProps", {
  name: '',
  className: '',
  style: {}
});var Icons = function Icons() {
  return /*#__PURE__*/React__default['default'].createElement("svg", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: 0,
      height: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-pause",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "pause"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.864 4h-5.16c-1.008 0-1.704 0.696-1.704 1.704v20.568c0 1.032 0.696 1.728 1.704 1.728h5.136c1.032 0 1.704-0.696 1.704-1.704v-20.592c0.024-1.008-0.648-1.704-1.68-1.704z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M26.296 4h-5.136c-1.032 0-1.704 0.696-1.704 1.704v20.568c0 1.032 0.696 1.704 1.704 1.704h5.136c1.032 0 1.704-0.696 1.704-1.704v-20.568c0-1.008-0.696-1.704-1.704-1.704z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-play",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "play"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M8.827 2.76l19.487 13.24-19.487 13.24z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-cross",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "cross"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 11.636l-11.636-11.636-4.364 4.364 11.636 11.636-11.636 11.636 4.364 4.364 11.636-11.636 11.636 11.636 4.364-4.364-11.636-11.636 11.636-11.636-4.364-4.364z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-layers",
    viewBox: "0 0 34 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "layers"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M29.995 17.712l4.29 2.859-17.143 11.429-17.136-11.429 4.286-2.857 12.855 8.571 12.85-8.574zM34.281 11.429l-17.136 11.429-17.145-11.429 17.143-11.429 17.138 11.429z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-opacity",
    viewBox: "0 0 29 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "opacity"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M29.333 7.92c-0.761-1.345-1.646-2.503-2.667-3.526l0 0v23.211c1.040-1.040 1.939-2.224 2.667-3.525v-16.16zM21.333 0.88c-0.752-0.308-1.646-0.577-2.569-0.762l-0.098-0.016v31.797c0.92-0.179 1.813-0.443 2.667-0.779v-30.24zM13.333 32c-7.547-1.181-13.333-7.893-13.333-16s5.787-14.819 13.333-16v32z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-hide",
    viewBox: "0 0 47 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "hide"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M17.149 16c-0.002 0.056-0.003 0.122-0.003 0.189 0 3.384 2.743 6.127 6.127 6.127s6.127-2.743 6.127-6.127c0-0.066-0.001-0.133-0.003-0.198l0 0.010c0.002-0.056 0.003-0.122 0.003-0.189 0-3.384-2.743-6.127-6.127-6.127s-6.127 2.743-6.127 6.127c0 0.066 0.001 0.133 0.003 0.198l-0-0.010zM46.545 16c-4.46-7.948-13.204-16-23.273-16-10.045 0-18.813 8.052-23.273 16 4.46 7.948 13.228 16 23.273 16 10.068 0 18.813-8.052 23.273-16zM23.273 4.922c6.080 0 11.025 4.96 11.025 11.078s-4.945 11.078-11.025 11.078-11.025-4.96-11.025-11.078c0-6.118 4.945-11.078 11.025-11.078z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-show",
    viewBox: "0 0 39 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "show"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M26.905 4.994l5.125-4.994 3.481 3.392-29.356 28.608-3.481-3.392 4.076-3.973c-2.675-2.25-4.921-4.902-6.672-7.88l-0.077-0.142c3.774-6.553 11.193-13.194 19.692-13.194 2.523 0 4.948 0.583 7.212 1.575zM11.168 20.33l3.36-3.274c-0.011-0.125-0.017-0.271-0.017-0.419 0-0.009 0-0.017 0-0.026v0.001c0-2.806 2.306-5.073 5.182-5.073 0.16 0 0.32 0.007 0.475 0.020l3.36-3.274c-1.122-0.507-2.432-0.803-3.812-0.803-0.008 0-0.016 0-0.024 0h0.001c-5.145 0-9.329 4.086-9.329 9.132 0 1.324 0.288 2.58 0.805 3.717zM34.454 10.24c1.876 1.855 3.51 3.948 4.853 6.233l0.077 0.143c-3.774 6.55-11.173 13.194-19.692 13.194-1.656-0.005-3.254-0.245-4.766-0.688l0.121 0.030 3.557-3.466c0.357 0.039 0.721 0.062 1.088 0.062 5.145 0 9.329-4.089 9.329-9.132 0-0.345-0.020-0.689-0.059-1.022l5.492-5.354z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-arrow-down",
    viewBox: "0 0 38 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "arrow-down"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22.2 18.636l9.879-9.879 5.121 4.243-18 18-18-18 5.121-4.243 9.879 9.879v-17.636h6v17.636z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-arrow-up",
    viewBox: "0 0 38 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "arrow-up"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M22.2 13.364l9.879 9.879 5.121-4.243-18-18-18 18 5.121 4.243 9.879-9.879v17.636h6v-17.636z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-info",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "info"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M18.107 14.899v-1.101h-6.603v2.201h2.201v6.603h-2.201v2.201h8.804v-2.201h-2.201v-7.703zM15.906 31.407c-8.509 0-15.407-6.898-15.407-15.407s6.898-15.407 15.407-15.407c8.509 0 15.407 6.898 15.407 15.407s-6.898 15.407-15.407 15.407zM13.705 7.196v4.402h4.402v-4.402h-4.402z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-drag-dots",
    viewBox: "0 0 19 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "drag-dots"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.2 12.8c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 12.8c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.2 0c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 0c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M3.2 25.6c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M16 25.6c1.767 0 3.2 1.433 3.2 3.2s-1.433 3.2-3.2 3.2c-1.767 0-3.2-1.433-3.2-3.2s1.433-3.2 3.2-3.2z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-minus",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "minus"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M5.5 17.909h20.894v-3.818h-20.894z"
  })), /*#__PURE__*/React__default['default'].createElement("symbol", {
    id: "icon-plus",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React__default['default'].createElement("title", null, "plus"), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M13.865 5v8.8h-8.865v4.4h8.865v8.8h4.271v-8.8h8.865v-4.4h-8.865v-8.8z"
  }))));
};var Tooltip = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tooltip, _React$PureComponent);

  var _super = _createSuper(Tooltip);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _super.apply(this, arguments);
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/React__default['default'].createElement(RCTooltip__default['default'], this.props, children);
    }
  }]);

  return Tooltip;
}(React__default['default'].PureComponent);

_defineProperty(Tooltip, "propTypes", {
  children: PropTypes__default['default'].node
});

_defineProperty(Tooltip, "defaultProps", {
  children: []
});var _styleModuleImportMap$1 = {
  "./styles.scss": {
    "c-spinner": "vizzuality__c-spinner",
    "rotate": "vizzuality__rotate",
    "dash": "vizzuality__dash",
    "color": "vizzuality__color",
    "spinner-box": "vizzuality__spinner-box",
    "spinner-icon": "vizzuality__spinner-icon",
    "spinner-circle": "vizzuality__spinner-circle",
    "-absolute": "vizzuality__-absolute",
    "-fixed": "vizzuality__-fixed",
    "-relative": "vizzuality__-relative"
  }
};
var STYLES = {
  box: {
    width: 40,
    height: 40
  },
  circle: {
    fill: 'none',
    stroke: '#000',
    strokeWidth: 5,
    strokeMiterlimit: 10
  }
};
var Spinner = /*#__PURE__*/function (_PureComponent) {
  _inherits(Spinner, _PureComponent);

  var _super = _createSuper(Spinner);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _super.apply(this, arguments);
  }

  _createClass(Spinner, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          position = _this$props.position,
          customClass = _this$props.customClass,
          style = _this$props.style;
      var classNames = classnames__default['default'](_defineProperty({
        'c-spinner': true
      }, "-".concat(position), true));
      var customClassNames = classnames__default['default'](_defineProperty({
        'c-spinner': true
      }, customClass, !!customClass));

      var boxStyles = _objectSpread2(_objectSpread2({}, STYLES.box), style.box);

      var circleStyles = _objectSpread2(_objectSpread2({}, STYLES.circle), style.circle);

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: (customClassNames ? customClassNames + " " : "") + _getClassName__default['default'](classNames, _styleModuleImportMap$1)
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__spinner-box",
        style: boxStyles
      }, /*#__PURE__*/React__default['default'].createElement("svg", {
        className: "vizzuality__spinner-icon",
        viewBox: "25 25 50 50"
      }, /*#__PURE__*/React__default['default'].createElement("circle", _extends({}, circleStyles, {
        className: "vizzuality__spinner-circle" + (" " + (circleStyles ? circleStyles.className || "" : "")),
        cx: 50,
        cy: 50,
        r: 20
      })))));
    }
  }]);

  return Spinner;
}(React.PureComponent);

_defineProperty(Spinner, "propTypes", {
  position: PropTypes__default['default'].oneOf(['relative', 'absolute', 'fixed']),
  className: PropTypes__default['default'].string,
  customClass: PropTypes__default['default'].string,
  style: PropTypes__default['default'].shape({
    box: PropTypes__default['default'].object,
    circle: PropTypes__default['default'].object
  })
});

_defineProperty(Spinner, "defaultProps", {
  position: 'absolute',
  className: null,
  customClass: null,
  style: {
    box: {},
    circle: {}
  }
});// marks: https://github.com/react-component/slider/blob/master/src/common/Marks.tsx
// To maintain the same default styles as before (not to break apps), we remove them

var defaultMarkStyle = {
  transform: 'none',
  msTransform: 'none'
};
var getStyledMarks = function getStyledMarks(marks) {
  var keys = Object.keys(marks);
  return keys.map(function (key) {
    var mark = marks[key];
    var markIsObject = _typeof(mark) === 'object' && ! /*#__PURE__*/React.isValidElement(mark);

    if (markIsObject) {
      return _objectSpread2({
        style: defaultMarkStyle
      }, mark);
    }

    return {
      label: mark,
      style: defaultMarkStyle
    };
  }).reduce(function (res, mark, index) {
    return _objectSpread2(_objectSpread2({}, res), {}, _defineProperty({}, keys[index], mark));
  }, {});
};var Slider = /*#__PURE__*/function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderHandle", function (props) {
      var _this$props = _this.props,
          formatValue = _this$props.formatValue,
          showTooltip = _this$props.showTooltip;

      var value = props.value,
          dragging = props.dragging,
          index = props.index,
          restProps = _objectWithoutProperties(props, ["value", "dragging", "index"]);

      var formattedValue = formatValue ? formatValue(value) : value;
      var tooltipVisible = showTooltip ? showTooltip(index) : false;
      return /*#__PURE__*/React__default['default'].createElement(RCSlider.SliderTooltip, {
        key: index,
        overlay: formattedValue,
        overlayClassName: "c-rc-tooltip -default",
        overlayStyle: {
          color: '#fff'
        },
        placement: "top",
        mouseLeaveDelay: 0,
        destroyTooltipOnHide: true,
        visible: !!dragging || !!tooltipVisible
      }, /*#__PURE__*/React__default['default'].createElement(RCSlider.Handle, _extends({
        className: "drag-handle",
        value: value
      }, restProps)));
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          customClass = _this$props2.customClass,
          range = _this$props2.range,
          handleStyle = _this$props2.handleStyle,
          value = _this$props2.value,
          marks = _this$props2.marks,
          rest = _objectWithoutProperties(_this$props2, ["customClass", "range", "handleStyle", "value", "marks"]);

      var Component = range ? RCSlider.Range : RCSlider__default['default'];
      var handleNum = Array.isArray(value) ? value.length : 1;
      var handleStyles = fill__default['default'](Array(handleNum), {
        width: '1px',
        height: '10px',
        backgroundColor: '#808080',
        marginLeft: '-1px',
        marginTop: '-3px',
        borderRadius: 0,
        border: 0,
        zIndex: 1,
        pointerEvents: 'none',
        touchAction: 'none'
      });
      handleStyles[0] = handleStyle;
      handleStyles[handleNum - 1] = handleStyle;
      var externalClass = classnames__default['default']('vizzuality-slider', _defineProperty({}, customClass, !!customClass));
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: externalClass
      }, /*#__PURE__*/React__default['default'].createElement(Component, _extends({
        handle: this.renderHandle,
        handleStyle: handleStyles,
        value: value,
        marks: marks ? getStyledMarks(marks) : marks
      }, rest)));
    }
  }]);

  return Slider;
}(React.PureComponent);

_defineProperty(Slider, "propTypes", {
  customClass: PropTypes__default['default'].string,
  settings: PropTypes__default['default'].shape({}),
  value: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].number]),
  dragging: PropTypes__default['default'].bool,
  index: PropTypes__default['default'].number,
  range: PropTypes__default['default'].bool,
  trackStyle: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].shape({})]).isRequired,
  handleStyle: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].shape({})]),
  formatValue: PropTypes__default['default'].func,
  showTooltip: PropTypes__default['default'].func,
  railStyle: PropTypes__default['default'].shape({}),
  dotStyle: PropTypes__default['default'].shape({}),
  pushable: PropTypes__default['default'].oneOfType([PropTypes__default['default'].bool, PropTypes__default['default'].number])
});

_defineProperty(Slider, "defaultProps", {
  customClass: null,
  settings: {},
  value: [0],
  dragging: false,
  index: 0,
  range: false,
  handleStyle: {
    backgroundColor: '#c32d7b',
    borderRadius: '10px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.29)',
    border: '0px',
    zIndex: 2
  },
  formatValue: null,
  showTooltip: null,
  railStyle: {
    backgroundColor: '#d9d9d9'
  },
  dotStyle: {
    visibility: 'hidden',
    border: '0px'
  },
  pushable: true
});var _styleModuleImportMap$2 = {
  "./styles.scss": {
    "c-timestep": "vizzuality__c-timestep",
    "player-btn": "vizzuality__player-btn",
    "timestep-slider": "vizzuality__timestep-slider",
    "can-play": "vizzuality__can-play"
  }
};

var Timestep = /*#__PURE__*/function (_PureComponent) {
  _inherits(Timestep, _PureComponent);

  var _super = _createSuper(Timestep);

  function Timestep(props) {
    var _this;

    _classCallCheck(this, Timestep);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "startTimeline", function () {
      var _this$state = _this.state,
          start = _this$state.start,
          end = _this$state.end,
          trim = _this$state.trim;

      if (end < trim) {
        _this.incrementTimeline();
      } else if (end >= trim) {
        _this.setState({
          end: start
        }, function () {
          _this.incrementTimeline();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopTimeline", function () {
      clearInterval(_this.interval);
    });

    _defineProperty(_assertThisInitialized(_this), "incrementTimeline", function () {
      var _this$state2 = _this.state,
          start = _this$state2.start,
          end = _this$state2.end,
          trim = _this$state2.trim;
      var _this$props = _this.props,
          speed = _this$props.speed,
          step = _this$props.step,
          range = _this$props.range,
          max = _this$props.max,
          maxAbs = _this$props.maxAbs;
      var maxCurrent = max >= maxAbs ? maxAbs : max;
      _this.interval = setTimeout(function () {
        var newEnd = end + step;

        if (newEnd > trim && range || !range && newEnd >= maxCurrent) {
          _this.handleResetTimeline();
        } else {
          _this.handleOnChange([start, newEnd, trim]);

          _this.handleOnAfterChange([start, newEnd, trim]);
        }
      }, speed);
    });

    _defineProperty(_assertThisInitialized(_this), "handleResetTimeline", function () {
      var loop = _this.props.loop;
      var trim = _this.state.trim;

      _this.stopTimeline();

      if (loop) {
        _this.startTimeline();
      } else {
        _this.setState({
          playing: false,
          end: trim
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "checkRange", function (range) {
      var _this$state3 = _this.state,
          playing = _this$state3.playing,
          start = _this$state3.start,
          end = _this$state3.end,
          trim = _this$state3.trim;
      var _this$props2 = _this.props,
          minProp = _this$props2.min,
          maxProp = _this$props2.max,
          minAbs = _this$props2.minAbs,
          maxAbs = _this$props2.maxAbs,
          minGap = _this$props2.minGap,
          maxGap = _this$props2.maxGap;

      if (!Array.isArray(range)) {
        return [start, range, trim];
      }

      var min = range[0] <= minAbs ? minAbs : range[0];
      var max = range[2] >= maxAbs ? maxAbs : range[2]; // If start is different from current state

      if (!playing && range[0] !== start) {
        if (minGap && max - min < minGap) {
          if (max === maxAbs || max === maxProp) {
            min = max - minGap;
          } else {
            max = min + minGap;
          }
        }

        if (maxGap) {
          max = max - min > maxGap ? min + maxGap : max;
        }

        return [min, max, max];
      } // If end is different from trim, and trim is different from current state


      if (!playing && range[1] !== range[2] && trim !== range[2]) {
        if (minGap && max - (min + minGap) < 0) {
          if (min === minAbs || min === minProp) {
            max = min + minGap;
          } else {
            min = max - minGap;
          }
        }

        if (maxGap) {
          min = max - (min + maxGap) > 0 ? max - maxGap : min;
        }

        return [min, max, max];
      } // If end is different from trim, and end is different from current state


      if (!playing && range[1] !== range[2] && end !== range[1]) {
        max = range[1] >= maxAbs ? maxAbs : range[1];

        if (minGap && max - (min + minGap) < 0) {
          if (min === minAbs || min === minProp) {
            max = min + minGap;
          } else {
            min = max - minGap;
          }
        }

        if (maxGap) {
          min = max - (min + maxGap) > 0 ? max - maxGap : min;
        }

        return [min, max, max];
      } // If end is different from trim, and trim is different from current state


      if (!playing && trim !== range[0]) {
        if (minGap && max - (min + minGap) < 0) {
          if (min === minAbs || min === minProp) {
            max = min + minGap;
          } else {
            min = max - minGap;
          }
        }

        if (maxGap) {
          min = max - (min + maxGap) > 0 ? max - maxGap : min;
        }

        return [min, max, max];
      }

      return range;
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (range) {
      var handleOnChange = _this.props.handleOnChange;

      var newRange = _this.checkRange(range);

      _this.setState({
        start: newRange[0],
        end: newRange[1],
        trim: newRange[2]
      });

      if (handleOnChange) handleOnChange(newRange);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnAfterChange", function (range) {
      var handleOnAfterChange = _this.props.handleOnAfterChange;

      var newRange = _this.checkRange(range);

      if (handleOnAfterChange) handleOnAfterChange(newRange);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTogglePlay", function () {
      var handleOnPlay = _this.props.handleOnPlay;
      var statePlaying = _this.state.playing;
      var p = !statePlaying;

      _this.setState({
        playing: p
      });

      if (handleOnPlay) handleOnPlay(p);
    });

    var _this$props3 = _this.props,
        _playing = _this$props3.playing,
        _start = _this$props3.start,
        _end = _this$props3.end,
        _trim = _this$props3.trim,
        _minAbs = _this$props3.minAbs,
        _maxAbs = _this$props3.maxAbs;
    _this.state = {
      playing: _playing,
      start: _start <= _minAbs ? _minAbs : _start,
      end: _end >= _maxAbs ? _maxAbs : _end,
      trim: _trim >= _maxAbs ? _maxAbs : _trim
    };
    return _this;
  }

  _createClass(Timestep, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$state4 = this.state,
          statePlaying = _this$state4.playing,
          stateStart = _this$state4.start,
          stateEnd = _this$state4.end,
          stateTrim = _this$state4.trim;
      var prevStatePlaying = prevState.playing,
          prevStateStart = prevState.start,
          prevStateEnd = prevState.end,
          prevStateTrim = prevState.trim;
      var _this$props4 = this.props,
          playing = _this$props4.playing,
          start = _this$props4.start,
          end = _this$props4.end,
          trim = _this$props4.trim,
          minAbs = _this$props4.minAbs,
          maxAbs = _this$props4.maxAbs;
      var prevPropsPlaying = prevProps.playing,
          prevPropsStart = prevProps.start,
          prevPropsEnd = prevProps.end,
          prevPropsTrim = prevProps.trim,
          prevPropsMinAbs = prevProps.minAbs,
          prevPropsMaxAbs = prevProps.maxAbs;

      if (playing !== prevPropsPlaying) {
        this.setState({
          playing: playing
        }); // eslint-disable-line
      }

      if (statePlaying && statePlaying !== prevStatePlaying) {
        this.startTimeline();
      } else if (!statePlaying && statePlaying !== prevStatePlaying) {
        this.stopTimeline();
      } else if (statePlaying && stateEnd !== prevStateEnd) {
        this.incrementTimeline();
      }

      if (start !== prevPropsStart && start !== stateStart && prevStateStart === stateStart) {
        this.setState({
          // eslint-disable-line
          start: start <= minAbs ? minAbs : start,
          end: trim >= maxAbs ? maxAbs : trim
        });
      }

      if (end !== prevPropsEnd && end !== stateEnd && prevStateEnd === stateEnd) {
        this.setState({
          // eslint-disable-line
          end: end >= maxAbs ? maxAbs : end
        });
      }

      if (trim !== prevPropsTrim && trim !== stateTrim && prevStateTrim === stateTrim) {
        this.setState({
          // eslint-disable-line
          trim: trim,
          end: trim >= maxAbs ? maxAbs : trim
        });
      }

      if (minAbs !== prevPropsMinAbs || maxAbs !== prevPropsMaxAbs) {
        this.setState({
          // eslint-disable-line
          start: start <= minAbs ? minAbs : start,
          trim: trim >= maxAbs ? maxAbs : trim,
          end: end >= maxAbs ? maxAbs : end
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.interval) this.stopTimeline();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this$state5 = this.state,
          start = _this$state5.start,
          end = _this$state5.end,
          trim = _this$state5.trim;
      var range = this.props.range;

      if (range) {
        return [start, end, trim];
      }

      return end;
    }
  }, {
    key: "getTrackStyle",
    value: function getTrackStyle() {
      var _this$state6 = this.state,
          start = _this$state6.start,
          end = _this$state6.end,
          trim = _this$state6.trim;
      var trackStyle = this.props.trackStyle;

      if (Array.isArray(trackStyle)) {
        var diff = end - start;
        var diff2 = trim - end;
        var stringArr = [];
        return trackStyle.map(function (t, i) {
          var gradient = t.gradient;

          if (gradient) {
            var stringKeys = Object.keys(gradient); // It could be better, no more neurons

            if (i === 0) {
              stringArr = stringKeys.filter(function (g, j) {
                var next = stringKeys[j + 1] || g;
                var di = start - (g + next);
                return g >= di && g <= end;
              }).map(function (g, j) {
                var first = j === 0;
                var perc = (g - start) / diff * 100;
                var index = stringKeys.findIndex(function (ix) {
                  return ix === g;
                });

                if (first) {
                  return "".concat(gradient[g]);
                }

                return "".concat(gradient[stringKeys[index - 1]], " ").concat(perc, "%, ").concat(gradient[g], " ").concat(perc, "%");
              });
            } // It could be better, no more neurons


            if (i === 1) {
              stringArr = stringKeys.filter(function (g, j) {
                var last = stringKeys[j - 1] || g;
                var di = end - (g - last);
                return g > di && g <= trim;
              }).map(function (g, j) {
                var first = j === 0;
                var perc = (g - end) / diff2 * 100;
                var index = stringKeys.findIndex(function (ix) {
                  return ix === g;
                });

                if (first) {
                  return "".concat(gradient[g]);
                }

                return "".concat(gradient[stringKeys[index - 1]], " ").concat(perc, "%, ").concat(gradient[g], " ").concat(perc, "%");
              });
            }

            return _objectSpread2(_objectSpread2({}, t), {}, {
              background: stringArr.length > 1 ? "linear-gradient(to right, ".concat(stringArr.join(','), ")") : stringArr.toString()
            });
          }

          return t;
        });
      }

      return trackStyle;
    }
  }, {
    key: "renderPlay",
    value: function renderPlay() {
      var statePlaying = this.state.playing;
      var iconStatus = classnames__default['default']({
        'icon-pause': statePlaying,
        'icon-play': !statePlaying
      });
      return /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        className: (classnames__default['default']({
          '-playing': statePlaying
        }) ? classnames__default['default']({
          '-playing': statePlaying
        }) + " " : "") + "vizzuality__player-btn",
        onClick: this.handleTogglePlay
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: iconStatus
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          min = _this$props5.min,
          max = _this$props5.max,
          marks = _this$props5.marks,
          formatValue = _this$props5.formatValue,
          step = _this$props5.step,
          canPlay = _this$props5.canPlay,
          customClass = _this$props5.customClass,
          railStyle = _this$props5.railStyle,
          handleStyle = _this$props5.handleStyle,
          range = _this$props5.range,
          pushable = _this$props5.pushable,
          PlayButton = _this$props5.PlayButton;
      var playing = this.state.playing;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: (customClass ? customClass + " " : "") + "vizzuality__c-timestep"
      }, canPlay && !PlayButton && this.renderPlay(), canPlay && !!PlayButton && PlayButton, /*#__PURE__*/React__default['default'].createElement("div", {
        className: _getClassName__default['default'](classnames__default['default']('timestep-slider', {
          'can-play': canPlay
        }), _styleModuleImportMap$2)
      }, /*#__PURE__*/React__default['default'].createElement(Slider, {
        range: range,
        marks: marks,
        disabled: playing,
        min: min,
        max: max,
        value: this.getValue(),
        step: step,
        formatValue: formatValue,
        railStyle: railStyle,
        trackStyle: this.getTrackStyle(),
        handleStyle: handleStyle,
        showTooltip: function showTooltip(index) {
          return playing && index === 1;
        },
        pushable: pushable,
        onChange: this.handleOnChange,
        onAfterChange: this.handleOnAfterChange
      })));
    }
  }]);

  return Timestep;
}(React.PureComponent);

_defineProperty(Timestep, "propTypes", {
  customClass: PropTypes__default['default'].string,
  range: PropTypes__default['default'].bool,
  pushable: PropTypes__default['default'].oneOfType([PropTypes__default['default'].bool, PropTypes__default['default'].number]),
  canPlay: PropTypes__default['default'].bool,
  min: PropTypes__default['default'].number.isRequired,
  minAbs: PropTypes__default['default'].number,
  max: PropTypes__default['default'].number.isRequired,
  maxAbs: PropTypes__default['default'].number,
  start: PropTypes__default['default'].number.isRequired,
  end: PropTypes__default['default'].number.isRequired,
  trim: PropTypes__default['default'].number,
  marks: PropTypes__default['default'].shape({}).isRequired,
  step: PropTypes__default['default'].number,
  speed: PropTypes__default['default'].number,
  loop: PropTypes__default['default'].bool,
  formatValue: PropTypes__default['default'].func.isRequired,
  trackStyle: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].shape({})]),
  railStyle: PropTypes__default['default'].shape({}),
  handleStyle: PropTypes__default['default'].shape({}),
  playing: PropTypes__default['default'].bool,
  PlayButton: PropTypes__default['default'].node,
  handleOnChange: PropTypes__default['default'].func,
  handleOnAfterChange: PropTypes__default['default'].func,
  handleOnPlay: PropTypes__default['default'].func
});

_defineProperty(Timestep, "defaultProps", {
  customClass: null,
  range: true,
  pushable: 0,
  canPlay: false,
  trim: null,
  minAbs: -Infinity,
  maxAbs: Infinity,
  step: 1,
  speed: 100,
  loop: false,
  trackStyle: {
    backgroundColor: '#c32d7b',
    borderRadius: '0px'
  },
  railStyle: {
    backgroundColor: '#d9d9d9'
  },
  handleStyle: {
    backgroundColor: '#c32d7b',
    borderRadius: '10px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.29)',
    border: '0px',
    zIndex: 2
  },
  playing: undefined,
  PlayButton: null,
  handleOnChange: null,
  handleOnAfterChange: null,
  handleOnPlay: null
});var _ref = typeof window !== 'undefined' ? window : {},
    L = _ref.L;

var MapPopup = /*#__PURE__*/function (_Component) {
  _inherits(MapPopup, _Component);

  var _super = _createSuper(MapPopup);

  function MapPopup() {
    var _this;

    _classCallCheck(this, MapPopup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setPopup", function () {
      var _this$props = _this.props,
          map = _this$props.map,
          latlng = _this$props.latlng;
      if (!latlng || !map) _this.removePopup();

      var content = _this.buildPopup();

      if (latlng && map) {
        _this.popup.setLatLng(latlng).setContent(content).openOn(map);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "buildPopup", function () {
      var children = _this.props.children;
      var popupComponent = document.createElement('div');
      reactDom.render(React__default['default'].Children.map(children, function (child) {
        return /*#__PURE__*/React__default['default'].isValidElement(child) && typeof child.type !== 'string' ? /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2(_objectSpread2({}, _this.props), {}, {
          popup: _this.popup
        })) : child;
      }), popupComponent);
      return popupComponent;
    });

    _defineProperty(_assertThisInitialized(_this), "updatePopup", function () {
      _this.popup.setContent(_this.buildPopup());
    });

    _defineProperty(_assertThisInitialized(_this), "removePopup", function () {
      if (_this.popup) {
        _this.popup.remove();
      }
    });

    return _this;
  }

  _createClass(MapPopup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof L === 'undefined') {
        return;
      }

      this.popup = this.popup || L.popup({
        maxWidth: 400,
        minWidth: 240
      });
      this.props.onReady(this.popup);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevLatLng = prevProps.latlng,
          prevData = prevProps.data;
      var _this$props2 = this.props,
          nextLatLng = _this$props2.latlng,
          nextData = _this$props2.data;

      if (!isEqual__default['default'](prevLatLng, nextLatLng)) {
        this.setPopup();
      }

      if (!isEqual__default['default'](prevData, nextData) && prevLatLng) {
        this.updatePopup();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return MapPopup;
}(React.Component);

_defineProperty(MapPopup, "propTypes", {
  children: PropTypes__default['default'].node.isRequired,

  /** Map instance */
  map: PropTypes__default['default'].object.isRequired,

  /** `{ lat: 20, lng: 20 }` As soon as this changes, a popup will show up on the map */
  latlng: PropTypes__default['default'].object,

  /** As soon as this changes, a popup will be updated on the map */
  data: PropTypes__default['default'].object,

  /** Return a popup instace
   * @param {Object} popup Popup instace
   */
  onReady: PropTypes__default['default'].func
});

_defineProperty(MapPopup, "defaultProps", {
  latlng: {},
  data: {},
  onReady: function onReady() {}
});var MapControls = /*#__PURE__*/function (_PureComponent) {
  _inherits(MapControls, _PureComponent);

  var _super = _createSuper(MapControls);

  function MapControls() {
    _classCallCheck(this, MapControls);

    return _super.apply(this, arguments);
  }

  _createClass(MapControls, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          customClass = _this$props.customClass,
          children = _this$props.children;
      var externalClass = classnames__default['default'](_defineProperty({}, customClass, !!customClass));
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: (externalClass ? externalClass + " " : "") + "vizzuality__c-map-controls"
      }, /*#__PURE__*/React__default['default'].createElement("ul", {
        className: "vizzuality__map-controls-list"
      }, React__default['default'].Children.map(children, function (c, i) {
        return /*#__PURE__*/React__default['default'].isValidElement(c) && /*#__PURE__*/React__default['default'].createElement("li", {
          className: "vizzuality__map-controls-list-item",
          key: i
        }, /*#__PURE__*/React__default['default'].cloneElement(c));
      })));
    }
  }]);

  return MapControls;
}(React.PureComponent);

_defineProperty(MapControls, "propTypes", {
  children: PropTypes__default['default'].node.isRequired,

  /** Custom css class for styling */
  customClass: PropTypes__default['default'].string
});

_defineProperty(MapControls, "defaultProps", {
  customClass: null
});var _styleModuleImportMap$3 = {
  "./styles.scss": {
    "c-zoom-control": "vizzuality__c-zoom-control",
    "zoom-control-btn": "vizzuality__zoom-control-btn",
    "-disabled": "vizzuality__-disabled"
  }
};

var ZoomControl = /*#__PURE__*/function (_PureComponent) {
  _inherits(ZoomControl, _PureComponent);

  var _super = _createSuper(ZoomControl);

  function ZoomControl() {
    var _this;

    _classCallCheck(this, ZoomControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      zoom: _this.props.map.getZoom()
    });

    _defineProperty(_assertThisInitialized(_this), "getZoom", function () {
      _this.setState({
        zoom: _this.props.map.getZoom()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "increaseZoom", function () {
      var zoom = _this.props.map.getZoom();

      var maxZoom = _this.props.map.getMaxZoom();

      _this.setState({
        zoom: zoom === maxZoom ? zoom : zoom + 1
      }, function () {
        _this.props.map.setZoom(_this.state.zoom);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "decreaseZoom", function () {
      var zoom = _this.props.map.getZoom();

      var minZoom = _this.props.map.getMinZoom();

      _this.setState({
        zoom: zoom === minZoom ? zoom : zoom - 1
      }, function () {
        _this.props.map.setZoom(_this.state.zoom);
      });
    });

    return _this;
  }

  _createClass(ZoomControl, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.map.on('zoomend', this.getZoom);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.map.off('zoomend', this.getZoom);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          customClass = _this$props.customClass;
      var zoom = this.state.zoom;
      var maxZoom = this.props.map.getMaxZoom();
      var minZoom = this.props.map.getMinZoom();
      var componentClass = classnames__default['default']('c-zoom-control', _defineProperty({}, className, !!className));
      var externalClass = classnames__default['default'](_defineProperty({}, customClass, !!customClass));
      var zoomInClass = classnames__default['default']('zoom-control-btn', {
        '-disabled': zoom === maxZoom
      });
      var zoomOutClass = classnames__default['default']('zoom-control-btn', {
        '-disabled': zoom === minZoom
      });
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: (externalClass ? externalClass + " " : "") + _getClassName__default['default'](componentClass, _styleModuleImportMap$3)
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        disabled: zoom === maxZoom,
        onClick: this.increaseZoom,
        className: _getClassName__default['default'](zoomInClass, _styleModuleImportMap$3)
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: "icon-plus"
      })), /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        disabled: zoom === minZoom,
        onClick: this.decreaseZoom,
        className: _getClassName__default['default'](zoomOutClass, _styleModuleImportMap$3)
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: "icon-minus"
      })));
    }
  }]);

  return ZoomControl;
}(React.PureComponent);

_defineProperty(ZoomControl, "propTypes", {
  map: PropTypes__default['default'].object.isRequired,
  className: PropTypes__default['default'].string,
  customClass: PropTypes__default['default'].string
});

_defineProperty(ZoomControl, "defaultProps", {
  className: null,
  customClass: null
});var _ref$1 = typeof window !== 'undefined' ? window : {},
    L$1 = _ref$1.L;

if (typeof window !== 'undefined') {
  /*
   * Workaround for 1px lines appearing in some browsers due to fractional transforms
   * and resulting anti-aliasing.
   * https://github.com/Leaflet/Leaflet/issues/3575
   */

  /* eslint-disable */
  (function () {
    var originalInitTile = L$1 && L$1.GridLayer.prototype._initTile;
    L$1 && L$1.GridLayer.include({
      _initTile: function _initTile(tile) {
        originalInitTile.call(this, tile);
        var tileSize = this.getTileSize();
        tile.style.width = "".concat(tileSize.x + 1, "px");
        tile.style.height = "".concat(tileSize.y + 1, "px");
      }
    });
  })();
  /* eslint-enable */

}

var Maps = /*#__PURE__*/function (_Component) {
  _inherits(Maps, _Component);

  var _super = _createSuper(Maps);

  function Maps() {
    var _this;

    _classCallCheck(this, Maps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "events", {});

    _defineProperty(_assertThisInitialized(_this), "setMap", function () {
      var mapOptions = _this.props.mapOptions;
      _this.map = L$1.map(_this.mapNode, _objectSpread2(_objectSpread2({}, Maps.defaultProps.mapOptions), mapOptions));
    });

    _defineProperty(_assertThisInitialized(_this), "setMapOptions", function () {
      var _this$props$mapOption = _this.props.mapOptions,
          center = _this$props$mapOption.center,
          zoom = _this$props$mapOption.zoom;

      _this.map.setView(_objectSpread2({}, center), zoom);
    });

    _defineProperty(_assertThisInitialized(_this), "setBasemap", function () {
      var basemap = _this.props.basemap;
      if (_this.basemapLayer) _this.basemapLayer.remove();
      _this.basemapLayer = L$1.tileLayer(basemap.url, basemap.options).addTo(_this.map).setZIndex(0);
    });

    _defineProperty(_assertThisInitialized(_this), "setLabel", function () {
      var label = _this.props.label;
      if (_this.labelLayer) _this.labelLayer.remove();
      _this.labelLayer = L$1.tileLayer(label.url, label.options).addTo(_this.map).setZIndex(1100);
    });

    _defineProperty(_assertThisInitialized(_this), "setBounds", function () {
      var bounds = _this.props.bounds;
      var bbox = bounds.bbox,
          options = bounds.options;

      if (bbox) {
        var mapBounds = [[bbox[1], bbox[0]], [bbox[3], bbox[2]]];

        _this.map.fitBounds(mapBounds, options);
      }
    });

    return _this;
  }

  _createClass(Maps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof L$1 === 'undefined' || !this.mapNode) {
        return;
      }

      var _this$props = this.props,
          interactionEnabled = _this$props.interactionEnabled,
          scrollZoomEnabled = _this$props.scrollZoomEnabled,
          onReady = _this$props.onReady;
      this.setMap();
      this.setBasemap();
      this.setLabel();
      this.setBounds();
      this.setEvents();

      if (!interactionEnabled) {
        this.map.dragging.disable();
        this.map.touchZoom.disable();
        this.map.doubleClickZoom.disable();
        this.map.scrollWheelZoom.disable();
        this.map.boxZoom.disable();
        this.map.keyboard.disable();
      }

      if (!scrollZoomEnabled) {
        this.map.scrollWheelZoom.disable();
      }

      onReady(this.map); // As this.map didn't exist before this function

      this.forceUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevBasemap = prevProps.basemap,
          prevLabel = prevProps.label,
          prevBounds = prevProps.bounds,
          prevEvents = prevProps.events,
          prevMapOptions = prevProps.mapOptions;
      var _this$props2 = this.props,
          nextBasemap = _this$props2.basemap,
          nextLabel = _this$props2.label,
          nextBounds = _this$props2.bounds,
          nextEvents = _this$props2.events,
          nextMapOptions = _this$props2.mapOptions; // Basemap

      if (!isEqual__default['default'](prevBasemap, nextBasemap)) {
        this.setBasemap();
      } // Label


      if (!isEqual__default['default'](prevLabel, nextLabel)) {
        this.setLabel();
      } // Bounds


      if (!isEqual__default['default'](prevBounds, nextBounds)) {
        this.setBounds();
      } // Events


      if (!isEqual__default['default'](prevEvents, nextEvents)) {
        this.setEvents();
      } // mapOptions


      if (!isEqual__default['default'](prevMapOptions, nextMapOptions)) {
        this.setMapOptions();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this2 = this;

      var events = this.props.events;
      this.removeEvents();
      Object.keys(events).forEach(function (key) {
        _this2.events[key] = function (e) {
          events[key](e, _this2.map);
        };

        _this2.map.on(key, _this2.events[key]);
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var _this3 = this;

      Object.keys(this.events).forEach(function (key) {
        _this3.map.off(key, _this3.events[key]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          customClass = _this$props3.customClass,
          children = _this$props3.children;
      var externalClass = classnames__default['default'](_defineProperty({}, customClass, !!customClass));
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: (externalClass ? externalClass + " " : "") + "vizzuality__c-map"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        ref: function ref(node) {
          _this4.mapNode = node;
        },
        className: "vizzuality__map-container"
      }), !!this.map && typeof children === 'function' && children(this.map));
    }
  }]);

  return Maps;
}(React.Component);

_defineProperty(Maps, "propTypes", {
  /** A function that returns the map instance */
  children: PropTypes__default['default'].func,

  /** Custom css class for styling */
  customClass: PropTypes__default['default'].string,

  /** Leaflet props for creating a map
   * @see Check Leaflet documentation  https://leafletjs.com/reference-1.3.0.html#map
   */
  mapOptions: PropTypes__default['default'].object,

  /** `{ url: 'http://example/{x}/{y}/{z}', options: {}}`
   * @see Check Leaflet documentation  https://leafletjs.com/reference-1.3.0.html#tilelayer
   */
  basemap: PropTypes__default['default'].object,

  /** `{ url: 'http://example/{x}/{y}/{z}', options: {} }` Options for L.tileLayer
   * @see Check Leaflet documentation  https://leafletjs.com/reference-1.3.0.html#tilelayer
   */
  label: PropTypes__default['default'].object,

  /** `{ bbox: [10, 5, 20, 10], options: {} }`
   * @see Check Leaflet documentation  https://leafletjs.com/reference-1.3.0.html#fitbounds-options
   */
  bounds: PropTypes__default['default'].object,

  /**
   * `{ click: (e, map) => {} }` All the functions return 2 params
   * @arg {Object} e event
   * @arg {Object} map Map instance
   * @see Cheack Leaflet documentation https://leafletjs.com/reference-1.3.0.html#map-event
   */
  events: PropTypes__default['default'].object,

  /** Removes all interactions available on the map  */
  interactionEnabled: PropTypes__default['default'].bool,

  /** Removes only zoomScroll on the map  */
  scrollZoomEnabled: PropTypes__default['default'].bool,

  /**
   * Return map instance when this one is ready
   * @arg {Object} map Map instance
   */
  onReady: PropTypes__default['default'].func
});

_defineProperty(Maps, "defaultProps", {
  children: null,
  customClass: null,
  mapOptions: {
    zoomControl: false,
    center: [27, 12],
    zoom: 3,
    maxZoom: 20,
    minZoom: 2
  },
  basemap: {
    url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
    options: {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  },
  label: {
    url: 'http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png',
    options: {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  },
  bounds: {
    bbox: null,
    options: {} // fitBounds options

  },
  events: {},
  interactionEnabled: true,
  scrollZoomEnabled: true,
  onReady: function onReady() {}
});var _ref$2 = typeof window !== 'undefined' ? window : {},
    L$2 = _ref$2.L;

(function () {
  if (typeof L$2 === 'undefined') {
    return false;
  }

  var mapWasDragEnabled;
  var mapWasTapEnabled; // Leaflet v0.7 backwards compatibility

  function on(el, types, fn, context) {
    types.split(' ').forEach(function (type) {
      L$2.DomEvent.on(el, type, fn, context);
    });
  } // Leaflet v0.7 backwards compatibility


  function off(el, types, fn, context) {
    types.split(' ').forEach(function (type) {
      L$2.DomEvent.off(el, type, fn, context);
    });
  }

  function getRangeEvent(rangeInput) {
    return 'oninput' in rangeInput ? 'input' : 'change';
  }

  function cancelMapDrag() {
    mapWasDragEnabled = this._map.dragging.enabled();
    mapWasTapEnabled = this._map.tap && this._map.tap.enabled();

    this._map.dragging.disable();

    this._map.tap && this._map.tap.disable();
  }

  function uncancelMapDrag(e) {
    this._refocusOnMap(e);

    if (mapWasDragEnabled) {
      this._map.dragging.enable();
    }

    if (mapWasTapEnabled) {
      this._map.tap.enable();
    }
  } // convert arg to an array - returns empty array if arg is undefined


  function asArray(arg) {
    return arg === 'undefined' ? [] : Array.isArray(arg) ? arg : [arg];
  }

  function noop() {}

  L$2.Control.SideBySide = L$2.Control.extend({
    options: {
      thumbSize: 42,
      padding: 0
    },
    initialize: function initialize(leftLayers, rightLayers, options) {
      this.setLeftLayers(leftLayers);
      this.setRightLayers(rightLayers);
      L$2.setOptions(this, options);
    },
    getPosition: function getPosition() {
      var rangeValue = this._range.value;
      var offset = (0.5 - rangeValue) * (2 * this.options.padding + this.options.thumbSize);
      return this._map.getSize().x * rangeValue + offset;
    },
    setPosition: noop,
    includes: L$2.Evented.prototype || L$2.Mixin.Events,
    addTo: function addTo(map) {
      this.remove();
      this._map = map;
      var container = this._container = L$2.DomUtil.create('div', 'leaflet-sbs', map._controlContainer);
      this._divider = L$2.DomUtil.create('div', 'leaflet-sbs-divider', container);
      var range = this._range = L$2.DomUtil.create('input', 'leaflet-sbs-range', container);
      range.type = 'range';
      range.min = 0;
      range.max = 1;
      range.step = 'any';
      range.value = 0.5;
      range.style.paddingLeft = range.style.paddingRight = "".concat(this.options.padding, "px");

      this._addEvents();

      this._updateLayers();

      return this;
    },
    remove: function remove() {
      if (!this._map) {
        return this;
      }

      if (this._leftLayer) {
        this._leftLayer.getContainer().style.clip = '';
      }

      if (this._rightLayer) {
        this._rightLayer.getContainer().style.clip = '';
      }

      this._removeEvents();

      L$2.DomUtil.remove(this._container);
      this._map = null;
      return this;
    },
    setLeftLayers: function setLeftLayers(leftLayers) {
      this._leftLayers = asArray(leftLayers);

      this._updateLayers();

      return this;
    },
    setRightLayers: function setRightLayers(rightLayers) {
      this._rightLayers = asArray(rightLayers);

      this._updateLayers();

      return this;
    },
    _updateClip: function _updateClip() {
      var map = this._map;
      var nw = map.containerPointToLayerPoint([0, 0]);
      var se = map.containerPointToLayerPoint(map.getSize());
      var clipX = nw.x + this.getPosition();
      var dividerX = this.getPosition();
      this._divider.style.left = "".concat(dividerX, "px");
      this.fire('dividermove', {
        x: dividerX
      });
      var clipLeft = "rect(".concat([nw.y, clipX, se.y, nw.x].join('px,'), "px)");
      var clipRight = "rect(".concat([nw.y, se.x, se.y, clipX].join('px,'), "px)");

      if (this._leftLayer) {
        this._leftLayer.getContainer().style.clip = clipLeft;
      }

      if (this._rightLayer) {
        this._rightLayer.getContainer().style.clip = clipRight;
      }
    },
    _updateLayers: function _updateLayers() {
      var _this = this;

      if (!this._map) {
        return this;
      }

      var prevLeft = this._leftLayer;
      var prevRight = this._rightLayer;
      this._leftLayer = this._rightLayer = null;

      this._leftLayers.forEach(function (layer) {
        if (_this._map.hasLayer(layer)) {
          _this._leftLayer = layer;
        }
      }, this);

      this._rightLayers.forEach(function (layer) {
        if (_this._map.hasLayer(layer)) {
          _this._rightLayer = layer;
        }
      }, this);

      if (prevLeft !== this._leftLayer) {
        prevLeft && this.fire('leftlayerremove', {
          layer: prevLeft
        });
        this._leftLayer && this.fire('leftlayeradd', {
          layer: this._leftLayer
        });
      }

      if (prevRight !== this._rightLayer) {
        prevRight && this.fire('rightlayerremove', {
          layer: prevRight
        });
        this._rightLayer && this.fire('rightlayeradd', {
          layer: this._rightLayer
        });
      }

      this._updateClip();
    },
    _addEvents: function _addEvents() {
      var range = this._range;
      var map = this._map;
      if (!map || !range) return;
      map.on('move', this._updateClip, this);
      map.on('layeradd layerremove', this._updateLayers, this);
      on(range, getRangeEvent(range), this._updateClip, this);
      on(range, L$2.Browser.touch ? 'touchstart' : 'mousedown', cancelMapDrag, this);
      on(range, L$2.Browser.touch ? 'touchend' : 'mouseup', uncancelMapDrag, this);
    },
    _removeEvents: function _removeEvents() {
      var range = this._range;
      var map = this._map;

      if (range) {
        off(range, getRangeEvent(range), this._updateClip, this);
        off(range, L$2.Browser.touch ? 'touchstart' : 'mousedown', cancelMapDrag, this);
        off(range, L$2.Browser.touch ? 'touchend' : 'mouseup', uncancelMapDrag, this);
      }

      if (map) {
        map.off('layeradd layerremove', this._updateLayers, this);
        map.off('move', this._updateClip, this);
      }
    }
  });

  L$2.control.sideBySide = function (leftLayers, rightLayers, options) {
    return new L$2.Control.SideBySide(leftLayers, rightLayers, options);
  };

  return L$2.Control.SideBySide;
}());var _ref$3 = typeof window !== 'undefined' ? window : {},
    L$3 = _ref$3.L;

var MapSideBySide = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MapSideBySide, _React$PureComponent);

  var _super = _createSuper(MapSideBySide);

  function MapSideBySide() {
    _classCallCheck(this, MapSideBySide);

    return _super.apply(this, arguments);
  }

  _createClass(MapSideBySide, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          map = _this$props.map,
          onReady = _this$props.onReady;

      if (typeof L$3 === 'undefined' || !map || !L$3.control.sideBySide || typeof L$3.control.sideBySide !== 'function') {
        return;
      }

      this.sideBySideControl = L$3.control.sideBySide();
      this.sideBySideControl.addTo(map);
      if (onReady) onReady(this.sideBySideControl);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return MapSideBySide;
}(React__default['default'].PureComponent);

_defineProperty(MapSideBySide, "propTypes", {
  map: PropTypes__default['default'].object.isRequired,

  /**
   * Return side-by-side control instance when this one is ready
   * @arg {Object} sideBySide sideBySide instance
   */
  onReady: PropTypes__default['default'].func.isRequired
});var LegendList = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendList, _PureComponent);

  var _super = _createSuper(LegendList);

  function LegendList(props) {
    var _this;

    _classCallCheck(this, LegendList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (e) {
      if (e.target.id !== 'vizzuality-legend-list') {
        return false;
      }

      var scrolling = _this.state.scrolling;

      if (_this.timeout) {
        // if there is already a timeout in process cancel it
        clearTimeout(_this.timeout);
      }

      _this.timeout = setTimeout(function () {
        _this.timeout = null;

        _this.setState({
          scrolling: false
        });
      }, 250);

      if (!scrolling) {
        _this.setState({
          scrolling: true
        });
      }
    });

    _this.state = {
      scrolling: false
    };
    _this.timeout = null;
    return _this;
  }

  _createClass(LegendList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          sortable = _this$props.sortable,
          children = _this$props.children;
      var scrolling = this.state.scrolling;
      return /*#__PURE__*/React__default['default'].createElement("ul", {
        id: "vizzuality-legend-list",
        className: "vizzuality__c-legend-list",
        onScroll: this.onScroll
      }, React__default['default'].Children.map(children, function (child, index) {
        return /*#__PURE__*/React__default['default'].cloneElement(child, {
          sortable: sortable,
          index: index,
          i: index,
          scrolling: scrolling
        });
      }));
    }
  }]);

  return LegendList;
}(React.PureComponent);

_defineProperty(LegendList, "propTypes", {
  sortable: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].node
});

_defineProperty(LegendList, "defaultProps", {
  sortable: true,
  children: []
});

var LegendList$1 = reactSortableHoc.SortableContainer(LegendList);var LegendItemDrag = function LegendItemDrag() {
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: "vizzuality__c-legend-handler"
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    name: "icon-drag-dots",
    className: "-small"
  }));
};

var LegendItemDrag$1 = reactSortableHoc.SortableHandle(LegendItemDrag);var _styleModuleImportMap$4 = {
  "./styles.scss": {
    "c-legend-item": "vizzuality__c-legend-item",
    "legend-item-container": "vizzuality__legend-item-container",
    "-sortable": "vizzuality__-sortable",
    "legend-info": "vizzuality__legend-info",
    "legend-item-header": "vizzuality__legend-item-header",
    "-dark": "vizzuality__-dark",
    "category": "vizzuality__category",
    "-sort": "vizzuality__-sort"
  }
};

var LegendListItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendListItem, _PureComponent);

  var _super = _createSuper(LegendListItem);

  function LegendListItem() {
    _classCallCheck(this, LegendListItem);

    return _super.apply(this, arguments);
  }

  _createClass(LegendListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          layers = _this$props.layers,
          sortable = _this$props.sortable,
          children = _this$props.children,
          toolbar = _this$props.toolbar,
          title = _this$props.title,
          props = _objectWithoutProperties(_this$props, ["layers", "sortable", "children", "toolbar", "title"]);

      var activeLayer = layers.find(function (l) {
        return l.active;
      }) || layers[0];
      return /*#__PURE__*/React__default['default'].createElement("li", {
        className: _getClassName__default['default'](classnames__default['default']({
          'c-legend-item': true,
          '-sortable': sortable
        }), _styleModuleImportMap$4)
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: _getClassName__default['default'](classnames__default['default']({
          'legend-item-container': true,
          '-sortable': sortable
        }), _styleModuleImportMap$4)
      }, sortable && /*#__PURE__*/React__default['default'].createElement(LegendItemDrag$1, null), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__legend-info"
      }, /*#__PURE__*/React__default['default'].createElement("header", {
        className: "vizzuality__legend-item-header"
      }, /*#__PURE__*/React__default['default'].createElement("h3", null, /*#__PURE__*/React__default['default'].isValidElement(title) && typeof title.type !== 'string' ? /*#__PURE__*/React__default['default'].cloneElement(title, _objectSpread2(_objectSpread2({}, props), {}, {
        layers: layers,
        activeLayer: activeLayer
      })) : activeLayer && activeLayer.name), /*#__PURE__*/React__default['default'].isValidElement(toolbar) && typeof toolbar.type !== 'string' && /*#__PURE__*/React__default['default'].cloneElement(toolbar, _objectSpread2(_objectSpread2({}, props), {}, {
        layers: layers,
        activeLayer: activeLayer
      }))), React__default['default'].Children.map(children, function (child) {
        return /*#__PURE__*/React__default['default'].isValidElement(child) && typeof child.type !== 'string' ? /*#__PURE__*/React__default['default'].cloneElement(child, {
          layers: layers,
          activeLayer: activeLayer
        }) : child;
      }))));
    }
  }]);

  return LegendListItem;
}(React.PureComponent);

_defineProperty(LegendListItem, "propTypes", {
  dataset: PropTypes__default['default'].string,
  layers: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({})),
  sortable: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].node,
  toolbar: PropTypes__default['default'].node,
  title: PropTypes__default['default'].node
});

_defineProperty(LegendListItem, "defaultProps", {
  dataset: '',
  layers: [],
  sortable: true,
  children: [],
  toolbar: [],
  title: []
});

var index = reactSortableHoc.SortableElement(function (_ref) {
  var layerGroup = _ref.layerGroup,
      props = _objectWithoutProperties(_ref, ["layerGroup"]);

  return /*#__PURE__*/React__default['default'].createElement(LegendListItem, _extends({
    key: props.dataset
  }, layerGroup, props));
});var styles = {"c-legend-button":"vizzuality__c-legend-button","-disabled":"vizzuality__-disabled","info":"vizzuality__info","close":"vizzuality__close","toggle":"vizzuality__toggle","opacity":"vizzuality__opacity","layers":"vizzuality__layers"};var LegendItemButtonBBox = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonBBox, _PureComponent);

  var _super = _createSuper(LegendItemButtonBBox);

  function LegendItemButtonBBox() {
    var _this;

    _classCallCheck(this, LegendItemButtonBBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    return _this;
  }

  _createClass(LegendItemButtonBBox, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var scrolling = nextProps.scrolling;

      if (scrolling) {
        this.setState({
          visible: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeLayer = _this$props.activeLayer,
          tooltipOpened = _this$props.tooltipOpened,
          icon = _this$props.icon,
          focusStyle = _this$props.focusStyle,
          defaultStyle = _this$props.defaultStyle,
          tooltipText = _this$props.tooltipText;
      var visible = this.state.visible;

      if (activeLayer.layerConfig && !activeLayer.layerConfig.bbox) {
        return null;
      }

      return /*#__PURE__*/React__default['default'].createElement(Tooltip, {
        overlay: tooltipText || 'Fit to bounds',
        overlayClassName: "c-rc-tooltip -default",
        placement: "top",
        trigger: tooltipOpened ? '' : 'hover',
        mouseLeaveDelay: 0,
        destroyTooltipOnHide: true,
        onVisibleChange: function onVisibleChange(v) {
          return _this2.setState({
            visible: v
          });
        },
        visible: visible
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        className: "vizzuality__c-legend-button",
        "aria-label": "Fit to bounds",
        onClick: function onClick() {
          return _this2.props.onChangeBBox(activeLayer);
        }
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: icon || 'icon-bbox',
        className: "-small",
        style: visible ? focusStyle : defaultStyle
      })));
    }
  }]);

  return LegendItemButtonBBox;
}(React.PureComponent);

_defineProperty(LegendItemButtonBBox, "propTypes", {
  activeLayer: PropTypes__default['default'].object,
  tooltipOpened: PropTypes__default['default'].bool,
  icon: PropTypes__default['default'].string,
  focusStyle: PropTypes__default['default'].object,
  defaultStyle: PropTypes__default['default'].object,
  tooltipText: PropTypes__default['default'].string,
  scrolling: PropTypes__default['default'].bool,
  onChangeBBox: PropTypes__default['default'].func
});

_defineProperty(LegendItemButtonBBox, "defaultProps", {
  activeLayer: {},
  icon: '',
  focusStyle: {},
  defaultStyle: {},
  tooltipOpened: false,
  tooltipText: '',
  scrolling: false,
  onChangeBBox: function onChangeBBox() {}
});var _styleModuleImportMap$5 = {
  "./styles.scss": {
    "c-legend-item-button-layers-tooltip": "vizzuality__c-legend-item-button-layers-tooltip",
    "layers-list": "vizzuality__layers-list",
    "layers-list-item": "vizzuality__layers-list-item",
    "-active": "vizzuality__-active"
  }
};

var LegendLayersTooltip = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendLayersTooltip, _PureComponent);

  var _super = _createSuper(LegendLayersTooltip);

  function LegendLayersTooltip() {
    _classCallCheck(this, LegendLayersTooltip);

    return _super.apply(this, arguments);
  }

  _createClass(LegendLayersTooltip, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          layers = _this$props.layers,
          activeLayer = _this$props.activeLayer;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__c-legend-item-button-layers-tooltip"
      }, "Layers", /*#__PURE__*/React__default['default'].createElement("ul", {
        className: "vizzuality__layers-list"
      }, layers.map(function (l) {
        return /*#__PURE__*/React__default['default'].createElement("li", {
          key: l.id,
          onClick: function onClick() {
            return _this.props.onChangeLayer(l);
          },
          className: _getClassName__default['default'](classnames__default['default']({
            'layers-list-item': true,
            '-active': l.id === activeLayer.id
          }), _styleModuleImportMap$5)
        }, l.name);
      })));
    }
  }]);

  return LegendLayersTooltip;
}(React.PureComponent);

_defineProperty(LegendLayersTooltip, "propTypes", {
  // Layers
  layers: PropTypes__default['default'].array.isRequired,
  activeLayer: PropTypes__default['default'].object.isRequired,
  // Callback to call when the layer changes with
  // the ID of the dataset and the ID of the layer
  onChangeLayer: PropTypes__default['default'].func.isRequired
});var LegendItemButtonLayers = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonLayers, _PureComponent);

  var _super = _createSuper(LegendItemButtonLayers);

  function LegendItemButtonLayers() {
    var _this;

    _classCallCheck(this, LegendItemButtonLayers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visibilityHover: false,
      visibilityClick: false,
      multiLayersActive: _this.props.i === 0 && _this.props.layers.length > 1
    });

    _defineProperty(_assertThisInitialized(_this), "onTooltipVisibilityChange", function (visibility) {
      var onTooltipVisibilityChange = _this.props.onTooltipVisibilityChange;
      var multiLayersActive = _this.state.multiLayersActive;

      _this.setState(_objectSpread2({
        visibilityHover: false,
        visibilityClick: visibility
      }, multiLayersActive && {
        multiLayersActive: false
      }));

      onTooltipVisibilityChange(visibility);
    });

    _defineProperty(_assertThisInitialized(_this), "getTimelineLayers", function () {
      var layers = _this.props.layers;
      return sortBy__default['default'](layers.filter(function (l) {
        return l.layerConfig.timeline;
      }), function (l) {
        return l.layerConfig.order;
      });
    });

    return _this;
  }

  _createClass(LegendItemButtonLayers, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          scrolling = _this$props.scrolling,
          prevIndex = _this$props.i;
      var nextIndex = nextProps.i;

      if (scrolling || prevIndex !== nextIndex) {
        this.onTooltipVisibilityChange(false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          layers = _this$props2.layers,
          activeLayer = _this$props2.activeLayer,
          icon = _this$props2.icon,
          focusStyle = _this$props2.focusStyle,
          defaultStyle = _this$props2.defaultStyle,
          tooltipText = _this$props2.tooltipText,
          onChangeLayer = _this$props2.onChangeLayer,
          tooltipOpened = _this$props2.tooltipOpened;
      var _this$state = this.state,
          visibilityClick = _this$state.visibilityClick,
          visibilityHover = _this$state.visibilityHover,
          multiLayersActive = _this$state.multiLayersActive;
      var timelineLayers = this.getTimelineLayers();

      if (layers.length === 1 || timelineLayers.length) {
        return null;
      }

      return /*#__PURE__*/React__default['default'].createElement(Tooltip, {
        overlay: /*#__PURE__*/React__default['default'].createElement(LegendLayersTooltip, {
          layers: layers,
          activeLayer: activeLayer,
          onChangeLayer: onChangeLayer
        }),
        overlayClassName: "c-rc-tooltip -default -layers",
        placement: "top",
        trigger: ['click'],
        visible: visibilityClick,
        onVisibleChange: this.onTooltipVisibilityChange,
        destroyTooltipOnHide: true
      }, /*#__PURE__*/React__default['default'].createElement(Tooltip, {
        visible: multiLayersActive || !visibilityClick && visibilityHover,
        overlay: tooltipText || "".concat(layers.length, " layers"),
        overlayClassName: "c-rc-tooltip -default",
        placement: "top",
        trigger: tooltipOpened ? '' : 'hover',
        onVisibleChange: function onVisibleChange(visibility) {
          return _this2.setState({
            visibilityHover: visibility,
            multiLayersActive: false
          });
        },
        destroyTooltipOnHide: true
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        className: "vizzuality__c-legend-button vizzuality__layers",
        "aria-label": "Select other layer"
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: icon || 'icon-layers',
        className: "-small",
        style: visibilityHover || visibilityClick ? focusStyle : defaultStyle
      }))));
    }
  }]);

  return LegendItemButtonLayers;
}(React.PureComponent);

_defineProperty(LegendItemButtonLayers, "propTypes", {
  layers: PropTypes__default['default'].array,
  activeLayer: PropTypes__default['default'].object,
  icon: PropTypes__default['default'].string,
  focusStyle: PropTypes__default['default'].object,
  defaultStyle: PropTypes__default['default'].object,
  tooltipText: PropTypes__default['default'].string,
  tooltipOpened: PropTypes__default['default'].bool,
  scrolling: PropTypes__default['default'].bool,
  onChangeLayer: PropTypes__default['default'].func,
  onTooltipVisibilityChange: PropTypes__default['default'].func
});

_defineProperty(LegendItemButtonLayers, "defaultProps", {
  layers: [],
  activeLayer: {},
  icon: '',
  focusStyle: {},
  defaultStyle: {},
  tooltipOpened: false,
  tooltipText: null,
  scrolling: false,
  onChangeLayer: function onChangeLayer() {},
  onTooltipVisibilityChange: function onTooltipVisibilityChange() {}
});var LegendOpacityTooltip = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendOpacityTooltip, _PureComponent);

  var _super = _createSuper(LegendOpacityTooltip);

  function LegendOpacityTooltip(props) {
    var _this;

    _classCallCheck(this, LegendOpacityTooltip);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (v) {
      var _this$props = _this.props,
          activeLayer = _this$props.activeLayer,
          onChangeOpacity = _this$props.onChangeOpacity;
      onChangeOpacity(activeLayer, v);
    });

    var _this$props$activeLay = _this.props.activeLayer,
        _activeLayer = _this$props$activeLay === void 0 ? {} : _this$props$activeLay;

    var opacity = _activeLayer.opacity;
    _this.state = {
      opacity: typeof opacity !== 'undefined' ? opacity : 1
    };
    return _this;
  }

  _createClass(LegendOpacityTooltip, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var opacity = this.props.activeLayer.opacity;
      var prevOpacity = prevProps.activeLayer.opacity;
      var stateOpacity = this.state.opacity;
      var prevStateOpacity = prevState.opacity;

      if (opacity !== prevOpacity && stateOpacity === prevStateOpacity) {
        this.setState({
          opacity: opacity
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _ref;

      var _this$props2 = this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          step = _this$props2.step,
          rest = _objectWithoutProperties(_this$props2, ["min", "max", "step"]);

      var opacity = this.state.opacity;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__c-legend-item-button-opacity-tooltip",
        ref: function ref(node) {
          _this2.el = node;
        }
      }, "Opacity", /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__slider-tooltip-container"
      }, /*#__PURE__*/React__default['default'].createElement(Slider, _extends({
        marks: (_ref = {}, _defineProperty(_ref, min, '0%'), _defineProperty(_ref, max, '100%'), _ref),
        min: min,
        max: max,
        step: step,
        value: opacity,
        formatValue: function formatValue(perc) {
          return "".concat(Math.round(perc * 100), "%");
        },
        onChange: function onChange(value) {
          return _this2.setState({
            opacity: value
          });
        },
        onAfterChange: this.onChange,
        trackStyle: {
          backgroundColor: '#c32d7b',
          borderRadius: '0px'
        }
      }, rest))));
    }
  }]);

  return LegendOpacityTooltip;
}(React.PureComponent);

_defineProperty(LegendOpacityTooltip, "propTypes", {
  // Layers
  activeLayer: PropTypes__default['default'].shape({}).isRequired,
  min: PropTypes__default['default'].number,
  max: PropTypes__default['default'].number,
  step: PropTypes__default['default'].number,
  // Callback to call when the layer changes with
  // the ID of the dataset and the ID of the layer
  onChangeOpacity: PropTypes__default['default'].func.isRequired
});

_defineProperty(LegendOpacityTooltip, "defaultProps", {
  min: 0,
  max: 1,
  step: 0.01
});var _styleModuleImportMap$6 = {
  "styles": {
    "c-legend-button": "vizzuality__c-legend-button",
    "-disabled": "vizzuality__-disabled",
    "info": "vizzuality__info",
    "close": "vizzuality__close",
    "toggle": "vizzuality__toggle",
    "opacity": "vizzuality__opacity",
    "layers": "vizzuality__layers"
  }
};

var LegendItemButtonOpacity = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonOpacity, _PureComponent);

  var _super = _createSuper(LegendItemButtonOpacity);

  function LegendItemButtonOpacity() {
    var _this;

    _classCallCheck(this, LegendItemButtonOpacity);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visibilityHover: false,
      visibilityClick: false
    });

    _defineProperty(_assertThisInitialized(_this), "onTooltipVisibilityChange", function (v) {
      var _this$props = _this.props,
          visibility = _this$props.visibility,
          onTooltipVisibilityChange = _this$props.onTooltipVisibilityChange;

      if (visibility) {
        _this.setState({
          visibilityHover: false,
          visibilityClick: v
        });

        onTooltipVisibilityChange(v);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setHoverText", function (tooltipText, opacity, visibility) {
      if (tooltipText) return tooltipText;
      if (!visibility) return 'Opacity (disabled)';
      return "Opacity ".concat(typeof opacity !== 'undefined' ? "(".concat(Math.round(opacity * 100), "%)") : '');
    });

    return _this;
  }

  _createClass(LegendItemButtonOpacity, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var scrolling = nextProps.scrolling;

      if (scrolling) {
        this.onTooltipVisibilityChange(false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          layers = _this$props2.layers,
          visibility = _this$props2.visibility,
          activeLayer = _this$props2.activeLayer,
          tooltipOpened = _this$props2.tooltipOpened,
          icon = _this$props2.icon,
          className = _this$props2.className,
          enabledStyle = _this$props2.enabledStyle,
          defaultStyle = _this$props2.defaultStyle,
          disabledStyle = _this$props2.disabledStyle,
          focusStyle = _this$props2.focusStyle,
          tooltipText = _this$props2.tooltipText;
          _this$props2.scrolling;
          var onChangeOpacity = _this$props2.onChangeOpacity,
          rest = _objectWithoutProperties(_this$props2, ["layers", "visibility", "activeLayer", "tooltipOpened", "icon", "className", "enabledStyle", "defaultStyle", "disabledStyle", "focusStyle", "tooltipText", "scrolling", "onChangeOpacity"]);

      var _this$state = this.state,
          visibilityClick = _this$state.visibilityClick,
          visibilityHover = _this$state.visibilityHover;
      var opacity = activeLayer.opacity;
      var iconStyle = visibility ? defaultStyle : disabledStyle;

      if (visibility && (visibilityHover || visibilityClick)) {
        iconStyle = focusStyle;
      }

      if (visibility && opacity < 1) iconStyle = enabledStyle;
      return /*#__PURE__*/React__default['default'].createElement(Tooltip, {
        overlay: visibility && /*#__PURE__*/React__default['default'].createElement(LegendOpacityTooltip, _extends({
          layers: layers,
          activeLayer: activeLayer,
          onChangeOpacity: onChangeOpacity
        }, rest)),
        visible: visibility && visibilityClick,
        overlayClassName: "c-rc-tooltip ".concat(classnames__default['default']({
          '-default': visibility
        }), " ").concat(className || ''),
        placement: "top",
        trigger: ['click'],
        onVisibleChange: this.onTooltipVisibilityChange,
        destroyTooltipOnHide: true
      }, /*#__PURE__*/React__default['default'].createElement(Tooltip, {
        visible: visibilityHover && !visibilityClick,
        overlay: this.setHoverText(tooltipText, opacity, visibility),
        overlayClassName: "c-rc-tooltip -default",
        placement: "top",
        trigger: tooltipOpened ? '' : 'hover',
        onVisibleChange: function onVisibleChange(v) {
          return _this2.setState({
            visibilityHover: v
          });
        },
        destroyTooltipOnHide: true,
        style: styles.tooltip
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        "aria-label": "Change opacity",
        className: _getClassName__default['default']("c-legend-button opacity ".concat(classnames__default['default']({
          '-disabled': !visibility
        })), _styleModuleImportMap$6)
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: icon || 'icon-opacity',
        className: "-small",
        style: iconStyle
      }))));
    }
  }]);

  return LegendItemButtonOpacity;
}(React.PureComponent);

_defineProperty(LegendItemButtonOpacity, "propTypes", {
  layers: PropTypes__default['default'].arrayOf(PropTypes__default['default'].shape({})),
  activeLayer: PropTypes__default['default'].shape({}),
  visibility: PropTypes__default['default'].bool,
  tooltipOpened: PropTypes__default['default'].bool,
  icon: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  focusStyle: PropTypes__default['default'].shape({}),
  defaultStyle: PropTypes__default['default'].shape({}),
  enabledStyle: PropTypes__default['default'].shape({}),
  disabledStyle: PropTypes__default['default'].shape({}),
  tooltipText: PropTypes__default['default'].string,
  scrolling: PropTypes__default['default'].bool,
  onChangeOpacity: PropTypes__default['default'].func,
  onTooltipVisibilityChange: PropTypes__default['default'].func
});

_defineProperty(LegendItemButtonOpacity, "defaultProps", {
  layers: [],
  activeLayer: {},
  visibility: true,
  icon: '',
  className: '',
  focusStyle: {},
  defaultStyle: {},
  enabledStyle: {},
  disabledStyle: {},
  tooltipOpened: false,
  tooltipText: '',
  scrolling: false,
  onChangeOpacity: function onChangeOpacity() {},
  onTooltipVisibilityChange: function onTooltipVisibilityChange() {}
});var LegendItemButtonVisibility = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonVisibility, _PureComponent);

  var _super = _createSuper(LegendItemButtonVisibility);

  function LegendItemButtonVisibility() {
    var _this;

    _classCallCheck(this, LegendItemButtonVisibility);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    return _this;
  }

  _createClass(LegendItemButtonVisibility, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var scrolling = nextProps.scrolling;

      if (scrolling) {
        this.setState({
          visible: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeLayer = _this$props.activeLayer,
          visibility = _this$props.visibility,
          tooltipOpened = _this$props.tooltipOpened,
          iconShow = _this$props.iconShow,
          iconHide = _this$props.iconHide,
          focusStyle = _this$props.focusStyle,
          defaultStyle = _this$props.defaultStyle,
          tooltipText = _this$props.tooltipText;
      var visible = this.state.visible;
      var showIcon = iconShow || 'icon-show';
      var hideIcon = iconHide || 'icon-hide';
      var activeIcon = visibility ? hideIcon : showIcon;
      return /*#__PURE__*/React__default['default'].createElement(Tooltip, {
        overlay: tooltipText || (visibility ? 'Hide layer' : 'Show layer'),
        overlayClassName: "c-rc-tooltip -default",
        placement: "top",
        trigger: tooltipOpened ? '' : 'hover',
        mouseLeaveDelay: 0,
        destroyTooltipOnHide: true,
        onVisibleChange: function onVisibleChange(v) {
          return _this2.setState({
            visible: v
          });
        },
        visible: visible
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        className: "vizzuality__c-legend-button vizzuality__toggle",
        onClick: function onClick() {
          return _this2.props.onChangeVisibility(activeLayer, !visibility);
        },
        "aria-label": "Toggle the visibility"
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: activeIcon,
        className: "-small",
        style: visible ? focusStyle : defaultStyle
      })));
    }
  }]);

  return LegendItemButtonVisibility;
}(React.PureComponent);

_defineProperty(LegendItemButtonVisibility, "propTypes", {
  activeLayer: PropTypes__default['default'].object,
  visibility: PropTypes__default['default'].bool,
  onChangeVisibility: PropTypes__default['default'].func,
  iconShow: PropTypes__default['default'].string,
  iconHide: PropTypes__default['default'].string,
  focusStyle: PropTypes__default['default'].object,
  defaultStyle: PropTypes__default['default'].object,
  tooltipOpened: PropTypes__default['default'].bool,
  tooltipText: PropTypes__default['default'].string,
  scrolling: PropTypes__default['default'].bool
});

_defineProperty(LegendItemButtonVisibility, "defaultProps", {
  activeLayer: {},
  visibility: true,
  iconShow: '',
  iconHide: '',
  focusStyle: {},
  defaultStyle: {},
  tooltipOpened: false,
  tooltipText: '',
  scrolling: false,
  onChangeVisibility: function onChangeVisibility() {}
});var LegendItemButtonInfo = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonInfo, _PureComponent);

  var _super = _createSuper(LegendItemButtonInfo);

  function LegendItemButtonInfo() {
    var _this;

    _classCallCheck(this, LegendItemButtonInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    return _this;
  }

  _createClass(LegendItemButtonInfo, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var scrolling = nextProps.scrolling;

      if (scrolling) {
        this.setState({
          visible: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeLayer = _this$props.activeLayer,
          tooltipOpened = _this$props.tooltipOpened,
          icon = _this$props.icon,
          focusStyle = _this$props.focusStyle,
          defaultStyle = _this$props.defaultStyle,
          tooltipText = _this$props.tooltipText;
      var visible = this.state.visible;
      return /*#__PURE__*/React__default['default'].createElement(Tooltip, {
        overlay: tooltipText || 'Layer info',
        overlayClassName: "c-rc-tooltip -default",
        placement: "top",
        trigger: tooltipOpened ? '' : 'hover',
        mouseLeaveDelay: 0,
        destroyTooltipOnHide: true,
        onVisibleChange: function onVisibleChange(v) {
          return _this2.setState({
            visible: v
          });
        },
        visible: visible
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        className: "vizzuality__c-legend-button",
        "aria-label": "More information",
        onClick: function onClick() {
          return _this2.props.onChangeInfo(activeLayer);
        }
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: icon || 'icon-info',
        className: "-small",
        style: visible ? focusStyle : defaultStyle
      })));
    }
  }]);

  return LegendItemButtonInfo;
}(React.PureComponent);

_defineProperty(LegendItemButtonInfo, "propTypes", {
  activeLayer: PropTypes__default['default'].object,
  icon: PropTypes__default['default'].string,
  focusStyle: PropTypes__default['default'].object,
  defaultStyle: PropTypes__default['default'].object,
  tooltipOpened: PropTypes__default['default'].bool,
  tooltipText: PropTypes__default['default'].string,
  scrolling: PropTypes__default['default'].bool,
  // ACTIONS
  onChangeInfo: PropTypes__default['default'].func
});

_defineProperty(LegendItemButtonInfo, "defaultProps", {
  activeLayer: {},
  icon: '',
  focusStyle: {},
  defaultStyle: {},
  tooltipOpened: false,
  tooltipText: '',
  scrolling: false,
  onChangeInfo: function onChangeInfo() {}
});var LegendItemButtonRemove = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonRemove, _PureComponent);

  var _super = _createSuper(LegendItemButtonRemove);

  function LegendItemButtonRemove() {
    var _this;

    _classCallCheck(this, LegendItemButtonRemove);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    return _this;
  }

  _createClass(LegendItemButtonRemove, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var scrolling = nextProps.scrolling;

      if (scrolling) {
        this.setState({
          visible: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeLayer = _this$props.activeLayer,
          tooltipOpened = _this$props.tooltipOpened,
          icon = _this$props.icon,
          focusStyle = _this$props.focusStyle,
          defaultStyle = _this$props.defaultStyle,
          tooltipText = _this$props.tooltipText;
      var visible = this.state.visible;
      return /*#__PURE__*/React__default['default'].createElement(Tooltip, {
        overlay: tooltipText || 'Remove layer',
        overlayClassName: "c-rc-tooltip -default",
        placement: "top",
        trigger: tooltipOpened ? '' : 'hover',
        mouseLeaveDelay: 0,
        destroyTooltipOnHide: true,
        onVisibleChange: function onVisibleChange(v) {
          return _this2.setState({
            visible: v
          });
        },
        visible: visible
      }, /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        className: "vizzuality__c-legend-button vizzuality__close",
        onClick: function onClick() {
          return _this2.props.onRemoveLayer(activeLayer);
        },
        "aria-label": "Remove"
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: icon || 'icon-cross',
        className: "-small",
        style: visible ? focusStyle : defaultStyle
      })));
    }
  }]);

  return LegendItemButtonRemove;
}(React.PureComponent);

_defineProperty(LegendItemButtonRemove, "propTypes", {
  activeLayer: PropTypes__default['default'].object,
  icon: PropTypes__default['default'].string,
  focusStyle: PropTypes__default['default'].object,
  defaultStyle: PropTypes__default['default'].object,
  tooltipOpened: PropTypes__default['default'].bool,
  tooltipText: PropTypes__default['default'].string,
  scrolling: PropTypes__default['default'].bool,
  // ACTIONS
  onRemoveLayer: PropTypes__default['default'].func
});

_defineProperty(LegendItemButtonRemove, "defaultProps", {
  activeLayer: {},
  icon: '',
  focusStyle: {},
  defaultStyle: {},
  tooltipOpened: false,
  tooltipText: '',
  scrolling: false,
  // ACTIONS
  onRemoveLayer: function onRemoveLayer() {}
});var LegendItemToolbar = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemToolbar, _PureComponent);

  var _super = _createSuper(LegendItemToolbar);

  function LegendItemToolbar() {
    var _this;

    _classCallCheck(this, LegendItemToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      tooltipOpened: false
    });

    _defineProperty(_assertThisInitialized(_this), "onTooltipVisibilityChange", function (tooltipOpened) {
      _this.setState({
        tooltipOpened: tooltipOpened
      });
    });

    return _this;
  }

  _createClass(LegendItemToolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      var tooltipOpened = this.state.tooltipOpened;

      var props = _objectSpread2(_objectSpread2({}, rest), {}, {
        tooltipOpened: tooltipOpened,
        onTooltipVisibilityChange: this.onTooltipVisibilityChange
      });

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__c-legend-item-toolbar"
      }, !!React__default['default'].Children.count(children) && React__default['default'].Children.map(children, function (child) {
        return /*#__PURE__*/React__default['default'].isValidElement(child) && typeof child.type !== 'string' ? /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2({}, props)) : child;
      }), !React__default['default'].Children.count(children) && /*#__PURE__*/React__default['default'].createElement(LegendItemButtonBBox, props), !React__default['default'].Children.count(children) && /*#__PURE__*/React__default['default'].createElement(LegendItemButtonLayers, props), !React__default['default'].Children.count(children) && /*#__PURE__*/React__default['default'].createElement(LegendItemButtonOpacity, props), !React__default['default'].Children.count(children) && /*#__PURE__*/React__default['default'].createElement(LegendItemButtonVisibility, props), !React__default['default'].Children.count(children) && /*#__PURE__*/React__default['default'].createElement(LegendItemButtonInfo, props), !React__default['default'].Children.count(children) && /*#__PURE__*/React__default['default'].createElement(LegendItemButtonRemove, props));
    }
  }]);

  return LegendItemToolbar;
}(React.PureComponent);

_defineProperty(LegendItemToolbar, "propTypes", {
  // Props
  children: PropTypes__default['default'].node,
  enabledStyle: PropTypes__default['default'].object,
  defaultStyle: PropTypes__default['default'].object,
  disabledStyle: PropTypes__default['default'].object,
  focusStyle: PropTypes__default['default'].object,
  // ACTIONS
  onChangeBBox: PropTypes__default['default'].func,
  onChangeLayer: PropTypes__default['default'].func,
  onChangeOpacity: PropTypes__default['default'].func,
  onChangeVisibility: PropTypes__default['default'].func,
  onRemoveLayer: PropTypes__default['default'].func,
  onChangeInfo: PropTypes__default['default'].func
});

_defineProperty(LegendItemToolbar, "defaultProps", {
  // Props
  children: [],
  defaultStyle: {
    fill: '#717171'
  },
  enabledStyle: {
    fill: '#2C75B0'
  },
  disabledStyle: {
    fill: '#CACCD0'
  },
  focusStyle: {
    fill: '#393f44'
  },
  // ACTIONS
  onChangeBBox: function onChangeBBox(l) {
    return console.info(l);
  },
  onChangeInfo: function onChangeInfo(l) {
    return console.info(l);
  },
  onChangeLayer: function onChangeLayer(l) {
    return console.info(l);
  },
  onChangeVisibility: function onChangeVisibility(l, v) {
    return console.info(l, v);
  },
  onChangeOpacity: function onChangeOpacity(l, o) {
    return console.info(l, o);
  },
  onRemoveLayer: function onRemoveLayer(l) {
    return console.info(l);
  }
});/**
 * CODE COPIED FROM:
 * https://github.com/Vizzuality/layer-manager/blob/v1.13.2/src/utils/query.js
 *
 * By including the content of the file here, we can remove the layer-manager v1 as a dependency
 */
/**
 * Params should have this format => { key:'xxx', key2:'xxx' }
 * Keys to search should be in this format {{key}}
 * @param {String} originalStr
 * @param {Object} params
 */

var substitution = function substitution(originalStr) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var str = originalStr;
  Object.keys(params).forEach(function (key) {
    str = str.replace(new RegExp("{{".concat(key, "}}"), 'g'), params[key]).replace(new RegExp("{".concat(key, "}"), 'g'), params[key]);
  });
  return str;
};
/**
 * Params should have this format => { where1: { { key:'xxx', key2:'xxx' } }},
 * Keys to search should be in this format {{key}}
 * @param {String} originalStr
 * @param {Object} params
 */

var concatenation = function concatenation(originalStr) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var str = originalStr;
  var sql;
  Object.keys(params).forEach(function (key) {
    sql = "".concat(compact__default['default'](Object.keys(params[key]).map(function (k) {
      var value = params[key][k];

      if (Array.isArray(value) && !!value.length) {
        // window.isNaN is needed here as Number.isNaN returns
        // false in the case Number.isNaN('string'). please dont change.
        var mappedValue = value.map(function (v) {
          return Number.isNaN(v) ? "'".concat(v, "'") : v;
        }); // eslint-disable-line

        return "".concat(k, " IN (").concat(mappedValue.join(', '), ")");
      }

      if (value) {
        return Number.isNaN(value) ? "".concat(k, " = '").concat(value, "'") : "".concat(k, " = ").concat(value); // eslint-disable-line
      }

      return null;
    })).join(' AND '));
    if (sql && key.startsWith('where')) sql = "WHERE ".concat(sql);else if (sql && key.startsWith('and')) sql = "AND ".concat(sql);else sql = '';
    str = str.replace(new RegExp("{{".concat(key, "}}"), 'g'), sql);
    str = str.replace(new RegExp("{".concat(key, "}"), 'g'), sql);
  });
  return str;
};
/**
 * Replace function
 * @param {String} string
 * @param {Object} params
 * @param {Object} sqlParams
 */

var replace = function replace(originalStr) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var sqlParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var str = originalStr;

  if (typeof str === 'string') {
    str = substitution(str, params);
    str = concatenation(str, sqlParams);
  }

  return str;
};var _styleModuleImportMap$7 = {
  "./styles.scss": {
    "c-legend-item-basic": "vizzuality__c-legend-item-basic",
    "name": "vizzuality__name",
    "unit": "vizzuality__unit",
    "icon-square": "vizzuality__icon-square",
    "icon-line": "vizzuality__icon-line",
    "icon-circle": "vizzuality__icon-circle",
    "icon-triangle": "vizzuality__icon-triangle",
    "custom-icon": "vizzuality__custom-icon"
  }
};

var LegendItem = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(LegendItem, _React$PureComponent);

  var _super = _createSuper(LegendItem);

  function LegendItem() {
    var _this;

    _classCallCheck(this, LegendItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getIconHtml", function (iconName) {
      var _this$props = _this.props,
          name = _this$props.name,
          hideIcon = _this$props.hideIcon,
          color = _this$props.color,
          size = _this$props.size,
          icon = _this$props.icon;

      if (hideIcon) {
        return null;
      }

      if (iconName === 'triangle') {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          style: {
            boderRightWidth: size / 2,
            boderLeftWidth: size / 2,
            boderBottomWidth: size,
            borderBottomColor: color
          },
          className: _getClassName__default['default']("icon-".concat(icon), _styleModuleImportMap$7)
        });
      }

      if (iconName === 'line') {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          style: {
            width: size,
            backgroundColor: color
          },
          className: _getClassName__default['default']("icon-".concat(icon), _styleModuleImportMap$7)
        });
      }

      if (iconName === 'square' || iconName === 'circle') {
        return /*#__PURE__*/React__default['default'].createElement("div", {
          style: {
            width: size,
            height: size,
            backgroundColor: color
          },
          className: _getClassName__default['default']("icon-".concat(icon), _styleModuleImportMap$7)
        });
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__custom-icon"
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: icon,
        alt: name
      }));
    });

    return _this;
  }

  _createClass(LegendItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          icon = _this$props2.icon;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__c-legend-item-basic"
      }, this.getIconHtml(icon), /*#__PURE__*/React__default['default'].createElement("span", {
        className: "vizzuality__name"
      }, name));
    }
  }]);

  return LegendItem;
}(React__default['default'].PureComponent);

_defineProperty(LegendItem, "propTypes", {
  size: PropTypes__default['default'].number,
  color: PropTypes__default['default'].string,
  name: PropTypes__default['default'].string,
  icon: PropTypes__default['default'].string,
  // triangle, circle, square, line
  hideIcon: PropTypes__default['default'].bool
});

_defineProperty(LegendItem, "defaultProps", {
  size: 12,
  color: 'transparent',
  name: '',
  icon: 'square',
  hideIcon: false
});var _styleModuleImportMap$8 = {
  "./styles.scss": {
    "c-legend-type-basic": "vizzuality__c-legend-type-basic",
    "columns": "vizzuality__columns",
    "horizontal": "vizzuality__horizontal",
    "vertical": "vizzuality__vertical",
    "legend-basic-group": "vizzuality__legend-basic-group"
  }
};
var LegendTypeBasic = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(LegendTypeBasic, _React$PureComponent);

  var _super = _createSuper(LegendTypeBasic);

  function LegendTypeBasic() {
    _classCallCheck(this, LegendTypeBasic);

    return _super.apply(this, arguments);
  }

  _createClass(LegendTypeBasic, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeLayer = _this$props.activeLayer,
          mode = _this$props.mode;
      var legendConfig = activeLayer.legendConfig;

      if (!legendConfig || legendConfig.type !== 'basic') {
        return null;
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__c-legend-type-basic"
      }, /*#__PURE__*/React__default['default'].createElement("ul", {
        className: _getClassName__default['default'](mode, _styleModuleImportMap$8)
      }, legendConfig.items.map(function (item) {
        return /*#__PURE__*/React__default['default'].createElement("li", {
          key: "legend-basic-item-".concat(item.name)
        }, /*#__PURE__*/React__default['default'].createElement(LegendItem, item), !!item.items && item.items.length && /*#__PURE__*/React__default['default'].createElement("ul", {
          className: "vizzuality__legend-basic-group"
        }, item.items.map(function (it) {
          return /*#__PURE__*/React__default['default'].createElement("li", {
            key: "legend-basic-item-".concat(it.name)
          }, /*#__PURE__*/React__default['default'].createElement(LegendItem, _extends({
            style: {
              borderBottom: 0
            }
          }, it)));
        })));
      })));
    }
  }]);

  return LegendTypeBasic;
}(React__default['default'].PureComponent);

_defineProperty(LegendTypeBasic, "propTypes", {
  activeLayer: PropTypes__default['default'].shape({}),
  mode: PropTypes__default['default'].oneOf(['horizontal', 'vertical', 'columns'])
});

_defineProperty(LegendTypeBasic, "defaultProps", {
  activeLayer: {},
  mode: 'vertical'
});var LegendTypeChoropleth = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(LegendTypeChoropleth, _React$PureComponent);

  var _super = _createSuper(LegendTypeChoropleth);

  function LegendTypeChoropleth() {
    _classCallCheck(this, LegendTypeChoropleth);

    return _super.apply(this, arguments);
  }

  _createClass(LegendTypeChoropleth, [{
    key: "render",
    value: function render() {
      var activeLayer = this.props.activeLayer;
      var legendConfig = activeLayer.legendConfig;

      if (!legendConfig || legendConfig.type !== 'choropleth') {
        return null;
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__c-legend-type-choropleth"
      }, /*#__PURE__*/React__default['default'].createElement("ul", null, legendConfig.items.map(function (_ref, i) {
        var color = _ref.color;
        return /*#__PURE__*/React__default['default'].createElement("li", {
          key: "legend-choropleth-item-".concat(color, "-").concat(i),
          style: {
            width: "".concat(100 / legendConfig.items.length, "%")
          }
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "vizzuality__icon-choropleth",
          style: {
            backgroundColor: color
          }
        }));
      })), /*#__PURE__*/React__default['default'].createElement("ul", null, legendConfig.items.filter(function (i) {
        return i.value || i.name;
      }).map(function (_ref2, i) {
        var name = _ref2.name,
            value = _ref2.value,
            color = _ref2.color,
            _ref2$styles = _ref2.styles,
            styles = _ref2$styles === void 0 ? {} : _ref2$styles;
        return /*#__PURE__*/React__default['default'].createElement("li", {
          key: "legend-choropleth-item-".concat(color, "-").concat(i),
          style: {
            width: "".concat(100 / legendConfig.items.length, "%")
          }
        }, /*#__PURE__*/React__default['default'].createElement("span", {
          className: "vizzuality__name",
          style: styles
        }, name || value));
      })));
    }
  }]);

  return LegendTypeChoropleth;
}(React__default['default'].PureComponent);

_defineProperty(LegendTypeChoropleth, "propTypes", {
  activeLayer: PropTypes__default['default'].shape({})
});

_defineProperty(LegendTypeChoropleth, "defaultProps", {
  activeLayer: {}
});var LegendTypeGradient = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendTypeGradient, _PureComponent);

  var _super = _createSuper(LegendTypeGradient);

  function LegendTypeGradient() {
    _classCallCheck(this, LegendTypeGradient);

    return _super.apply(this, arguments);
  }

  _createClass(LegendTypeGradient, [{
    key: "render",
    value: function render() {
      var activeLayer = this.props.activeLayer;
      var legendConfig = activeLayer.legendConfig;

      if (!legendConfig || legendConfig.type !== 'gradient') {
        return null;
      }

      var items = legendConfig.items.filter(function (item) {
        return item.color !== 'transparent';
      });
      var itemTransparent = legendConfig.items.find(function (item) {
        return item.color === 'transparent';
      });
      var gradient = items.map(function (item) {
        return item.color;
      });
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__c-legend-type-gradient"
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__legend-gradient-icon"
      }, itemTransparent && /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          width: "".concat(1 / legendConfig.items.length * 100, "%")
        },
        className: "vizzuality__icon-gradient-transparent"
      }), /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__icon-gradient",
        style: {
          width: "".concat(items.length / legendConfig.items.length * 100, "%"),
          backgroundImage: "linear-gradient(to right, ".concat(gradient.join(','), ")")
        }
      })), /*#__PURE__*/React__default['default'].createElement("ul", null, legendConfig.items.map(function (_ref) {
        var name = _ref.name,
            color = _ref.color,
            value = _ref.value;
        return name || value ? /*#__PURE__*/React__default['default'].createElement("li", {
          key: "legend-gradient-item-".concat(color, "-").concat(value, "-").concat(name)
        }, /*#__PURE__*/React__default['default'].createElement("span", {
          className: "vizzuality__name"
        }, name || value)) : null;
      })));
    }
  }]);

  return LegendTypeGradient;
}(React.PureComponent);

_defineProperty(LegendTypeGradient, "propTypes", {
  // Props
  activeLayer: PropTypes__default['default'].shape({})
});

_defineProperty(LegendTypeGradient, "defaultProps", {
  // Props
  activeLayer: {}
});var LegendTypeGradient$1 = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendTypeGradient, _PureComponent);

  var _super = _createSuper(LegendTypeGradient);

  function LegendTypeGradient() {
    _classCallCheck(this, LegendTypeGradient);

    return _super.apply(this, arguments);
  }

  _createClass(LegendTypeGradient, [{
    key: "render",
    value: function render() {
      var activeLayer = this.props.activeLayer;
      var legendConfig = activeLayer.legendConfig;

      if (!legendConfig || legendConfig.type !== 'proportional') {
        return null;
      }

      return /*#__PURE__*/React__default['default'].createElement("ul", {
        className: "vizzuality__c-legend-type-proportional"
      }, legendConfig.items.map(function (_ref) {
        var name = _ref.name,
            color = _ref.color,
            size = _ref.size;
        return /*#__PURE__*/React__default['default'].createElement("li", {
          key: "legend-proportional-item-".concat(name)
        }, /*#__PURE__*/React__default['default'].createElement("div", {
          className: "vizzuality__icon-proportional",
          style: {
            backgroundColor: color,
            width: size,
            height: size
          }
        }), /*#__PURE__*/React__default['default'].createElement("span", {
          className: "vizzuality__name"
        }, name));
      }));
    }
  }]);

  return LegendTypeGradient;
}(React.PureComponent);

_defineProperty(LegendTypeGradient$1, "propTypes", {
  // Props
  activeLayer: PropTypes__default['default'].object
});

_defineProperty(LegendTypeGradient$1, "defaultProps", {
  // Props
  activeLayer: {}
});var LegendItemTypes = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemTypes, _PureComponent);

  var _super = _createSuper(LegendItemTypes);

  function LegendItemTypes() {
    var _this;

    _classCallCheck(this, LegendItemTypes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeLayer: {},
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "fetchLegend", function (url) {
      var activeLayer = _this.props.activeLayer;

      var _ref = activeLayer || {},
          legendConfig = _ref.legendConfig;

      var _ref2 = legendConfig || {},
          dataParse = _ref2.dataParse;

      _this.setState({
        loading: true
      });

      fetch(url).then(function (response) {
        if (response.ok) return response.json();
      }).then(function (response) {
        var parsedActiveLayer = typeof dataParse === 'function' ? dataParse(activeLayer, response) : response;

        _this.setState({
          activeLayer: parsedActiveLayer,
          loading: false
        });
      }).catch(function () {
        _this.setState({
          loading: false
        });
      });
    });

    return _this;
  }

  _createClass(LegendItemTypes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var activeLayer = this.props.activeLayer;

      var _ref3 = activeLayer || {},
          legendConfig = _ref3.legendConfig;

      var _ref4 = legendConfig || {},
          _ref4$params = _ref4.params,
          params = _ref4$params === void 0 ? {} : _ref4$params,
          _ref4$sqlParams = _ref4.sqlParams,
          sqlParams = _ref4$sqlParams === void 0 ? {} : _ref4$sqlParams;

      var parsedConfig = replace(JSON.stringify(legendConfig), params, sqlParams);

      var _JSON$parse = JSON.parse(parsedConfig),
          url = _JSON$parse.url;

      if (url) {
        this.fetchLegend(url);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevActiveLayer = prevProps.activeLayer;
      var prevLegendConfig = prevActiveLayer.legendConfig;
      var _prevLegendConfig$par = prevLegendConfig.params,
          prevParams = _prevLegendConfig$par === void 0 ? {} : _prevLegendConfig$par,
          _prevLegendConfig$sql = prevLegendConfig.sqlParams,
          prevSqlParams = _prevLegendConfig$sql === void 0 ? {} : _prevLegendConfig$sql;
      var nextActiveLayer = this.props.activeLayer;
      var nextLegendConfig = nextActiveLayer.legendConfig;
      var _nextLegendConfig$par = nextLegendConfig.params,
          nextParams = _nextLegendConfig$par === void 0 ? {} : _nextLegendConfig$par,
          _nextLegendConfig$sql = nextLegendConfig.sqlParams,
          nextSqlParams = _nextLegendConfig$sql === void 0 ? {} : _nextLegendConfig$sql;

      if (!isEqual__default['default'](nextParams, prevParams) || !isEqual__default['default'](nextSqlParams, prevSqlParams)) {
        var stringifyConfig = replace(JSON.stringify(nextLegendConfig), nextParams, nextSqlParams);
        var parsedConfig = JSON.parse(stringifyConfig);

        var _ref5 = parsedConfig || {},
            url = _ref5.url;

        if (url) {
          this.fetchLegend(url);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          propsActiveLayer = _this$props.activeLayer;
      var _this$state = this.state,
          loading = _this$state.loading,
          stateActiveLayer = _this$state.activeLayer;
      var activeLayer = !isEmpty__default['default'](stateActiveLayer) ? stateActiveLayer : propsActiveLayer;

      var _ref6 = activeLayer || {},
          legendConfig = _ref6.legendConfig;

      var _ref7 = legendConfig || {},
          url = _ref7.url;

      var shouldRender = !url || url && !isEmpty__default['default'](stateActiveLayer);
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__c-legend-item-types"
      }, url && loading && /*#__PURE__*/React__default['default'].createElement(Spinner, {
        position: "relative",
        style: {
          box: {
            width: 20,
            height: 20
          }
        }
      }), shouldRender && !!React__default['default'].Children.count(children) && React__default['default'].Children.map(children, function (child) {
        return /*#__PURE__*/React__default['default'].isValidElement(child) && typeof child.type !== 'string' ? /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2({}, _this2.props)) : child;
      }), shouldRender && !React__default['default'].Children.count(children) && /*#__PURE__*/React__default['default'].createElement(LegendTypeBasic, this.props), shouldRender && !React__default['default'].Children.count(children) && /*#__PURE__*/React__default['default'].createElement(LegendTypeChoropleth, this.props), shouldRender && !React__default['default'].Children.count(children) && /*#__PURE__*/React__default['default'].createElement(LegendTypeGradient, this.props), shouldRender && !React__default['default'].Children.count(children) && /*#__PURE__*/React__default['default'].createElement(LegendTypeGradient$1, this.props));
    }
  }]);

  return LegendItemTypes;
}(React.PureComponent);

_defineProperty(LegendItemTypes, "propTypes", {
  // Props
  children: PropTypes__default['default'].node,
  activeLayer: PropTypes__default['default'].object
});

_defineProperty(LegendItemTypes, "defaultProps", {
  // Props
  children: [],
  activeLayer: {}
});var _styleModuleImportMap$9 = {
  "./styles.scss": {
    "c-legend-map": "vizzuality__c-legend-map",
    "legend-title": "vizzuality__legend-title",
    "toggle-legend": "vizzuality__toggle-legend",
    "open-legend": "vizzuality__open-legend",
    "-active": "vizzuality__-active",
    "close-legend": "vizzuality__close-legend"
  }
};

var Legend = /*#__PURE__*/function (_PureComponent) {
  _inherits(Legend, _PureComponent);

  var _super = _createSuper(Legend);

  function Legend(props) {
    var _this;

    _classCallCheck(this, Legend);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onToggleLegend", function (bool) {
      _this.setState({
        expanded: bool
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSortEnd", function (_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      var _this$props = _this.props,
          onChangeOrder = _this$props.onChangeOrder,
          children = _this$props.children;

      var layers = _toConsumableArray(children.map(function (c) {
        return c.props.layerGroup.dataset;
      }));

      var layersDatasets = arrayMove__default['default'](layers, oldIndex, newIndex);
      onChangeOrder(layersDatasets);
    });

    var expanded = props.expanded;
    _this.state = {
      expanded: expanded
    };
    return _this;
  }
  /**
   * UI EVENTS
   * onToggleLegend
   * onSortEnd
   */


  _createClass(Legend, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          title = _this$props2.title,
          sortable = _this$props2.sortable,
          collapsable = _this$props2.collapsable,
          maxWidth = _this$props2.maxWidth,
          maxHeight = _this$props2.maxHeight,
          children = _this$props2.children;
      var expanded = this.state.expanded;

      if (!children || !React__default['default'].Children.count(children)) {
        return null;
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__c-legend-map",
        style: {
          maxWidth: maxWidth
        }
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        style: {
          maxHeight: maxHeight
        },
        className: _getClassName__default['default']("open-legend ".concat(classnames__default['default']({
          '-active': expanded
        })), _styleModuleImportMap$9)
      }, collapsable && /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        className: "vizzuality__toggle-legend",
        onClick: function onClick() {
          return _this2.onToggleLegend(false);
        }
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: "icon-arrow-down",
        className: "-small"
      })), expanded && /*#__PURE__*/React__default['default'].createElement(LegendList$1, {
        helperClass: "c-legend-item -sortable",
        onSortStart: function onSortStart(_, event) {
          return event.preventDefault();
        } // It fixes user select in Safari and IE
        ,
        onSortEnd: this.onSortEnd,
        axis: "y",
        lockAxis: "y",
        lockToContainerEdges: true,
        lockOffset: "50%",
        useDragHandle: true,
        sortable: sortable
      }, React__default['default'].Children.map(children, function (child, index) {
        return /*#__PURE__*/React__default['default'].isValidElement(child) && child.type === 'LegendItemList' ? /*#__PURE__*/React__default['default'].cloneElement(child, {
          sortable: sortable,
          index: index
        }) : child;
      }))), /*#__PURE__*/React__default['default'].createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.onToggleLegend(true);
        },
        className: _getClassName__default['default']("close-legend ".concat(classnames__default['default']({
          '-active': !expanded
        })), _styleModuleImportMap$9)
      }, /*#__PURE__*/React__default['default'].createElement("h1", {
        className: "vizzuality__legend-title"
      }, title, /*#__PURE__*/React__default['default'].createElement("div", {
        className: "vizzuality__toggle-legend"
      }, /*#__PURE__*/React__default['default'].createElement(Icon, {
        name: "icon-arrow-up",
        className: "-small"
      })))));
    }
  }]);

  return Legend;
}(React.PureComponent);

_defineProperty(Legend, "propTypes", {
  /** Title */
  title: PropTypes__default['default'].string,

  /** Sortable */
  sortable: PropTypes__default['default'].bool,

  /** Max width */
  maxWidth: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),

  /** Max height */
  maxHeight: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),

  /** Should the legend be expanded by default? */
  expanded: PropTypes__default['default'].bool,

  /** Should the legend be collapsable */
  collapsable: PropTypes__default['default'].bool,

  /** `onChangeOrder = (layerGroupsIds) => {}`
   * @arg {Array} layerGroupIds The new order
   */
  onChangeOrder: PropTypes__default['default'].func,

  /** Children for render */
  children: PropTypes__default['default'].node
});

_defineProperty(Legend, "defaultProps", {
  title: 'Legend',
  sortable: true,
  expanded: true,
  collapsable: true,
  maxWidth: null,
  maxHeight: null,
  children: [],
  onChangeOrder: function onChangeOrder(ids) {
    return console.info(ids);
  }
});
 // export { default as LegendItemTimeline } from './components/legend-item-timeline';
/**
 * Translate Moment units into DayJS units
 */

var getDayJsInterval = function getDayJsInterval(interval) {
  // Shorthand units don't have to be translated
  var momentToDayJSUnit = {
    years: 'year',
    quarters: 'quarter',
    months: 'month',
    weeks: 'week',
    days: 'day',
    hours: 'hour',
    minutes: 'minute',
    seconds: 'second',
    milliseconds: 'millisecond'
  };
  return momentToDayJSUnit[interval] || interval;
};

var addToDate = function addToDate(date, count) {
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'days';
  var toEnd = arguments.length > 3 ? arguments[3] : undefined;
  var d = dayjs__default['default'](date);
  return toEnd ? d.add(count, getDayJsInterval(interval)).endOf(getDayJsInterval(interval)) : d.add(count, getDayJsInterval(interval));
};
var formatDate = function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
  return dayjs__default['default'](date).format(format);
};
var formatDatePretty = function formatDatePretty(date) {
  var dateFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
  var d = dayjs__default['default'](date);
  var hasDays = dateFormat.includes('DD');
  var hasMonths = dateFormat.includes('MM');
  var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
  var day = d.format('DD');
  var month = d.month();
  var year = d.year();
  return "".concat(hasDays ? "".concat(day, " ") : '').concat(hasMonths ? "".concat(months[month], " ") : '').concat(year);
}; // startDate and endDate are string dates

var dateDiff = function dateDiff(startDate, endDate, interval) {
  var diff = dayjs__default['default'](endDate).diff(dayjs__default['default'](startDate), getDayJsInterval(interval));
  return diff * -1;
};
var getTicks = function getTicks() {
  var _newMarks2;

  var timelineConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var minDate = timelineConfig.minDate,
      maxDate = timelineConfig.maxDate,
      interval = timelineConfig.interval,
      marks = timelineConfig.marks,
      dateFormat = timelineConfig.dateFormat; // If user defines their own markers let's parse them if he pass a date as a value

  if (marks) {
    var _newMarks = Object.keys(marks).reduce(function (acc, m) {
      if (typeof m === 'string') {
        var key = dayjs__default['default'](m).diff(dayjs__default['default'](minDate), getDayJsInterval(interval));
        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, key, marks[m]));
      }

      return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, m, marks[m]));
    }, {});

    return _newMarks;
  } // Otherwise, let's add default marks at the begginig and the end


  var minMark = 0;
  var maxMark = dayjs__default['default'](maxDate).diff(dayjs__default['default'](minDate), getDayJsInterval(interval));
  var newMarks = (_newMarks2 = {}, _defineProperty(_newMarks2, minMark, {
    label: dayjs__default['default'](minDate).format(dateFormat)
  }), _defineProperty(_newMarks2, maxMark, {
    label: dayjs__default['default'](maxDate).format(dateFormat)
  }), _newMarks2);
  return newMarks;
}; // startDate and endDate are string dates

var gradientConverter = function gradientConverter(gradient, minDate, interval) {
  return Object.keys(gradient).reduce(function (acc, val) {
    return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, dateDiff(val, minDate, interval), gradient[val]));
  }, {});
};var _styleModuleImportMap$a = {
  "./styles.scss": {
    "c-legend-timestep": "vizzuality__c-legend-timestep",
    "-can-play": "vizzuality__-can-play"
  }
};
var TimestepContainer = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimestepContainer, _PureComponent);

  var _super = _createSuper(TimestepContainer);

  function TimestepContainer(props) {
    var _this;

    _classCallCheck(this, TimestepContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "timelineParams", null);

    _defineProperty(_assertThisInitialized(_this), "getTrackStyle", function () {
      var _this$timelineParams = _this.timelineParams,
          minDate = _this$timelineParams.minDate,
          interval = _this$timelineParams.interval,
          trackStyle = _this$timelineParams.trackStyle;

      if (Array.isArray(trackStyle)) {
        return trackStyle.map(function (t) {
          var _ref = t || {},
              gradient = _ref.gradient;

          if (!gradient) return t;

          var styles = _objectSpread2(_objectSpread2({}, t), {}, {
            gradient: gradientConverter(gradient, minDate, interval)
          });

          return styles;
        });
      }

      var _ref2 = trackStyle || {},
          gradient = _ref2.gradient;

      if (gradient) {
        return _objectSpread2(_objectSpread2({}, trackStyle), {}, {
          gradient: gradientConverter(gradient, minDate, interval)
        });
      }

      return trackStyle;
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnAfterChange", function (range) {
      var _this$props = _this.props,
          activeLayer = _this$props.activeLayer,
          handleChange = _this$props.handleChange;

      var formattedRange = _this.formatRange([range[0], range[1], range[2]]);

      handleChange(formattedRange, activeLayer);
    });

    _defineProperty(_assertThisInitialized(_this), "formatRange", function (range) {
      var _this$timelineParams2 = _this.timelineParams,
          minDate = _this$timelineParams2.minDate,
          interval = _this$timelineParams2.interval;
      return range.map(function (r, i) {
        // if date is not the start date we should select the end of the interval
        var toEnd = i !== 0;
        return formatDate(addToDate(minDate, r, interval, toEnd));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "formatValue", function (value) {
      var _this$timelineParams3 = _this.timelineParams,
          minDate = _this$timelineParams3.minDate,
          dateFormat = _this$timelineParams3.dateFormat,
          interval = _this$timelineParams3.interval;
      return formatDatePretty(addToDate(minDate, value, interval), dateFormat);
    });

    var _activeLayer = props.activeLayer;
    var timelineParams = _activeLayer.timelineParams;
    _this.timelineParams = timelineParams;
    return _this;
  }

  _createClass(TimestepContainer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var activeLayer = this.props.activeLayer;
      var prevActiveLayer = prevProps.activeLayer;
      var timelineParams = activeLayer.timelineParams;
      var prevTimelineParams = prevActiveLayer.timelineParams; // Should we use timelineParams directly from params instead of doing this? I think so

      if (!isEqual__default['default'](timelineParams, prevTimelineParams)) {
        this.timelineParams = timelineParams;
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.timelineParams) return null;
      var defaultStyles = this.props.defaultStyles;
      var _this$timelineParams4 = this.timelineParams,
          marks = _this$timelineParams4.marks,
          maxDate = _this$timelineParams4.maxDate,
          maxAbsoluteDate = _this$timelineParams4.maxAbsoluteDate,
          minDate = _this$timelineParams4.minDate,
          minAbsoluteDate = _this$timelineParams4.minAbsoluteDate,
          interval = _this$timelineParams4.interval,
          startDate = _this$timelineParams4.startDate,
          endDate = _this$timelineParams4.endDate,
          trimEndDate = _this$timelineParams4.trimEndDate,
          canPlay = _this$timelineParams4.canPlay;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: _getClassName__default['default'](classnames__default['default']({
          'c-legend-timestep': true,
          '-can-play': canPlay
        }), _styleModuleImportMap$a)
      }, /*#__PURE__*/React__default['default'].createElement(Timestep, _extends({}, this.props, defaultStyles, this.timelineParams, {
        trackStyle: this.getTrackStyle(),
        min: 0,
        minAbs: dateDiff(minAbsoluteDate || minDate, minDate, interval),
        max: dateDiff(maxDate, minDate, interval),
        maxAbs: dateDiff(maxAbsoluteDate || maxDate, minDate, interval),
        start: dateDiff(startDate, minDate, interval),
        end: dateDiff(endDate, minDate, interval),
        trim: dateDiff(trimEndDate, minDate, interval),
        marks: marks || getTicks(this.timelineParams),
        formatValue: this.formatValue,
        handleOnAfterChange: this.handleOnAfterChange
      })));
    }
  }]);

  return TimestepContainer;
}(React.PureComponent);

_defineProperty(TimestepContainer, "propTypes", {
  defaultStyles: PropTypes__default['default'].shape({}),
  activeLayer: PropTypes__default['default'].shape({}),
  handleChange: PropTypes__default['default'].func.isRequired
});

_defineProperty(TimestepContainer, "defaultProps", {
  defaultStyles: {},
  activeLayer: {}
});exports.Icon=Icon;exports.Icons=Icons;exports.Legend=Legend;exports.LegendItemButtonBBox=LegendItemButtonBBox;exports.LegendItemButtonInfo=LegendItemButtonInfo;exports.LegendItemButtonLayers=LegendItemButtonLayers;exports.LegendItemButtonOpacity=LegendItemButtonOpacity;exports.LegendItemButtonRemove=LegendItemButtonRemove;exports.LegendItemButtonVisibility=LegendItemButtonVisibility;exports.LegendItemTimeStep=TimestepContainer;exports.LegendItemToolbar=LegendItemToolbar;exports.LegendItemTypeBasic=LegendTypeBasic;exports.LegendItemTypeChoropleth=LegendTypeChoropleth;exports.LegendItemTypeGradient=LegendTypeGradient;exports.LegendItemTypeProportional=LegendTypeGradient$1;exports.LegendItemTypes=LegendItemTypes;exports.LegendListItem=index;exports.Map=Maps;exports.MapControls=MapControls;exports.MapPopup=MapPopup;exports.MapSideBySide=MapSideBySide;exports.Slider=Slider;exports.Spinner=Spinner;exports.Timestep=Timestep;exports.Tooltip=Tooltip;exports.ZoomControl=ZoomControl;//# sourceMappingURL=index.js.map
