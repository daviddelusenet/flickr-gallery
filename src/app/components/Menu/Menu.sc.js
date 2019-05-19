import styled, { css } from 'styled-components';
import { HELVETICA } from '../../styles/consts';

export const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
`;

export const Button = styled.button`
  appearance: none;
  display: block;
  margin: 0 0 12px;
  outline: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  color: black;
  font-family: ${HELVETICA};
  font-size: 12px;

  ${({ isActive }) => isActive && css`
    font-weight: bold;
  `};

  &:last-of-type {
    margin: 0;
  }
`;
