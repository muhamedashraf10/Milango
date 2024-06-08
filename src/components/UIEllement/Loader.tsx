import React, {FC} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';
import unit from '../../styles/units';
import Text from './Text/Text';
import colors from '../../styles/colors';

type LoaderType = {
  message?: string;
  color?:
    | 'primary'
    | 'primaryDark'
    | 'primarybg'
    | 'secondary'
    | 'black'
    | 'white'
    | 'transparent'
    | 'text'
    | 'textLight'
    | 'smoke'
    | 'lightgray'
    | 'gray'
    | 'success'
    | 'successbg'
    | 'danger'
    | 'dangerbg'
    | 'warning'
    | 'warningbg';
};

const Loader: FC<ActivityIndicatorProps & LoaderType> = ({
  color = 'primaryDark',
  size = 'large',
  message = '',
  style,
}) => (
  <View style={[styles.loader, style]}>
    <ActivityIndicator size={size} color={colors?.[color]} />
    {message ? (
      <Text color="primaryDark" style={styles.loaderText}>
        {message}
      </Text>
    ) : null}
  </View>
);
export default Loader;

const styles = StyleSheet.create({
  loader: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderText: {
    marginTop: 14 * unit,
  },
});
