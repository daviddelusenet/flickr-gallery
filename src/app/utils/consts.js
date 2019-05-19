export const ENDPOINT = 'https://api.flickr.com/services/rest?method=';
export const FLICKR_URL = 'https://flickr.com/photos';

export const GROUP_IDS = {
  '16978849%40N00': 'Black and White',
  '34427469792@N01': 'FlickrCentral',
  '42097308@N00': 'Less Is More',
  '71332142@N00': 'Catchy Colors',
};

export const INITIAL_STATE = {
  groupID: Object.keys(GROUP_IDS)[0],
  page: 0,
  pages: 0,
  photos: [],
};

export const KEY = 'e088cb8cfa2eeece025ec0e2b07a00ec';
export const SECRET = 'fe6b06d913261732';
