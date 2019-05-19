import styled, { css } from 'styled-components';

export const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
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

  ${({ isActive }) => isActive && css`
    font-weight: bold;
  `};

  &:last-of-type {
    margin: 0;
  }
`;
