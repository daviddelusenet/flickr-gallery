/* eslint import/prefer-default-export: 0 */
import styled, { css } from 'styled-components';

export const StyledImage = styled.img`
  display: block;
  flex: 0 1 auto;
  transition: opacity 200ms ease-out;
  opacity: 0;
  margin: 0 10px 20px;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
  `};
`;
