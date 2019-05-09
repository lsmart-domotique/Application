import { StyleSheet } from 'react-native';
import platform from '../../native-base-theme/variables/lsmart';

export const toggle = StyleSheet.create({
  body: {
    position: 'relative',
    width: 60,
    height: 30,
    borderRadius: 30,
    backgroundColor: platform.brandDisabled,
  },
  text: {
    position: 'absolute',
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    top: 7,
  },
  textLeft: {
    left: 12,
    opacity: 0,
  },
  textLeftActive: {
    opacity: 1,
  },
  textRight: {
    right: 12,
    opacity: 0,
  },
  textRightActive: {
    opacity: 1,
  },
  icon: {
    position: 'absolute',
    fontSize: 19,
    color: '#fff',
    top: 5,
    right: 6,
  },
  iconActive: {
    left: 6,
  },
  active: {
    backgroundColor: platform.brandPrimary,
  },
});
