import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {NotFoundIcon} from '../styles/icons';
import i18next from 'i18next';
import Text from './UIEllement/Text';
import unit from '../styles/units';
import Layout from './UIEllement/Layout';
import colors from '../styles/colors';

type TError = {
  text?: string;
  style?: {};
};

const NotFound: FC<TError> = ({text = i18next.t('notFoundData')}) => {
  return (
    <Layout style={styles.container}>
      <NotFoundIcon color={colors.darkGray} />
      <Text
        text={text as string}
        color="darkGray"
        bold
        size="large"
        style={styles.text}
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

export default NotFound;
