import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import colors from '../../styles/colors';
import unit from '../../styles/units';
import addShadow from '../../styles/addShadow';
import Text from '../UIEllement/Text';
import useGetUser from '../../hooks/useGetUser';

const Form: FC = () => {
  const [input, setInput] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const reset = () => {
    setInput('');
    setSubmitting(false);
  };
  const {isInitialLoading} = useGetUser({
    name: input,
    reset,
    submitting,
  });
  return (
    <View style={[styles.content, addShadow('sm')]}>
      <Image
        source={require('../../assets/githup.png')}
        alt="githup image"
        style={styles.image}
      />
      <TextInput
        value={input}
        placeholder="Enter username"
        placeholderTextColor={colors.gray}
        onChangeText={setInput}
        style={[styles.input, addShadow('sm')]}
      />
      <TouchableOpacity
        disabled={!input?.length || isInitialLoading}
        style={styles.button}
        onPress={() => setSubmitting(true)}>
        <Text text="Submit" bold size="medium" color="white" />
        {isInitialLoading && <ActivityIndicator color={colors.white} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    padding: 5 * unit,
    height: 300 * unit,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20 * unit,
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 6 * unit,
    height: 48 * unit,
    width: '90%',
    color: colors.primaryDark,
    backgroundColor: colors.lightgray,
    fontSize: 16 * unit,
    fontFamily: 'HelveticaNeueLTArabic-Roman',
    borderRadius: 8 * unit,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20 * unit,
    alignItems: 'center',
    width: '90%',
    height: 42 * unit,
    backgroundColor: colors.green,
    borderRadius: 8 * unit,
    marginTop: 20 * unit,
  },
  image: {
    width: 90 * unit,
    height: 90 * unit,
  },
});

export default Form;
