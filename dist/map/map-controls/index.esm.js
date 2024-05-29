import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, createClass as _createClass, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

var MapControls = /*#__PURE__*/function (_PureComponent) {
  _inherits(MapControls, _PureComponent);

  var _super = _createSuper(MapControls);

  function MapControls() {
    _classCallCheck(this, MapControls);

    return _super.apply(this, arguments);
  }

  _createClass(MapControls, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          customClass = _this$props.customClass,
          children = _this$props.children;
      var externalClass = classnames(_defineProperty({}, customClass, !!customClass));
      return /*#__PURE__*/React.createElement("div", {
        className: (externalClass ? externalClass + " " : "") + "vizzuality__c-map-controls"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "vizzuality__map-controls-list"
      }, React.Children.map(children, function (c, i) {
        return /*#__PURE__*/React.isValidElement(c) && /*#__PURE__*/React.createElement("li", {
          className: "vizzuality__map-controls-list-item",
          key: i
        }, /*#__PURE__*/React.cloneElement(c));
      })));
    }
  }]);

  return MapControls;
}(PureComponent);

_defineProperty(MapControls, "propTypes", {
  children: PropTypes.node.isRequired,

  /** Custom css class for styling */
  customClass: PropTypes.string
});

_defineProperty(MapControls, "defaultProps", {
  customClass: null
});

export default MapControls;
//# sourceMappingURL=index.esm.js.map
