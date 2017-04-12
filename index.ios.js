import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Login from './layout/login/login.js';

class Home extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);
