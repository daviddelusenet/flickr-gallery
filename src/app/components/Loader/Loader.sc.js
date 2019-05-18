/* eslint import/prefer-default-export: 0 */
import styled, { css, keyframes } from 'styled-components';
import { SILVER } from '../../styles/consts';
import { SIZES } from './Loader.consts';

const LoaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  border: 4px solid ${SILVER};
  border-radius: 100%;
  border-bottom-color: transparent;
  animation: ${LoaderAnimation} 0.75s linear infinite;

  ${({ size }) => size === SIZES.SMALL && css`
    width: 48px;
    height: 48px;
  `};

  ${({ size }) => size === SIZES.MEDIUM && css`
    width: 64px;
    height: 64px;
  `};
`;
