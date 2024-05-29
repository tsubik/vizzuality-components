import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass, objectSpread2 as _objectSpread2 } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'lodash/sortBy';
import Icon from '../../../../icon/index.esm.js';
import { Tooltip } from '../../../../tooltip/index.esm.js';
import LegendLayersTooltip from './legend-item-button-layers-tooltip/index.esm.js';

var LegendItemButtonLayers = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemButtonLayers, _PureComponent);

  var _super = _createSuper(LegendItemButtonLayers);

  function LegendItemButtonLayers() {
    var _this;

    _classCallCheck(this, LegendItemButtonLayers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visibilityHover: false,
      visibilityClick: false,
      multiLayersActive: _this.props.i === 0 && _this.props.layers.length > 1
    });

    _defineProperty(_assertThisInitialized(_this), "onTooltipVisibilityChange", function (visibility) {
      var onTooltipVisibilityChange = _this.props.onTooltipVisibilityChange;
      var multiLayersActive = _this.state.multiLayersActive;

      _this.setState(_objectSpread2({
        visibilityHover: false,
        visibilityClick: visibility
      }, multiLayersActive && {
        multiLayersActive: false
      }));

      onTooltipVisibilityChange(visibility);
    });

    _defineProperty(_assertThisInitialized(_this), "getTimelineLayers", function () {
      var layers = _this.props.layers;
      return sortBy(layers.filter(function (l) {
        return l.layerConfig.timeline;
      }), function (l) {
        return l.layerConfig.order;
      });
    });

    return _this;
  }

  _createClass(LegendItemButtonLayers, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          scrolling = _this$props.scrolling,
          prevIndex = _this$props.i;
      var nextIndex = nextProps.i;

      if (scrolling || prevIndex !== nextIndex) {
        this.onTooltipVisibilityChange(false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          layers = _this$props2.layers,
          activeLayer = _this$props2.activeLayer,
          icon = _this$props2.icon,
          focusStyle = _this$props2.focusStyle,
          defaultStyle = _this$props2.defaultStyle,
          tooltipText = _this$props2.tooltipText,
          onChangeLayer = _this$props2.onChangeLayer,
          tooltipOpened = _this$props2.tooltipOpened;
      var _this$state = this.state,
          visibilityClick = _this$state.visibilityClick,
          visibilityHover = _this$state.visibilityHover,
          multiLayersActive = _this$state.multiLayersActive;
      var timelineLayers = this.getTimelineLayers();

      if (layers.length === 1 || timelineLayers.length) {
        return null;
      }

      return /*#__PURE__*/React.createElement(Tooltip, {
        overlay: /*#__PURE__*/React.createElement(LegendLayersTooltip, {
          layers: layers,
          activeLayer: activeLayer,
          onChangeLayer: onChangeLayer
        }),
        overlayClassName: "c-rc-tooltip -default -layers",
        placement: "top",
        trigger: ['click'],
        visible: visibilityClick,
        onVisibleChange: this.onTooltipVisibilityChange,
        destroyTooltipOnHide: true
      }, /*#__PURE__*/React.createElement(Tooltip, {
        visible: multiLayersActive || !visibilityClick && visibilityHover,
        overlay: tooltipText || "".concat(layers.length, " layers"),
        overlayClassName: "c-rc-tooltip -default",
        placement: "top",
        trigger: tooltipOpened ? '' : 'hover',
        onVisibleChange: function onVisibleChange(visibility) {
          return _this2.setState({
            visibilityHover: visibility,
            multiLayersActive: false
          });
        },
        destroyTooltipOnHide: true
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "vizzuality__c-legend-button vizzuality__layers",
        "aria-label": "Select other layer"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: icon || 'icon-layers',
        className: "-small",
        style: visibilityHover || visibilityClick ? focusStyle : defaultStyle
      }))));
    }
  }]);

  return LegendItemButtonLayers;
}(PureComponent);

_defineProperty(LegendItemButtonLayers, "propTypes", {
  layers: PropTypes.array,
  activeLayer: PropTypes.object,
  icon: PropTypes.string,
  focusStyle: PropTypes.object,
  defaultStyle: PropTypes.object,
  tooltipText: PropTypes.string,
  tooltipOpened: PropTypes.bool,
  scrolling: PropTypes.bool,
  onChangeLayer: PropTypes.func,
  onTooltipVisibilityChange: PropTypes.func
});

_defineProperty(LegendItemButtonLayers, "defaultProps", {
  layers: [],
  activeLayer: {},
  icon: '',
  focusStyle: {},
  defaultStyle: {},
  tooltipOpened: false,
  tooltipText: null,
  scrolling: false,
  onChangeLayer: function onChangeLayer() {},
  onTooltipVisibilityChange: function onTooltipVisibilityChange() {}
});

export default LegendItemButtonLayers;
//# sourceMappingURL=index.esm.js.map
