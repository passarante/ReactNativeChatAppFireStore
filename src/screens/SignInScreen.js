import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import Strings from '../constants/Strings';
import EmailTextField from '../components/EmailTextField';
class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> SignIn Screen </Text>
        <EmailTextField placeholder={Strings.EmailPlaceHolder} />
        <Button title={Strings.Join} />
      </View>
    );
  }
}

export default SignInScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
