import { StyleSheet } from 'react-native';

export const layout = StyleSheet.create({
  body: {
    padding: 15,
  },
  grid: {
    alignItems: 'stretch',
    flexWrap: 'wrap',
    marginRight: -5,
    marginLeft: -5,
    marginTop: -5,
  },
  col1in2: {
    alignSelf: 'stretch',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 0,
    width: '50%',
  },
});
