import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass, objectWithoutProperties as _objectWithoutProperties, objectSpread2 as _objectSpread2 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LegendItemButtonBBox from './legend-item-button-bbox/index.esm.js';
export { default as LegendItemButtonBBox } from './legend-item-button-bbox/index.esm.js';
import LegendItemButtonLayers from './legend-item-button-layers/index.esm.js';
export { default as LegendItemButtonLayers } from './legend-item-button-layers/index.esm.js';
import LegendItemButtonOpacity from './legend-item-button-opacity/index.esm.js';
export { default as LegendItemButtonOpacity } from './legend-item-button-opacity/index.esm.js';
import LegendItemButtonVisibility from './legend-item-button-visibility/index.esm.js';
export { default as LegendItemButtonVisibility } from './legend-item-button-visibility/index.esm.js';
import LegendItemButtonInfo from './legend-item-button-info/index.esm.js';
export { default as LegendItemButtonInfo } from './legend-item-button-info/index.esm.js';
import LegendItemButtonRemove from './legend-item-button-remove/index.esm.js';
export { default as LegendItemButtonRemove } from './legend-item-button-remove/index.esm.js';

var LegendItemToolbar = /*#__PURE__*/function (_PureComponent) {
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

      return /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__c-legend-item-toolbar"
      }, !!React.Children.count(children) && React.Children.map(children, function (child) {
        return /*#__PURE__*/React.isValidElement(child) && typeof child.type !== 'string' ? /*#__PURE__*/React.cloneElement(child, _objectSpread2({}, props)) : child;
      }), !React.Children.count(children) && /*#__PURE__*/React.createElement(LegendItemButtonBBox, props), !React.Children.count(children) && /*#__PURE__*/React.createElement(LegendItemButtonLayers, props), !React.Children.count(children) && /*#__PURE__*/React.createElement(LegendItemButtonOpacity, props), !React.Children.count(children) && /*#__PURE__*/React.createElement(LegendItemButtonVisibility, props), !React.Children.count(children) && /*#__PURE__*/React.createElement(LegendItemButtonInfo, props), !React.Children.count(children) && /*#__PURE__*/React.createElement(LegendItemButtonRemove, props));
    }
  }]);

  return LegendItemToolbar;
}(PureComponent);

_defineProperty(LegendItemToolbar, "propTypes", {
  // Props
  children: PropTypes.node,
  enabledStyle: PropTypes.object,
  defaultStyle: PropTypes.object,
  disabledStyle: PropTypes.object,
  focusStyle: PropTypes.object,
  // ACTIONS
  onChangeBBox: PropTypes.func,
  onChangeLayer: PropTypes.func,
  onChangeOpacity: PropTypes.func,
  onChangeVisibility: PropTypes.func,
  onRemoveLayer: PropTypes.func,
  onChangeInfo: PropTypes.func
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
});

export default LegendItemToolbar;
//# sourceMappingURL=index.esm.js.map
