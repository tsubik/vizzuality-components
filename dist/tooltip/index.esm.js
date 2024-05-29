import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, createClass as _createClass, defineProperty as _defineProperty } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import PropTypes from 'prop-types';
import RCTooltip from 'rc-tooltip';

var Tooltip = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tooltip, _React$PureComponent);

  var _super = _createSuper(Tooltip);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _super.apply(this, arguments);
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/React.createElement(RCTooltip, this.props, children);
    }
  }]);

  return Tooltip;
}(React.PureComponent);

_defineProperty(Tooltip, "propTypes", {
  children: PropTypes.node
});

_defineProperty(Tooltip, "defaultProps", {
  children: []
});

export default Tooltip;
export { Tooltip };
//# sourceMappingURL=index.esm.js.map
