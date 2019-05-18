/* eslint import/prefer-default-export: 0 */
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const Wrapper = styled.div`
  position: relative;
  min-height: 60px;
`;

export const StyledImage = styled.img`
  display: block;
  transition: opacity 200ms ease-out;
  opacity: 0;
  width: 100%;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
  `};
`;

StyledImage.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
