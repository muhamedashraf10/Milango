import {StyleSheet} from 'react-native';
import colors from './colors';

const addShadow = (size: 'xl' | 'lg' | 'md' | 'sm') => {
  const styles = StyleSheet.create({
    xl: {
      shadowColor: colors.primary,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 20,
    },
    lg: {
      shadowColor: colors.primary,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 16,
    },
    md: {
      shadowColor: colors.primary,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 6,
    },
    sm: {
      shadowColor: colors.primary,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
  });
  return styles[size];
};

export default addShadow;
