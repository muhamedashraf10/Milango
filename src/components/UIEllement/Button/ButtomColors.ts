import colors from '../../../styles/colors';

const buttonColors: any = {
  gradient: {
    primary: {
      colors: [colors.secondary, colors.primary],
      textColor: 'white',
      borderColor: colors.white,
    },
    primaryDark: {
      colors: [colors.primary, colors.primaryDark],
      textColor: 'white',
      borderColor: colors.white,
    },
    white: {
      colors: ['white', 'white'],
      textColor: 'danger',
      borderColor: colors.primary,
    },
    danger: {
      colors: [colors.danger, colors.danger],
      textColor: 'white',
      borderColor: colors.white,
    },
    disabled: {
      colors: [colors.gray, colors.gray],
      textColor: 'white',
      borderColor: colors.white,
    },
  },
  normal: {
    primary: {
      colors: [colors.primary, colors.primary],
      textColor: 'white',
      borderColor: colors.white,
    },
    primaryDark: {
      colors: [colors.primaryDark, colors.primaryDark],
      textColor: 'white',
      borderColor: colors.white,
    },
    white: {
      colors: ['white', 'white'],
      textColor: 'primary',
      borderColor: colors.primary,
    },
    danger: {
      colors: [colors.danger, colors.danger],
      textColor: 'white',
      borderColor: colors.white,
    },
    disabled: {
      colors: [colors.gray, colors.gray],
      textColor: 'white',
      borderColor: colors.white,
    },
  },
  bordered: {
    primary: {
      colors: ['transparent', 'transparent'],
      textColor: 'primary',
      borderColor: colors.primary,
    },
    primaryDark: {
      colors: ['transparent', 'transparent'],
      textColor: 'primaryDark',
      borderColor: colors.primaryDark,
    },
    white: {
      colors: ['transparent', 'transparent'],
      textColor: 'white',
      borderColor: colors.white,
    },
    danger: {
      colors: ['transparent', 'transparent'],
      textColor: 'danger',
      borderColor: colors.danger,
    },
    disabled: {
      colors: ['transparent', 'transparent'],
      textColor: 'gray',
      borderColor: colors.gray,
    },
  },
};

export default buttonColors;
