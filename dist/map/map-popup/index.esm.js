import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass, objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import isEqual from 'lodash/isEqual';

var _ref = typeof window !== 'undefined' ? window : {},
    L = _ref.L;

var MapPopup = /*#__PURE__*/function (_Component) {
  _inherits(MapPopup, _Component);

  var _super = _createSuper(MapPopup);

  function MapPopup() {
    var _this;

    _classCallCheck(this, MapPopup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "setPopup", function () {
      var _this$props = _this.props,
          map = _this$props.map,
          latlng = _this$props.latlng;
      if (!latlng || !map) _this.removePopup();

      var content = _this.buildPopup();

      if (latlng && map) {
        _this.popup.setLatLng(latlng).setContent(content).openOn(map);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "buildPopup", function () {
      var children = _this.props.children;
      var popupComponent = document.createElement('div');
      render(React.Children.map(children, function (child) {
        return /*#__PURE__*/React.isValidElement(child) && typeof child.type !== 'string' ? /*#__PURE__*/React.cloneElement(child, _objectSpread2(_objectSpread2({}, _this.props), {}, {
          popup: _this.popup
        })) : child;
      }), popupComponent);
      return popupComponent;
    });

    _defineProperty(_assertThisInitialized(_this), "updatePopup", function () {
      _this.popup.setContent(_this.buildPopup());
    });

    _defineProperty(_assertThisInitialized(_this), "removePopup", function () {
      if (_this.popup) {
        _this.popup.remove();
      }
    });

    return _this;
  }

  _createClass(MapPopup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof L === 'undefined') {
        return;
      }

      this.popup = this.popup || L.popup({
        maxWidth: 400,
        minWidth: 240
      });
      this.props.onReady(this.popup);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevLatLng = prevProps.latlng,
          prevData = prevProps.data;
      var _this$props2 = this.props,
          nextLatLng = _this$props2.latlng,
          nextData = _this$props2.data;

      if (!isEqual(prevLatLng, nextLatLng)) {
        this.setPopup();
      }

      if (!isEqual(prevData, nextData) && prevLatLng) {
        this.updatePopup();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return MapPopup;
}(Component);

_defineProperty(MapPopup, "propTypes", {
  children: PropTypes.node.isRequired,

  /** Map instance */
  map: PropTypes.object.isRequired,

  /** `{ lat: 20, lng: 20 }` As soon as this changes, a popup will show up on the map */
  latlng: PropTypes.object,

  /** As soon as this changes, a popup will be updated on the map */
  data: PropTypes.object,

  /** Return a popup instace
   * @param {Object} popup Popup instace
   */
  onReady: PropTypes.func
});

_defineProperty(MapPopup, "defaultProps", {
  latlng: {},
  data: {},
  onReady: function onReady() {}
});

export default MapPopup;
export { MapPopup };
//# sourceMappingURL=index.esm.js.map
