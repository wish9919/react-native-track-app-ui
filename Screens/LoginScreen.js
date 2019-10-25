import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          title="to HomeScreen"
        />
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
