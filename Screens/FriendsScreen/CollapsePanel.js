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
  Animated,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';

import {Col, Row, Button} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ShowIndicator from './ShowIndicator';

const primaryColor = '#0984e3';
const dangerColor = '#ff4757';

export default class CollapsePanel extends Component {
  constructor(props) {
    super(props);
    let {width, height} = Dimensions.get('window');
    // console.log(width, height / 3);
    this.state = {
      //Step 3
      title: props.title,
      expanded: true,
      animatedValue: new Animated.Value(0),
      opacityValue: new Animated.Value(0),
      viewHeight: '190',
    };

    this.icons = {
      //Step 2
      up: (
        <Icons
          style={styles.buttonImage}
          name="sort-up"
          size={30}
          color="#555"
        />
      ),
      down: (
        <Icons
          style={styles.buttonImage}
          name="sort-down"
          size={30}
          color="#555"
        />
      ),
    };
  }

  toggle() {
    this.setState({expanded: !this.state.expanded}, () => {
      Animated.timing(this.state.opacityValue, {
        toValue: this.state.expanded ? 0 : 1,
        duration: 200, // in milliseconds, default is 500
        easing: Easing.ease, // Easing function, default is Easing.inOut(Easing.ease)
        delay: 0,
      }).start();
      Animated.timing(this.state.animatedValue, {
        toValue: this.state.expanded ? 0 : 270,
        duration: 100, // in milliseconds, default is 500
        easing: Easing.bounce, // Easing function, default is Easing.inOut(Easing.ease)
        delay: 0,
      }).start();
    });
  }

  getCollapseIcon() {
    if (this.state.expanded) {
      return this.icons.down;
    } else {
      return this.icons.up;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.friendContainer}>
            <Col style={{flex: 2, justifyContent: 'center'}}>
              <View
                style={[
                  styles.preBorderImg,
                  {backgroundColor: this.props.item.color},
                ]}>
                <View style={styles.profilePic}>
                  <Image
                    style={styles.profilePicImg}
                    source={this.props.item.profilePic}
                  />
                </View>
              </View>
            </Col>
            <Col
              style={{
                flex: 5,
                paddingLeft: 10,
                marginTop: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.textName}>{this.props.item.name}</Text>
                <TouchableNativeFeedback onPress={this.props.onPress}>
                  <Icons
                    style={{marginHorizontal: 20}}
                    name="map-marker-alt"
                    color="#ff6348"
                    size={40}
                  />
                </TouchableNativeFeedback>
              </View>
              <Text style={styles.textMobile}>{this.props.item.mobile}</Text>
              <View style={styles.mobileStatus}>
                <Ionicons name="ios-battery-full" size={30} color="#00b894" />
                <Text style={styles.batteryStatus}>80%</Text>
                <Icons
                  style={{marginLeft: 10}}
                  name="signal"
                  size={20}
                  color="#57606f"
                />
              </View>
            </Col>
          </View>
          <TouchableNativeFeedback
            style={styles.button}
            onPress={() => this.toggle()}
            // onPress={() => this.onCLick()}
            useForeground={true}>
            {this.getCollapseIcon()}
          </TouchableNativeFeedback>
        </View>
        {/* {this.getCollapseIcon()} */}
        <Animated.View
          style={[
            styles.body,
            {
              height: this.state.animatedValue,
              opacity: this.state.opacityValue,
            },
          ]}
          onLayout={event => {
            console.log('Event', event.nativeEvent.layout.height);
            this.setState({
              height: event.nativeEvent.layout.height,
            });
          }}>
          <View
            style={{
              padding: 20,
            }}>
            <ShowIndicator />
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={styles.friendDetails}>Last updated :</Text>
              <Text style={styles.friendDetails}>2019/10/27 10.00pm </Text>
            </View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={styles.friendDetails}>Last updated Mode :</Text>
              <Text style={styles.friendDetails}>GPS</Text>
            </View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={styles.friendDetails}>Friend Created :</Text>
              <Text style={styles.friendDetails}>2019/10/01</Text>
            </View>

            <Row style={{justifyContent: 'center'}}>
              <Button style={[styles.buttonP, {backgroundColor: primaryColor}]}>
                <Text style={styles.buttonPText}>Edit</Text>
              </Button>
              <Button style={[styles.buttonP, {backgroundColor: dangerColor}]}>
                <Text style={styles.buttonPText}>Remove</Text>
              </Button>
            </Row>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    overflow: 'hidden',
    elevation: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  title: {
    color: '#2a2f43',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
  },

  body: {
    padding: 0,
    paddingTop: 0,
    zIndex: 100,
    backgroundColor: '#fff',
    left: 0,
    width: '100%',
  },
  friendContainer: {
    flex: 1,
    backgroundColor: '#fff',

    width: '90%',
    alignSelf: 'center',

    flexDirection: 'row',
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
  mobileStatus: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryStatus: {
    color: '#555',
    marginHorizontal: 5,
  },
  friendDetails: {
    marginHorizontal: 5,
    fontSize: 18,
    color: '#57606f',
  },
  buttonP: {
    width: '30%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 30,
    borderRadius: 20,
  },
  buttonPText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonImage: {
    elevation: 4,
    textShadowColor: '#000',
    position: 'absolute',
    right: 20,
    bottom: 20,
    padding: 5,
  },
});
