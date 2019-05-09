import { StyleSheet } from 'react-native';

export const flex = StyleSheet.create({
  flex0: {
    flex: 0,
  },
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
  alignRight: {
    justifyContent: 'flex-end',
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
