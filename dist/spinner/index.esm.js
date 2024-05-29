import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, createClass as _createClass, defineProperty as _defineProperty, objectSpread2 as _objectSpread2, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var _styleModuleImportMap = {
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
      var classNames = classnames(_defineProperty({
        'c-spinner': true
      }, "-".concat(position), true));
      var customClassNames = classnames(_defineProperty({
        'c-spinner': true
      }, customClass, !!customClass));

      var boxStyles = _objectSpread2(_objectSpread2({}, STYLES.box), style.box);

      var circleStyles = _objectSpread2(_objectSpread2({}, STYLES.circle), style.circle);

      return /*#__PURE__*/React.createElement("div", {
        className: (customClassNames ? customClassNames + " " : "") + _getClassName(classNames, _styleModuleImportMap)
      }, /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__spinner-box",
        style: boxStyles
      }, /*#__PURE__*/React.createElement("svg", {
        className: "vizzuality__spinner-icon",
        viewBox: "25 25 50 50"
      }, /*#__PURE__*/React.createElement("circle", _extends({}, circleStyles, {
        className: "vizzuality__spinner-circle" + (" " + (circleStyles ? circleStyles.className || "" : "")),
        cx: 50,
        cy: 50,
        r: 20
      })))));
    }
  }]);

  return Spinner;
}(PureComponent);

_defineProperty(Spinner, "propTypes", {
  position: PropTypes.oneOf(['relative', 'absolute', 'fixed']),
  className: PropTypes.string,
  customClass: PropTypes.string,
  style: PropTypes.shape({
    box: PropTypes.object,
    circle: PropTypes.object
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
});

export default Spinner;
export { Spinner };
//# sourceMappingURL=index.esm.js.map
