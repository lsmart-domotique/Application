import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import AuthOnboardingScreen from './screens/Authentication/AuthOnboardingScreen';
import SplashScreen from './screens/SplashScreen';
import Drawer from './components/Drawer';
import StyleguideScreen from './screens/Styleguide/StyleguideScreen';

export const routes = [
  {
    name: 'Accueil',
    route: 'Home',
  },
  {
    name: 'Styleguide',
    route: 'Styleguide',
  },
];

const AuthenticatedStack = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Styleguide: { screen: StyleguideScreen },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  contentComponent: Drawer,
});

const UnauthenticatedStack = createStackNavigator({
  LoginOnboarding: { screen: AuthOnboardingScreen },
}, {
  initialRouteName: 'LoginOnboarding',
  headerMode: 'none',
});

const AppStack = createSwitchNavigator({
  AuthLoadingScreen: { screen: SplashScreen },
  App: { screen: AuthenticatedStack },
  Auth: { screen: UnauthenticatedStack },
}, {
  initialRouteName: 'AuthLoadingScreen',
  headerMode: 'none',
});

const RootStack = createStackNavigator(
  {
    AppStack: { screen: AppStack },
  },
  {
    initialRouteName: 'AppStack',
    mode: 'modal',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

const Router = () => (
  <AppContainer />
);

export default Router;
