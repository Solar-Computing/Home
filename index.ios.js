import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './app.js';


class Home extends Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);
