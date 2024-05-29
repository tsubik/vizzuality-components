import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React from 'react';
import PropTypes from 'prop-types';

var _styleModuleImportMap = {
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
        return /*#__PURE__*/React.createElement("div", {
          style: {
            boderRightWidth: size / 2,
            boderLeftWidth: size / 2,
            boderBottomWidth: size,
            borderBottomColor: color
          },
          className: _getClassName("icon-".concat(icon), _styleModuleImportMap)
        });
      }

      if (iconName === 'line') {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            width: size,
            backgroundColor: color
          },
          className: _getClassName("icon-".concat(icon), _styleModuleImportMap)
        });
      }

      if (iconName === 'square' || iconName === 'circle') {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            width: size,
            height: size,
            backgroundColor: color
          },
          className: _getClassName("icon-".concat(icon), _styleModuleImportMap)
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__custom-icon"
      }, /*#__PURE__*/React.createElement("img", {
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
      return /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__c-legend-item-basic"
      }, this.getIconHtml(icon), /*#__PURE__*/React.createElement("span", {
        className: "vizzuality__name"
      }, name));
    }
  }]);

  return LegendItem;
}(React.PureComponent);

_defineProperty(LegendItem, "propTypes", {
  size: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  // triangle, circle, square, line
  hideIcon: PropTypes.bool
});

_defineProperty(LegendItem, "defaultProps", {
  size: 12,
  color: 'transparent',
  name: '',
  icon: 'square',
  hideIcon: false
});

export default LegendItem;
//# sourceMappingURL=index.esm.js.map
