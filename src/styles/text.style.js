import { StyleSheet } from 'react-native';
import platform from '../../native-base-theme/variables/platform';

export const text = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  underline: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  center: {
    textAlign: 'center',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  small: {
    fontSize: 14,
  },
  error: {
    fontSize: 14,
    color: platform.brandDanger,
    marginBottom: 10,
  },
  textDanger: {
    color: platform.brandDanger,
  },
  fontSize30: {
    fontSize: 30,
  },
  fontSize40: {
    fontSize: 40,
  },
  fontSize15: {
    fontSize: 15,
  },
  fontSize16: {
    fontSize: 16,
  },
  fontSize10: {
    fontSize: 10,
  },
  fontSize20: {
    fontSize: 20,
  },
  textOrange: {
    color: '#DD572E',
  },
});
