import { FLICKR_URL } from './consts';

export default (owner, id) => (
  `${FLICKR_URL}/${owner}/${id}`
);
