import { inherits as _inherits, createSuper as _createSuper, classCallCheck as _classCallCheck, defineProperty as _defineProperty, assertThisInitialized as _assertThisInitialized, createClass as _createClass } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../../icon/index.esm.js';

var _styleModuleImportMap = {
  "./styles.scss": {
    "c-zoom-control": "vizzuality__c-zoom-control",
    "zoom-control-btn": "vizzuality__zoom-control-btn",
    "-disabled": "vizzuality__-disabled"
  }
};

var ZoomControl = /*#__PURE__*/function (_PureComponent) {
  _inherits(ZoomControl, _PureComponent);

  var _super = _createSuper(ZoomControl);

  function ZoomControl() {
    var _this;

    _classCallCheck(this, ZoomControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      zoom: _this.props.map.getZoom()
    });

    _defineProperty(_assertThisInitialized(_this), "getZoom", function () {
      _this.setState({
        zoom: _this.props.map.getZoom()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "increaseZoom", function () {
      var zoom = _this.props.map.getZoom();

      var maxZoom = _this.props.map.getMaxZoom();

      _this.setState({
        zoom: zoom === maxZoom ? zoom : zoom + 1
      }, function () {
        _this.props.map.setZoom(_this.state.zoom);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "decreaseZoom", function () {
      var zoom = _this.props.map.getZoom();

      var minZoom = _this.props.map.getMinZoom();

      _this.setState({
        zoom: zoom === minZoom ? zoom : zoom - 1
      }, function () {
        _this.props.map.setZoom(_this.state.zoom);
      });
    });

    return _this;
  }

  _createClass(ZoomControl, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.map.on('zoomend', this.getZoom);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.map.off('zoomend', this.getZoom);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          customClass = _this$props.customClass;
      var zoom = this.state.zoom;
      var maxZoom = this.props.map.getMaxZoom();
      var minZoom = this.props.map.getMinZoom();
      var componentClass = classnames('c-zoom-control', _defineProperty({}, className, !!className));
      var externalClass = classnames(_defineProperty({}, customClass, !!customClass));
      var zoomInClass = classnames('zoom-control-btn', {
        '-disabled': zoom === maxZoom
      });
      var zoomOutClass = classnames('zoom-control-btn', {
        '-disabled': zoom === minZoom
      });
      return /*#__PURE__*/React.createElement("div", {
        className: (externalClass ? externalClass + " " : "") + _getClassName(componentClass, _styleModuleImportMap)
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        disabled: zoom === maxZoom,
        onClick: this.increaseZoom,
        className: _getClassName(zoomInClass, _styleModuleImportMap)
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "icon-plus"
      })), /*#__PURE__*/React.createElement("button", {
        type: "button",
        disabled: zoom === minZoom,
        onClick: this.decreaseZoom,
        className: _getClassName(zoomOutClass, _styleModuleImportMap)
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "icon-minus"
      })));
    }
  }]);

  return ZoomControl;
}(PureComponent);

_defineProperty(ZoomControl, "propTypes", {
  map: PropTypes.object.isRequired,
  className: PropTypes.string,
  customClass: PropTypes.string
});

_defineProperty(ZoomControl, "defaultProps", {
  className: null,
  customClass: null
});

export default ZoomControl;
//# sourceMappingURL=index.esm.js.map
