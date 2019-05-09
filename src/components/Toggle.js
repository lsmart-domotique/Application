import React from 'react';
import { View } from 'react-native';
import {
  Text, Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import { toggle } from '../styles/toggle.style';

const Toggle = ({ isOn }) => (
  <View style={[toggle.body, isOn && toggle.active]}>
    <Text style={[toggle.text, toggle.textRight, isOn && toggle.textRightActive]}>ON</Text>
    <Icon type="FontAwesome" name="check-circle" style={[toggle.icon, isOn && toggle.iconActive]} />
    <Text style={[toggle.text, toggle.textLeft, !isOn && toggle.textLeftActive]}>OFF</Text>
  </View>
);

export default Toggle;

Toggle.propTypes = {
  isOn: PropTypes.bool,
};

Toggle.defaultProps = {
  isOn: false,
};