import { StyleSheet } from 'react-native';

export const flex = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  full: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalAlignCenter: {
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
