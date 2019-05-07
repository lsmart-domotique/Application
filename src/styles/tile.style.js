import { StyleSheet } from 'react-native';
import platform from "../../native-base-theme/variables/platform";

export const tile = StyleSheet.create({
  card: {
    backgroundColor: 'red',
  },
  body: {
    alignItems: 'center',
    display: 'flex',
    paddingTop: 12,
    paddingBottom: 12,
  },
  thumbnailContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 120,
    backgroundColor: 'rgba(78,180,249,0.05)',
  },
  thumbnailContainer1: {
    width: 70,
    height: 70,
    marginBottom: 12,
  },
  thumbnailContainer2: {
    width: 55,
    height: 55,
  },
  thumbnailContainer3: {
    width: 35,
    height: 35,
  },
  alert: {
    position: 'absolute',
    top: 0,
    left: -5,
    fontSize: 16,
    color: platform.brandDanger,
  },
  text: {
    opacity: 0.5,
    textAlign: 'center',
  },
});
