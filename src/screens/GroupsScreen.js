import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class GroupsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Groups Screen </Text>
      </View>
    );
  }
}

export default GroupsScreen;
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
