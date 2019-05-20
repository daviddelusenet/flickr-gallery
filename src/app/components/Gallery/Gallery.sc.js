import {
  BLACK,
  HELVETICA,
  WHITE,
} from '../../styles/consts';
import styled, { css } from 'styled-components';
import { IMAGE_WRAPPER_SIZES } from './Gallery.consts';
import media from 'styled-media-query';
import PropTypes from 'prop-types';

export const StyledGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 66px 10px 40px;

  ${media.greaterThan('medium')`
    padding: 78px 30px 40px;
  `}

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
  width: 100%;
  color: ${BLACK};

  ${({ size }) => size === IMAGE_WRAPPER_SIZES.SMALL && css`
    ${media.between('medium', 'large')`
      width: 200px;
    `}

    ${media.greaterThan('large')`
      width: 240px;
    `}
  `};

  ${({ size }) => size === IMAGE_WRAPPER_SIZES.MEDIUM && css`
    ${media.between('medium', 'large')`
      width: 280px;
    `}

    ${media.greaterThan('large')`
      width: 320px;
    `}
  `};

  ${({ size }) => size === IMAGE_WRAPPER_SIZES.LARGE && css`
    ${media.between('medium', 'large')`
      width: 360px;
    `}

    ${media.greaterThan('large')`
      width: 400px;
    `}
  `};

  ${({ size }) => size === IMAGE_WRAPPER_SIZES.XLARGE && css`
    ${media.between('medium', 'large')`
      width: 420px;
    `}

    ${media.greaterThan('large')`
      width: 460px;
    `}
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
