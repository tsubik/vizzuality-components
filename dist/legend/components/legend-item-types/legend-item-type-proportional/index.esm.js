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

      if (!legendConfig || legendConfig.type !== 'proportional') {
        return null;
      }

      return /*#__PURE__*/React.createElement("ul", {
        className: "vizzuality__c-legend-type-proportional"
      }, legendConfig.items.map(function (_ref) {
        var name = _ref.name,
            color = _ref.color,
            size = _ref.size;
        return /*#__PURE__*/React.createElement("li", {
          key: "legend-proportional-item-".concat(name)
        }, /*#__PURE__*/React.createElement("div", {
          className: "vizzuality__icon-proportional",
          style: {
            backgroundColor: color,
            width: size,
            height: size
          }
        }), /*#__PURE__*/React.createElement("span", {
          className: "vizzuality__name"
        }, name));
      }));
    }
  }]);

  return LegendTypeGradient;
}(PureComponent);

_defineProperty(LegendTypeGradient, "propTypes", {
  // Props
  activeLayer: PropTypes.object
});

_defineProperty(LegendTypeGradient, "defaultProps", {
  // Props
  activeLayer: {}
});

export default LegendTypeGradient;
//# sourceMappingURL=index.esm.js.map
