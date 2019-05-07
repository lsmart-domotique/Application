import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

class AuthOnboardingScreen extends Component {
  state = {

  };


  render() {
    return (
      <View>
        <Text>You need to authenticate</Text>
      </View>
    );
  }
}

export default withNavigation(AuthOnboardingScreen);

AuthOnboardingScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
};
