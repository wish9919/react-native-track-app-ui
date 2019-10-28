import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  Dimensions,
  TextInput,
} from 'react-native';
import Header from '../../Components/Header';

import Modal from 'react-native-modal';
import AddFriendModal from './AddFriendModal';

const {width, height} = Dimensions.get('window');
const PrimaryColor = '#0984e3';

import {Col, Row, Button} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome5';

import PrimaryButton from '../../Components/PrimaryButton';

import CollapsePanel from './CollapsePanel';

export default class FriendScreen extends Component {
  state = {
    isModelVisible: false,
    visibleModal: null,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  toggleAddFriend = () => {
    this.setState({visibleModal: 1});
  };

  togglePinNumber = () => {
    this.setState({visibleModal: 2});
  };

  closeAddFriend = () => {
    this.setState({visibleModal: null});
  };
  render() {
    return (
      <View style={styles.containerFluid}>
        <Modal
          backdropColor="#000"
          backdropOpacity={0.2}
          onBackdropPress={this.closeAddFriend}
          isVisible={this.state.visibleModal === 2}>
          <View style={styles.modalView}>
            <View style={styles.opacityBox}>
              <View style={styles.inputView}>
                <Icons
                  style={{paddingHorizontal: 20}}
                  name="lock"
                  size={20}
                  color="#fff"
                />
                <TextInput
                  placeholder="PIN Number"
                  placeholderTextColor="#aaa"
                  keyboardType="number-pad"
                  style={styles.InputField}
                />
              </View>
              {/* <View style={styles.inputView}>
                <Icons
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
              </View> */}
              <View style={{flexDirection: 'row'}}>
                <PrimaryButton
                  style={{borderRadius: 20}}
                  title="Add Friend"
                  bgColor="#0984e3"
                />
                <PrimaryButton
                  style={{borderRadius: 20}}
                  onPress={this.closeAddFriend}
                  title="Cancel"
                  bgColor="#57606f"
                />
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          backdropColor="#000"
          backdropOpacity={0.2}
          onBackdropPress={this.closeAddFriend}
          isVisible={this.state.visibleModal === 1}>
          <View style={styles.modalView}>
            <View style={styles.opacityBox}>
              <View style={styles.inputView}>
                <Icons
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
              {/* <View style={styles.inputView}>
                <Icons
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
              </View> */}
              <View style={{flexDirection: 'row'}}>
                <PrimaryButton
                  style={{borderRadius: 20}}
                  title="Confirm"
                  bgColor="#0984e3"
                  onPress={this.togglePinNumber}
                />
                <PrimaryButton
                  style={{borderRadius: 20}}
                  onPress={this.closeAddFriend}
                  title="Cancel"
                  bgColor="#57606f"
                />
              </View>
            </View>
          </View>
        </Modal>

        <Header title="Your Friends" />
        <View style={styles.container}>
          <ScrollView style={{flex: 1, height: height}}>
            <SafeAreaView style={styles.safeView}>
              <Button
                onPress={this.toggleAddFriend}
                style={styles.addFriendBtn}>
                <Icons
                  name="user-plus"
                  size={20}
                  color="#fff"
                  style={{marginHorizontal: 5}}
                />
                <Text style={[styles.addFriendText]}>Add Friend</Text>
              </Button>
              <FlatList
                data={friendData}
                renderItem={({item}) => {
                  return (
                    <CollapsePanel onPress={this.toggleModal} item={item} />
                  );
                }}
                keyExtractor={(item, index) => toString(item)}
              />
            </SafeAreaView>
          </ScrollView>
          <Modal
            backdropOpacity={0.4}
            onBackdropPress={this.toggleModal}
            style={styles.bottomModal}
            isVisible={this.state.isModalVisible}>
            <View
              style={{
                height: 200,
                backgroundColor: '#fff',
                padding: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <Col style={{flex: 2}}>
                  <View
                    style={[styles.preBorderImg, {backgroundColor: '#0984e3'}]}>
                    <View style={styles.profilePic}>
                      <Image
                        style={styles.profilePicImg}
                        source={require('../../Assets/profilepicOne.jpg')}
                      />
                    </View>
                  </View>
                </Col>
                <Col style={{flex: 5}}>
                  <View>
                    <Text style={styles.reqText}>
                      Hey, Request Location from Wishvantha
                    </Text>
                    <Text style={{fontSize: 17}}>0771234567</Text>
                  </View>
                </Col>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  width: '100%',
                  height: 50,
                  flex: 1,
                  // backgroundColor: 'red',
                }}>
                <Button style={styles.modelButton}>
                  <Text style={styles.modelButtonText}>Request</Text>
                </Button>
                <Button
                  onPress={this.toggleModal}
                  style={[styles.modelButton, {backgroundColor: '#636e72'}]}>
                  <Text style={styles.modelButtonText}>Cancel</Text>
                </Button>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const friendData = [
  {
    name: 'Wishvantha Perera',
    mobile: '0711234567 - Mobitel',
    profilePic: require('../../Assets/profilepicOne.jpg'),
    type: 'Friend',
    color: '#2ed573',
  },
  {
    name: 'Oshini Dissanayake',
    mobile: '0771234567 - Mobitel',
    profilePic: require('../../Assets/profilepicOne.jpg'),
    type: 'Family',
    color: '#eccc68',
  },
  {
    name: 'Oshini Dissanayake',
    mobile: '0771234567 - Mobitel',
    profilePic: require('../../Assets/profilepicOne.jpg'),
    type: 'Family',
    color: '#eccc68',
  },
];

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    width: width,
    alignSelf: 'center',
  },
  containerFluid: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 5,
    alignSelf: 'center',
    height: height,
    marginTop: 10,
  },
  friendContainer: {
    flex: 1,
    backgroundColor: '#fff',
    height: 120,
    width: '95%',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',

    elevation: 4,
    marginBottom: 20,
  },
  preBorderImg: {
    height: 90,
    width: 90,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    backgroundColor: '#fff',
    width: '90%',
    height: '90%',
    borderRadius: 100,
    overflow: 'hidden',
  },
  profilePicImg: {
    resizeMode: 'contain',
    width: '100%',
    height: '110%',
  },
  textName: {
    fontSize: 20,
    // marginTop: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  textMobile: {
    color: '#333',
    marginLeft: 5,
  },
  tag: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modelButton: {
    backgroundColor: '#00b894',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  modelButtonText: {
    color: '#fff',
    fontSize: 22,
    alignSelf: 'center',
  },
  reqText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addFriendBtn: {
    backgroundColor: PrimaryColor,
    justifyContent: 'center',
    width: '50%',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 20,
  },

  addFriendText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  addFriendIcon: {},
  inputView: {
    flexDirection: 'row',
    backgroundColor: '#1B9CFC',
    marginHorizontal: 20,
    // marginVertical: 20,
    marginTop: 20,
    elevation: 4,
    alignItems: 'center',
    // borderRadius: 100,
    overflow: 'hidden',
    width: '80%',

    // paddingLeft: 20,
  },
  opacityBox: {
    marginTop: 11,
    flexDirection: 'column',
    // position: 'absolute',
    width: '100%',
    zIndex: 10000,
    alignSelf: 'center',
    // top: '35%',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    // padding: 20,
    paddingVertical: 10,
    // borderRadius: 20,
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
  modalView: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
  },
});
