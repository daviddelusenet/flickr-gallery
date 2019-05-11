import GlobalStyle from './styles/base';
import { hot } from 'react-hot-loader';
import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
`;

const FlickrGalleryApp = () => (
  <StyledApp>
    <GlobalStyle />
    <p>{'Hello world'}</p>
  </StyledApp>
);

export default hot(module)(FlickrGalleryApp);
