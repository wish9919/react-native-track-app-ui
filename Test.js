import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
} from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome5';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: (
        <Icons
          style={styles.buttonImage}
          name="chevron-circle-up"
          size={25}
          color="#0984e3"
        />
      ),
      down: (
        <Icons
          style={styles.buttonImage}
          name="chevron-circle-down"
          size={25}
          color="#0984e3"
        />
      ),
    };

    this.state = {
      title: props.title,
      expanded: true,
      animation: new Animated.Value(200),
    };
  }

  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded,
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue,
    }).start();
  }

  _setMaxHeight(event) {
    if (!this.state.maxHeight) {
      this.setState({
        maxHeight: event.nativeEvent.layout.height,
      });
    }
  }

  _setMinHeight(event) {
    if (!this.state.minHeight) {
      this.setState({
        minHeight: event.nativeEvent.layout.height,
        animation: new Animated.Value(event.nativeEvent.layout.height),
      });
    }
  }

  render() {
    let icon = this.icons['down'];

    if (this.state.expanded) {
      icon = this.icons['up'];
    }

    return (
      <Animated.View style={[styles.container, {height: this.state.animation}]}>
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}>
          <Text style={styles.title}>Hello World</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1">
            <Image style={styles.buttonImage} source={icon}></Image>
          </TouchableHighlight>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          <Text>
            Cillum id consequat magna nostrud incididunt ea incididunt non amet
            id ea. Enim aliqua duis officia proident anim non aliquip qui
            voluptate adipisicing aliquip proident nisi dolor. Est sunt dolor
            non esse. Veniam nulla sunt anim quis irure sunt.
          </Text>
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold',
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25,
  },
  body: {
    padding: 10,
    paddingTop: 0,
  },
});

export default Panel;
