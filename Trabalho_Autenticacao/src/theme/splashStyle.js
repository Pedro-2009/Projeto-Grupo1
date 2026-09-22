import { StyleSheet } from 'react-native';

import {
  colors,
  radius,
} from './style';

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    width: 180,
    height: 180,
    borderRadius: radius.xl,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
});

export default splashStyles;