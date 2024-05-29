import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../icon/index.esm.js';
import { Tooltip } from '../../../../tooltip/index.esm.js';

var LegendItemButtonVisibility = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonVisibility, _PureComponent);

  var _super = _createSuper(LegendItemButtonVisibility);

  function LegendItemButtonVisibility() {
    var _this;

    _classCallCheck(this, LegendItemButtonVisibility);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false
    });

    return _this;
  }

  _createClass(LegendItemButtonVisibility, [{
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
          visibility = _this$props.visibility,
          tooltipOpened = _this$props.tooltipOpened,
          iconShow = _this$props.iconShow,
          iconHide = _this$props.iconHide,
          focusStyle = _this$props.focusStyle,
          defaultStyle = _this$props.defaultStyle,
          tooltipText = _this$props.tooltipText;
      var visible = this.state.visible;
      var showIcon = iconShow || 'icon-show';
      var hideIcon = iconHide || 'icon-hide';
      var activeIcon = visibility ? hideIcon : showIcon;
      return /*#__PURE__*/React.createElement(Tooltip, {
        overlay: tooltipText || (visibility ? 'Hide layer' : 'Show layer'),
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
        className: "vizzuality__c-legend-button vizzuality__toggle",
        onClick: function onClick() {
          return _this2.props.onChangeVisibility(activeLayer, !visibility);
        },
        "aria-label": "Toggle the visibility"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: activeIcon,
        className: "-small",
        style: visible ? focusStyle : defaultStyle
      })));
    }
  }]);

  return LegendItemButtonVisibility;
}(PureComponent);

_defineProperty(LegendItemButtonVisibility, "propTypes", {
  activeLayer: PropTypes.object,
  visibility: PropTypes.bool,
  onChangeVisibility: PropTypes.func,
  iconShow: PropTypes.string,
  iconHide: PropTypes.string,
  focusStyle: PropTypes.object,
  defaultStyle: PropTypes.object,
  tooltipOpened: PropTypes.bool,
  tooltipText: PropTypes.string,
  scrolling: PropTypes.bool
});

_defineProperty(LegendItemButtonVisibility, "defaultProps", {
  activeLayer: {},
  visibility: true,
  iconShow: '',
  iconHide: '',
  focusStyle: {},
  defaultStyle: {},
  tooltipOpened: false,
  tooltipText: '',
  scrolling: false,
  onChangeVisibility: function onChangeVisibility() {}
});

export default LegendItemButtonVisibility;
//# sourceMappingURL=index.esm.js.map
