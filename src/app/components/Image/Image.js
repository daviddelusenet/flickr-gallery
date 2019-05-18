import { LoaderWrapper, StyledImage, Wrapper } from './Image.sc';

import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import React from 'react';

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
      <Wrapper>
        <StyledImage
          alt={alt}
          isVisible={isLoaded}
          onLoad={this.handleLoad}
          src={src}
        />
        {!isLoaded && (
          <LoaderWrapper>
            <Loader size={Loader.sizes.small} />
          </LoaderWrapper>
        )}
      </Wrapper>
    );
  }
}
