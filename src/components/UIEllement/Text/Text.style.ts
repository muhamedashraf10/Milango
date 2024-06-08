import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import unit from '../../../styles/units';

export default StyleSheet.create({
  default: {
    textAlign: 'left',
    fontFamily: 'HelveticaNeueLTArabic-Roman',
  },
  bold: {
    fontFamily: 'HelveticaNeueLTArabic-Bold',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  black: {
    color: colors.black,
  },
  white: {
    color: 'white',
  },
  gray: {
    color: colors.gray,
  },
  danger: {
    color: colors.danger,
  },
  primary: {
    color: colors.primary,
  },
  secondary: {
    color: colors.secondary,
  },
  primaryDark: {
    color: colors.primaryDark,
  },
  bodyDark: {
    color: colors.text,
  },
  bodyLight: {
    color: colors.textLight,
  },
  darkGray: {
    color: colors.darkGray,
  },
  lightGray: {
    color: colors.textDark,
  },
  coolGreen: {
    color: colors.coolGreen,
  },
  success: {
    color: colors.success,
  },
  smoke: {
    color: colors.smoke,
  },
  orange: {
    color: colors.orange,
  },
  xsmall: {
    fontSize: 11 * unit,
    lineHeight: 18 * unit,
  },
  small: {
    fontSize: 13 * unit,
    lineHeight: 20 * unit,
  },
  normal: {
    fontSize: 14 * unit,
    lineHeight: 24 * unit,
  },
  medium: {
    fontSize: 16 * unit,
    lineHeight: 28 * unit,
  },
  large: {
    fontSize: 18 * unit,
    lineHeight: 32 * unit,
  },
  xlarge: {
    fontSize: 21 * unit,
    lineHeight: 36 * unit,
  },
  xxlarge: {
    fontSize: 24 * unit,
    lineHeight: 40 * unit,
  },
  xxxlarge: {
    fontSize: 28 * unit,
    lineHeight: 44 * unit,
  },
  xxxxlarge: {
    fontSize: 32 * unit,
    lineHeight: 50 * unit,
  },
});
