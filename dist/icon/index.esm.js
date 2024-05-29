import { inherits as _inherits, createSuper as _createSuper, createClass as _createClass, defineProperty as _defineProperty, classCallCheck as _classCallCheck } from '../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var _styleModuleImportMap = {
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
      var classNames = classnames(_defineProperty({}, className, !!className));
      return /*#__PURE__*/React.createElement("svg", {
        style: style,
        className: _getClassName("c-icon ".concat(classNames), _styleModuleImportMap)
      }, /*#__PURE__*/React.createElement("use", {
        xlinkHref: "#".concat(name)
      }));
    }
  }]);

  return Icon;
}(React.PureComponent);

_defineProperty(Icon, "propTypes", {
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
});

_defineProperty(Icon, "defaultProps", {
  name: '',
  className: '',
  style: {}
});

export default Icon;
//# sourceMappingURL=index.esm.js.map
