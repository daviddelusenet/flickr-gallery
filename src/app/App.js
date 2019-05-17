import Gallery from './components/Gallery/Gallery';
import getGroupPhotos from './utils/getGroupPhotos';
import GlobalStyle from './styles/base';
import { GROUP_ID } from './utils/consts';
import { hot } from 'react-hot-loader';
import React from 'react';

class FlickrGalleryApp extends React.PureComponent {
  state = {
    page: 0,
    photos: [],
  };

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
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
  };

  render() {
    const { photos } = this.state;

    return (
      <>
        <GlobalStyle />
        <Gallery onReachBottom={this.getPhotos} photos={photos} />
      </>
    );
  }
}

export default hot(module)(FlickrGalleryApp);
