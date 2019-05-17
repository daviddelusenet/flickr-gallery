import formatPhotoURL from './utils/formatPhotoURL';
import getGroupPhotos from './utils/getGroupPhotos';
import GlobalStyle from './styles/base';
import { GROUP_ID } from './utils/consts';
import { hot } from 'react-hot-loader';
import Image from './components/Image/Image';
import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 20px;
`;

class FlickrGalleryApp extends React.PureComponent {
  galleryBottomRef = React.createRef();

  state = {
    page: 0,
    photos: [],
  };

  componentDidMount() {
    this.getPhotos();
    this.createObserver();
  }

  getPhotos() {
    const { page } = this.state;

    getGroupPhotos(GROUP_ID, page + 1)
      .then(({ photos }) => {
        this.setState(prevState => ({
          page: photos.page,
          photos: [
            ...prevState.photos,
            ...photos.photo,
          ],
        }));
      });
  }

  handleIntersect = (entries) => {
    const { photos } = this.state;
    const [observer] = entries;

    // Don't do anything when there are no photo's loaded yet
    if (photos.length === 0) {
      return;
    }

    if (observer.isIntersecting) {
      this.getPhotos();
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
    const { photos } = this.state;
    console.log(photos);

    return (
      <StyledApp>
        <GlobalStyle />
        {photos && photos.length > 0 && photos.map(({
          id,
          farm,
          secret,
          server,
        }) => (
          <Image alt={id} key={id} src={formatPhotoURL(farm, id, secret, server)} />
        ))}
        <div ref={this.galleryBottomRef} />
      </StyledApp>
    );
  }
}

export default hot(module)(FlickrGalleryApp);
