import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Login from './layout/login/login.js';

class Home extends Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);
