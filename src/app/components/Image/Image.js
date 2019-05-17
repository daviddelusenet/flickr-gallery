import PropTypes from 'prop-types';
import React from 'react';
import { StyledImage } from './Image.sc';

const Image = ({ alt, src }) => (
  <StyledImage alt={alt} src={src} />
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  alt: '',
};

export default Image;
