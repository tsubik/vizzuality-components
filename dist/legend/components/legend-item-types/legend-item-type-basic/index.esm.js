import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, createClass as _createClass, defineProperty as _defineProperty, extends as _extends } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React from 'react';
import PropTypes from 'prop-types';
import LegendItem from './legend-item-type-basic-item/index.esm.js';

var _styleModuleImportMap = {
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

      return /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__c-legend-type-basic"
      }, /*#__PURE__*/React.createElement("ul", {
        className: _getClassName(mode, _styleModuleImportMap)
      }, legendConfig.items.map(function (item) {
        return /*#__PURE__*/React.createElement("li", {
          key: "legend-basic-item-".concat(item.name)
        }, /*#__PURE__*/React.createElement(LegendItem, item), !!item.items && item.items.length && /*#__PURE__*/React.createElement("ul", {
          className: "vizzuality__legend-basic-group"
        }, item.items.map(function (it) {
          return /*#__PURE__*/React.createElement("li", {
            key: "legend-basic-item-".concat(it.name)
          }, /*#__PURE__*/React.createElement(LegendItem, _extends({
            style: {
              borderBottom: 0
            }
          }, it)));
        })));
      })));
    }
  }]);

  return LegendTypeBasic;
}(React.PureComponent);

_defineProperty(LegendTypeBasic, "propTypes", {
  activeLayer: PropTypes.shape({}),
  mode: PropTypes.oneOf(['horizontal', 'vertical', 'columns'])
});

_defineProperty(LegendTypeBasic, "defaultProps", {
  activeLayer: {},
  mode: 'vertical'
});

export default LegendTypeBasic;
export { LegendTypeBasic };
//# sourceMappingURL=index.esm.js.map
