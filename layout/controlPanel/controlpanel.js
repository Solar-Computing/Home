import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import Button from 'react-native-button';
import styles from './controlStyles';
import AccInfo from './accountInfo';
import MenuHeader from './menuHeader.js';

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      icon: '../img/pen.png'
    };
  }  
  
  toggleEdit() {
    if (this.state.editable) {
      this.setState({
        editable: false,
      });
    } else {
      this.setState({
        editable: true,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuHeader
          toggleEdit={this.toggleEdit.bind(this)}
          editable={this.state.editable}
        />

        <AccInfo editing={this.state.editable} />

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
