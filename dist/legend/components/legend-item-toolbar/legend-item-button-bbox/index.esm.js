import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../icon/index.esm.js';
import { Tooltip } from '../../../../tooltip/index.esm.js';

var LegendItemButtonBBox = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonBBox, _PureComponent);

  var _super = _createSuper(LegendItemButtonBBox);

  function LegendItemButtonBBox() {
    var _this;

    _classCallCheck(this, LegendItemButtonBBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    return _this;
  }

  _createClass(LegendItemButtonBBox, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var scrolling = nextProps.scrolling;

      if (scrolling) {
        this.setState({
          visible: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeLayer = _this$props.activeLayer,
          tooltipOpened = _this$props.tooltipOpened,
          icon = _this$props.icon,
          focusStyle = _this$props.focusStyle,
          defaultStyle = _this$props.defaultStyle,
          tooltipText = _this$props.tooltipText;
      var visible = this.state.visible;

      if (activeLayer.layerConfig && !activeLayer.layerConfig.bbox) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Tooltip, {
        overlay: tooltipText || 'Fit to bounds',
        overlayClassName: "c-rc-tooltip -default",
        placement: "top",
        trigger: tooltipOpened ? '' : 'hover',
        mouseLeaveDelay: 0,
        destroyTooltipOnHide: true,
        onVisibleChange: function onVisibleChange(v) {
          return _this2.setState({
            visible: v
          });
        },
        visible: visible
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "vizzuality__c-legend-button",
        "aria-label": "Fit to bounds",
        onClick: function onClick() {
          return _this2.props.onChangeBBox(activeLayer);
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: icon || 'icon-bbox',
        className: "-small",
        style: visible ? focusStyle : defaultStyle
      })));
    }
  }]);

  return LegendItemButtonBBox;
}(PureComponent);

_defineProperty(LegendItemButtonBBox, "propTypes", {
  activeLayer: PropTypes.object,
  tooltipOpened: PropTypes.bool,
  icon: PropTypes.string,
  focusStyle: PropTypes.object,
  defaultStyle: PropTypes.object,
  tooltipText: PropTypes.string,
  scrolling: PropTypes.bool,
  onChangeBBox: PropTypes.func
});

_defineProperty(LegendItemButtonBBox, "defaultProps", {
  activeLayer: {},
  icon: '',
  focusStyle: {},
  defaultStyle: {},
  tooltipOpened: false,
  tooltipText: '',
  scrolling: false,
  onChangeBBox: function onChangeBBox() {}
});

export default LegendItemButtonBBox;
//# sourceMappingURL=index.esm.js.map
