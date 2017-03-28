import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text
} from 'react-native';

import Button from 'react-native-button';
// import styles from './navigation_style.js';

export default class ControlPanel extends Component {
  render() {
    return (
      <View >
        <Text>
          Control Panel
        </Text>
        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
        />
      </View>
    );
  }
}
