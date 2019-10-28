import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={[styles.preBorderImg, {backgroundColor: '#fff'}]}>
            <View style={styles.profilePic}>
              <Image
                style={styles.profilePicImg}
                source={require('../../Assets/profilepicOne.jpg')}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preBorderImg: {
    height: 200,
    width: 200,
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
});
