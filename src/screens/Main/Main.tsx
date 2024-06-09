import React from 'react';
import {StyleSheet} from 'react-native';
import Layout from '../../components/UIEllement/Layout';
import unit from '../../styles/units';
import colors from '../../styles/colors';
import Form from '../../components/Main/Form';

const Main = () => {
  return (
    <Layout HeaderVisibilty={false} style={styles.container}>
      <Form />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  content: {
    backgroundColor: colors.white,
    padding: 5 * unit,
    height: 400 * unit,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20 * unit,
    borderRadius: 20 * unit,
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 6 * unit,
    height: 48 * unit,
    width: '100%',
    color: colors.primaryDark,
    backgroundColor: colors.lightgray,
    fontSize: 16 * unit,
    fontFamily: 'HelveticaNeueLTArabic-Roman',
    borderRadius: 8 * unit,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1 * unit,
    paddingVertical: 10 * unit,
    paddingHorizontal: 60 * unit,
  },
});

export default Main;
