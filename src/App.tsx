import { useState } from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

function App() {

  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <GlobalStyle />
    </>
  )
}

export default App
