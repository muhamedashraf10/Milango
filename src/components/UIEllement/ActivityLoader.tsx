import React, {FC} from 'react';
import {StyleSheet, Image, View} from 'react-native';

import {ButtonLoaderGif} from '../../styles/icons';
import unit from '../../styles/units';

const ActivityLoader: FC = () => (
  <View style={styles.loader}>
    <Image source={ButtonLoaderGif} style={styles.gif} />
  </View>
);

const styles = StyleSheet.create({
  loader: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    width: 100 * unit,
    height: 20 * unit,
  },
});
export default ActivityLoader;
