import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import MdIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SOS = ({onPress}) => (
  <Button onPress={onPress} style={styles.sos}>
    <MdIcon name="alarm-light" color="#fff" size={25} />
  </Button>
);
export default SOS;

const styles = StyleSheet.create({
  sos: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: '#ff3f34',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
});
