import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import unit from '../../../styles/units';
import colors from '../../../styles/colors';

type LayoutProps = PropsWithChildren & {
  HeaderVisibilty?: boolean;
  style?: {};
};

const Layout: FC<LayoutProps> = ({HeaderVisibilty = true, children, style}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      {HeaderVisibilty && <Header />}
      <View style={[styles.content, style]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: 'rtl',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20 * unit,
    backgroundColor: colors.lightBlue,
    paddingVertical: 30 * unit,
  },
});

export default Layout;
