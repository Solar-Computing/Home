import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import Button from 'react-native-button';
import styles from './controlStyles';


export default class MenuHeader extends Component {

  render() {
    if (this.props.editable) {
      return (
        <View style={styles.menuHeader}>
            <Text style={styles.TitleText}>
              User Menu
            </Text>
            <Button
              onPress={() => this.props.toggleEdit()}
              styles={styles.editBtn}
            >
              <Image
                style={styles.headerBtn}
                source={require('../img/save.png')}
              />
            </Button>
        </View>
      );
    } else {
      return (
        <View style={styles.menuHeader}>
            <Text style={styles.TitleText}>
              User Menu
            </Text>
            <Button
              onPress={() => this.props.toggleEdit()}
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
}
