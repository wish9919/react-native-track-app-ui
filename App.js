import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//screens
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import Router from './Screens/router';

const StackNavigator = createSwitchNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
    Router: {
      screen: Router,
    },
  },
  {
    initialRouteName: 'Router',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppContainer = createAppContainer(StackNavigator);

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <AppContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
