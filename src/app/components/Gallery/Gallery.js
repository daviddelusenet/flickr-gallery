import {
  CTA,
  Divider,
  ImageWrapper,
  Overlay,
  StyledGallery,
  Title,
} from './Gallery.sc';

import getFlickrURL from '../../utils/getFlickrURL';
import getImageURL from '../../utils/getImageURL';
import getRandomValueFromArray from '../../utils/getRandomValueFromArray';
import Image from '../Image/Image';
import { IMAGE_WRAPPER_SIZES } from './Gallery.consts';
import PropTypes from 'prop-types';
import React from 'react';

export default class Gallery extends React.PureComponent {
  galleryBottomRef = React.createRef();

  static propTypes = {
    onReachBottom: PropTypes.func.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
      farm: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      secret: PropTypes.string.isRequired,
      server: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
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
          owner,
          secret,
          server,
          title,
        }) => (
          <ImageWrapper
            href={getFlickrURL(owner, id)}
            key={id}
            size={getRandomValueFromArray(Object.values(IMAGE_WRAPPER_SIZES))}
            target="_blank"
          >
            <Overlay>
              <Title>
                {title}
              </Title>
              <Divider />
              <CTA>
                {'Visit website'}
              </CTA>
            </Overlay>
            <Image
              alt={id}
              src={getImageURL({
                farm,
                id,
                secret,
                server,
              })}
            />
          </ImageWrapper>
        ))}
        <div ref={this.galleryBottomRef} />
      </StyledGallery>
    );
  }
}
