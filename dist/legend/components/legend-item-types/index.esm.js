import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass, objectSpread2 as _objectSpread2 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import { Spinner } from '../../../spinner/index.esm.js';
import { replace } from './utils.esm.js';
import { LegendTypeBasic } from './legend-item-type-basic/index.esm.js';
export { LegendTypeBasic as LegendItemTypeBasic } from './legend-item-type-basic/index.esm.js';
import LegendTypeChoropleth from './legend-item-type-choropleth/index.esm.js';
export { default as LegendItemTypeChoropleth } from './legend-item-type-choropleth/index.esm.js';
import LegendTypeGradient from './legend-item-type-gradient/index.esm.js';
export { default as LegendItemTypeGradient } from './legend-item-type-gradient/index.esm.js';
import LegendTypeGradient$1 from './legend-item-type-proportional/index.esm.js';
export { default as LegendItemTypeProportional } from './legend-item-type-proportional/index.esm.js';

var LegendItemTypes = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendItemTypes, _PureComponent);

  var _super = _createSuper(LegendItemTypes);

  function LegendItemTypes() {
    var _this;

    _classCallCheck(this, LegendItemTypes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeLayer: {},
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "fetchLegend", function (url) {
      var activeLayer = _this.props.activeLayer;

      var _ref = activeLayer || {},
          legendConfig = _ref.legendConfig;

      var _ref2 = legendConfig || {},
          dataParse = _ref2.dataParse;

      _this.setState({
        loading: true
      });

      fetch(url).then(function (response) {
        if (response.ok) return response.json();
      }).then(function (response) {
        var parsedActiveLayer = typeof dataParse === 'function' ? dataParse(activeLayer, response) : response;

        _this.setState({
          activeLayer: parsedActiveLayer,
          loading: false
        });
      }).catch(function () {
        _this.setState({
          loading: false
        });
      });
    });

    return _this;
  }

  _createClass(LegendItemTypes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var activeLayer = this.props.activeLayer;

      var _ref3 = activeLayer || {},
          legendConfig = _ref3.legendConfig;

      var _ref4 = legendConfig || {},
          _ref4$params = _ref4.params,
          params = _ref4$params === void 0 ? {} : _ref4$params,
          _ref4$sqlParams = _ref4.sqlParams,
          sqlParams = _ref4$sqlParams === void 0 ? {} : _ref4$sqlParams;

      var parsedConfig = replace(JSON.stringify(legendConfig), params, sqlParams);

      var _JSON$parse = JSON.parse(parsedConfig),
          url = _JSON$parse.url;

      if (url) {
        this.fetchLegend(url);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevActiveLayer = prevProps.activeLayer;
      var prevLegendConfig = prevActiveLayer.legendConfig;
      var _prevLegendConfig$par = prevLegendConfig.params,
          prevParams = _prevLegendConfig$par === void 0 ? {} : _prevLegendConfig$par,
          _prevLegendConfig$sql = prevLegendConfig.sqlParams,
          prevSqlParams = _prevLegendConfig$sql === void 0 ? {} : _prevLegendConfig$sql;
      var nextActiveLayer = this.props.activeLayer;
      var nextLegendConfig = nextActiveLayer.legendConfig;
      var _nextLegendConfig$par = nextLegendConfig.params,
          nextParams = _nextLegendConfig$par === void 0 ? {} : _nextLegendConfig$par,
          _nextLegendConfig$sql = nextLegendConfig.sqlParams,
          nextSqlParams = _nextLegendConfig$sql === void 0 ? {} : _nextLegendConfig$sql;

      if (!isEqual(nextParams, prevParams) || !isEqual(nextSqlParams, prevSqlParams)) {
        var stringifyConfig = replace(JSON.stringify(nextLegendConfig), nextParams, nextSqlParams);
        var parsedConfig = JSON.parse(stringifyConfig);

        var _ref5 = parsedConfig || {},
            url = _ref5.url;

        if (url) {
          this.fetchLegend(url);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          propsActiveLayer = _this$props.activeLayer;
      var _this$state = this.state,
          loading = _this$state.loading,
          stateActiveLayer = _this$state.activeLayer;
      var activeLayer = !isEmpty(stateActiveLayer) ? stateActiveLayer : propsActiveLayer;

      var _ref6 = activeLayer || {},
          legendConfig = _ref6.legendConfig;

      var _ref7 = legendConfig || {},
          url = _ref7.url;

      var shouldRender = !url || url && !isEmpty(stateActiveLayer);
      return /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__c-legend-item-types"
      }, url && loading && /*#__PURE__*/React.createElement(Spinner, {
        position: "relative",
        style: {
          box: {
            width: 20,
            height: 20
          }
        }
      }), shouldRender && !!React.Children.count(children) && React.Children.map(children, function (child) {
        return /*#__PURE__*/React.isValidElement(child) && typeof child.type !== 'string' ? /*#__PURE__*/React.cloneElement(child, _objectSpread2({}, _this2.props)) : child;
      }), shouldRender && !React.Children.count(children) && /*#__PURE__*/React.createElement(LegendTypeBasic, this.props), shouldRender && !React.Children.count(children) && /*#__PURE__*/React.createElement(LegendTypeChoropleth, this.props), shouldRender && !React.Children.count(children) && /*#__PURE__*/React.createElement(LegendTypeGradient, this.props), shouldRender && !React.Children.count(children) && /*#__PURE__*/React.createElement(LegendTypeGradient$1, this.props));
    }
  }]);

  return LegendItemTypes;
}(PureComponent);

_defineProperty(LegendItemTypes, "propTypes", {
  // Props
  children: PropTypes.node,
  activeLayer: PropTypes.object
});

_defineProperty(LegendItemTypes, "defaultProps", {
  // Props
  children: [],
  activeLayer: {}
});

export default LegendItemTypes;
//# sourceMappingURL=index.esm.js.map
