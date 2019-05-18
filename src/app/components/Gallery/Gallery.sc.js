import styled, { css } from 'styled-components';
import { IMAGE_WRAPPER_SIZES } from './Gallery.consts';
import PropTypes from 'prop-types';

export const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

export const ImageWrapper = styled.a`
  flex: 0 1 auto;
  margin: 0 10px 20px;

  ${({ size }) => size === IMAGE_WRAPPER_SIZES.SMALL && css`
    width: 200px;
  `};

  ${({ size }) => size === IMAGE_WRAPPER_SIZES.MEDIUM && css`
    width: 280px;
  `};

  ${({ size }) => size === IMAGE_WRAPPER_SIZES.LARGE && css`
    width: 360px;
  `};

  ${({ size }) => size === IMAGE_WRAPPER_SIZES.XLARGE && css`
    width: 420px;
  `};
`;

ImageWrapper.propTypes = {
  size: PropTypes.oneOf(Object.values(IMAGE_WRAPPER_SIZES)).isRequired,
};
