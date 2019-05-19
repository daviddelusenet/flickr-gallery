import {
  BLACK,
  HELVETICA,
  WHITE,
} from '../../styles/consts';
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

export const Overlay = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 200ms ease-out;
  opacity: 0;
  z-index: 1;
  background-color: ${WHITE};
  padding: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const ImageWrapper = styled.a`
  position: relative;
  flex: 0 1 auto;
  margin: 0 10px 20px;
  color: ${BLACK};

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

  &:hover {
    ${Overlay} {
      opacity: 0.8;
    }
  }
`;

ImageWrapper.propTypes = {
  size: PropTypes.oneOf(Object.values(IMAGE_WRAPPER_SIZES)).isRequired,
};

export const Title = styled.p`
  text-align: center;
  font-size: 16px;
  font-style: italic;
`;

export const Divider = styled.div`
  margin: 16px 0;
  background-color: ${BLACK};
  width: 32px;
  height: 1px;
`;

export const CTA = styled.p`
  text-transform: uppercase;
  font-family: ${HELVETICA};
  font-size: 12px;
  font-weight: bold;
`;
