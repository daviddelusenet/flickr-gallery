import Gallery from './components/Gallery/Gallery';
import getGroupPhotos from './utils/getGroupPhotos';
import GlobalStyle from './styles/base';
import { hot } from 'react-hot-loader';
import { INITIAL_STATE } from './utils/consts';
import Menu from './components/Menu/Menu';
import React from 'react';

class FlickrGalleryApp extends React.PureComponent {
  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    this.getPhotos(true);
  }

  componentDidUpdate(prevProps, prevState) {
    const { groupID } = this.state;

    if (groupID !== prevState.groupID) {
      this.getPhotos(true);
    }
  }

  getPhotos = (firstRequest = false) => {
    const { groupID, page, pages } = this.state;

    if (firstRequest || page < pages) {
      getGroupPhotos(groupID, page + 1)
        .then(({ photos }) => {
          this.setState(prevState => ({
            page: photos.page,
            pages: photos.pages,
            photos: [
              ...prevState.photos,
              ...photos.photo,
            ],
          }));
        });
    }
  };

  handleGroupSelect = (groupID) => {
    this.setState({
      ...INITIAL_STATE,
      groupID,
    });
  };

  render() {
    const { groupID, photos } = this.state;

    return (
      <>
        <GlobalStyle />
        <Menu activeGroupID={groupID} onGroupSelect={this.handleGroupSelect} />
        <Gallery onReachBottom={this.getPhotos} photos={photos} />
      </>
    );
  }
}

export default hot(module)(FlickrGalleryApp);
