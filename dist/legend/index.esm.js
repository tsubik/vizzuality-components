import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass, toConsumableArray as _toConsumableArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import arrayMove from 'array-move';
import Icon from '../icon/index.esm.js';
import LegendList from './components/legend-list/index.esm.js';
export { default as LegendListItem } from './components/legend-list-item/index.esm.js';
export { default as LegendItemToolbar } from './components/legend-item-toolbar/index.esm.js';
export { default as LegendItemTypes } from './components/legend-item-types/index.esm.js';

var _styleModuleImportMap = {
  "./styles.scss": {
    "c-legend-map": "vizzuality__c-legend-map",
    "legend-title": "vizzuality__legend-title",
    "toggle-legend": "vizzuality__toggle-legend",
    "open-legend": "vizzuality__open-legend",
    "-active": "vizzuality__-active",
    "close-legend": "vizzuality__close-legend"
  }
};

var Legend = /*#__PURE__*/function (_PureComponent) {
  _inherits(Legend, _PureComponent);

  var _super = _createSuper(Legend);

  function Legend(props) {
    var _this;

    _classCallCheck(this, Legend);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onToggleLegend", function (bool) {
      _this.setState({
        expanded: bool
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSortEnd", function (_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      var _this$props = _this.props,
          onChangeOrder = _this$props.onChangeOrder,
          children = _this$props.children;

      var layers = _toConsumableArray(children.map(function (c) {
        return c.props.layerGroup.dataset;
      }));

      var layersDatasets = arrayMove(layers, oldIndex, newIndex);
      onChangeOrder(layersDatasets);
    });

    var expanded = props.expanded;
    _this.state = {
      expanded: expanded
    };
    return _this;
  }
  /**
   * UI EVENTS
   * onToggleLegend
   * onSortEnd
   */


  _createClass(Legend, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          title = _this$props2.title,
          sortable = _this$props2.sortable,
          collapsable = _this$props2.collapsable,
          maxWidth = _this$props2.maxWidth,
          maxHeight = _this$props2.maxHeight,
          children = _this$props2.children;
      var expanded = this.state.expanded;

      if (!children || !React.Children.count(children)) {
        return null;
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__c-legend-map",
        style: {
          maxWidth: maxWidth
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          maxHeight: maxHeight
        },
        className: _getClassName("open-legend ".concat(classnames({
          '-active': expanded
        })), _styleModuleImportMap)
      }, collapsable && /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "vizzuality__toggle-legend",
        onClick: function onClick() {
          return _this2.onToggleLegend(false);
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "icon-arrow-down",
        className: "-small"
      })), expanded && /*#__PURE__*/React.createElement(LegendList, {
        helperClass: "c-legend-item -sortable",
        onSortStart: function onSortStart(_, event) {
          return event.preventDefault();
        } // It fixes user select in Safari and IE
        ,
        onSortEnd: this.onSortEnd,
        axis: "y",
        lockAxis: "y",
        lockToContainerEdges: true,
        lockOffset: "50%",
        useDragHandle: true,
        sortable: sortable
      }, React.Children.map(children, function (child, index) {
        return /*#__PURE__*/React.isValidElement(child) && child.type === 'LegendItemList' ? /*#__PURE__*/React.cloneElement(child, {
          sortable: sortable,
          index: index
        }) : child;
      }))), /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.onToggleLegend(true);
        },
        className: _getClassName("close-legend ".concat(classnames({
          '-active': !expanded
        })), _styleModuleImportMap)
      }, /*#__PURE__*/React.createElement("h1", {
        className: "vizzuality__legend-title"
      }, title, /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__toggle-legend"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "icon-arrow-up",
        className: "-small"
      })))));
    }
  }]);

  return Legend;
}(PureComponent);

_defineProperty(Legend, "propTypes", {
  /** Title */
  title: PropTypes.string,

  /** Sortable */
  sortable: PropTypes.bool,

  /** Max width */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Max height */
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Should the legend be expanded by default? */
  expanded: PropTypes.bool,

  /** Should the legend be collapsable */
  collapsable: PropTypes.bool,

  /** `onChangeOrder = (layerGroupsIds) => {}`
   * @arg {Array} layerGroupIds The new order
   */
  onChangeOrder: PropTypes.func,

  /** Children for render */
  children: PropTypes.node
});

_defineProperty(Legend, "defaultProps", {
  title: 'Legend',
  sortable: true,
  expanded: true,
  collapsable: true,
  maxWidth: null,
  maxHeight: null,
  children: [],
  onChangeOrder: function onChangeOrder(ids) {
    return console.info(ids);
  }
});
 // export { default as LegendItemTimeline } from './components/legend-item-timeline';

export default Legend;
//# sourceMappingURL=index.esm.js.map
