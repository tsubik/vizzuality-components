import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass, objectSpread2 as _objectSpread2 } from '../_virtual/_rollupPluginBabelHelpers.js';
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
export { MapPopup } from './map-popup/index.esm.js';
export { default as MapControls } from './map-controls/index.esm.js';
export { default as ZoomControl } from './map-controls/zoom-control/index.esm.js';

var _ref = typeof window !== 'undefined' ? window : {},
    L = _ref.L;

if (typeof window !== 'undefined') {
  /*
   * Workaround for 1px lines appearing in some browsers due to fractional transforms
   * and resulting anti-aliasing.
   * https://github.com/Leaflet/Leaflet/issues/3575
   */

  /* eslint-disable */
  (function () {
    var originalInitTile = L && L.GridLayer.prototype._initTile;
    L && L.GridLayer.include({
      _initTile: function _initTile(tile) {
        originalInitTile.call(this, tile);
        var tileSize = this.getTileSize();
        tile.style.width = "".concat(tileSize.x + 1, "px");
        tile.style.height = "".concat(tileSize.y + 1, "px");
      }
    });
  })();
  /* eslint-enable */

}

var Maps = /*#__PURE__*/function (_Component) {
  _inherits(Maps, _Component);

  var _super = _createSuper(Maps);

  function Maps() {
    var _this;

    _classCallCheck(this, Maps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "events", {});

    _defineProperty(_assertThisInitialized(_this), "setMap", function () {
      var mapOptions = _this.props.mapOptions;
      _this.map = L.map(_this.mapNode, _objectSpread2(_objectSpread2({}, Maps.defaultProps.mapOptions), mapOptions));
    });

    _defineProperty(_assertThisInitialized(_this), "setMapOptions", function () {
      var _this$props$mapOption = _this.props.mapOptions,
          center = _this$props$mapOption.center,
          zoom = _this$props$mapOption.zoom;

      _this.map.setView(_objectSpread2({}, center), zoom);
    });

    _defineProperty(_assertThisInitialized(_this), "setBasemap", function () {
      var basemap = _this.props.basemap;
      if (_this.basemapLayer) _this.basemapLayer.remove();
      _this.basemapLayer = L.tileLayer(basemap.url, basemap.options).addTo(_this.map).setZIndex(0);
    });

    _defineProperty(_assertThisInitialized(_this), "setLabel", function () {
      var label = _this.props.label;
      if (_this.labelLayer) _this.labelLayer.remove();
      _this.labelLayer = L.tileLayer(label.url, label.options).addTo(_this.map).setZIndex(1100);
    });

    _defineProperty(_assertThisInitialized(_this), "setBounds", function () {
      var bounds = _this.props.bounds;
      var bbox = bounds.bbox,
          options = bounds.options;

      if (bbox) {
        var mapBounds = [[bbox[1], bbox[0]], [bbox[3], bbox[2]]];

        _this.map.fitBounds(mapBounds, options);
      }
    });

    return _this;
  }

  _createClass(Maps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof L === 'undefined' || !this.mapNode) {
        return;
      }

      var _this$props = this.props,
          interactionEnabled = _this$props.interactionEnabled,
          scrollZoomEnabled = _this$props.scrollZoomEnabled,
          onReady = _this$props.onReady;
      this.setMap();
      this.setBasemap();
      this.setLabel();
      this.setBounds();
      this.setEvents();

      if (!interactionEnabled) {
        this.map.dragging.disable();
        this.map.touchZoom.disable();
        this.map.doubleClickZoom.disable();
        this.map.scrollWheelZoom.disable();
        this.map.boxZoom.disable();
        this.map.keyboard.disable();
      }

      if (!scrollZoomEnabled) {
        this.map.scrollWheelZoom.disable();
      }

      onReady(this.map); // As this.map didn't exist before this function

      this.forceUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevBasemap = prevProps.basemap,
          prevLabel = prevProps.label,
          prevBounds = prevProps.bounds,
          prevEvents = prevProps.events,
          prevMapOptions = prevProps.mapOptions;
      var _this$props2 = this.props,
          nextBasemap = _this$props2.basemap,
          nextLabel = _this$props2.label,
          nextBounds = _this$props2.bounds,
          nextEvents = _this$props2.events,
          nextMapOptions = _this$props2.mapOptions; // Basemap

      if (!isEqual(prevBasemap, nextBasemap)) {
        this.setBasemap();
      } // Label


      if (!isEqual(prevLabel, nextLabel)) {
        this.setLabel();
      } // Bounds


      if (!isEqual(prevBounds, nextBounds)) {
        this.setBounds();
      } // Events


      if (!isEqual(prevEvents, nextEvents)) {
        this.setEvents();
      } // mapOptions


      if (!isEqual(prevMapOptions, nextMapOptions)) {
        this.setMapOptions();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var _this2 = this;

      var events = this.props.events;
      this.removeEvents();
      Object.keys(events).forEach(function (key) {
        _this2.events[key] = function (e) {
          events[key](e, _this2.map);
        };

        _this2.map.on(key, _this2.events[key]);
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var _this3 = this;

      Object.keys(this.events).forEach(function (key) {
        _this3.map.off(key, _this3.events[key]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          customClass = _this$props3.customClass,
          children = _this$props3.children;
      var externalClass = classnames(_defineProperty({}, customClass, !!customClass));
      return /*#__PURE__*/React.createElement("div", {
        className: (externalClass ? externalClass + " " : "") + "vizzuality__c-map"
      }, /*#__PURE__*/React.createElement("div", {
        ref: function ref(node) {
          _this4.mapNode = node;
        },
        className: "vizzuality__map-container"
      }), !!this.map && typeof children === 'function' && children(this.map));
    }
  }]);

  return Maps;
}(Component);

_defineProperty(Maps, "propTypes", {
  /** A function that returns the map instance */
  children: PropTypes.func,

  /** Custom css class for styling */
  customClass: PropTypes.string,

  /** Leaflet props for creating a map
   * @see Check Leaflet documentation  https://leafletjs.com/reference-1.3.0.html#map
   */
  mapOptions: PropTypes.object,

  /** `{ url: 'http://example/{x}/{y}/{z}', options: {}}`
   * @see Check Leaflet documentation  https://leafletjs.com/reference-1.3.0.html#tilelayer
   */
  basemap: PropTypes.object,

  /** `{ url: 'http://example/{x}/{y}/{z}', options: {} }` Options for L.tileLayer
   * @see Check Leaflet documentation  https://leafletjs.com/reference-1.3.0.html#tilelayer
   */
  label: PropTypes.object,

  /** `{ bbox: [10, 5, 20, 10], options: {} }`
   * @see Check Leaflet documentation  https://leafletjs.com/reference-1.3.0.html#fitbounds-options
   */
  bounds: PropTypes.object,

  /**
   * `{ click: (e, map) => {} }` All the functions return 2 params
   * @arg {Object} e event
   * @arg {Object} map Map instance
   * @see Cheack Leaflet documentation https://leafletjs.com/reference-1.3.0.html#map-event
   */
  events: PropTypes.object,

  /** Removes all interactions available on the map  */
  interactionEnabled: PropTypes.bool,

  /** Removes only zoomScroll on the map  */
  scrollZoomEnabled: PropTypes.bool,

  /**
   * Return map instance when this one is ready
   * @arg {Object} map Map instance
   */
  onReady: PropTypes.func
});

_defineProperty(Maps, "defaultProps", {
  children: null,
  customClass: null,
  mapOptions: {
    zoomControl: false,
    center: [27, 12],
    zoom: 3,
    maxZoom: 20,
    minZoom: 2
  },
  basemap: {
    url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
    options: {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  },
  label: {
    url: 'http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png',
    options: {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  },
  bounds: {
    bbox: null,
    options: {} // fitBounds options

  },
  events: {},
  interactionEnabled: true,
  scrollZoomEnabled: true,
  onReady: function onReady() {}
});

export default Maps;
//# sourceMappingURL=index.esm.js.map
