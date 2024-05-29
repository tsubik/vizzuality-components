import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass, objectWithoutProperties as _objectWithoutProperties, extends as _extends } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../../../icon/index.esm.js';
import { Tooltip } from '../../../../tooltip/index.esm.js';
import LegendOpacityTooltip from './legend-item-button-opacity-tooltip/index.esm.js';
import styles from '../styles-button.esm.js';

var _styleModuleImportMap = {
  "styles": {
    "c-legend-button": "vizzuality__c-legend-button",
    "-disabled": "vizzuality__-disabled",
    "info": "vizzuality__info",
    "close": "vizzuality__close",
    "toggle": "vizzuality__toggle",
    "opacity": "vizzuality__opacity",
    "layers": "vizzuality__layers"
  }
};

var LegendItemButtonOpacity = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonOpacity, _PureComponent);

  var _super = _createSuper(LegendItemButtonOpacity);

  function LegendItemButtonOpacity() {
    var _this;

    _classCallCheck(this, LegendItemButtonOpacity);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visibilityHover: false,
      visibilityClick: false
    });

    _defineProperty(_assertThisInitialized(_this), "onTooltipVisibilityChange", function (v) {
      var _this$props = _this.props,
          visibility = _this$props.visibility,
          onTooltipVisibilityChange = _this$props.onTooltipVisibilityChange;

      if (visibility) {
        _this.setState({
          visibilityHover: false,
          visibilityClick: v
        });

        onTooltipVisibilityChange(v);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setHoverText", function (tooltipText, opacity, visibility) {
      if (tooltipText) return tooltipText;
      if (!visibility) return 'Opacity (disabled)';
      return "Opacity ".concat(typeof opacity !== 'undefined' ? "(".concat(Math.round(opacity * 100), "%)") : '');
    });

    return _this;
  }

  _createClass(LegendItemButtonOpacity, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var scrolling = nextProps.scrolling;

      if (scrolling) {
        this.onTooltipVisibilityChange(false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          layers = _this$props2.layers,
          visibility = _this$props2.visibility,
          activeLayer = _this$props2.activeLayer,
          tooltipOpened = _this$props2.tooltipOpened,
          icon = _this$props2.icon,
          className = _this$props2.className,
          enabledStyle = _this$props2.enabledStyle,
          defaultStyle = _this$props2.defaultStyle,
          disabledStyle = _this$props2.disabledStyle,
          focusStyle = _this$props2.focusStyle,
          tooltipText = _this$props2.tooltipText;
          _this$props2.scrolling;
          var onChangeOpacity = _this$props2.onChangeOpacity,
          rest = _objectWithoutProperties(_this$props2, ["layers", "visibility", "activeLayer", "tooltipOpened", "icon", "className", "enabledStyle", "defaultStyle", "disabledStyle", "focusStyle", "tooltipText", "scrolling", "onChangeOpacity"]);

      var _this$state = this.state,
          visibilityClick = _this$state.visibilityClick,
          visibilityHover = _this$state.visibilityHover;
      var opacity = activeLayer.opacity;
      var iconStyle = visibility ? defaultStyle : disabledStyle;

      if (visibility && (visibilityHover || visibilityClick)) {
        iconStyle = focusStyle;
      }

      if (visibility && opacity < 1) iconStyle = enabledStyle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        overlay: visibility && /*#__PURE__*/React.createElement(LegendOpacityTooltip, _extends({
          layers: layers,
          activeLayer: activeLayer,
          onChangeOpacity: onChangeOpacity
        }, rest)),
        visible: visibility && visibilityClick,
        overlayClassName: "c-rc-tooltip ".concat(classnames({
          '-default': visibility
        }), " ").concat(className || ''),
        placement: "top",
        trigger: ['click'],
        onVisibleChange: this.onTooltipVisibilityChange,
        destroyTooltipOnHide: true
      }, /*#__PURE__*/React.createElement(Tooltip, {
        visible: visibilityHover && !visibilityClick,
        overlay: this.setHoverText(tooltipText, opacity, visibility),
        overlayClassName: "c-rc-tooltip -default",
        placement: "top",
        trigger: tooltipOpened ? '' : 'hover',
        onVisibleChange: function onVisibleChange(v) {
          return _this2.setState({
            visibilityHover: v
          });
        },
        destroyTooltipOnHide: true,
        style: styles.tooltip
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        "aria-label": "Change opacity",
        className: _getClassName("c-legend-button opacity ".concat(classnames({
          '-disabled': !visibility
        })), _styleModuleImportMap)
      }, /*#__PURE__*/React.createElement(Icon, {
        name: icon || 'icon-opacity',
        className: "-small",
        style: iconStyle
      }))));
    }
  }]);

  return LegendItemButtonOpacity;
}(PureComponent);

_defineProperty(LegendItemButtonOpacity, "propTypes", {
  layers: PropTypes.arrayOf(PropTypes.shape({})),
  activeLayer: PropTypes.shape({}),
  visibility: PropTypes.bool,
  tooltipOpened: PropTypes.bool,
  icon: PropTypes.string,
  className: PropTypes.string,
  focusStyle: PropTypes.shape({}),
  defaultStyle: PropTypes.shape({}),
  enabledStyle: PropTypes.shape({}),
  disabledStyle: PropTypes.shape({}),
  tooltipText: PropTypes.string,
  scrolling: PropTypes.bool,
  onChangeOpacity: PropTypes.func,
  onTooltipVisibilityChange: PropTypes.func
});

_defineProperty(LegendItemButtonOpacity, "defaultProps", {
  layers: [],
  activeLayer: {},
  visibility: true,
  icon: '',
  className: '',
  focusStyle: {},
  defaultStyle: {},
  enabledStyle: {},
  disabledStyle: {},
  tooltipOpened: false,
  tooltipText: '',
  scrolling: false,
  onChangeOpacity: function onChangeOpacity() {},
  onTooltipVisibilityChange: function onTooltipVisibilityChange() {}
});

export default LegendItemButtonOpacity;
//# sourceMappingURL=index.esm.js.map
