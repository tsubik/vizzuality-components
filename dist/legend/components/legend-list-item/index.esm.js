import { objectWithoutProperties as _objectWithoutProperties, extends as _extends, inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, createClass as _createClass, defineProperty as _defineProperty, objectSpread2 as _objectSpread2 } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SortableElement } from 'react-sortable-hoc';
import LegendItemDrag from '../legend-item-drag/index.esm.js';

var _styleModuleImportMap = {
  "./styles.scss": {
    "c-legend-item": "vizzuality__c-legend-item",
    "legend-item-container": "vizzuality__legend-item-container",
    "-sortable": "vizzuality__-sortable",
    "legend-info": "vizzuality__legend-info",
    "legend-item-header": "vizzuality__legend-item-header",
    "-dark": "vizzuality__-dark",
    "category": "vizzuality__category",
    "-sort": "vizzuality__-sort"
  }
};

var LegendListItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(LegendListItem, _PureComponent);

  var _super = _createSuper(LegendListItem);

  function LegendListItem() {
    _classCallCheck(this, LegendListItem);

    return _super.apply(this, arguments);
  }

  _createClass(LegendListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          layers = _this$props.layers,
          sortable = _this$props.sortable,
          children = _this$props.children,
          toolbar = _this$props.toolbar,
          title = _this$props.title,
          props = _objectWithoutProperties(_this$props, ["layers", "sortable", "children", "toolbar", "title"]);

      var activeLayer = layers.find(function (l) {
        return l.active;
      }) || layers[0];
      return /*#__PURE__*/React.createElement("li", {
        className: _getClassName(classnames({
          'c-legend-item': true,
          '-sortable': sortable
        }), _styleModuleImportMap)
      }, /*#__PURE__*/React.createElement("div", {
        className: _getClassName(classnames({
          'legend-item-container': true,
          '-sortable': sortable
        }), _styleModuleImportMap)
      }, sortable && /*#__PURE__*/React.createElement(LegendItemDrag, null), /*#__PURE__*/React.createElement("div", {
        className: "vizzuality__legend-info"
      }, /*#__PURE__*/React.createElement("header", {
        className: "vizzuality__legend-item-header"
      }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.isValidElement(title) && typeof title.type !== 'string' ? /*#__PURE__*/React.cloneElement(title, _objectSpread2(_objectSpread2({}, props), {}, {
        layers: layers,
        activeLayer: activeLayer
      })) : activeLayer && activeLayer.name), /*#__PURE__*/React.isValidElement(toolbar) && typeof toolbar.type !== 'string' && /*#__PURE__*/React.cloneElement(toolbar, _objectSpread2(_objectSpread2({}, props), {}, {
        layers: layers,
        activeLayer: activeLayer
      }))), React.Children.map(children, function (child) {
        return /*#__PURE__*/React.isValidElement(child) && typeof child.type !== 'string' ? /*#__PURE__*/React.cloneElement(child, {
          layers: layers,
          activeLayer: activeLayer
        }) : child;
      }))));
    }
  }]);

  return LegendListItem;
}(PureComponent);

_defineProperty(LegendListItem, "propTypes", {
  dataset: PropTypes.string,
  layers: PropTypes.arrayOf(PropTypes.shape({})),
  sortable: PropTypes.bool,
  children: PropTypes.node,
  toolbar: PropTypes.node,
  title: PropTypes.node
});

_defineProperty(LegendListItem, "defaultProps", {
  dataset: '',
  layers: [],
  sortable: true,
  children: [],
  toolbar: [],
  title: []
});

var index = SortableElement(function (_ref) {
  var layerGroup = _ref.layerGroup,
      props = _objectWithoutProperties(_ref, ["layerGroup"]);

  return /*#__PURE__*/React.createElement(LegendListItem, _extends({
    key: props.dataset
  }, layerGroup, props));
});

export default index;
//# sourceMappingURL=index.esm.js.map
