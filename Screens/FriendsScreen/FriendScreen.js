import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class FriendScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FriendScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
