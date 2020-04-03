import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Constants from '../constants/Constants';
import Colors from '../utils/Colors';
import {TextInput} from 'react-native-gesture-handler';

const EmailTextField = ({
  term,
  placeholder,
  onTermChange,
  onValidateEmailAddress,
  error,
}) => {
  return (
    <View>
      <Text style={styles.error}>{error}</Text>
      <View style={styles.TextFieldView}>
        <TextInput
          autoCorrect={false}
          style={styles.TextInput}
          placeholder={placeholder}
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onValidateEmailAddress}
        />
      </View>
    </View>
  );
};

export default EmailTextField;

const styles = StyleSheet.create({
  TextField: {
    fontSize: 14,
    flex: 1,
    marginHorizontal: 20,
  },
  TextFieldView: {
    height: Constants.screenHeight * 0.06,
    width: Constants.screenWidth * 0.85,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: Colors.black,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.smoke,
  },
  ErrorText: {
    fontSize: 12,
    color: Colors.red,
    marginBottom: -5,
    marginHorizontal: 20,
  },
});
