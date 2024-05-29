import { defineProperty as _defineProperty, inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, assertThisInitialized as _assertThisInitialized, createClass as _createClass } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import { SortableContainer } from 'react-sortable-hoc';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var LegendList = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendList, _PureComponent);

  var _super = _createSuper(LegendList);

  function LegendList(props) {
    var _this;

    _classCallCheck(this, LegendList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (e) {
      if (e.target.id !== 'vizzuality-legend-list') {
        return false;
      }

      var scrolling = _this.state.scrolling;

      if (_this.timeout) {
        // if there is already a timeout in process cancel it
        clearTimeout(_this.timeout);
      }

      _this.timeout = setTimeout(function () {
        _this.timeout = null;

        _this.setState({
          scrolling: false
        });
      }, 250);

      if (!scrolling) {
        _this.setState({
          scrolling: true
        });
      }
    });

    _this.state = {
      scrolling: false
    };
    _this.timeout = null;
    return _this;
  }

  _createClass(LegendList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          sortable = _this$props.sortable,
          children = _this$props.children;
      var scrolling = this.state.scrolling;
      return /*#__PURE__*/React.createElement("ul", {
        id: "vizzuality-legend-list",
        className: "vizzuality__c-legend-list",
        onScroll: this.onScroll
      }, React.Children.map(children, function (child, index) {
        return /*#__PURE__*/React.cloneElement(child, {
          sortable: sortable,
          index: index,
          i: index,
          scrolling: scrolling
        });
      }));
    }
  }]);

  return LegendList;
}(PureComponent);

_defineProperty(LegendList, "propTypes", {
  sortable: PropTypes.bool,
  children: PropTypes.node
});

_defineProperty(LegendList, "defaultProps", {
  sortable: true,
  children: []
});

var LegendList$1 = SortableContainer(LegendList);

export default LegendList$1;
//# sourceMappingURL=index.esm.js.map
