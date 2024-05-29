import { defineProperty as _defineProperty, inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, createClass as _createClass } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var _styleModuleImportMap = {
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
      return /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__c-legend-item-button-layers-tooltip"
      }, "Layers", /*#__PURE__*/React.createElement("ul", {
        className: "vizzuality__layers-list"
      }, layers.map(function (l) {
        return /*#__PURE__*/React.createElement("li", {
          key: l.id,
          onClick: function onClick() {
            return _this.props.onChangeLayer(l);
          },
          className: _getClassName(classnames({
            'layers-list-item': true,
            '-active': l.id === activeLayer.id
          }), _styleModuleImportMap)
        }, l.name);
      })));
    }
  }]);

  return LegendLayersTooltip;
}(PureComponent);

_defineProperty(LegendLayersTooltip, "propTypes", {
  // Layers
  layers: PropTypes.array.isRequired,
  activeLayer: PropTypes.object.isRequired,
  // Callback to call when the layer changes with
  // the ID of the dataset and the ID of the layer
  onChangeLayer: PropTypes.func.isRequired
});

export default LegendLayersTooltip;
//# sourceMappingURL=index.esm.js.map
