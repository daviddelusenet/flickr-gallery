import PropTypes from 'prop-types';
import React from 'react';
import { SIZES } from './Loader.consts';
import { StyledLoader } from './Loader.sc';

const Loader = ({ size }) => (
  <StyledLoader size={size} />
);

Loader.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZES)),
};

Loader.defaultProps = {
  size: SIZES.MEDIUM,
};

export default Loader;
