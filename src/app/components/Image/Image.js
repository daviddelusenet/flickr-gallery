import PropTypes from 'prop-types';
import React from 'react';
import { StyledImage } from './Image.sc';

export default class Image extends React.PureComponent {
  static propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    alt: '',
  };

  state = {
    isLoaded: false,
  };

  handleLoad = () => {
    this.setState({
      isLoaded: true,
    });
  };

  render() {
    const { alt, src } = this.props;
    const { isLoaded } = this.state;

    return (
      <StyledImage
        alt={alt}
        isVisible={isLoaded}
        onLoad={this.handleLoad}
        src={src}
      />
    );
  }
}
