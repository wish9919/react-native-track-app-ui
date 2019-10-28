import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';

export default class PrimaryButton extends Component {
  render() {
    return (
      <Button
        style={[
          this.props.style,
          styles.buttonP,
          {backgroundColor: this.props.bgColor},
        ]}>
        <Text style={styles.buttonPText}>{this.props.title}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  buttonP: {
    width: '40%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 30,
    // borderRadius: 20,
  },
  buttonPText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
