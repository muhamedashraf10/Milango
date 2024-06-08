import React, {FC} from 'react';
import {ViewProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import systemColors from '../../styles/colors';

type GradientType = {
  colors?: (string | number)[];
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  locations?: number[];
  useAngle?: boolean;
  angleCenter?: {x: number; y: number};
  angle?: number;
};
const Gradient: FC<GradientType & ViewProps> = ({
  children,
  colors = [systemColors.primarybg, systemColors.smoke],
  useAngle = true,
  angle = 90,
  ...props
}) => (
  <LinearGradient colors={colors} angle={angle} useAngle={useAngle} {...props}>
    {children}
  </LinearGradient>
);

export default Gradient;
