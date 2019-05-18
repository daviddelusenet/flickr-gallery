import { LOADER_SIZES } from './Loader.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledLoader } from './Loader.sc';

const Loader = ({ size }) => (
  <StyledLoader size={size} />
);

Loader.propTypes = {
  size: PropTypes.oneOf(Object.values(LOADER_SIZES)),
};

Loader.defaultProps = {
  size: LOADER_SIZES.MEDIUM,
};

export default Loader;
