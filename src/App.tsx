import React from 'react';
import { MainContent } from './components/MainContent';
import { Body } from './styles';
import { GlobalStyle } from './global';

function App() {
  return (
    <>
      <Body>
        <GlobalStyle />
        <MainContent />
      </Body>
    </>
  );
}

export default App;
