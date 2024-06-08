import React from 'react';
import i18next from 'i18next';
import {StatusBar, StyleSheet} from 'react-native';
import RNRestart from 'react-native-restart';
import {RequestRejectedIcon} from '../styles/icons';
import colors from '../styles/colors';
import Button from './UIEllement/Button';
import unit from '../styles/units';
import Text from './UIEllement/Text';
import SafeAreaView from './UIEllement/SafeAreaView';

const ErrorFallback = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <RequestRejectedIcon
        width={84 * unit}
        height={84 * unit}
        style={styles.icon}
      />
      <Text size="xxlarge" color="danger" bold style={styles.title}>
        {i18next.t<string>('appCrashed')}
      </Text>
      <Text size="normal" style={styles.message}>
        {i18next.t<string>('appCrashedMessage')}
      </Text>
      <Button
        text={i18next.t<string>('reloadApp')}
        color="danger"
        onPress={() => {
          RNRestart.Restart();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32 * unit,
    backgroundColor: colors.white,
  },
  icon: {
    marginBottom: 24 * unit,
  },
  title: {
    marginBottom: 8 * unit,
    textAlign: 'center',
  },
  message: {
    marginBottom: 36 * unit,
    textAlign: 'center',
  },
});
export default ErrorFallback;
