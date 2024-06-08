import React, {FC, useMemo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import buttonColors from './ButtomColors';
import unit from '../../../styles/units';
import Text from '../Text/Text';
import ActivityLoader from '../ActivityLoader';
import Loader from '../Loader';
import Gradient from '../Gradient';

type ButtonType = {
  text: string;
  icon?: FC<SvgProps>;
  size?: 'xs' | 'sm' | 'lg';
  fullWidth?: boolean;
  minWidth?: boolean;
  loading?: boolean;
  directionIcon?: 'row' | 'row-reverse';
  type?: 'bordered' | 'normal';
  color?: 'primary' | 'white' | 'danger' | 'disabled' | 'primaryDark';
};

const Button: FC<ButtonType & TouchableOpacityProps> = ({
  text,
  icon: Icon,
  size = 'lg',
  type = 'gradient',
  color = 'primary',
  fullWidth = true,
  minWidth = true,
  loading = false,
  style,
  directionIcon = 'row',
  ...props
}) => {
  const {gradientColors, borderColor, textColor} = useMemo(
    () => ({
      gradientColors: buttonColors?.[type]?.[color]?.colors,
      textColor: buttonColors?.[type]?.[color]?.textColor,
      borderColor: buttonColors?.[type]?.[color]?.borderColor,
    }),
    [color, type],
  );

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={[fullWidth ? styles.full : {}]}
      {...props}>
      <Gradient
        colors={gradientColors}
        style={[
          styles.container,
          styles[size],
          minWidth ? styles.minWidth : {},
          type === 'bordered' ? styles.bordered : {},
          {borderColor: borderColor},
          style,
        ]}>
        {loading ? (
          type === 'bordered' ? (
            <Loader color={textColor} size="small" />
          ) : (
            <ActivityLoader />
          )
        ) : (
          <View
            style={[
              styles.content,
              directionIcon === 'row' ? styles.row : styles.rowReverse,
            ]}>
            <Text color={textColor} size="normal" bold style={styles.text}>
              {text}
            </Text>
            {Icon && (
              <Icon
                style={styles.icon}
                width={16 * unit}
                height={16 * unit}
                color={textColor}
              />
            )}
          </View>
        )}
      </Gradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25 * unit,
    paddingHorizontal: 20 * unit,
  },
  content: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  full: {
    width: '100%',
  },
  minWidth: {
    minWidth: 90 * unit,
  },
  bordered: {
    borderWidth: 2 * unit,
  },
  lg: {
    height: 50 * unit,
    paddingHorizontal: 20 * unit,
  },
  sm: {
    height: 40 * unit,
    paddingHorizontal: 16 * unit,
  },
  xs: {
    height: 32 * unit,
    paddingHorizontal: 12 * unit,
  },
  text: {
    marginBottom: 3 * unit,
  },
  icon: {
    marginStart: 10 * unit,
    marginEnd: 3 * unit,
    color: 'white',
  },
});
