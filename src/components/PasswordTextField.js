import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Constants from '../constants/Constants';
import Colors from '../utils/Colors';
import {TextInput} from 'react-native-gesture-handler';

const PasswordTextField = ({
  term,
  placeholder,
  onTermChange,
  onValidatePasswordField,
  error,
}) => {
  return (
    <View>
      <View style={styles.TextFieldView}>
        <TextInput
          autoCorrect={false}
          secureTextEntry
          style={styles.TextInput}
          placeholder={placeholder}
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onValidatePasswordField}
        />
      </View>
      <Text style={styles.ErrorText}>{error}</Text>
    </View>
  );
};

export default PasswordTextField;

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
