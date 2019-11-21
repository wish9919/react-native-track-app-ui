import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Modal from 'react-native-modal';
import {Col} from 'native-base';

const {width, height} = Dimensions.get('window');

const BottomModal = props => (
  <Modal
    backdropOpacity={0.4}
    onBackdropPress={props.toggleModal}
    style={styles.bottomModal}
    isVisible={props.visible}>
    <View
      style={{
        height: height / 6,
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
          <View style={[styles.preBorderImg, {backgroundColor: '#0984e3'}]}>
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
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.reqText}>Wishvantha Perera</Text>
              <Text style={{color: '#aaa'}}>0 seconds ago</Text>
            </View>
            <Text style={{fontSize: 14, color: '#aaa'}}>
              57A, 1/1 Kirulupana Station Road, 3rd Ln, Nugegoda 11222
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>0771234567</Text>
          </View>
        </Col>
      </View>
    </View>
  </Modal>
);
export default BottomModal;

const styles = StyleSheet.create({
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
});
