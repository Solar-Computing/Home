import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './app.js';
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

AppRegistry.registerComponent('Home', () => Login);
