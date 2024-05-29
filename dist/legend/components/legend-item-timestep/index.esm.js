import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass, objectSpread2 as _objectSpread2, extends as _extends } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import classnames from 'classnames';
import Timestep from '../../../timestep/index.esm.js';
import { gradientConverter, formatDate, addToDate, formatDatePretty, dateDiff, getTicks } from './utils.esm.js';

var _styleModuleImportMap = {
  "./styles.scss": {
    "c-legend-timestep": "vizzuality__c-legend-timestep",
    "-can-play": "vizzuality__-can-play"
  }
};
var TimestepContainer = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimestepContainer, _PureComponent);

  var _super = _createSuper(TimestepContainer);

  function TimestepContainer(props) {
    var _this;

    _classCallCheck(this, TimestepContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "timelineParams", null);

    _defineProperty(_assertThisInitialized(_this), "getTrackStyle", function () {
      var _this$timelineParams = _this.timelineParams,
          minDate = _this$timelineParams.minDate,
          interval = _this$timelineParams.interval,
          trackStyle = _this$timelineParams.trackStyle;

      if (Array.isArray(trackStyle)) {
        return trackStyle.map(function (t) {
          var _ref = t || {},
              gradient = _ref.gradient;

          if (!gradient) return t;

          var styles = _objectSpread2(_objectSpread2({}, t), {}, {
            gradient: gradientConverter(gradient, minDate, interval)
          });

          return styles;
        });
      }

      var _ref2 = trackStyle || {},
          gradient = _ref2.gradient;

      if (gradient) {
        return _objectSpread2(_objectSpread2({}, trackStyle), {}, {
          gradient: gradientConverter(gradient, minDate, interval)
        });
      }

      return trackStyle;
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnAfterChange", function (range) {
      var _this$props = _this.props,
          activeLayer = _this$props.activeLayer,
          handleChange = _this$props.handleChange;

      var formattedRange = _this.formatRange([range[0], range[1], range[2]]);

      handleChange(formattedRange, activeLayer);
    });

    _defineProperty(_assertThisInitialized(_this), "formatRange", function (range) {
      var _this$timelineParams2 = _this.timelineParams,
          minDate = _this$timelineParams2.minDate,
          interval = _this$timelineParams2.interval;
      return range.map(function (r, i) {
        // if date is not the start date we should select the end of the interval
        var toEnd = i !== 0;
        return formatDate(addToDate(minDate, r, interval, toEnd));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "formatValue", function (value) {
      var _this$timelineParams3 = _this.timelineParams,
          minDate = _this$timelineParams3.minDate,
          dateFormat = _this$timelineParams3.dateFormat,
          interval = _this$timelineParams3.interval;
      return formatDatePretty(addToDate(minDate, value, interval), dateFormat);
    });

    var _activeLayer = props.activeLayer;
    var timelineParams = _activeLayer.timelineParams;
    _this.timelineParams = timelineParams;
    return _this;
  }

  _createClass(TimestepContainer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var activeLayer = this.props.activeLayer;
      var prevActiveLayer = prevProps.activeLayer;
      var timelineParams = activeLayer.timelineParams;
      var prevTimelineParams = prevActiveLayer.timelineParams; // Should we use timelineParams directly from params instead of doing this? I think so

      if (!isEqual(timelineParams, prevTimelineParams)) {
        this.timelineParams = timelineParams;
        this.forceUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.timelineParams) return null;
      var defaultStyles = this.props.defaultStyles;
      var _this$timelineParams4 = this.timelineParams,
          marks = _this$timelineParams4.marks,
          maxDate = _this$timelineParams4.maxDate,
          maxAbsoluteDate = _this$timelineParams4.maxAbsoluteDate,
          minDate = _this$timelineParams4.minDate,
          minAbsoluteDate = _this$timelineParams4.minAbsoluteDate,
          interval = _this$timelineParams4.interval,
          startDate = _this$timelineParams4.startDate,
          endDate = _this$timelineParams4.endDate,
          trimEndDate = _this$timelineParams4.trimEndDate,
          canPlay = _this$timelineParams4.canPlay;
      return /*#__PURE__*/React.createElement("div", {
        className: _getClassName(classnames({
          'c-legend-timestep': true,
          '-can-play': canPlay
        }), _styleModuleImportMap)
      }, /*#__PURE__*/React.createElement(Timestep, _extends({}, this.props, defaultStyles, this.timelineParams, {
        trackStyle: this.getTrackStyle(),
        min: 0,
        minAbs: dateDiff(minAbsoluteDate || minDate, minDate, interval),
        max: dateDiff(maxDate, minDate, interval),
        maxAbs: dateDiff(maxAbsoluteDate || maxDate, minDate, interval),
        start: dateDiff(startDate, minDate, interval),
        end: dateDiff(endDate, minDate, interval),
        trim: dateDiff(trimEndDate, minDate, interval),
        marks: marks || getTicks(this.timelineParams),
        formatValue: this.formatValue,
        handleOnAfterChange: this.handleOnAfterChange
      })));
    }
  }]);

  return TimestepContainer;
}(PureComponent);

_defineProperty(TimestepContainer, "propTypes", {
  defaultStyles: PropTypes.shape({}),
  activeLayer: PropTypes.shape({}),
  handleChange: PropTypes.func.isRequired
});

_defineProperty(TimestepContainer, "defaultProps", {
  defaultStyles: {},
  activeLayer: {}
});

export default TimestepContainer;
export { TimestepContainer };
//# sourceMappingURL=index.esm.js.map
