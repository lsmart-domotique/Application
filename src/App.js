import React from 'react';
import { Root, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components/index';
import platform from '../native-base-theme/variables/platform';
import Router from './Router';
import './config/firebase';

const App = () => (
  <StyleProvider style={getTheme(platform)}>
    <Root>
      <Router />
    </Root>
  </StyleProvider>
);

export default App;
