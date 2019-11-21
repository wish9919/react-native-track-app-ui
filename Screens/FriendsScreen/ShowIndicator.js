import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Switch} from 'native-base';

const ShowIndicator = props => (
  <View style={styles.container}>
    <View style={styles.itemView}>
      <Text>Location</Text>
      <Switch thumbColor="#0be881" disabled value={true} />
      {/* <Icon style={styles.icon} color="#0be881" name="check" size={25} /> */}
    </View>
    <View style={styles.itemView}>
      <Text>GPS</Text>
      <Switch thumbColor="#0be881" value={true} />
      {/* <Icon style={styles.icon} color="#0be881" name="check" size={25} /> */}
    </View>
    <View style={styles.itemView}>
      <Text>Emergency</Text>
      <Switch thumbColor="#0be881" value={true} />
      {/* <Icon style={styles.icon} color="#ff3f34" name="close" size={25} /> */}
    </View>
  </View>
);
export default ShowIndicator;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#aaa',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 4,
  },
});
