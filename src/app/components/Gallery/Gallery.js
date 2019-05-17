import { ImageWrapper, StyledGallery } from './Gallery.sc';

import getImageURL from '../../utils/getImageURL';
import Image from '../Image/Image';
import PropTypes from 'prop-types';
import React from 'react';

export default class Gallery extends React.PureComponent {
  galleryBottomRef = React.createRef();

  static propTypes = {
    onReachBottom: PropTypes.func.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
      farm: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      secret: PropTypes.string.isRequired,
      server: PropTypes.string.isRequired,
    })).isRequired,
  };

  componentDidMount() {
    this.createObserver();
  }

  handleIntersect = (entries) => {
    const { onReachBottom, photos } = this.props;
    const [observer] = entries;

    // Don't do anything when there are no photos loaded yet
    if (photos.length === 0) {
      return;
    }

    if (observer.isIntersecting) {
      onReachBottom();
    }
  };

  createObserver() {
    const observer = new IntersectionObserver(this.handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: [0],
    });

    observer.observe(this.galleryBottomRef.current);
  }

  render() {
    const { photos } = this.props;

    return (
      <StyledGallery>
        {photos.length > 0 && photos.map(({
          farm,
          id,
          secret,
          server,
        }) => (
          <ImageWrapper key={id}>
            <Image alt={id} src={getImageURL(farm, id, secret, server)} />
          </ImageWrapper>
        ))}
        <div ref={this.galleryBottomRef} />
      </StyledGallery>
    );
  }
}
