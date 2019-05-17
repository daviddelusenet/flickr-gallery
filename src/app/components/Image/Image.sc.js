/* eslint import/prefer-default-export: 0 */
import styled, { css } from 'styled-components';

export const StyledImage = styled.img`
  display: block;
  transition: opacity 200ms ease-out;
  opacity: 0;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
  `};
`;
