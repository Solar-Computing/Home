import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Button from 'react-native-button';
import styles from './headerStyles';


export default class HeaderBar extends Component {

  render() {
    return (
      <View style={styles.headerBar}>
        <Image
          style={styles.headerLogo}
          source={require('../img/logo.png')}
        />
          
          
        <Button
          onPress={() => this.openControlPanel()}
          styles={styles.controlPanelBtn}
        >
          <Text style={styles.ctrlPanelTitle}>
            =
              </Text>
        </Button>
      </View>
      
    );
  }
}
