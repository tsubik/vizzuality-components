import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../icon/index.esm.js';
import { Tooltip } from '../../../../tooltip/index.esm.js';

var LegendItemButtonInfo = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonInfo, _PureComponent);

  var _super = _createSuper(LegendItemButtonInfo);

  function LegendItemButtonInfo() {
    var _this;

    _classCallCheck(this, LegendItemButtonInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    return _this;
  }

  _createClass(LegendItemButtonInfo, [{
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
      return /*#__PURE__*/React.createElement(Tooltip, {
        overlay: tooltipText || 'Layer info',
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
        "aria-label": "More information",
        onClick: function onClick() {
          return _this2.props.onChangeInfo(activeLayer);
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: icon || 'icon-info',
        className: "-small",
        style: visible ? focusStyle : defaultStyle
      })));
    }
  }]);

  return LegendItemButtonInfo;
}(PureComponent);

_defineProperty(LegendItemButtonInfo, "propTypes", {
  activeLayer: PropTypes.object,
  icon: PropTypes.string,
  focusStyle: PropTypes.object,
  defaultStyle: PropTypes.object,
  tooltipOpened: PropTypes.bool,
  tooltipText: PropTypes.string,
  scrolling: PropTypes.bool,
  // ACTIONS
  onChangeInfo: PropTypes.func
});

_defineProperty(LegendItemButtonInfo, "defaultProps", {
  activeLayer: {},
  icon: '',
  focusStyle: {},
  defaultStyle: {},
  tooltipOpened: false,
  tooltipText: '',
  scrolling: false,
  onChangeInfo: function onChangeInfo() {}
});

export default LegendItemButtonInfo;
//# sourceMappingURL=index.esm.js.map
