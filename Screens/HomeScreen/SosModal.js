import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Modal from 'react-native-modal';
import {Col, Button} from 'native-base';

const {width, height} = Dimensions.get('window');

const SosModal = props => (
  <Modal
    backdropOpacity={0.4}
    onBackdropPress={props.toggleModal}
    style={styles.bottomModal}
    isVisible={props.visible}>
    <View style={styles.modalContainer}>
      <View style={styles.sendWarning}>
        <Text style={styles.warningText}>Do you want to send warning?</Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={props.onPressSend}
          style={[styles.button, {backgroundColor: '#ff3f34'}]}>
          <Text style={[styles.buttonText]}>Send Warning</Text>
        </Button>
        <Button
          onPress={props.onPressCancel}
          style={[styles.button, {backgroundColor: '#aaa'}]}>
          <Text style={[styles.buttonText]}>Cancel</Text>
        </Button>
      </View>
    </View>
  </Modal>
);
export default SosModal;

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'center',
    margin: 10,
  },
  modalContainer: {
    height: height / 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    // padding: 20,
  },
  button: {
    padding: 20,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 23,
  },
  sendWarning: {
    justifyContent: 'center',
  },
  warningText: {
    fontSize: 20,
    color: '#aaa',
    textAlign: 'center',
  },
});
