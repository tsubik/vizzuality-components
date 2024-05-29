import { defineProperty as _defineProperty, inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, assertThisInitialized as _assertThisInitialized, createClass as _createClass, objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../../../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Slider } from '../../../../../slider/index.esm.js';

var LegendOpacityTooltip = /*#__PURE__*/function (_PureComponent) {
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
      return /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__c-legend-item-button-opacity-tooltip",
        ref: function ref(node) {
          _this2.el = node;
        }
      }, "Opacity", /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__slider-tooltip-container"
      }, /*#__PURE__*/React.createElement(Slider, _extends({
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
}(PureComponent);

_defineProperty(LegendOpacityTooltip, "propTypes", {
  // Layers
  activeLayer: PropTypes.shape({}).isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  // Callback to call when the layer changes with
  // the ID of the dataset and the ID of the layer
  onChangeOpacity: PropTypes.func.isRequired
});

_defineProperty(LegendOpacityTooltip, "defaultProps", {
  min: 0,
  max: 1,
  step: 0.01
});

export default LegendOpacityTooltip;
//# sourceMappingURL=index.esm.js.map
