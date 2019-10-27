import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import {
  Header,
  Button,
  Icon as IconNB,
  Left,
  Title,
  Body,
  Right,
} from 'native-base';

import {withNavigation} from 'react-navigation';

const HeaderNav = ({title, navigation}) => {
  return (
    <Header
      androidStatusBarColor="#1B9CFC"
      style={{backgroundColor: '#1B9CFC', elevation: 14}}>
      <StatusBar translucent={false} />
      {/* <Left>
        <Button onPress={() => navigation.goBack()} transparent>
          <IconNB name="arrow-back" />
        </Button>
      </Left> */}

      <Body style={{marginLeft: 15}}>
        <Title>{title}</Title>
      </Body>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withNavigation(HeaderNav);
