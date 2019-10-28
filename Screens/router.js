import React, {Component} from 'react';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import HomeScreen from './HomeScreen/HomeScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';
import FriendScreen from './FriendsScreen/FriendScreen';

import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

console.disableYellowBox = true;

import Icon from 'react-native-vector-icons/FontAwesome5';

export default createMaterialBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Search',
        // tabBarColor: 'red',
        tabBarIcon: ({tintColor}) => (
          <Icon name="search" size={23} color={tintColor} />
        ),
      },
    },

    FriendSreen: {
      screen: FriendScreen,
      navigationOptions: {
        tabBarLabel: 'Friends',
        tabBarIcon: ({tintColor}) => (
          <Icon name="user-friends" size={20} color={tintColor} />
        ),
      },
    },

    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon solid name="user-circle" size={25} color={tintColor} />
        ),
      },
    },
  },

  {
    initialRouteName: 'HomeScreen',
    activeColor: '#fff',
    inactiveColor: '#333',
    tintColor: 'red',
    inactiveTintColor: 'red',
    shifting: true,
    barStyle: {
      backgroundColor: '#1B9CFC',
      height: 70,
      paddingTop: 10,
    },
  },
);
