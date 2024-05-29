import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, createClass as _createClass, defineProperty as _defineProperty } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var LegendTypeGradient = /*#__PURE__*/function (_PureComponent) {
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
      return /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__c-legend-type-gradient"
      }, /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__legend-gradient-icon"
      }, itemTransparent && /*#__PURE__*/React.createElement("div", {
        style: {
          width: "".concat(1 / legendConfig.items.length * 100, "%")
        },
        className: "vizzuality__icon-gradient-transparent"
      }), /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__icon-gradient",
        style: {
          width: "".concat(items.length / legendConfig.items.length * 100, "%"),
          backgroundImage: "linear-gradient(to right, ".concat(gradient.join(','), ")")
        }
      })), /*#__PURE__*/React.createElement("ul", null, legendConfig.items.map(function (_ref) {
        var name = _ref.name,
            color = _ref.color,
            value = _ref.value;
        return name || value ? /*#__PURE__*/React.createElement("li", {
          key: "legend-gradient-item-".concat(color, "-").concat(value, "-").concat(name)
        }, /*#__PURE__*/React.createElement("span", {
          className: "vizzuality__name"
        }, name || value)) : null;
      })));
    }
  }]);

  return LegendTypeGradient;
}(PureComponent);

_defineProperty(LegendTypeGradient, "propTypes", {
  // Props
  activeLayer: PropTypes.shape({})
});

_defineProperty(LegendTypeGradient, "defaultProps", {
  // Props
  activeLayer: {}
});

export default LegendTypeGradient;
//# sourceMappingURL=index.esm.js.map
