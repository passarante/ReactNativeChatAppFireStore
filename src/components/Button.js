import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../utils/Colors';

const Button = props => {
  const {title = 'Enter', style = {}, textStyle = {}, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,

    backgroundColor: Colors.logoGreen,
    shadowColor: Colors.logoGreen,
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 10},
    shadowRadius: 20,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: Colors.white,
  },
});
