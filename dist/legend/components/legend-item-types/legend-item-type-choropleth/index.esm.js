import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, createClass as _createClass, defineProperty as _defineProperty } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import PropTypes from 'prop-types';

var LegendTypeChoropleth = /*#__PURE__*/function (_React$PureComponent) {
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

      return /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__c-legend-type-choropleth"
      }, /*#__PURE__*/React.createElement("ul", null, legendConfig.items.map(function (_ref, i) {
        var color = _ref.color;
        return /*#__PURE__*/React.createElement("li", {
          key: "legend-choropleth-item-".concat(color, "-").concat(i),
          style: {
            width: "".concat(100 / legendConfig.items.length, "%")
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "vizzuality__icon-choropleth",
          style: {
            backgroundColor: color
          }
        }));
      })), /*#__PURE__*/React.createElement("ul", null, legendConfig.items.filter(function (i) {
        return i.value || i.name;
      }).map(function (_ref2, i) {
        var name = _ref2.name,
            value = _ref2.value,
            color = _ref2.color,
            _ref2$styles = _ref2.styles,
            styles = _ref2$styles === void 0 ? {} : _ref2$styles;
        return /*#__PURE__*/React.createElement("li", {
          key: "legend-choropleth-item-".concat(color, "-").concat(i),
          style: {
            width: "".concat(100 / legendConfig.items.length, "%")
          }
        }, /*#__PURE__*/React.createElement("span", {
          className: "vizzuality__name",
          style: styles
        }, name || value));
      })));
    }
  }]);

  return LegendTypeChoropleth;
}(React.PureComponent);

_defineProperty(LegendTypeChoropleth, "propTypes", {
  activeLayer: PropTypes.shape({})
});

_defineProperty(LegendTypeChoropleth, "defaultProps", {
  activeLayer: {}
});

export default LegendTypeChoropleth;
//# sourceMappingURL=index.esm.js.map
