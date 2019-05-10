import { StyleSheet } from 'react-native';
import platform from '../../native-base-theme/variables/lsmart';

export const slider = StyleSheet.create({
  containerStyle: {
    height: 50,
  },
  selectedStyle: {
    backgroundColor: platform.brandPrimary,
  },
  trackStyle: {
    marginTop: -3,
    borderRadius: 3,
    height: 6,
    backgroundColor: platform.brandDisabled,
  },
});
