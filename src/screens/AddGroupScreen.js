import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class AddGroupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> AddGroup Screen </Text>
      </View>
    );
  }
}

export default AddGroupScreen;
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