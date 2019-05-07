import React from 'react';
import { Root, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components/index';
import Router from './Router';
import './config/firebase';
import lsmart from '../native-base-theme/variables/lsmart';

const App = () => (
  <StyleProvider style={getTheme(lsmart)}>
    <Root>
      <Router />
    </Root>
  </StyleProvider>
);

export default App;
