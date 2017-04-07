import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Alert
} from 'react-native';
import Button from 'react-native-button';
import styles from './headerStyles';


export default class HeaderBar extends Component {

  homeEdit() {
    Alert.alert(
      'Edit Home Settings',
      'Give options to add/remove rooms and appliances here',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed!') },
      ]
    );
  }

  render() {
    return (
      <View style={styles.headerBar}>
        <Button
          onPress={() => this.props.openMenu()}
          styles={styles.controlPanelBtn}
        >
          <Image
            style={styles.headerBtn}
            source={require('../img/menu.png')}
          />
        </Button>

        <Image
          style={styles.headerLogo}
          source={require('../img/logo.png')}
        />

        <Button
          onPress={() => this.homeEdit()}
          styles={styles.editBtn}
        >
          <Image
            style={styles.headerBtn}
            source={require('../img/homeSettings.png')}
          />
        </Button>
      </View>
      
    );
  }
}
