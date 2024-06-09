import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {RequestRejectedIcon} from '../styles/icons';
import i18next from 'i18next';
import Text from './UIEllement/Text';
import Button from './UIEllement/Button';
import unit from '../styles/units';
import Layout from './UIEllement/Layout';
import {checkErrorRateLimit} from '../helpers';
import RNRestart from 'react-native-restart';

type TError = {
  text?: string;
  style?: {};
  refetch: () => void;
  error: {};
};

const Error: FC<TError> = ({
  text = i18next.t('somethingError'),
  refetch,
  error,
}) => {
  const errorData = checkErrorRateLimit(error)
    ? {
        text: i18next.t<string>('messageReta'),
        handleFunction: RNRestart.Restart,
        buttonText: i18next.t<string>('reloadApp'),
      }
    : {
        text,
        handleFunction: refetch,
        buttonText: i18next.t<string>('tryAgain'),
      };

  return (
    <Layout style={styles.container}>
      <RequestRejectedIcon />
      <Text
        text={errorData.text as string}
        color="danger"
        bold
        size="large"
        style={styles.text}
      />
      <Button
        text={errorData.buttonText}
        color="danger"
        onPress={errorData.handleFunction}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 20 * unit,
    marginTop: 24 * unit,
    textAlign: 'center',
  },
});

export default Error;
