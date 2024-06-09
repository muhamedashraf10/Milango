import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {RequestRejectedIcon} from '../styles/icons';
import i18next from 'i18next';
import Text from './UIEllement/Text';
import Button from './UIEllement/Button';
import unit from '../styles/units';
import Layout from './UIEllement/Layout';

type TError = {
  text?: string;
  style?: {};
  refetch: () => void;
};

const Error: FC<TError> = ({text = i18next.t('somethingError'), refetch}) => {
  return (
    <Layout style={styles.container}>
      <RequestRejectedIcon />
      <Text
        text={text as string}
        color="danger"
        bold
        size="large"
        style={styles.text}
      />
      <Button
        text={i18next.t<string>('tryAgain')}
        color="danger"
        onPress={refetch}
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
  },
});

export default Error;
