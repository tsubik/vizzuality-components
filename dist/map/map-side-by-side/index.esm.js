import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, createClass as _createClass, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import PropTypes from 'prop-types';
import './lib.esm.js';

var _ref = typeof window !== 'undefined' ? window : {},
    L = _ref.L;

var MapSideBySide = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MapSideBySide, _React$PureComponent);

  var _super = _createSuper(MapSideBySide);

  function MapSideBySide() {
    _classCallCheck(this, MapSideBySide);

    return _super.apply(this, arguments);
  }

  _createClass(MapSideBySide, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          map = _this$props.map,
          onReady = _this$props.onReady;

      if (typeof L === 'undefined' || !map || !L.control.sideBySide || typeof L.control.sideBySide !== 'function') {
        return;
      }

      this.sideBySideControl = L.control.sideBySide();
      this.sideBySideControl.addTo(map);
      if (onReady) onReady(this.sideBySideControl);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return MapSideBySide;
}(React.PureComponent);

_defineProperty(MapSideBySide, "propTypes", {
  map: PropTypes.object.isRequired,

  /**
   * Return side-by-side control instance when this one is ready
   * @arg {Object} sideBySide sideBySide instance
   */
  onReady: PropTypes.func.isRequired
});

export default MapSideBySide;
export { MapSideBySide };
//# sourceMappingURL=index.esm.js.map
