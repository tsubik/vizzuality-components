import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from 'components/icon';
import './styles.scss';

class ZoomControl extends PureComponent {
  static propTypes = {
    map: PropTypes.object.isRequired,
    className: PropTypes.string,
    customClass: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    customClass: null,
  };

  state = { zoom: this.props.map.getZoom() };

  componentWillMount() {
    this.props.map.on('zoomend', this.getZoom);
  }

  componentWillUnmount() {
    this.props.map.off('zoomend', this.getZoom);
  }

  getZoom = () => {
    this.setState({ zoom: this.props.map.getZoom() });
  };

  increaseZoom = () => {
    const zoom = this.props.map.getZoom();
    const maxZoom = this.props.map.getMaxZoom();

    this.setState({ zoom: zoom === maxZoom ? zoom : zoom + 1 }, () => {
      this.props.map.setZoom(this.state.zoom);
    });
  };

  decreaseZoom = () => {
    const zoom = this.props.map.getZoom();
    const minZoom = this.props.map.getMinZoom();

    this.setState({ zoom: zoom === minZoom ? zoom : zoom - 1 }, () => {
      this.props.map.setZoom(this.state.zoom);
    });
  };

  render() {
    const { className, customClass } = this.props;
    const { zoom } = this.state;
    const maxZoom = this.props.map.getMaxZoom();
    const minZoom = this.props.map.getMinZoom();

    const componentClass = classnames('c-zoom-control', { [className]: !!className });
    const externalClass = classnames({ [customClass]: !!customClass });
    const zoomInClass = classnames('zoom-control-btn', { '-disabled': zoom === maxZoom });
    const zoomOutClass = classnames('zoom-control-btn', { '-disabled': zoom === minZoom });

    return (
      <div styleName={componentClass} className={externalClass}>
        <button
          styleName={zoomInClass}
          type="button"
          disabled={zoom === maxZoom}
          onClick={this.increaseZoom}
        >
          <Icon name="icon-plus" />
        </button>
        <button
          styleName={zoomOutClass}
          type="button"
          disabled={zoom === minZoom}
          onClick={this.decreaseZoom}
        >
          <Icon name="icon-minus" />
        </button>
      </div>
    );
  }
}

export default ZoomControl;
