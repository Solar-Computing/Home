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
          onPress={() => this.props.openMenu()}
          styles={styles.editBtn}
        >
          <Image
            style={styles.headerBtn}
            source={require('../img/pen.png')}
          />
        </Button>
      </View>
      
    );
  }
}
