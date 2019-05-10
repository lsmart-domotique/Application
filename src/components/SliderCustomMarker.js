import React from 'react';
import { View } from 'native-base';
import platform from '../../native-base-theme/variables/lsmart';

const SliderCustomMarker = () => (
  <View
    style={{
      width: 22,
      height: 22,
      backgroundColor: '#fff',
      borderWidth: 4,
      borderColor: platform.brandPrimary,
      borderRadius: 25,
    }}
  />
);

export default SliderCustomMarker;
