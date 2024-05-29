import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/index.esm.js';
import { Slider } from '../slider/index.esm.js';

var _styleModuleImportMap = {
  "./styles.scss": {
    "c-timestep": "vizzuality__c-timestep",
    "player-btn": "vizzuality__player-btn",
    "timestep-slider": "vizzuality__timestep-slider",
    "can-play": "vizzuality__can-play"
  }
};

var Timestep = /*#__PURE__*/function (_PureComponent) {
  _inherits(Timestep, _PureComponent);

  var _super = _createSuper(Timestep);

  function Timestep(props) {
    var _this;

    _classCallCheck(this, Timestep);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "startTimeline", function () {
      var _this$state = _this.state,
          start = _this$state.start,
          end = _this$state.end,
          trim = _this$state.trim;

      if (end < trim) {
        _this.incrementTimeline();
      } else if (end >= trim) {
        _this.setState({
          end: start
        }, function () {
          _this.incrementTimeline();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopTimeline", function () {
      clearInterval(_this.interval);
    });

    _defineProperty(_assertThisInitialized(_this), "incrementTimeline", function () {
      var _this$state2 = _this.state,
          start = _this$state2.start,
          end = _this$state2.end,
          trim = _this$state2.trim;
      var _this$props = _this.props,
          speed = _this$props.speed,
          step = _this$props.step,
          range = _this$props.range,
          max = _this$props.max,
          maxAbs = _this$props.maxAbs;
      var maxCurrent = max >= maxAbs ? maxAbs : max;
      _this.interval = setTimeout(function () {
        var newEnd = end + step;

        if (newEnd > trim && range || !range && newEnd >= maxCurrent) {
          _this.handleResetTimeline();
        } else {
          _this.handleOnChange([start, newEnd, trim]);

          _this.handleOnAfterChange([start, newEnd, trim]);
        }
      }, speed);
    });

    _defineProperty(_assertThisInitialized(_this), "handleResetTimeline", function () {
      var loop = _this.props.loop;
      var trim = _this.state.trim;

      _this.stopTimeline();

      if (loop) {
        _this.startTimeline();
      } else {
        _this.setState({
          playing: false,
          end: trim
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "checkRange", function (range) {
      var _this$state3 = _this.state,
          playing = _this$state3.playing,
          start = _this$state3.start,
          end = _this$state3.end,
          trim = _this$state3.trim;
      var _this$props2 = _this.props,
          minProp = _this$props2.min,
          maxProp = _this$props2.max,
          minAbs = _this$props2.minAbs,
          maxAbs = _this$props2.maxAbs,
          minGap = _this$props2.minGap,
          maxGap = _this$props2.maxGap;

      if (!Array.isArray(range)) {
        return [start, range, trim];
      }

      var min = range[0] <= minAbs ? minAbs : range[0];
      var max = range[2] >= maxAbs ? maxAbs : range[2]; // If start is different from current state

      if (!playing && range[0] !== start) {
        if (minGap && max - min < minGap) {
          if (max === maxAbs || max === maxProp) {
            min = max - minGap;
          } else {
            max = min + minGap;
          }
        }

        if (maxGap) {
          max = max - min > maxGap ? min + maxGap : max;
        }

        return [min, max, max];
      } // If end is different from trim, and trim is different from current state


      if (!playing && range[1] !== range[2] && trim !== range[2]) {
        if (minGap && max - (min + minGap) < 0) {
          if (min === minAbs || min === minProp) {
            max = min + minGap;
          } else {
            min = max - minGap;
          }
        }

        if (maxGap) {
          min = max - (min + maxGap) > 0 ? max - maxGap : min;
        }

        return [min, max, max];
      } // If end is different from trim, and end is different from current state


      if (!playing && range[1] !== range[2] && end !== range[1]) {
        max = range[1] >= maxAbs ? maxAbs : range[1];

        if (minGap && max - (min + minGap) < 0) {
          if (min === minAbs || min === minProp) {
            max = min + minGap;
          } else {
            min = max - minGap;
          }
        }

        if (maxGap) {
          min = max - (min + maxGap) > 0 ? max - maxGap : min;
        }

        return [min, max, max];
      } // If end is different from trim, and trim is different from current state


      if (!playing && trim !== range[0]) {
        if (minGap && max - (min + minGap) < 0) {
          if (min === minAbs || min === minProp) {
            max = min + minGap;
          } else {
            min = max - minGap;
          }
        }

        if (maxGap) {
          min = max - (min + maxGap) > 0 ? max - maxGap : min;
        }

        return [min, max, max];
      }

      return range;
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (range) {
      var handleOnChange = _this.props.handleOnChange;

      var newRange = _this.checkRange(range);

      _this.setState({
        start: newRange[0],
        end: newRange[1],
        trim: newRange[2]
      });

      if (handleOnChange) handleOnChange(newRange);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnAfterChange", function (range) {
      var handleOnAfterChange = _this.props.handleOnAfterChange;

      var newRange = _this.checkRange(range);

      if (handleOnAfterChange) handleOnAfterChange(newRange);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTogglePlay", function () {
      var handleOnPlay = _this.props.handleOnPlay;
      var statePlaying = _this.state.playing;
      var p = !statePlaying;

      _this.setState({
        playing: p
      });

      if (handleOnPlay) handleOnPlay(p);
    });

    var _this$props3 = _this.props,
        _playing = _this$props3.playing,
        _start = _this$props3.start,
        _end = _this$props3.end,
        _trim = _this$props3.trim,
        _minAbs = _this$props3.minAbs,
        _maxAbs = _this$props3.maxAbs;
    _this.state = {
      playing: _playing,
      start: _start <= _minAbs ? _minAbs : _start,
      end: _end >= _maxAbs ? _maxAbs : _end,
      trim: _trim >= _maxAbs ? _maxAbs : _trim
    };
    return _this;
  }

  _createClass(Timestep, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$state4 = this.state,
          statePlaying = _this$state4.playing,
          stateStart = _this$state4.start,
          stateEnd = _this$state4.end,
          stateTrim = _this$state4.trim;
      var prevStatePlaying = prevState.playing,
          prevStateStart = prevState.start,
          prevStateEnd = prevState.end,
          prevStateTrim = prevState.trim;
      var _this$props4 = this.props,
          playing = _this$props4.playing,
          start = _this$props4.start,
          end = _this$props4.end,
          trim = _this$props4.trim,
          minAbs = _this$props4.minAbs,
          maxAbs = _this$props4.maxAbs;
      var prevPropsPlaying = prevProps.playing,
          prevPropsStart = prevProps.start,
          prevPropsEnd = prevProps.end,
          prevPropsTrim = prevProps.trim,
          prevPropsMinAbs = prevProps.minAbs,
          prevPropsMaxAbs = prevProps.maxAbs;

      if (playing !== prevPropsPlaying) {
        this.setState({
          playing: playing
        }); // eslint-disable-line
      }

      if (statePlaying && statePlaying !== prevStatePlaying) {
        this.startTimeline();
      } else if (!statePlaying && statePlaying !== prevStatePlaying) {
        this.stopTimeline();
      } else if (statePlaying && stateEnd !== prevStateEnd) {
        this.incrementTimeline();
      }

      if (start !== prevPropsStart && start !== stateStart && prevStateStart === stateStart) {
        this.setState({
          // eslint-disable-line
          start: start <= minAbs ? minAbs : start,
          end: trim >= maxAbs ? maxAbs : trim
        });
      }

      if (end !== prevPropsEnd && end !== stateEnd && prevStateEnd === stateEnd) {
        this.setState({
          // eslint-disable-line
          end: end >= maxAbs ? maxAbs : end
        });
      }

      if (trim !== prevPropsTrim && trim !== stateTrim && prevStateTrim === stateTrim) {
        this.setState({
          // eslint-disable-line
          trim: trim,
          end: trim >= maxAbs ? maxAbs : trim
        });
      }

      if (minAbs !== prevPropsMinAbs || maxAbs !== prevPropsMaxAbs) {
        this.setState({
          // eslint-disable-line
          start: start <= minAbs ? minAbs : start,
          trim: trim >= maxAbs ? maxAbs : trim,
          end: end >= maxAbs ? maxAbs : end
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.interval) this.stopTimeline();
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this$state5 = this.state,
          start = _this$state5.start,
          end = _this$state5.end,
          trim = _this$state5.trim;
      var range = this.props.range;

      if (range) {
        return [start, end, trim];
      }

      return end;
    }
  }, {
    key: "getTrackStyle",
    value: function getTrackStyle() {
      var _this$state6 = this.state,
          start = _this$state6.start,
          end = _this$state6.end,
          trim = _this$state6.trim;
      var trackStyle = this.props.trackStyle;

      if (Array.isArray(trackStyle)) {
        var diff = end - start;
        var diff2 = trim - end;
        var stringArr = [];
        return trackStyle.map(function (t, i) {
          var gradient = t.gradient;

          if (gradient) {
            var stringKeys = Object.keys(gradient); // It could be better, no more neurons

            if (i === 0) {
              stringArr = stringKeys.filter(function (g, j) {
                var next = stringKeys[j + 1] || g;
                var di = start - (g + next);
                return g >= di && g <= end;
              }).map(function (g, j) {
                var first = j === 0;
                var perc = (g - start) / diff * 100;
                var index = stringKeys.findIndex(function (ix) {
                  return ix === g;
                });

                if (first) {
                  return "".concat(gradient[g]);
                }

                return "".concat(gradient[stringKeys[index - 1]], " ").concat(perc, "%, ").concat(gradient[g], " ").concat(perc, "%");
              });
            } // It could be better, no more neurons


            if (i === 1) {
              stringArr = stringKeys.filter(function (g, j) {
                var last = stringKeys[j - 1] || g;
                var di = end - (g - last);
                return g > di && g <= trim;
              }).map(function (g, j) {
                var first = j === 0;
                var perc = (g - end) / diff2 * 100;
                var index = stringKeys.findIndex(function (ix) {
                  return ix === g;
                });

                if (first) {
                  return "".concat(gradient[g]);
                }

                return "".concat(gradient[stringKeys[index - 1]], " ").concat(perc, "%, ").concat(gradient[g], " ").concat(perc, "%");
              });
            }

            return _objectSpread2(_objectSpread2({}, t), {}, {
              background: stringArr.length > 1 ? "linear-gradient(to right, ".concat(stringArr.join(','), ")") : stringArr.toString()
            });
          }

          return t;
        });
      }

      return trackStyle;
    }
  }, {
    key: "renderPlay",
    value: function renderPlay() {
      var statePlaying = this.state.playing;
      var iconStatus = classnames({
        'icon-pause': statePlaying,
        'icon-play': !statePlaying
      });
      return /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: (classnames({
          '-playing': statePlaying
        }) ? classnames({
          '-playing': statePlaying
        }) + " " : "") + "vizzuality__player-btn",
        onClick: this.handleTogglePlay
      }, /*#__PURE__*/React.createElement(Icon, {
        name: iconStatus
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          min = _this$props5.min,
          max = _this$props5.max,
          marks = _this$props5.marks,
          formatValue = _this$props5.formatValue,
          step = _this$props5.step,
          canPlay = _this$props5.canPlay,
          customClass = _this$props5.customClass,
          railStyle = _this$props5.railStyle,
          handleStyle = _this$props5.handleStyle,
          range = _this$props5.range,
          pushable = _this$props5.pushable,
          PlayButton = _this$props5.PlayButton;
      var playing = this.state.playing;
      return /*#__PURE__*/React.createElement("div", {
        className: (customClass ? customClass + " " : "") + "vizzuality__c-timestep"
      }, canPlay && !PlayButton && this.renderPlay(), canPlay && !!PlayButton && PlayButton, /*#__PURE__*/React.createElement("div", {
        className: _getClassName(classnames('timestep-slider', {
          'can-play': canPlay
        }), _styleModuleImportMap)
      }, /*#__PURE__*/React.createElement(Slider, {
        range: range,
        marks: marks,
        disabled: playing,
        min: min,
        max: max,
        value: this.getValue(),
        step: step,
        formatValue: formatValue,
        railStyle: railStyle,
        trackStyle: this.getTrackStyle(),
        handleStyle: handleStyle,
        showTooltip: function showTooltip(index) {
          return playing && index === 1;
        },
        pushable: pushable,
        onChange: this.handleOnChange,
        onAfterChange: this.handleOnAfterChange
      })));
    }
  }]);

  return Timestep;
}(PureComponent);

_defineProperty(Timestep, "propTypes", {
  customClass: PropTypes.string,
  range: PropTypes.bool,
  pushable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  canPlay: PropTypes.bool,
  min: PropTypes.number.isRequired,
  minAbs: PropTypes.number,
  max: PropTypes.number.isRequired,
  maxAbs: PropTypes.number,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  trim: PropTypes.number,
  marks: PropTypes.shape({}).isRequired,
  step: PropTypes.number,
  speed: PropTypes.number,
  loop: PropTypes.bool,
  formatValue: PropTypes.func.isRequired,
  trackStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]),
  railStyle: PropTypes.shape({}),
  handleStyle: PropTypes.shape({}),
  playing: PropTypes.bool,
  PlayButton: PropTypes.node,
  handleOnChange: PropTypes.func,
  handleOnAfterChange: PropTypes.func,
  handleOnPlay: PropTypes.func
});

_defineProperty(Timestep, "defaultProps", {
  customClass: null,
  range: true,
  pushable: 0,
  canPlay: false,
  trim: null,
  minAbs: -Infinity,
  maxAbs: Infinity,
  step: 1,
  speed: 100,
  loop: false,
  trackStyle: {
    backgroundColor: '#c32d7b',
    borderRadius: '0px'
  },
  railStyle: {
    backgroundColor: '#d9d9d9'
  },
  handleStyle: {
    backgroundColor: '#c32d7b',
    borderRadius: '10px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.29)',
    border: '0px',
    zIndex: 2
  },
  playing: undefined,
  PlayButton: null,
  handleOnChange: null,
  handleOnAfterChange: null,
  handleOnPlay: null
});

export default Timestep;
//# sourceMappingURL=index.esm.js.map
