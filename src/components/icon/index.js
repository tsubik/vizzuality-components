import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

class Icon extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    name: '',
    className: '',
    style: {},
  };

  render() {
    const { name, className, style } = this.props;

    const classNames = classnames({ [className]: !!className });

    return (
      <svg styleName={`c-icon ${classNames}`} style={style}>
        <use xlinkHref={`#${name}`} />
      </svg>
    );
  }
}

export default Icon;
