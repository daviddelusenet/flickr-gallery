import { ENDPOINT, KEY } from './consts';

const getGroupPhotos = (groupID, page) => (
  fetch(
    `${ENDPOINT}flickr.groups.pools.getPhotos&api_key=${KEY}&group_id=${groupID}&page=${page}&format=json&nojsoncallback=1`,
  )
    .then(res => res.json())
);

export default getGroupPhotos;
