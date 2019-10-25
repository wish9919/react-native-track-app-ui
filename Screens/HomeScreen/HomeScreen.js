import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Button} from 'native-base';

import MapView from 'react-native-maps';

import Icon from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('window');

const fontSize = Dimensions.get('window').fontScale;

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{height: height, width: width}}
          region={{
            latitude: 7.8731,
            longitude: 80.7718,
            latitudeDelta: 1.0922,
            longitudeDelta: 1.0421,
          }}
          showsUserLocation={true}
        />
        <View
          style={{
            marginTop: 11,
            flexDirection: 'column',
            position: 'absolute',
            width: '90%',
            zIndex: 10000,
            alignSelf: 'center',
            top: '40%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            // padding: 20,
            paddingVertical: 10,
            borderRadius: 20,
          }}>
          <View style={styles.inputView}>
            <Icon
              style={{paddingHorizontal: 20}}
              name="mobile-alt"
              size={20}
              color="#fff"
            />
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="#444"
              keyboardType="number-pad"
              style={{
                fontSize: 25,
                backgroundColor: '#fff',
                paddingLeft: 20,
                // borderRadius: 100,
                width: '100%',
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={{paddingHorizontal: 20}}
              name="lock"
              size={18}
              color="#fff"
            />
            <TextInput
              placeholder="PIN Number"
              placeholderTextColor="#444"
              keyboardType="number-pad"
              secureTextEntry={true}
              style={{
                fontSize: 25,
                backgroundColor: '#fff',
                paddingLeft: 20,
                // borderRadius: 100,
                width: '100%',
              }}
            />
          </View>

          <Button
            style={{
              justifyContent: 'center',
              backgroundColor: '#1B9CFC',
              alignSelf: 'center',
              marginVertical: 20,
              width: '80%',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
              FIND NOW
            </Text>
          </Button>
        </View>
        <View style={styles.mapView}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    width: width,
    position: 'relative',
    zIndex: -10000,
  },
  inputView: {
    flexDirection: 'row',
    backgroundColor: '#1B9CFC',
    marginHorizontal: 20,
    // marginVertical: 20,
    marginTop: 20,
    elevation: 4,
    alignItems: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    width: '80%',
    // paddingLeft: 20,
  },
});
