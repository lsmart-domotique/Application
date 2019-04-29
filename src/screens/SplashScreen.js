import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

class SplashScreen extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.navigate('Home');
      // navigation.navigate('LoginOnboarding');
    }, 1000);
  }

  render() {
    return (
      <View>
        <Text>SplashScreen...</Text>
      </View>
    );
  }
}

export default withNavigation(SplashScreen);

SplashScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
