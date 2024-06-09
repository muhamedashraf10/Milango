import React, {FC} from 'react';
import {StyleSheet, View, ActivityIndicator, Platform} from 'react-native';
import unit from '../../styles/units';
import Text from './Text';
import i18next from 'i18next';
import colors from '../../styles/colors';

const PageLoader: FC = () => (
  <View style={styles.loader}>
    <ActivityIndicator size={45} color={colors.primary} />
    <Text
      text={i18next.t('watting') as string}
      color={'primary'}
      bold
      size="large"
      style={styles.text}
    />
  </View>
);

const styles = StyleSheet.create({
  loader: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 5 * unit,
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
  },
});

export default PageLoader;
