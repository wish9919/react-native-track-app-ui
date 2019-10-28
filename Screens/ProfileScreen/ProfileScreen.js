import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome5';
import ProfileFollowing from './ProfileFollowing';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileView}>
          <View style={[styles.preBorderImg, {backgroundColor: '#fff'}]}>
            {/* <View style={styles.onlineDot}></View> */}
            <View style={styles.profilePic}>
              <Image
                style={styles.profilePicImg}
                source={require('../../Assets/profilepicOne.jpg')}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.name}>Wishvantha Perera</Text>
            <TouchableNativeFeedback
              style={styles.editButton}
              onPress={() => alert('Edit Clicked')}>
              <Icons name="edit" size={22} color="#636e72" />
            </TouchableNativeFeedback>
          </View>
          <Text style={styles.mobileNumber}>0711234567</Text>
        </View>
        <Text style={{fontSize: 16, marginTop: 20}}>Following Friend</Text>
        <SafeAreaView style={{width: '100%', marginTop: 10}}>
          <ProfileFollowing />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  preBorderImg: {
    height: 100,
    width: 100,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
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
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  profileView: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  onlineDot: {
    width: 30,
    height: 30,
    backgroundColor: '#00b894',
    position: 'absolute',
    zIndex: 200,
    // backgroundColor: 'red',
    borderRadius: 100,
    top: 0,
    right: 10,
  },
  editButton: {
    padding: 5,
    margin: 20,
    backgroundColor: 'red',
    width: 20,
    height: 20,
  },
  mobileNumber: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});
