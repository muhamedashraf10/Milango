import React, {FC} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../../styles/colors';
import unit from '../../styles/units';
import addShadow from '../../styles/addShadow';
import Text from '../UIEllement/Text';

type TFormMain = {
  setInputValue: (value: string) => void;
  inputValue: string;
};

const Form: FC<TFormMain> = ({setInputValue, inputValue}) => {
  return (
    <View style={[styles.content, addShadow('sm')]}>
      <Image
        source={require('../../assets/githup.png')}
        alt="githup image"
        style={styles.image}
      />
      <TextInput
        value={inputValue}
        placeholder="Enter username"
        placeholderTextColor={colors.gray}
        onChangeText={setInputValue}
        style={[styles.input, addShadow('sm')]}
      />
      <TouchableOpacity style={styles.button}>
        <Text text="Submit" bold size="medium" color="white" />
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
    justifyContent: 'center',
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
