import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Image,
} from 'react-native';
import Button from '../components/Button';
import Strings from '../constants/Strings';
import EmailTextField from '../components/EmailTextField';
import PasswordTextField from '../components/PasswordTextField';
import Utility from '../utils/Utility';
import Colors from '../utils/Colors';
import Constants from '../constants/Constants';
import DismissKeyboard from '../components/DismissKeyboard';
import Images from '../constants/Images';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const validateEmailAddress = () => {
    const isValidEmail = Utility.isEmailValid(email);
    isValidEmail
      ? setEmailError('')
      : setEmailError(Strings.InvalidEmailAddress);
    return isValidEmail;
  };
  const validatePasswordField = () => {
    const isValidField = Utility.isValidField(password);
    isValidField
      ? setPasswordError('')
      : setPasswordError(Strings.PasswordFieldEmpty);
    return isValidField;
  };

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>
          <SafeAreaView>
            <Image style={styles.logo} source={Images.logo} />
            <EmailTextField
              term={email}
              error={emailError}
              placeholder={Strings.EmailPlaceHolder}
              onTermChange={newEmail => {
                setEmail(newEmail);
              }}
              onValidateEmailAddress={validateEmailAddress}
            />

            <PasswordTextField
              term={password}
              error={passwordError}
              placeholder={Strings.PasswordPlaceHolder}
              onTermChange={newPassword => {
                setPassword(newPassword);
              }}
              onValidatePasswordField={validatePasswordField}
            />
            <Button title={Strings.Join} isLoading={isLoading} />
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

export default SignInScreen;
const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    margin: 0.04 * Constants.screenHeight,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.theme,
  },
});
