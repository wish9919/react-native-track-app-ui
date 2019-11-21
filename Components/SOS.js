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
    bottom: 30,
    right: 20,
    backgroundColor: '#ff3f34',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});
