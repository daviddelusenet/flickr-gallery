export const IMAGE_SIZES = {
  240: 'm',
  320: 'n',
  500: '-',
  640: 'z',
  800: 'c',
};

export default ({
  farm,
  id,
  secret,
  server,
  size = IMAGE_SIZES[500],
} = {}) => (
  `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}${size === IMAGE_SIZES[500] ? '' : `_${size}`}.jpg`
);
