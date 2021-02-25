import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'views/Home';
import About from 'views/About';
import Navbar from 'components/Navbar';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <AppContainer>
        <Navbar />

        <MainView>
          <Switch>
            <Route exact={true} path='/' component={Home} />

            <Route path='/about' component={About} />
          </Switch>
        </MainView>
      </AppContainer>
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    src: url('/public/fonts/Roboto-Regular-500.woff') format('woff');
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 64px auto;
  width: 100vw;
  height: 100vh;
  contain: layout;
  overflow-y: auto;
  overflow-x: hidden;
`;

const MainView = styled.main`
  grid-area: content;
  max-width: 100%;
  background-color: #fafafa;  
  padding: 24px;

  @media (max-width: 486px) {
    padding: 14px;
  }
`;

export default App;
