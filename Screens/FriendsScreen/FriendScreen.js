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
} from 'react-native';
import Header from '../../Components/Header';

import Modal from 'react-native-modal';

const {width, height} = Dimensions.get('window');

import {Col, Row, Button} from 'native-base';

export default class FriendScreen extends Component {
  state = {
    isModelVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    return (
      <View style={styles.containerFluid}>
        <Header title="Your Friends" />
        <View style={styles.container}>
          <ScrollView style={{flex: 1, height: height}}>
            <SafeAreaView
              style={{
                // padding: 10,

                flex: 1,
                width: width,
                alignSelf: 'center',
              }}>
              <FlatList
                data={friendData}
                renderItem={this.renderFriend}
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
                // borderRadius: 12,
                padding: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  // backgroundColor: 'red',
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

  renderFriend = ({item}) => (
    <TouchableNativeFeedback onPress={this.toggleModal}>
      <View style={styles.friendContainer}>
        <Col style={{flex: 2, justifyContent: 'center'}}>
          <View style={[styles.preBorderImg, {backgroundColor: item.color}]}>
            <View style={styles.profilePic}>
              <Image style={styles.profilePicImg} source={item.profilePic} />
            </View>
          </View>
        </Col>
        <Col
          style={{
            flex: 5,
            paddingLeft: 10,
            justifyContent: 'center',
          }}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textMobile}>{item.mobile}</Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                styles.tag,
                {
                  backgroundColor: item.color,
                },
              ]}>
              <Text style={{fontSize: 12, color: '#fff'}}>{item.type}</Text>
            </View>
            <View
              style={[
                styles.tag,
                {
                  backgroundColor: '#00b894',
                  width: 60,
                },
              ]}>
              <Text style={{fontSize: 12, color: '#fff'}}>Approved</Text>
            </View>
          </View>
        </Col>
      </View>
    </TouchableNativeFeedback>
  );
}

const friendData = [
  {
    name: 'Wishvantha Perera',
    mobile: '0771234567 - Dialog',
    profilePic: require('../../Assets/profilepicOne.jpg'),
    type: 'Friend',
    color: '#1B9CFC',
  },
  {
    name: 'Oshini Dissanayake',
    mobile: '0771234567 - Dialog',
    profilePic: require('../../Assets/profilepicOne.jpg'),
    type: 'Family',
    color: '#6c5ce7',
  },
];

const styles = StyleSheet.create({
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
});
