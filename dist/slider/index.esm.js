import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass, objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RCSlider, { SliderTooltip, Handle, Range } from 'rc-slider';
import fill from 'lodash/fill';
import { getStyledMarks } from './utils.esm.js';

var Slider = /*#__PURE__*/function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderHandle", function (props) {
      var _this$props = _this.props,
          formatValue = _this$props.formatValue,
          showTooltip = _this$props.showTooltip;

      var value = props.value,
          dragging = props.dragging,
          index = props.index,
          restProps = _objectWithoutProperties(props, ["value", "dragging", "index"]);

      var formattedValue = formatValue ? formatValue(value) : value;
      var tooltipVisible = showTooltip ? showTooltip(index) : false;
      return /*#__PURE__*/React.createElement(SliderTooltip, {
        key: index,
        overlay: formattedValue,
        overlayClassName: "c-rc-tooltip -default",
        overlayStyle: {
          color: '#fff'
        },
        placement: "top",
        mouseLeaveDelay: 0,
        destroyTooltipOnHide: true,
        visible: !!dragging || !!tooltipVisible
      }, /*#__PURE__*/React.createElement(Handle, _extends({
        className: "drag-handle",
        value: value
      }, restProps)));
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          customClass = _this$props2.customClass,
          range = _this$props2.range,
          handleStyle = _this$props2.handleStyle,
          value = _this$props2.value,
          marks = _this$props2.marks,
          rest = _objectWithoutProperties(_this$props2, ["customClass", "range", "handleStyle", "value", "marks"]);

      var Component = range ? Range : RCSlider;
      var handleNum = Array.isArray(value) ? value.length : 1;
      var handleStyles = fill(Array(handleNum), {
        width: '1px',
        height: '10px',
        backgroundColor: '#808080',
        marginLeft: '-1px',
        marginTop: '-3px',
        borderRadius: 0,
        border: 0,
        zIndex: 1,
        pointerEvents: 'none',
        touchAction: 'none'
      });
      handleStyles[0] = handleStyle;
      handleStyles[handleNum - 1] = handleStyle;
      var externalClass = classnames('vizzuality-slider', _defineProperty({}, customClass, !!customClass));
      return /*#__PURE__*/React.createElement("div", {
        className: externalClass
      }, /*#__PURE__*/React.createElement(Component, _extends({
        handle: this.renderHandle,
        handleStyle: handleStyles,
        value: value,
        marks: marks ? getStyledMarks(marks) : marks
      }, rest)));
    }
  }]);

  return Slider;
}(PureComponent);

_defineProperty(Slider, "propTypes", {
  customClass: PropTypes.string,
  settings: PropTypes.shape({}),
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  dragging: PropTypes.bool,
  index: PropTypes.number,
  range: PropTypes.bool,
  trackStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]).isRequired,
  handleStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]),
  formatValue: PropTypes.func,
  showTooltip: PropTypes.func,
  railStyle: PropTypes.shape({}),
  dotStyle: PropTypes.shape({}),
  pushable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
});

_defineProperty(Slider, "defaultProps", {
  customClass: null,
  settings: {},
  value: [0],
  dragging: false,
  index: 0,
  range: false,
  handleStyle: {
    backgroundColor: '#c32d7b',
    borderRadius: '10px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.29)',
    border: '0px',
    zIndex: 2
  },
  formatValue: null,
  showTooltip: null,
  railStyle: {
    backgroundColor: '#d9d9d9'
  },
  dotStyle: {
    visibility: 'hidden',
    border: '0px'
  },
  pushable: true
});

export default Slider;
export { Slider };
//# sourceMappingURL=index.esm.js.map
