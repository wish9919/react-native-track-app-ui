import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import Modal from 'react-native-modal';

import SwitchSelector from 'react-native-switch-selector';

const options = [
  {label: 'සිංහල', value: '1'},
  {label: 'English', value: '1.5'},
  {label: 'தமிழ்', value: '2'},
];

import {Button, Col} from 'native-base';

import MapView from 'react-native-maps';

import Icon from 'react-native-vector-icons/FontAwesome5';
import MdIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SOS from '../../Components/SOS';
import BottomModal from './BottomModal';
import SosModal from './SosModal';

const {width, height} = Dimensions.get('window');

const fontSize = Dimensions.get('window').fontScale;

export default class HomeScreen extends Component {
  state = {
    isModelVisible: false,
    isSosModal: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  toggleSosModal = () => {
    this.setState({isSosModal: !this.state.isSosModal});
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
          region={{
            latitude: 7.8731,
            longitude: 80.7718,
            latitudeDelta: 1.0922,
            longitudeDelta: 1.0421,
          }}
          showsUserLocation={true}
        />

        <SwitchSelector
          options={options}
          initial={0}
          onPress={value => console.log(`Call onPress with value: ${value}`)}
          style={styles.switchSelector}
          buttonColor={'#1B9CFC'}
        />

        <View style={styles.opacityBox}>
          <View style={styles.inputView}>
            <Icon
              style={{paddingHorizontal: 20}}
              name="mobile-alt"
              size={20}
              color="#fff"
            />
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="#aaa"
              keyboardType="number-pad"
              style={styles.InputField}
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
              placeholderTextColor="#aaa"
              keyboardType="number-pad"
              secureTextEntry={true}
              style={styles.InputPin}
            />
          </View>

          <Button onPress={this.toggleModal} style={styles.findButton}>
            <Text style={styles.findButtonText}>FIND NOW</Text>
          </Button>
        </View>
        <SOS onPress={this.toggleSosModal} />
        <BottomModal
          toggleModal={this.toggleModal}
          visible={this.state.isModalVisible}
        />
        <SosModal
          onPressSend={() => alert('Send Alert')}
          onPressCancel={this.toggleSosModal}
          toggleModal={this.toggleSosModal}
          visible={this.state.isSosModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mapView: {height: height, width: width},
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
  opacityBox: {
    marginTop: 11,
    flexDirection: 'column',
    position: 'absolute',
    width: '90%',
    zIndex: 10000,
    alignSelf: 'center',
    top: '35%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    // padding: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  InputField: {
    fontSize: 25,
    backgroundColor: '#fff',
    paddingLeft: 20,
    // borderRadius: 100,
    width: '100%',
  },
  InputPin: {
    fontSize: 25,
    backgroundColor: '#fff',
    paddingLeft: 20,
    // borderRadius: 100,
    width: '100%',
  },
  findButton: {
    justifyContent: 'center',
    backgroundColor: '#1B9CFC',
    alignSelf: 'center',
    marginVertical: 20,
    width: '80%',
    borderRadius: 20,
  },
  findButtonText: {fontSize: 25, fontWeight: 'bold', color: '#fff'},
  switchSelector: {
    position: 'absolute',
    zIndex: 20,
    margin: 20,
    top: 10,
    right: 5,
    elevation: 1,
    width: '50%',
  },

  tag: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 5,
    marginLeft: 5,
  },
});
