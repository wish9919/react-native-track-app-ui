import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Modal from 'react-native-modal';
const {width, height} = Dimensions.get('window');
const PrimaryColor = '#0984e3';

export default class AddFriendModal extends Component {
  render() {
    return (
      <Modal
        onBackdropPress={this.props.isClose}
        isVisible={this.props.isVisible}>
        <View style={{backgroundColor: '#fff'}}>
          <Text>Hellow</Text>
        </View>
      </Modal>
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
