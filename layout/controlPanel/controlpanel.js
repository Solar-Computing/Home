import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import styles from './controlStyles';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuHeader}>
          <Text style={styles.TitleText}>
            User Menu
          </Text>
        </View>

        <Text style={styles.Name}>George Burdell</Text>
        <Text style={styles.Email}>gburdell@gatech.edu</Text>

        <View style={styles.divider} />

        <View style={styles.navBtns} >
            <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.logout();
            }}
            >
            <Text style={styles.buttonText}> Logout </Text>  
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.closeMenu();
            }}
          >
            <Text style={styles.buttonText}> Close Menu </Text>  
          </TouchableOpacity>  
        </View>

      </View>
    );
  }
}
