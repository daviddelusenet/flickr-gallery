import { ENDPOINT, KEY } from './consts';

const getRecentPhotos = () => (
  fetch(`${ENDPOINT}flickr.photos.getRecent&api_key=${KEY}&format=json&nojsoncallback=1`)
    .then(res => res.json().photos)
);

export default getRecentPhotos;
