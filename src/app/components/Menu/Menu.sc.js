import styled, { css } from 'styled-components';
import { HELVETICA } from '../../styles/consts';
import media from 'styled-media-query';

export const StyledMenu = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 16px 8px;
  width: 100%;

  ${media.greaterThan('medium')`
    padding: 20px;
  `}
`;

export const Button = styled.button`
  appearance: none;
  display: block;
  margin: 0 12px;
  outline: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  line-height: 14px;
  color: black;
  font-family: ${HELVETICA};
  font-size: 10px;

  ${media.greaterThan('medium')`
    line-height: 18px;
    font-size: 12px;
  `}

  ${media.greaterThan('large')`
    margin: 0 24px;
  `}

  ${({ isActive }) => isActive && css`
    font-weight: bold;
  `};
`;
