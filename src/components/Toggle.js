import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Text, Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import { toggle } from '../styles/toggle.style';

const Toggle = ({
  isOn,
  onToggle,
}) => (
  <TouchableOpacity
    onPress={onToggle}
    style={[toggle.body, isOn && toggle.active]}
  >
    <Text style={[toggle.text, toggle.textRight, isOn && toggle.textRightActive]}>
      ON
    </Text>
    <Icon
      type="FontAwesome"
      name={isOn ? 'check-circle' : 'times-circle'}
      style={[toggle.icon, isOn && toggle.iconActive]}
    />
    <Text style={[toggle.text, toggle.textLeft, !isOn && toggle.textLeftActive]}>
      OFF
    </Text>
  </TouchableOpacity>
);

export default Toggle;

Toggle.propTypes = {
  isOn: PropTypes.bool,
  onToggle: PropTypes.func,
};

Toggle.defaultProps = {
  isOn: false,
  onToggle: null,
};
