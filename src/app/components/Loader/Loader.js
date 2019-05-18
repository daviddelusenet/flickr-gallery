import PropTypes from 'prop-types';
import React from 'react';
import { StyledLoader } from './Loader.sc';

const Loader = ({ size }) => (
  <StyledLoader isMedium={size === Loader.sizes.medium} isSmall={size === Loader.sizes.small} />
);

Loader.sizes = {
  medium: 'medium',
  small: 'small',
};

Loader.propTypes = {
  size: PropTypes.oneOf(Object.values(Loader.sizes)),
};

Loader.defaultProps = {
  size: Loader.sizes.medium,
};

export default Loader;
